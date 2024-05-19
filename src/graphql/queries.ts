/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getGroup = /* GraphQL */ `query GetGroup($id: ID!) {
  getGroup(id: $id) {
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
` as GeneratedQuery<APITypes.GetGroupQueryVariables, APITypes.GetGroupQuery>;
export const listGroups = /* GraphQL */ `query ListGroups(
  $filter: ModelGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGroupsQueryVariables,
  APITypes.ListGroupsQuery
>;
export const getFantaTeam = /* GraphQL */ `query GetFantaTeam($id: ID!) {
  getFantaTeam(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetFantaTeamQueryVariables,
  APITypes.GetFantaTeamQuery
>;
export const listFantaTeams = /* GraphQL */ `query ListFantaTeams(
  $filter: ModelFantaTeamFilterInput
  $limit: Int
  $nextToken: String
) {
  listFantaTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFantaTeamsQueryVariables,
  APITypes.ListFantaTeamsQuery
>;
export const getFantaRule = /* GraphQL */ `query GetFantaRule($id: ID!) {
  getFantaRule(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetFantaRuleQueryVariables,
  APITypes.GetFantaRuleQuery
>;
export const listFantaRules = /* GraphQL */ `query ListFantaRules(
  $filter: ModelFantaRuleFilterInput
  $limit: Int
  $nextToken: String
) {
  listFantaRules(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFantaRulesQueryVariables,
  APITypes.ListFantaRulesQuery
>;
export const getFantaScoreEntry = /* GraphQL */ `query GetFantaScoreEntry($id: ID!) {
  getFantaScoreEntry(id: $id) {
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
    date
    createdAt
    updatedAt
    fantaScoreEntryRuleId
    fantaScoreEntryGroupId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFantaScoreEntryQueryVariables,
  APITypes.GetFantaScoreEntryQuery
>;
export const listFantaScoreEntries = /* GraphQL */ `query ListFantaScoreEntries(
  $filter: ModelFantaScoreEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  listFantaScoreEntries(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      date
      createdAt
      updatedAt
      fantaScoreEntryRuleId
      fantaScoreEntryGroupId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFantaScoreEntriesQueryVariables,
  APITypes.ListFantaScoreEntriesQuery
>;
export const getResp = /* GraphQL */ `query GetResp($id: ID!) {
  getResp(id: $id) {
    id
    firstName
    lastName
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetRespQueryVariables, APITypes.GetRespQuery>;
export const listResps = /* GraphQL */ `query ListResps(
  $filter: ModelRespFilterInput
  $limit: Int
  $nextToken: String
) {
  listResps(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstName
      lastName
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListRespsQueryVariables, APITypes.ListRespsQuery>;
export const getFantaRuleEntryResp = /* GraphQL */ `query GetFantaRuleEntryResp($id: ID!) {
  getFantaRuleEntryResp(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetFantaRuleEntryRespQueryVariables,
  APITypes.GetFantaRuleEntryRespQuery
>;
export const listFantaRuleEntryResps = /* GraphQL */ `query ListFantaRuleEntryResps(
  $filter: ModelFantaRuleEntryRespFilterInput
  $limit: Int
  $nextToken: String
) {
  listFantaRuleEntryResps(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFantaRuleEntryRespsQueryVariables,
  APITypes.ListFantaRuleEntryRespsQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getFantaTeamGroups = /* GraphQL */ `query GetFantaTeamGroups($id: ID!) {
  getFantaTeamGroups(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetFantaTeamGroupsQueryVariables,
  APITypes.GetFantaTeamGroupsQuery
>;
export const listFantaTeamGroups = /* GraphQL */ `query ListFantaTeamGroups(
  $filter: ModelFantaTeamGroupsFilterInput
  $limit: Int
  $nextToken: String
) {
  listFantaTeamGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      fantaTeam {
        id
        name
        groups {
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
        leaderGroup {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFantaTeamGroupsQueryVariables,
  APITypes.ListFantaTeamGroupsQuery
>;
export const fantaTeamGroupsByGroupId = /* GraphQL */ `query FantaTeamGroupsByGroupId(
  $groupId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelFantaTeamGroupsFilterInput
  $limit: Int
  $nextToken: String
) {
  fantaTeamGroupsByGroupId(
    groupId: $groupId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
      fantaTeam {
        id
        name
        groups {
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
        leaderGroup {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.FantaTeamGroupsByGroupIdQueryVariables,
  APITypes.FantaTeamGroupsByGroupIdQuery
>;
export const fantaTeamGroupsByFantaTeamId = /* GraphQL */ `query FantaTeamGroupsByFantaTeamId(
  $fantaTeamId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelFantaTeamGroupsFilterInput
  $limit: Int
  $nextToken: String
) {
  fantaTeamGroupsByFantaTeamId(
    fantaTeamId: $fantaTeamId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
      fantaTeam {
        id
        name
        groups {
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
        leaderGroup {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.FantaTeamGroupsByFantaTeamIdQueryVariables,
  APITypes.FantaTeamGroupsByFantaTeamIdQuery
>;
