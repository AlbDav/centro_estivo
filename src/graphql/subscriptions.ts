/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup($filter: ModelSubscriptionGroupFilterInput) {
    onCreateGroup(filter: $filter) {
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
            }
            createdAt
            updatedAt
          }
          fantaTeam {
            id
            name
            groups {
              nextToken
            }
            leaderGroup {
              id
              name
              color
              age
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            fantaTeamLeaderGroupId
          }
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
            }
            createdAt
            updatedAt
          }
          fantaTeam {
            id
            name
            groups {
              nextToken
            }
            leaderGroup {
              id
              name
              color
              age
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            fantaTeamLeaderGroupId
          }
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
            }
            createdAt
            updatedAt
          }
          fantaTeam {
            id
            name
            groups {
              nextToken
            }
            leaderGroup {
              id
              name
              color
              age
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            fantaTeamLeaderGroupId
          }
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
export const onCreateFantaTeam = /* GraphQL */ `
  subscription OnCreateFantaTeam(
    $filter: ModelSubscriptionFantaTeamFilterInput
  ) {
    onCreateFantaTeam(filter: $filter) {
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
            }
            createdAt
            updatedAt
          }
          fantaTeam {
            id
            name
            groups {
              nextToken
            }
            leaderGroup {
              id
              name
              color
              age
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            fantaTeamLeaderGroupId
          }
          createdAt
          updatedAt
        }
        nextToken
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
            }
            fantaTeam {
              id
              name
              createdAt
              updatedAt
              fantaTeamLeaderGroupId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      fantaTeamLeaderGroupId
    }
  }
`;
export const onUpdateFantaTeam = /* GraphQL */ `
  subscription OnUpdateFantaTeam(
    $filter: ModelSubscriptionFantaTeamFilterInput
  ) {
    onUpdateFantaTeam(filter: $filter) {
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
            }
            createdAt
            updatedAt
          }
          fantaTeam {
            id
            name
            groups {
              nextToken
            }
            leaderGroup {
              id
              name
              color
              age
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            fantaTeamLeaderGroupId
          }
          createdAt
          updatedAt
        }
        nextToken
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
            }
            fantaTeam {
              id
              name
              createdAt
              updatedAt
              fantaTeamLeaderGroupId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      fantaTeamLeaderGroupId
    }
  }
`;
export const onDeleteFantaTeam = /* GraphQL */ `
  subscription OnDeleteFantaTeam(
    $filter: ModelSubscriptionFantaTeamFilterInput
  ) {
    onDeleteFantaTeam(filter: $filter) {
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
            }
            createdAt
            updatedAt
          }
          fantaTeam {
            id
            name
            groups {
              nextToken
            }
            leaderGroup {
              id
              name
              color
              age
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            fantaTeamLeaderGroupId
          }
          createdAt
          updatedAt
        }
        nextToken
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
            }
            fantaTeam {
              id
              name
              createdAt
              updatedAt
              fantaTeamLeaderGroupId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      fantaTeamLeaderGroupId
    }
  }
`;
export const onCreateFantaRule = /* GraphQL */ `
  subscription OnCreateFantaRule(
    $filter: ModelSubscriptionFantaRuleFilterInput
  ) {
    onCreateFantaRule(filter: $filter) {
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
export const onUpdateFantaRule = /* GraphQL */ `
  subscription OnUpdateFantaRule(
    $filter: ModelSubscriptionFantaRuleFilterInput
  ) {
    onUpdateFantaRule(filter: $filter) {
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
export const onDeleteFantaRule = /* GraphQL */ `
  subscription OnDeleteFantaRule(
    $filter: ModelSubscriptionFantaRuleFilterInput
  ) {
    onDeleteFantaRule(filter: $filter) {
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
export const onCreateFantaScoreEntry = /* GraphQL */ `
  subscription OnCreateFantaScoreEntry(
    $filter: ModelSubscriptionFantaScoreEntryFilterInput
  ) {
    onCreateFantaScoreEntry(filter: $filter) {
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
            }
            fantaTeam {
              id
              name
              createdAt
              updatedAt
              fantaTeamLeaderGroupId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      date
      createdAt
      updatedAt
      fantaScoreEntryRuleId
      fantaScoreEntryGroupId
    }
  }
`;
export const onUpdateFantaScoreEntry = /* GraphQL */ `
  subscription OnUpdateFantaScoreEntry(
    $filter: ModelSubscriptionFantaScoreEntryFilterInput
  ) {
    onUpdateFantaScoreEntry(filter: $filter) {
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
            }
            fantaTeam {
              id
              name
              createdAt
              updatedAt
              fantaTeamLeaderGroupId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      date
      createdAt
      updatedAt
      fantaScoreEntryRuleId
      fantaScoreEntryGroupId
    }
  }
`;
export const onDeleteFantaScoreEntry = /* GraphQL */ `
  subscription OnDeleteFantaScoreEntry(
    $filter: ModelSubscriptionFantaScoreEntryFilterInput
  ) {
    onDeleteFantaScoreEntry(filter: $filter) {
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
            }
            fantaTeam {
              id
              name
              createdAt
              updatedAt
              fantaTeamLeaderGroupId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      date
      createdAt
      updatedAt
      fantaScoreEntryRuleId
      fantaScoreEntryGroupId
    }
  }
`;
export const onCreateFantaTeamGroups = /* GraphQL */ `
  subscription OnCreateFantaTeamGroups(
    $filter: ModelSubscriptionFantaTeamGroupsFilterInput
  ) {
    onCreateFantaTeamGroups(filter: $filter) {
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
            }
            fantaTeam {
              id
              name
              createdAt
              updatedAt
              fantaTeamLeaderGroupId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
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
            }
            fantaTeam {
              id
              name
              createdAt
              updatedAt
              fantaTeamLeaderGroupId
            }
            createdAt
            updatedAt
          }
          nextToken
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
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        fantaTeamLeaderGroupId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFantaTeamGroups = /* GraphQL */ `
  subscription OnUpdateFantaTeamGroups(
    $filter: ModelSubscriptionFantaTeamGroupsFilterInput
  ) {
    onUpdateFantaTeamGroups(filter: $filter) {
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
            }
            fantaTeam {
              id
              name
              createdAt
              updatedAt
              fantaTeamLeaderGroupId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
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
            }
            fantaTeam {
              id
              name
              createdAt
              updatedAt
              fantaTeamLeaderGroupId
            }
            createdAt
            updatedAt
          }
          nextToken
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
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        fantaTeamLeaderGroupId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFantaTeamGroups = /* GraphQL */ `
  subscription OnDeleteFantaTeamGroups(
    $filter: ModelSubscriptionFantaTeamGroupsFilterInput
  ) {
    onDeleteFantaTeamGroups(filter: $filter) {
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
            }
            fantaTeam {
              id
              name
              createdAt
              updatedAt
              fantaTeamLeaderGroupId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
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
            }
            fantaTeam {
              id
              name
              createdAt
              updatedAt
              fantaTeamLeaderGroupId
            }
            createdAt
            updatedAt
          }
          nextToken
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
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        fantaTeamLeaderGroupId
      }
      createdAt
      updatedAt
    }
  }
`;
