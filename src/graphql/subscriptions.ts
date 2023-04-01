/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup($filter: ModelSubscriptionGroupFilterInput) {
    onCreateGroup(filter: $filter) {
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
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup($filter: ModelSubscriptionGroupFilterInput) {
    onUpdateGroup(filter: $filter) {
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
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup($filter: ModelSubscriptionGroupFilterInput) {
    onDeleteGroup(filter: $filter) {
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
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam($filter: ModelSubscriptionTeamFilterInput) {
    onCreateTeam(filter: $filter) {
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam($filter: ModelSubscriptionTeamFilterInput) {
    onUpdateTeam(filter: $filter) {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam($filter: ModelSubscriptionTeamFilterInput) {
    onDeleteTeam(filter: $filter) {
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
export const onCreateRule = /* GraphQL */ `
  subscription OnCreateRule($filter: ModelSubscriptionRuleFilterInput) {
    onCreateRule(filter: $filter) {
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
export const onUpdateRule = /* GraphQL */ `
  subscription OnUpdateRule($filter: ModelSubscriptionRuleFilterInput) {
    onUpdateRule(filter: $filter) {
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
export const onDeleteRule = /* GraphQL */ `
  subscription OnDeleteRule($filter: ModelSubscriptionRuleFilterInput) {
    onDeleteRule(filter: $filter) {
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
export const onCreateScoreEntry = /* GraphQL */ `
  subscription OnCreateScoreEntry(
    $filter: ModelSubscriptionScoreEntryFilterInput
  ) {
    onCreateScoreEntry(filter: $filter) {
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
export const onUpdateScoreEntry = /* GraphQL */ `
  subscription OnUpdateScoreEntry(
    $filter: ModelSubscriptionScoreEntryFilterInput
  ) {
    onUpdateScoreEntry(filter: $filter) {
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
export const onDeleteScoreEntry = /* GraphQL */ `
  subscription OnDeleteScoreEntry(
    $filter: ModelSubscriptionScoreEntryFilterInput
  ) {
    onDeleteScoreEntry(filter: $filter) {
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
export const onCreateTeamGroups = /* GraphQL */ `
  subscription OnCreateTeamGroups(
    $filter: ModelSubscriptionTeamGroupsFilterInput
  ) {
    onCreateTeamGroups(filter: $filter) {
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
export const onUpdateTeamGroups = /* GraphQL */ `
  subscription OnUpdateTeamGroups(
    $filter: ModelSubscriptionTeamGroupsFilterInput
  ) {
    onUpdateTeamGroups(filter: $filter) {
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
export const onDeleteTeamGroups = /* GraphQL */ `
  subscription OnDeleteTeamGroups(
    $filter: ModelSubscriptionTeamGroupsFilterInput
  ) {
    onDeleteTeamGroups(filter: $filter) {
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
