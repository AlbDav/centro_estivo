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
          fantaTeamId
          group {
            id
            name
            color
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
          fantaTeamId
          group {
            id
            name
            color
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
          fantaTeamId
          group {
            id
            name
            color
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
  }
`;
export const createFantaTeam = /* GraphQL */ `
  mutation CreateFantaTeam(
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
        teams {
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
  }
`;
export const updateFantaTeam = /* GraphQL */ `
  mutation UpdateFantaTeam(
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
        teams {
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
  }
`;
export const deleteFantaTeam = /* GraphQL */ `
  mutation DeleteFantaTeam(
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
        teams {
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
  }
`;
export const createFantaRule = /* GraphQL */ `
  mutation CreateFantaRule(
    $input: CreateFantaRuleInput!
    $condition: ModelFantaRuleConditionInput
  ) {
    createFantaRule(input: $input, condition: $condition) {
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
export const updateFantaRule = /* GraphQL */ `
  mutation UpdateFantaRule(
    $input: UpdateFantaRuleInput!
    $condition: ModelFantaRuleConditionInput
  ) {
    updateFantaRule(input: $input, condition: $condition) {
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
export const deleteFantaRule = /* GraphQL */ `
  mutation DeleteFantaRule(
    $input: DeleteFantaRuleInput!
    $condition: ModelFantaRuleConditionInput
  ) {
    deleteFantaRule(input: $input, condition: $condition) {
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
export const createFantaScoreEntry = /* GraphQL */ `
  mutation CreateFantaScoreEntry(
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
        createdAt
        updatedAt
      }
      group {
        id
        name
        color
        teams {
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
  }
`;
export const updateFantaScoreEntry = /* GraphQL */ `
  mutation UpdateFantaScoreEntry(
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
        createdAt
        updatedAt
      }
      group {
        id
        name
        color
        teams {
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
  }
`;
export const deleteFantaScoreEntry = /* GraphQL */ `
  mutation DeleteFantaScoreEntry(
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
        createdAt
        updatedAt
      }
      group {
        id
        name
        color
        teams {
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
  }
`;
export const createFantaTeamGroups = /* GraphQL */ `
  mutation CreateFantaTeamGroups(
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
        teams {
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
          teams {
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
export const updateFantaTeamGroups = /* GraphQL */ `
  mutation UpdateFantaTeamGroups(
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
        teams {
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
          teams {
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
export const deleteFantaTeamGroups = /* GraphQL */ `
  mutation DeleteFantaTeamGroups(
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
        teams {
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
          teams {
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
