/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
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
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
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
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
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
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
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
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
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
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
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
export const createRule = /* GraphQL */ `
  mutation CreateRule(
    $input: CreateRuleInput!
    $condition: ModelRuleConditionInput
  ) {
    createRule(input: $input, condition: $condition) {
      id
      title
      description
      points
      pointDescription
      createdAt
      updatedAt
    }
  }
`;
export const updateRule = /* GraphQL */ `
  mutation UpdateRule(
    $input: UpdateRuleInput!
    $condition: ModelRuleConditionInput
  ) {
    updateRule(input: $input, condition: $condition) {
      id
      title
      description
      points
      pointDescription
      createdAt
      updatedAt
    }
  }
`;
export const deleteRule = /* GraphQL */ `
  mutation DeleteRule(
    $input: DeleteRuleInput!
    $condition: ModelRuleConditionInput
  ) {
    deleteRule(input: $input, condition: $condition) {
      id
      title
      description
      points
      pointDescription
      createdAt
      updatedAt
    }
  }
`;
export const createScoreEntry = /* GraphQL */ `
  mutation CreateScoreEntry(
    $input: CreateScoreEntryInput!
    $condition: ModelScoreEntryConditionInput
  ) {
    createScoreEntry(input: $input, condition: $condition) {
      id
      rule {
        id
        title
        description
        points
        pointDescription
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
export const updateScoreEntry = /* GraphQL */ `
  mutation UpdateScoreEntry(
    $input: UpdateScoreEntryInput!
    $condition: ModelScoreEntryConditionInput
  ) {
    updateScoreEntry(input: $input, condition: $condition) {
      id
      rule {
        id
        title
        description
        points
        pointDescription
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
export const deleteScoreEntry = /* GraphQL */ `
  mutation DeleteScoreEntry(
    $input: DeleteScoreEntryInput!
    $condition: ModelScoreEntryConditionInput
  ) {
    deleteScoreEntry(input: $input, condition: $condition) {
      id
      rule {
        id
        title
        description
        points
        pointDescription
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
export const createTeamGroups = /* GraphQL */ `
  mutation CreateTeamGroups(
    $input: CreateTeamGroupsInput!
    $condition: ModelTeamGroupsConditionInput
  ) {
    createTeamGroups(input: $input, condition: $condition) {
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
export const updateTeamGroups = /* GraphQL */ `
  mutation UpdateTeamGroups(
    $input: UpdateTeamGroupsInput!
    $condition: ModelTeamGroupsConditionInput
  ) {
    updateTeamGroups(input: $input, condition: $condition) {
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
export const deleteTeamGroups = /* GraphQL */ `
  mutation DeleteTeamGroups(
    $input: DeleteTeamGroupsInput!
    $condition: ModelTeamGroupsConditionInput
  ) {
    deleteTeamGroups(input: $input, condition: $condition) {
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
