/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
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
      nextToken
    }
  }
`;
export const getFantaTeam = /* GraphQL */ `
  query GetFantaTeam($id: ID!) {
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
export const listFantaTeams = /* GraphQL */ `
  query ListFantaTeams(
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
      nextToken
    }
  }
`;
export const getFantaRule = /* GraphQL */ `
  query GetFantaRule($id: ID!) {
    getFantaRule(id: $id) {
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
export const listFantaRules = /* GraphQL */ `
  query ListFantaRules(
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFantaScoreEntry = /* GraphQL */ `
  query GetFantaScoreEntry($id: ID!) {
    getFantaScoreEntry(id: $id) {
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
export const listFantaScoreEntries = /* GraphQL */ `
  query ListFantaScoreEntries(
    $filter: ModelFantaScoreEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFantaScoreEntries(
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
      nextToken
    }
  }
`;
export const getFantaTeamGroups = /* GraphQL */ `
  query GetFantaTeamGroups($id: ID!) {
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
export const listFantaTeamGroups = /* GraphQL */ `
  query ListFantaTeamGroups(
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
      nextToken
    }
  }
`;
export const fantaTeamGroupsByGroupId = /* GraphQL */ `
  query FantaTeamGroupsByGroupId(
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
      nextToken
    }
  }
`;
export const fantaTeamGroupsByFantaTeamId = /* GraphQL */ `
  query FantaTeamGroupsByFantaTeamId(
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
      nextToken
    }
  }
`;
