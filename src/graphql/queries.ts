/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
      id
      name
      color
      createdAt
      updatedAt
      teamGroupsId
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
        createdAt
        updatedAt
        teamGroupsId
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
          name
          color
          createdAt
          updatedAt
          teamGroupsId
        }
        nextToken
      }
      leaderGroup {
        id
        name
        color
        createdAt
        updatedAt
        teamGroupsId
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
          teamGroupsId
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
        createdAt
        updatedAt
        teamGroupsId
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
          teamGroupsId
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
