const aws = require('aws-sdk');
const axios = require('axios');

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

  const graphqlMutation = {
	  query: `
		  mutation CreateUser($input: CreateUserInput!) {
			  createUser(input: $input) {
				  username
				  firstName
				  lastName
				  isResp
			  }
		  }
	  `,
	  variables: {
		  input: {
			  username: event.userName,
			  firstName: given_name,
			  lastName: family_name,
			  isResp: false
		  }
	  }
  };

  const axiosConfig = {
	  method: 'post',
	  url: process.env.GRAPHQL_ENDPOINT,
	  headers: {
		  'x-api-key': process.env.GRAPHQL_API_KEY,
		  'Content-Type': 'application/json'
	  },
	  data: graphqlMutation
  };

  try {
	  const response = await axios(axiosConfig);
	  console.log('Risposta da GraphQL:', response.data);
  } catch (err) {
	  console.error('Errore nella chiamata GraphQL:', err.message);
	  throw err;
  }

  return event;
};
