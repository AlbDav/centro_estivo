/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createGroup = /* GraphQL */ `mutation CreateGroup(
  $input: CreateGroupInput!
  $condition: ModelGroupConditionInput
) {
  createGroup(input: $input, condition: $condition) {
    id
    name
    color
    age
    fantaTeams {
      items {
        id
        groupId
        fantaTeamId
        group {
          id
          name
          color
          age
          fantaTeams {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        fantaTeam {
          id
          name
          groups {
            nextToken
            __typename
          }
          leaderGroup {
            id
            name
            color
            age
            createdAt
            updatedAt
            __typename
          }
          resp {
            id
            firstName
            lastName
            createdAt
            updatedAt
            __typename
          }
          owner {
            id
            firstName
            lastName
            isResp
            createdAt
            updatedAt
            userRespId
            userGroupId
            __typename
          }
          createdAt
          updatedAt
          fantaTeamLeaderGroupId
          fantaTeamRespId
          fantaTeamOwnerId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateGroupMutationVariables,
  APITypes.CreateGroupMutation
>;
export const updateGroup = /* GraphQL */ `mutation UpdateGroup(
  $input: UpdateGroupInput!
  $condition: ModelGroupConditionInput
) {
  updateGroup(input: $input, condition: $condition) {
    id
    name
    color
    age
    fantaTeams {
      items {
        id
        groupId
        fantaTeamId
        group {
          id
          name
          color
          age
          fantaTeams {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        fantaTeam {
          id
          name
          groups {
            nextToken
            __typename
          }
          leaderGroup {
            id
            name
            color
            age
            createdAt
            updatedAt
            __typename
          }
          resp {
            id
            firstName
            lastName
            createdAt
            updatedAt
            __typename
          }
          owner {
            id
            firstName
            lastName
            isResp
            createdAt
            updatedAt
            userRespId
            userGroupId
            __typename
          }
          createdAt
          updatedAt
          fantaTeamLeaderGroupId
          fantaTeamRespId
          fantaTeamOwnerId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateGroupMutationVariables,
  APITypes.UpdateGroupMutation
>;
export const deleteGroup = /* GraphQL */ `mutation DeleteGroup(
  $input: DeleteGroupInput!
  $condition: ModelGroupConditionInput
) {
  deleteGroup(input: $input, condition: $condition) {
    id
    name
    color
    age
    fantaTeams {
      items {
        id
        groupId
        fantaTeamId
        group {
          id
          name
          color
          age
          fantaTeams {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        fantaTeam {
          id
          name
          groups {
            nextToken
            __typename
          }
          leaderGroup {
            id
            name
            color
            age
            createdAt
            updatedAt
            __typename
          }
          resp {
            id
            firstName
            lastName
            createdAt
            updatedAt
            __typename
          }
          owner {
            id
            firstName
            lastName
            isResp
            createdAt
            updatedAt
            userRespId
            userGroupId
            __typename
          }
          createdAt
          updatedAt
          fantaTeamLeaderGroupId
          fantaTeamRespId
          fantaTeamOwnerId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGroupMutationVariables,
  APITypes.DeleteGroupMutation
>;
export const createFantaTeam = /* GraphQL */ `mutation CreateFantaTeam(
  $input: CreateFantaTeamInput!
  $condition: ModelFantaTeamConditionInput
) {
  createFantaTeam(input: $input, condition: $condition) {
    id
    name
    groups {
      items {
        id
        groupId
        fantaTeamId
        group {
          id
          name
          color
          age
          fantaTeams {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        fantaTeam {
          id
          name
          groups {
            nextToken
            __typename
          }
          leaderGroup {
            id
            name
            color
            age
            createdAt
            updatedAt
            __typename
          }
          resp {
            id
            firstName
            lastName
            createdAt
            updatedAt
            __typename
          }
          owner {
            id
            firstName
            lastName
            isResp
            createdAt
            updatedAt
            userRespId
            userGroupId
            __typename
          }
          createdAt
          updatedAt
          fantaTeamLeaderGroupId
          fantaTeamRespId
          fantaTeamOwnerId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    leaderGroup {
      id
      name
      color
      age
      fantaTeams {
        items {
          id
          groupId
          fantaTeamId
          group {
            id
            name
            color
            age
            createdAt
            updatedAt
            __typename
          }
          fantaTeam {
            id
            name
            createdAt
            updatedAt
            fantaTeamLeaderGroupId
            fantaTeamRespId
            fantaTeamOwnerId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    resp {
      id
      firstName
      lastName
      createdAt
      updatedAt
      __typename
    }
    owner {
      id
      firstName
      lastName
      isResp
      resp {
        id
        firstName
        lastName
        createdAt
        updatedAt
        __typename
      }
      group {
        id
        name
        color
        age
        fantaTeams {
          items {
            id
            groupId
            fantaTeamId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userRespId
      userGroupId
      __typename
    }
    createdAt
    updatedAt
    fantaTeamLeaderGroupId
    fantaTeamRespId
    fantaTeamOwnerId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFantaTeamMutationVariables,
  APITypes.CreateFantaTeamMutation
>;
export const updateFantaTeam = /* GraphQL */ `mutation UpdateFantaTeam(
  $input: UpdateFantaTeamInput!
  $condition: ModelFantaTeamConditionInput
) {
  updateFantaTeam(input: $input, condition: $condition) {
    id
    name
    groups {
      items {
        id
        groupId
        fantaTeamId
        group {
          id
          name
          color
          age
          fantaTeams {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        fantaTeam {
          id
          name
          groups {
            nextToken
            __typename
          }
          leaderGroup {
            id
            name
            color
            age
            createdAt
            updatedAt
            __typename
          }
          resp {
            id
            firstName
            lastName
            createdAt
            updatedAt
            __typename
          }
          owner {
            id
            firstName
            lastName
            isResp
            createdAt
            updatedAt
            userRespId
            userGroupId
            __typename
          }
          createdAt
          updatedAt
          fantaTeamLeaderGroupId
          fantaTeamRespId
          fantaTeamOwnerId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    leaderGroup {
      id
      name
      color
      age
      fantaTeams {
        items {
          id
          groupId
          fantaTeamId
          group {
            id
            name
            color
            age
            createdAt
            updatedAt
            __typename
          }
          fantaTeam {
            id
            name
            createdAt
            updatedAt
            fantaTeamLeaderGroupId
            fantaTeamRespId
            fantaTeamOwnerId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    resp {
      id
      firstName
      lastName
      createdAt
      updatedAt
      __typename
    }
    owner {
      id
      firstName
      lastName
      isResp
      resp {
        id
        firstName
        lastName
        createdAt
        updatedAt
        __typename
      }
      group {
        id
        name
        color
        age
        fantaTeams {
          items {
            id
            groupId
            fantaTeamId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userRespId
      userGroupId
      __typename
    }
    createdAt
    updatedAt
    fantaTeamLeaderGroupId
    fantaTeamRespId
    fantaTeamOwnerId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFantaTeamMutationVariables,
  APITypes.UpdateFantaTeamMutation
>;
export const deleteFantaTeam = /* GraphQL */ `mutation DeleteFantaTeam(
  $input: DeleteFantaTeamInput!
  $condition: ModelFantaTeamConditionInput
) {
  deleteFantaTeam(input: $input, condition: $condition) {
    id
    name
    groups {
      items {
        id
        groupId
        fantaTeamId
        group {
          id
          name
          color
          age
          fantaTeams {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        fantaTeam {
          id
          name
          groups {
            nextToken
            __typename
          }
          leaderGroup {
            id
            name
            color
            age
            createdAt
            updatedAt
            __typename
          }
          resp {
            id
            firstName
            lastName
            createdAt
            updatedAt
            __typename
          }
          owner {
            id
            firstName
            lastName
            isResp
            createdAt
            updatedAt
            userRespId
            userGroupId
            __typename
          }
          createdAt
          updatedAt
          fantaTeamLeaderGroupId
          fantaTeamRespId
          fantaTeamOwnerId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    leaderGroup {
      id
      name
      color
      age
      fantaTeams {
        items {
          id
          groupId
          fantaTeamId
          group {
            id
            name
            color
            age
            createdAt
            updatedAt
            __typename
          }
          fantaTeam {
            id
            name
            createdAt
            updatedAt
            fantaTeamLeaderGroupId
            fantaTeamRespId
            fantaTeamOwnerId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    resp {
      id
      firstName
      lastName
      createdAt
      updatedAt
      __typename
    }
    owner {
      id
      firstName
      lastName
      isResp
      resp {
        id
        firstName
        lastName
        createdAt
        updatedAt
        __typename
      }
      group {
        id
        name
        color
        age
        fantaTeams {
          items {
            id
            groupId
            fantaTeamId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userRespId
      userGroupId
      __typename
    }
    createdAt
    updatedAt
    fantaTeamLeaderGroupId
    fantaTeamRespId
    fantaTeamOwnerId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFantaTeamMutationVariables,
  APITypes.DeleteFantaTeamMutation
>;
export const createFantaRule = /* GraphQL */ `mutation CreateFantaRule(
  $input: CreateFantaRuleInput!
  $condition: ModelFantaRuleConditionInput
) {
  createFantaRule(input: $input, condition: $condition) {
    id
    title
    description
    points
    pointDescription
    isResp
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFantaRuleMutationVariables,
  APITypes.CreateFantaRuleMutation
>;
export const updateFantaRule = /* GraphQL */ `mutation UpdateFantaRule(
  $input: UpdateFantaRuleInput!
  $condition: ModelFantaRuleConditionInput
) {
  updateFantaRule(input: $input, condition: $condition) {
    id
    title
    description
    points
    pointDescription
    isResp
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFantaRuleMutationVariables,
  APITypes.UpdateFantaRuleMutation
>;
export const deleteFantaRule = /* GraphQL */ `mutation DeleteFantaRule(
  $input: DeleteFantaRuleInput!
  $condition: ModelFantaRuleConditionInput
) {
  deleteFantaRule(input: $input, condition: $condition) {
    id
    title
    description
    points
    pointDescription
    isResp
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFantaRuleMutationVariables,
  APITypes.DeleteFantaRuleMutation
>;
export const createFantaScoreEntry = /* GraphQL */ `mutation CreateFantaScoreEntry(
  $input: CreateFantaScoreEntryInput!
  $condition: ModelFantaScoreEntryConditionInput
) {
  createFantaScoreEntry(input: $input, condition: $condition) {
    id
    rule {
      id
      title
      description
      points
      pointDescription
      isResp
      createdAt
      updatedAt
      __typename
    }
    group {
      id
      name
      color
      age
      fantaTeams {
        items {
          id
          groupId
          fantaTeamId
          group {
            id
            name
            color
            age
            createdAt
            updatedAt
            __typename
          }
          fantaTeam {
            id
            name
            createdAt
            updatedAt
            fantaTeamLeaderGroupId
            fantaTeamRespId
            fantaTeamOwnerId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    resp {
      id
      firstName
      lastName
      createdAt
      updatedAt
      __typename
    }
    date
    createdAt
    updatedAt
    fantaScoreEntryRuleId
    fantaScoreEntryGroupId
    fantaScoreEntryRespId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFantaScoreEntryMutationVariables,
  APITypes.CreateFantaScoreEntryMutation
>;
export const updateFantaScoreEntry = /* GraphQL */ `mutation UpdateFantaScoreEntry(
  $input: UpdateFantaScoreEntryInput!
  $condition: ModelFantaScoreEntryConditionInput
) {
  updateFantaScoreEntry(input: $input, condition: $condition) {
    id
    rule {
      id
      title
      description
      points
      pointDescription
      isResp
      createdAt
      updatedAt
      __typename
    }
    group {
      id
      name
      color
      age
      fantaTeams {
        items {
          id
          groupId
          fantaTeamId
          group {
            id
            name
            color
            age
            createdAt
            updatedAt
            __typename
          }
          fantaTeam {
            id
            name
            createdAt
            updatedAt
            fantaTeamLeaderGroupId
            fantaTeamRespId
            fantaTeamOwnerId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    resp {
      id
      firstName
      lastName
      createdAt
      updatedAt
      __typename
    }
    date
    createdAt
    updatedAt
    fantaScoreEntryRuleId
    fantaScoreEntryGroupId
    fantaScoreEntryRespId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFantaScoreEntryMutationVariables,
  APITypes.UpdateFantaScoreEntryMutation
>;
export const deleteFantaScoreEntry = /* GraphQL */ `mutation DeleteFantaScoreEntry(
  $input: DeleteFantaScoreEntryInput!
  $condition: ModelFantaScoreEntryConditionInput
) {
  deleteFantaScoreEntry(input: $input, condition: $condition) {
    id
    rule {
      id
      title
      description
      points
      pointDescription
      isResp
      createdAt
      updatedAt
      __typename
    }
    group {
      id
      name
      color
      age
      fantaTeams {
        items {
          id
          groupId
          fantaTeamId
          group {
            id
            name
            color
            age
            createdAt
            updatedAt
            __typename
          }
          fantaTeam {
            id
            name
            createdAt
            updatedAt
            fantaTeamLeaderGroupId
            fantaTeamRespId
            fantaTeamOwnerId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    resp {
      id
      firstName
      lastName
      createdAt
      updatedAt
      __typename
    }
    date
    createdAt
    updatedAt
    fantaScoreEntryRuleId
    fantaScoreEntryGroupId
    fantaScoreEntryRespId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFantaScoreEntryMutationVariables,
  APITypes.DeleteFantaScoreEntryMutation
>;
export const createResp = /* GraphQL */ `mutation CreateResp(
  $input: CreateRespInput!
  $condition: ModelRespConditionInput
) {
  createResp(input: $input, condition: $condition) {
    id
    firstName
    lastName
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRespMutationVariables,
  APITypes.CreateRespMutation
>;
export const updateResp = /* GraphQL */ `mutation UpdateResp(
  $input: UpdateRespInput!
  $condition: ModelRespConditionInput
) {
  updateResp(input: $input, condition: $condition) {
    id
    firstName
    lastName
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRespMutationVariables,
  APITypes.UpdateRespMutation
>;
export const deleteResp = /* GraphQL */ `mutation DeleteResp(
  $input: DeleteRespInput!
  $condition: ModelRespConditionInput
) {
  deleteResp(input: $input, condition: $condition) {
    id
    firstName
    lastName
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRespMutationVariables,
  APITypes.DeleteRespMutation
>;
export const createFantaRuleEntryResp = /* GraphQL */ `mutation CreateFantaRuleEntryResp(
  $input: CreateFantaRuleEntryRespInput!
  $condition: ModelFantaRuleEntryRespConditionInput
) {
  createFantaRuleEntryResp(input: $input, condition: $condition) {
    id
    rule {
      id
      title
      description
      points
      pointDescription
      isResp
      createdAt
      updatedAt
      __typename
    }
    resp {
      id
      firstName
      lastName
      createdAt
      updatedAt
      __typename
    }
    date
    createdAt
    updatedAt
    fantaRuleEntryRespRuleId
    fantaRuleEntryRespRespId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFantaRuleEntryRespMutationVariables,
  APITypes.CreateFantaRuleEntryRespMutation
>;
export const updateFantaRuleEntryResp = /* GraphQL */ `mutation UpdateFantaRuleEntryResp(
  $input: UpdateFantaRuleEntryRespInput!
  $condition: ModelFantaRuleEntryRespConditionInput
) {
  updateFantaRuleEntryResp(input: $input, condition: $condition) {
    id
    rule {
      id
      title
      description
      points
      pointDescription
      isResp
      createdAt
      updatedAt
      __typename
    }
    resp {
      id
      firstName
      lastName
      createdAt
      updatedAt
      __typename
    }
    date
    createdAt
    updatedAt
    fantaRuleEntryRespRuleId
    fantaRuleEntryRespRespId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFantaRuleEntryRespMutationVariables,
  APITypes.UpdateFantaRuleEntryRespMutation
>;
export const deleteFantaRuleEntryResp = /* GraphQL */ `mutation DeleteFantaRuleEntryResp(
  $input: DeleteFantaRuleEntryRespInput!
  $condition: ModelFantaRuleEntryRespConditionInput
) {
  deleteFantaRuleEntryResp(input: $input, condition: $condition) {
    id
    rule {
      id
      title
      description
      points
      pointDescription
      isResp
      createdAt
      updatedAt
      __typename
    }
    resp {
      id
      firstName
      lastName
      createdAt
      updatedAt
      __typename
    }
    date
    createdAt
    updatedAt
    fantaRuleEntryRespRuleId
    fantaRuleEntryRespRespId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFantaRuleEntryRespMutationVariables,
  APITypes.DeleteFantaRuleEntryRespMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    firstName
    lastName
    isResp
    resp {
      id
      firstName
      lastName
      createdAt
      updatedAt
      __typename
    }
    group {
      id
      name
      color
      age
      fantaTeams {
        items {
          id
          groupId
          fantaTeamId
          group {
            id
            name
            color
            age
            createdAt
            updatedAt
            __typename
          }
          fantaTeam {
            id
            name
            createdAt
            updatedAt
            fantaTeamLeaderGroupId
            fantaTeamRespId
            fantaTeamOwnerId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    userRespId
    userGroupId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    firstName
    lastName
    isResp
    resp {
      id
      firstName
      lastName
      createdAt
      updatedAt
      __typename
    }
    group {
      id
      name
      color
      age
      fantaTeams {
        items {
          id
          groupId
          fantaTeamId
          group {
            id
            name
            color
            age
            createdAt
            updatedAt
            __typename
          }
          fantaTeam {
            id
            name
            createdAt
            updatedAt
            fantaTeamLeaderGroupId
            fantaTeamRespId
            fantaTeamOwnerId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    userRespId
    userGroupId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    firstName
    lastName
    isResp
    resp {
      id
      firstName
      lastName
      createdAt
      updatedAt
      __typename
    }
    group {
      id
      name
      color
      age
      fantaTeams {
        items {
          id
          groupId
          fantaTeamId
          group {
            id
            name
            color
            age
            createdAt
            updatedAt
            __typename
          }
          fantaTeam {
            id
            name
            createdAt
            updatedAt
            fantaTeamLeaderGroupId
            fantaTeamRespId
            fantaTeamOwnerId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    userRespId
    userGroupId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createFantaTeamGroups = /* GraphQL */ `mutation CreateFantaTeamGroups(
  $input: CreateFantaTeamGroupsInput!
  $condition: ModelFantaTeamGroupsConditionInput
) {
  createFantaTeamGroups(input: $input, condition: $condition) {
    id
    groupId
    fantaTeamId
    group {
      id
      name
      color
      age
      fantaTeams {
        items {
          id
          groupId
          fantaTeamId
          group {
            id
            name
            color
            age
            createdAt
            updatedAt
            __typename
          }
          fantaTeam {
            id
            name
            createdAt
            updatedAt
            fantaTeamLeaderGroupId
            fantaTeamRespId
            fantaTeamOwnerId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    fantaTeam {
      id
      name
      groups {
        items {
          id
          groupId
          fantaTeamId
          group {
            id
            name
            color
            age
            createdAt
            updatedAt
            __typename
          }
          fantaTeam {
            id
            name
            createdAt
            updatedAt
            fantaTeamLeaderGroupId
            fantaTeamRespId
            fantaTeamOwnerId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      leaderGroup {
        id
        name
        color
        age
        fantaTeams {
          items {
            id
            groupId
            fantaTeamId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      resp {
        id
        firstName
        lastName
        createdAt
        updatedAt
        __typename
      }
      owner {
        id
        firstName
        lastName
        isResp
        resp {
          id
          firstName
          lastName
          createdAt
          updatedAt
          __typename
        }
        group {
          id
          name
          color
          age
          fantaTeams {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        userRespId
        userGroupId
        __typename
      }
      createdAt
      updatedAt
      fantaTeamLeaderGroupId
      fantaTeamRespId
      fantaTeamOwnerId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFantaTeamGroupsMutationVariables,
  APITypes.CreateFantaTeamGroupsMutation
>;
export const updateFantaTeamGroups = /* GraphQL */ `mutation UpdateFantaTeamGroups(
  $input: UpdateFantaTeamGroupsInput!
  $condition: ModelFantaTeamGroupsConditionInput
) {
  updateFantaTeamGroups(input: $input, condition: $condition) {
    id
    groupId
    fantaTeamId
    group {
      id
      name
      color
      age
      fantaTeams {
        items {
          id
          groupId
          fantaTeamId
          group {
            id
            name
            color
            age
            createdAt
            updatedAt
            __typename
          }
          fantaTeam {
            id
            name
            createdAt
            updatedAt
            fantaTeamLeaderGroupId
            fantaTeamRespId
            fantaTeamOwnerId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    fantaTeam {
      id
      name
      groups {
        items {
          id
          groupId
          fantaTeamId
          group {
            id
            name
            color
            age
            createdAt
            updatedAt
            __typename
          }
          fantaTeam {
            id
            name
            createdAt
            updatedAt
            fantaTeamLeaderGroupId
            fantaTeamRespId
            fantaTeamOwnerId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      leaderGroup {
        id
        name
        color
        age
        fantaTeams {
          items {
            id
            groupId
            fantaTeamId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      resp {
        id
        firstName
        lastName
        createdAt
        updatedAt
        __typename
      }
      owner {
        id
        firstName
        lastName
        isResp
        resp {
          id
          firstName
          lastName
          createdAt
          updatedAt
          __typename
        }
        group {
          id
          name
          color
          age
          fantaTeams {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        userRespId
        userGroupId
        __typename
      }
      createdAt
      updatedAt
      fantaTeamLeaderGroupId
      fantaTeamRespId
      fantaTeamOwnerId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFantaTeamGroupsMutationVariables,
  APITypes.UpdateFantaTeamGroupsMutation
>;
export const deleteFantaTeamGroups = /* GraphQL */ `mutation DeleteFantaTeamGroups(
  $input: DeleteFantaTeamGroupsInput!
  $condition: ModelFantaTeamGroupsConditionInput
) {
  deleteFantaTeamGroups(input: $input, condition: $condition) {
    id
    groupId
    fantaTeamId
    group {
      id
      name
      color
      age
      fantaTeams {
        items {
          id
          groupId
          fantaTeamId
          group {
            id
            name
            color
            age
            createdAt
            updatedAt
            __typename
          }
          fantaTeam {
            id
            name
            createdAt
            updatedAt
            fantaTeamLeaderGroupId
            fantaTeamRespId
            fantaTeamOwnerId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    fantaTeam {
      id
      name
      groups {
        items {
          id
          groupId
          fantaTeamId
          group {
            id
            name
            color
            age
            createdAt
            updatedAt
            __typename
          }
          fantaTeam {
            id
            name
            createdAt
            updatedAt
            fantaTeamLeaderGroupId
            fantaTeamRespId
            fantaTeamOwnerId
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      leaderGroup {
        id
        name
        color
        age
        fantaTeams {
          items {
            id
            groupId
            fantaTeamId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      resp {
        id
        firstName
        lastName
        createdAt
        updatedAt
        __typename
      }
      owner {
        id
        firstName
        lastName
        isResp
        resp {
          id
          firstName
          lastName
          createdAt
          updatedAt
          __typename
        }
        group {
          id
          name
          color
          age
          fantaTeams {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        userRespId
        userGroupId
        __typename
      }
      createdAt
      updatedAt
      fantaTeamLeaderGroupId
      fantaTeamRespId
      fantaTeamOwnerId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFantaTeamGroupsMutationVariables,
  APITypes.DeleteFantaTeamGroupsMutation
>;
