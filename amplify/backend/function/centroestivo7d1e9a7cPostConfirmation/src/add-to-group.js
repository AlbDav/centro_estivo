const aws = require('aws-sdk');
const documentClient = new aws.DynamoDB.DocumentClient();

const cognitoIdentityServiceProvider = new aws.CognitoIdentityServiceProvider({
  apiVersion: '2016-04-18',
});

/**
 * @type {import('@types/aws-lambda').PostConfirmationTriggerHandler}
 */
exports.handler = async (event) => {
  const groupParams = {
    GroupName: process.env.GROUP,
    UserPoolId: event.userPoolId,
  };
  const addUserParams = {
    GroupName: process.env.GROUP,
    UserPoolId: event.userPoolId,
    Username: event.userName,
  };
  /**
   * Check if the group exists; if it doesn't, create it.
   */
  try {
    await cognitoIdentityServiceProvider.getGroup(groupParams).promise();
  } catch (e) {
    await cognitoIdentityServiceProvider.createGroup(groupParams).promise();
  }
  /**
   * Then, add the user to the group.
   */
  await cognitoIdentityServiceProvider.adminAddUserToGroup(addUserParams).promise();

  const family_name = event.request.userAttributes.family_name || '';
  const given_name = event.request.userAttributes.given_name || '';

  const userAttributes = {
	  id: event.request.userAttributes.sub,
	  firstName: family_name,
	  lastName: given_name,
	  isResp: false,
  };

  const userItem = {
    TableName: process.env.USER_TABLE_NAME,
    Item: userAttributes
  }

  try {
    await documentClient.put(userItem).promise();
    console.log('Utente inserito con successo in DynamoDB');
  } catch (err) {
    console.error('Errore nell\'inserimento dell\'utente in DynamoDB:', err);
  }

  return event;
};
