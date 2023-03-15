/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
      id
      name
      color
      teams {
        items {
          id
          groupId
          teamId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listGroups = /* GraphQL */ `
  query ListGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        color
        teams {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
      id
      name
      groups {
        items {
          id
          groupId
          teamId
          createdAt
          updatedAt
        }
        nextToken
      }
      leaderGroup {
        id
        name
        color
        teams {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      teamLeaderGroupId
    }
  }
`;
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        groups {
          nextToken
        }
        leaderGroup {
          id
          name
          color
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        teamLeaderGroupId
      }
      nextToken
    }
  }
`;
export const getRule = /* GraphQL */ `
  query GetRule($id: ID!) {
    getRule(id: $id) {
      id
      descriptio
      points
      createdAt
      updatedAt
    }
  }
`;
export const listRules = /* GraphQL */ `
  query ListRules(
    $filter: ModelRuleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRules(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        descriptio
        points
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getScoreEntry = /* GraphQL */ `
  query GetScoreEntry($id: ID!) {
    getScoreEntry(id: $id) {
      id
      rule {
        id
        descriptio
        points
        createdAt
        updatedAt
      }
      group {
        id
        name
        color
        teams {
          nextToken
        }
        createdAt
        updatedAt
      }
      date
      createdAt
      updatedAt
      scoreEntryRuleId
      scoreEntryGroupId
    }
  }
`;
export const listScoreEntries = /* GraphQL */ `
  query ListScoreEntries(
    $filter: ModelScoreEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listScoreEntries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        rule {
          id
          descriptio
          points
          createdAt
          updatedAt
        }
        group {
          id
          name
          color
          createdAt
          updatedAt
        }
        date
        createdAt
        updatedAt
        scoreEntryRuleId
        scoreEntryGroupId
      }
      nextToken
    }
  }
`;
export const getTeamGroups = /* GraphQL */ `
  query GetTeamGroups($id: ID!) {
    getTeamGroups(id: $id) {
      id
      groupId
      teamId
      group {
        id
        name
        color
        teams {
          nextToken
        }
        createdAt
        updatedAt
      }
      team {
        id
        name
        groups {
          nextToken
        }
        leaderGroup {
          id
          name
          color
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        teamLeaderGroupId
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTeamGroups = /* GraphQL */ `
  query ListTeamGroups(
    $filter: ModelTeamGroupsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeamGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        groupId
        teamId
        group {
          id
          name
          color
          createdAt
          updatedAt
        }
        team {
          id
          name
          createdAt
          updatedAt
          teamLeaderGroupId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const teamGroupsByGroupId = /* GraphQL */ `
  query TeamGroupsByGroupId(
    $groupId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTeamGroupsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    teamGroupsByGroupId(
      groupId: $groupId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groupId
        teamId
        group {
          id
          name
          color
          createdAt
          updatedAt
        }
        team {
          id
          name
          createdAt
          updatedAt
          teamLeaderGroupId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const teamGroupsByTeamId = /* GraphQL */ `
  query TeamGroupsByTeamId(
    $teamId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTeamGroupsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    teamGroupsByTeamId(
      teamId: $teamId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groupId
        teamId
        group {
          id
          name
          color
          createdAt
          updatedAt
        }
        team {
          id
          name
          createdAt
          updatedAt
          teamLeaderGroupId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
