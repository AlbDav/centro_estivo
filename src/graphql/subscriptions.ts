/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateGroup = /* GraphQL */ `subscription OnCreateGroup($filter: ModelSubscriptionGroupFilterInput) {
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
          ownerUserId
          createdAt
          updatedAt
          fantaTeamLeaderGroupId
          fantaTeamRespId
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
` as GeneratedSubscription<
  APITypes.OnCreateGroupSubscriptionVariables,
  APITypes.OnCreateGroupSubscription
>;
export const onUpdateGroup = /* GraphQL */ `subscription OnUpdateGroup($filter: ModelSubscriptionGroupFilterInput) {
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
          ownerUserId
          createdAt
          updatedAt
          fantaTeamLeaderGroupId
          fantaTeamRespId
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
` as GeneratedSubscription<
  APITypes.OnUpdateGroupSubscriptionVariables,
  APITypes.OnUpdateGroupSubscription
>;
export const onDeleteGroup = /* GraphQL */ `subscription OnDeleteGroup($filter: ModelSubscriptionGroupFilterInput) {
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
          ownerUserId
          createdAt
          updatedAt
          fantaTeamLeaderGroupId
          fantaTeamRespId
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
` as GeneratedSubscription<
  APITypes.OnDeleteGroupSubscriptionVariables,
  APITypes.OnDeleteGroupSubscription
>;
export const onCreateFantaTeam = /* GraphQL */ `subscription OnCreateFantaTeam($filter: ModelSubscriptionFantaTeamFilterInput) {
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
          ownerUserId
          createdAt
          updatedAt
          fantaTeamLeaderGroupId
          fantaTeamRespId
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
            ownerUserId
            createdAt
            updatedAt
            fantaTeamLeaderGroupId
            fantaTeamRespId
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
    ownerUserId
    createdAt
    updatedAt
    fantaTeamLeaderGroupId
    fantaTeamRespId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateFantaTeamSubscriptionVariables,
  APITypes.OnCreateFantaTeamSubscription
>;
export const onUpdateFantaTeam = /* GraphQL */ `subscription OnUpdateFantaTeam($filter: ModelSubscriptionFantaTeamFilterInput) {
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
          ownerUserId
          createdAt
          updatedAt
          fantaTeamLeaderGroupId
          fantaTeamRespId
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
            ownerUserId
            createdAt
            updatedAt
            fantaTeamLeaderGroupId
            fantaTeamRespId
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
    ownerUserId
    createdAt
    updatedAt
    fantaTeamLeaderGroupId
    fantaTeamRespId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateFantaTeamSubscriptionVariables,
  APITypes.OnUpdateFantaTeamSubscription
>;
export const onDeleteFantaTeam = /* GraphQL */ `subscription OnDeleteFantaTeam($filter: ModelSubscriptionFantaTeamFilterInput) {
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
          ownerUserId
          createdAt
          updatedAt
          fantaTeamLeaderGroupId
          fantaTeamRespId
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
            ownerUserId
            createdAt
            updatedAt
            fantaTeamLeaderGroupId
            fantaTeamRespId
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
    ownerUserId
    createdAt
    updatedAt
    fantaTeamLeaderGroupId
    fantaTeamRespId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteFantaTeamSubscriptionVariables,
  APITypes.OnDeleteFantaTeamSubscription
>;
export const onCreateFantaRule = /* GraphQL */ `subscription OnCreateFantaRule($filter: ModelSubscriptionFantaRuleFilterInput) {
  onCreateFantaRule(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFantaRuleSubscriptionVariables,
  APITypes.OnCreateFantaRuleSubscription
>;
export const onUpdateFantaRule = /* GraphQL */ `subscription OnUpdateFantaRule($filter: ModelSubscriptionFantaRuleFilterInput) {
  onUpdateFantaRule(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFantaRuleSubscriptionVariables,
  APITypes.OnUpdateFantaRuleSubscription
>;
export const onDeleteFantaRule = /* GraphQL */ `subscription OnDeleteFantaRule($filter: ModelSubscriptionFantaRuleFilterInput) {
  onDeleteFantaRule(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFantaRuleSubscriptionVariables,
  APITypes.OnDeleteFantaRuleSubscription
>;
export const onCreateFantaScoreEntry = /* GraphQL */ `subscription OnCreateFantaScoreEntry(
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
            ownerUserId
            createdAt
            updatedAt
            fantaTeamLeaderGroupId
            fantaTeamRespId
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
` as GeneratedSubscription<
  APITypes.OnCreateFantaScoreEntrySubscriptionVariables,
  APITypes.OnCreateFantaScoreEntrySubscription
>;
export const onUpdateFantaScoreEntry = /* GraphQL */ `subscription OnUpdateFantaScoreEntry(
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
            ownerUserId
            createdAt
            updatedAt
            fantaTeamLeaderGroupId
            fantaTeamRespId
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
` as GeneratedSubscription<
  APITypes.OnUpdateFantaScoreEntrySubscriptionVariables,
  APITypes.OnUpdateFantaScoreEntrySubscription
>;
export const onDeleteFantaScoreEntry = /* GraphQL */ `subscription OnDeleteFantaScoreEntry(
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
            ownerUserId
            createdAt
            updatedAt
            fantaTeamLeaderGroupId
            fantaTeamRespId
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
` as GeneratedSubscription<
  APITypes.OnDeleteFantaScoreEntrySubscriptionVariables,
  APITypes.OnDeleteFantaScoreEntrySubscription
>;
export const onCreateResp = /* GraphQL */ `subscription OnCreateResp($filter: ModelSubscriptionRespFilterInput) {
  onCreateResp(filter: $filter) {
    id
    firstName
    lastName
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateRespSubscriptionVariables,
  APITypes.OnCreateRespSubscription
>;
export const onUpdateResp = /* GraphQL */ `subscription OnUpdateResp($filter: ModelSubscriptionRespFilterInput) {
  onUpdateResp(filter: $filter) {
    id
    firstName
    lastName
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateRespSubscriptionVariables,
  APITypes.OnUpdateRespSubscription
>;
export const onDeleteResp = /* GraphQL */ `subscription OnDeleteResp($filter: ModelSubscriptionRespFilterInput) {
  onDeleteResp(filter: $filter) {
    id
    firstName
    lastName
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteRespSubscriptionVariables,
  APITypes.OnDeleteRespSubscription
>;
export const onCreateFantaRuleEntryResp = /* GraphQL */ `subscription OnCreateFantaRuleEntryResp(
  $filter: ModelSubscriptionFantaRuleEntryRespFilterInput
) {
  onCreateFantaRuleEntryResp(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFantaRuleEntryRespSubscriptionVariables,
  APITypes.OnCreateFantaRuleEntryRespSubscription
>;
export const onUpdateFantaRuleEntryResp = /* GraphQL */ `subscription OnUpdateFantaRuleEntryResp(
  $filter: ModelSubscriptionFantaRuleEntryRespFilterInput
) {
  onUpdateFantaRuleEntryResp(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFantaRuleEntryRespSubscriptionVariables,
  APITypes.OnUpdateFantaRuleEntryRespSubscription
>;
export const onDeleteFantaRuleEntryResp = /* GraphQL */ `subscription OnDeleteFantaRuleEntryResp(
  $filter: ModelSubscriptionFantaRuleEntryRespFilterInput
) {
  onDeleteFantaRuleEntryResp(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFantaRuleEntryRespSubscriptionVariables,
  APITypes.OnDeleteFantaRuleEntryRespSubscription
>;
export const onCreateFantaTeamGroups = /* GraphQL */ `subscription OnCreateFantaTeamGroups(
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
            __typename
          }
          fantaTeam {
            id
            name
            ownerUserId
            createdAt
            updatedAt
            fantaTeamLeaderGroupId
            fantaTeamRespId
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
            ownerUserId
            createdAt
            updatedAt
            fantaTeamLeaderGroupId
            fantaTeamRespId
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
      ownerUserId
      createdAt
      updatedAt
      fantaTeamLeaderGroupId
      fantaTeamRespId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateFantaTeamGroupsSubscriptionVariables,
  APITypes.OnCreateFantaTeamGroupsSubscription
>;
export const onUpdateFantaTeamGroups = /* GraphQL */ `subscription OnUpdateFantaTeamGroups(
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
            __typename
          }
          fantaTeam {
            id
            name
            ownerUserId
            createdAt
            updatedAt
            fantaTeamLeaderGroupId
            fantaTeamRespId
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
            ownerUserId
            createdAt
            updatedAt
            fantaTeamLeaderGroupId
            fantaTeamRespId
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
      ownerUserId
      createdAt
      updatedAt
      fantaTeamLeaderGroupId
      fantaTeamRespId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateFantaTeamGroupsSubscriptionVariables,
  APITypes.OnUpdateFantaTeamGroupsSubscription
>;
export const onDeleteFantaTeamGroups = /* GraphQL */ `subscription OnDeleteFantaTeamGroups(
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
            __typename
          }
          fantaTeam {
            id
            name
            ownerUserId
            createdAt
            updatedAt
            fantaTeamLeaderGroupId
            fantaTeamRespId
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
            ownerUserId
            createdAt
            updatedAt
            fantaTeamLeaderGroupId
            fantaTeamRespId
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
      ownerUserId
      createdAt
      updatedAt
      fantaTeamLeaderGroupId
      fantaTeamRespId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteFantaTeamGroupsSubscriptionVariables,
  APITypes.OnDeleteFantaTeamGroupsSubscription
>;
