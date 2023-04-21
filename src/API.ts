/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateGroupInput = {
  id?: string | null,
  name: string,
  color: string,
};

export type ModelGroupConditionInput = {
  name?: ModelStringInput | null,
  color?: ModelStringInput | null,
  and?: Array< ModelGroupConditionInput | null > | null,
  or?: Array< ModelGroupConditionInput | null > | null,
  not?: ModelGroupConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Group = {
  __typename: "Group",
  id: string,
  name: string,
  color: string,
  teams?: ModelFantaTeamGroupsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelFantaTeamGroupsConnection = {
  __typename: "ModelFantaTeamGroupsConnection",
  items:  Array<FantaTeamGroups | null >,
  nextToken?: string | null,
};

export type FantaTeamGroups = {
  __typename: "FantaTeamGroups",
  id: string,
  groupId: string,
  fantaTeamId: string,
  group: Group,
  fantaTeam: FantaTeam,
  createdAt: string,
  updatedAt: string,
};

export type FantaTeam = {
  __typename: "FantaTeam",
  id: string,
  name: string,
  groups?: ModelFantaTeamGroupsConnection | null,
  leaderGroup?: Group | null,
  createdAt: string,
  updatedAt: string,
  fantaTeamLeaderGroupId?: string | null,
};

export type UpdateGroupInput = {
  id: string,
  name?: string | null,
  color?: string | null,
};

export type DeleteGroupInput = {
  id: string,
};

export type CreateFantaTeamInput = {
  id?: string | null,
  name: string,
  fantaTeamLeaderGroupId?: string | null,
};

export type ModelFantaTeamConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelFantaTeamConditionInput | null > | null,
  or?: Array< ModelFantaTeamConditionInput | null > | null,
  not?: ModelFantaTeamConditionInput | null,
  fantaTeamLeaderGroupId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateFantaTeamInput = {
  id: string,
  name?: string | null,
  fantaTeamLeaderGroupId?: string | null,
};

export type DeleteFantaTeamInput = {
  id: string,
};

export type CreateFantaRuleInput = {
  id?: string | null,
  title: string,
  description: string,
  points: number,
  pointDescription: string,
};

export type ModelFantaRuleConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  points?: ModelIntInput | null,
  pointDescription?: ModelStringInput | null,
  and?: Array< ModelFantaRuleConditionInput | null > | null,
  or?: Array< ModelFantaRuleConditionInput | null > | null,
  not?: ModelFantaRuleConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type FantaRule = {
  __typename: "FantaRule",
  id: string,
  title: string,
  description: string,
  points: number,
  pointDescription: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFantaRuleInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  points?: number | null,
  pointDescription?: string | null,
};

export type DeleteFantaRuleInput = {
  id: string,
};

export type CreateFantaScoreEntryInput = {
  id?: string | null,
  date: string,
  fantaScoreEntryRuleId: string,
  fantaScoreEntryGroupId: string,
};

export type ModelFantaScoreEntryConditionInput = {
  date?: ModelStringInput | null,
  and?: Array< ModelFantaScoreEntryConditionInput | null > | null,
  or?: Array< ModelFantaScoreEntryConditionInput | null > | null,
  not?: ModelFantaScoreEntryConditionInput | null,
  fantaScoreEntryRuleId?: ModelIDInput | null,
  fantaScoreEntryGroupId?: ModelIDInput | null,
};

export type FantaScoreEntry = {
  __typename: "FantaScoreEntry",
  id: string,
  rule: FantaRule,
  group: Group,
  date: string,
  createdAt: string,
  updatedAt: string,
  fantaScoreEntryRuleId: string,
  fantaScoreEntryGroupId: string,
};

export type UpdateFantaScoreEntryInput = {
  id: string,
  date?: string | null,
  fantaScoreEntryRuleId?: string | null,
  fantaScoreEntryGroupId?: string | null,
};

export type DeleteFantaScoreEntryInput = {
  id: string,
};

export type CreateFantaTeamGroupsInput = {
  id?: string | null,
  groupId: string,
  fantaTeamId: string,
};

export type ModelFantaTeamGroupsConditionInput = {
  groupId?: ModelIDInput | null,
  fantaTeamId?: ModelIDInput | null,
  and?: Array< ModelFantaTeamGroupsConditionInput | null > | null,
  or?: Array< ModelFantaTeamGroupsConditionInput | null > | null,
  not?: ModelFantaTeamGroupsConditionInput | null,
};

export type UpdateFantaTeamGroupsInput = {
  id: string,
  groupId?: string | null,
  fantaTeamId?: string | null,
};

export type DeleteFantaTeamGroupsInput = {
  id: string,
};

export type ModelGroupFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  color?: ModelStringInput | null,
  and?: Array< ModelGroupFilterInput | null > | null,
  or?: Array< ModelGroupFilterInput | null > | null,
  not?: ModelGroupFilterInput | null,
};

export type ModelGroupConnection = {
  __typename: "ModelGroupConnection",
  items:  Array<Group | null >,
  nextToken?: string | null,
};

export type ModelFantaTeamFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelFantaTeamFilterInput | null > | null,
  or?: Array< ModelFantaTeamFilterInput | null > | null,
  not?: ModelFantaTeamFilterInput | null,
  fantaTeamLeaderGroupId?: ModelIDInput | null,
};

export type ModelFantaTeamConnection = {
  __typename: "ModelFantaTeamConnection",
  items:  Array<FantaTeam | null >,
  nextToken?: string | null,
};

export type ModelFantaRuleFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  points?: ModelIntInput | null,
  pointDescription?: ModelStringInput | null,
  and?: Array< ModelFantaRuleFilterInput | null > | null,
  or?: Array< ModelFantaRuleFilterInput | null > | null,
  not?: ModelFantaRuleFilterInput | null,
};

export type ModelFantaRuleConnection = {
  __typename: "ModelFantaRuleConnection",
  items:  Array<FantaRule | null >,
  nextToken?: string | null,
};

export type ModelFantaScoreEntryFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelFantaScoreEntryFilterInput | null > | null,
  or?: Array< ModelFantaScoreEntryFilterInput | null > | null,
  not?: ModelFantaScoreEntryFilterInput | null,
  fantaScoreEntryRuleId?: ModelIDInput | null,
  fantaScoreEntryGroupId?: ModelIDInput | null,
};

export type ModelFantaScoreEntryConnection = {
  __typename: "ModelFantaScoreEntryConnection",
  items:  Array<FantaScoreEntry | null >,
  nextToken?: string | null,
};

export type ModelFantaTeamGroupsFilterInput = {
  id?: ModelIDInput | null,
  groupId?: ModelIDInput | null,
  fantaTeamId?: ModelIDInput | null,
  and?: Array< ModelFantaTeamGroupsFilterInput | null > | null,
  or?: Array< ModelFantaTeamGroupsFilterInput | null > | null,
  not?: ModelFantaTeamGroupsFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionGroupFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  color?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGroupFilterInput | null > | null,
  or?: Array< ModelSubscriptionGroupFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFantaTeamFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFantaTeamFilterInput | null > | null,
  or?: Array< ModelSubscriptionFantaTeamFilterInput | null > | null,
};

export type ModelSubscriptionFantaRuleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  points?: ModelSubscriptionIntInput | null,
  pointDescription?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFantaRuleFilterInput | null > | null,
  or?: Array< ModelSubscriptionFantaRuleFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionFantaScoreEntryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFantaScoreEntryFilterInput | null > | null,
  or?: Array< ModelSubscriptionFantaScoreEntryFilterInput | null > | null,
};

export type ModelSubscriptionFantaTeamGroupsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  groupId?: ModelSubscriptionIDInput | null,
  fantaTeamId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionFantaTeamGroupsFilterInput | null > | null,
  or?: Array< ModelSubscriptionFantaTeamGroupsFilterInput | null > | null,
};

export type CreateGroupMutationVariables = {
  input: CreateGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type CreateGroupMutation = {
  createGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    color: string,
    teams?:  {
      __typename: "ModelFantaTeamGroupsConnection",
      items:  Array< {
        __typename: "FantaTeamGroups",
        id: string,
        groupId: string,
        fantaTeamId: string,
        group:  {
          __typename: "Group",
          id: string,
          name: string,
          color: string,
          createdAt: string,
          updatedAt: string,
        },
        fantaTeam:  {
          __typename: "FantaTeam",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
          fantaTeamLeaderGroupId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGroupMutationVariables = {
  input: UpdateGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type UpdateGroupMutation = {
  updateGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    color: string,
    teams?:  {
      __typename: "ModelFantaTeamGroupsConnection",
      items:  Array< {
        __typename: "FantaTeamGroups",
        id: string,
        groupId: string,
        fantaTeamId: string,
        group:  {
          __typename: "Group",
          id: string,
          name: string,
          color: string,
          createdAt: string,
          updatedAt: string,
        },
        fantaTeam:  {
          __typename: "FantaTeam",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
          fantaTeamLeaderGroupId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGroupMutationVariables = {
  input: DeleteGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type DeleteGroupMutation = {
  deleteGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    color: string,
    teams?:  {
      __typename: "ModelFantaTeamGroupsConnection",
      items:  Array< {
        __typename: "FantaTeamGroups",
        id: string,
        groupId: string,
        fantaTeamId: string,
        group:  {
          __typename: "Group",
          id: string,
          name: string,
          color: string,
          createdAt: string,
          updatedAt: string,
        },
        fantaTeam:  {
          __typename: "FantaTeam",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
          fantaTeamLeaderGroupId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFantaTeamMutationVariables = {
  input: CreateFantaTeamInput,
  condition?: ModelFantaTeamConditionInput | null,
};

export type CreateFantaTeamMutation = {
  createFantaTeam?:  {
    __typename: "FantaTeam",
    id: string,
    name: string,
    groups?:  {
      __typename: "ModelFantaTeamGroupsConnection",
      items:  Array< {
        __typename: "FantaTeamGroups",
        id: string,
        groupId: string,
        fantaTeamId: string,
        group:  {
          __typename: "Group",
          id: string,
          name: string,
          color: string,
          createdAt: string,
          updatedAt: string,
        },
        fantaTeam:  {
          __typename: "FantaTeam",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
          fantaTeamLeaderGroupId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    leaderGroup?:  {
      __typename: "Group",
      id: string,
      name: string,
      color: string,
      teams?:  {
        __typename: "ModelFantaTeamGroupsConnection",
        items:  Array< {
          __typename: "FantaTeamGroups",
          id: string,
          groupId: string,
          fantaTeamId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    fantaTeamLeaderGroupId?: string | null,
  } | null,
};

export type UpdateFantaTeamMutationVariables = {
  input: UpdateFantaTeamInput,
  condition?: ModelFantaTeamConditionInput | null,
};

export type UpdateFantaTeamMutation = {
  updateFantaTeam?:  {
    __typename: "FantaTeam",
    id: string,
    name: string,
    groups?:  {
      __typename: "ModelFantaTeamGroupsConnection",
      items:  Array< {
        __typename: "FantaTeamGroups",
        id: string,
        groupId: string,
        fantaTeamId: string,
        group:  {
          __typename: "Group",
          id: string,
          name: string,
          color: string,
          createdAt: string,
          updatedAt: string,
        },
        fantaTeam:  {
          __typename: "FantaTeam",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
          fantaTeamLeaderGroupId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    leaderGroup?:  {
      __typename: "Group",
      id: string,
      name: string,
      color: string,
      teams?:  {
        __typename: "ModelFantaTeamGroupsConnection",
        items:  Array< {
          __typename: "FantaTeamGroups",
          id: string,
          groupId: string,
          fantaTeamId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    fantaTeamLeaderGroupId?: string | null,
  } | null,
};

export type DeleteFantaTeamMutationVariables = {
  input: DeleteFantaTeamInput,
  condition?: ModelFantaTeamConditionInput | null,
};

export type DeleteFantaTeamMutation = {
  deleteFantaTeam?:  {
    __typename: "FantaTeam",
    id: string,
    name: string,
    groups?:  {
      __typename: "ModelFantaTeamGroupsConnection",
      items:  Array< {
        __typename: "FantaTeamGroups",
        id: string,
        groupId: string,
        fantaTeamId: string,
        group:  {
          __typename: "Group",
          id: string,
          name: string,
          color: string,
          createdAt: string,
          updatedAt: string,
        },
        fantaTeam:  {
          __typename: "FantaTeam",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
          fantaTeamLeaderGroupId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    leaderGroup?:  {
      __typename: "Group",
      id: string,
      name: string,
      color: string,
      teams?:  {
        __typename: "ModelFantaTeamGroupsConnection",
        items:  Array< {
          __typename: "FantaTeamGroups",
          id: string,
          groupId: string,
          fantaTeamId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    fantaTeamLeaderGroupId?: string | null,
  } | null,
};

export type CreateFantaRuleMutationVariables = {
  input: CreateFantaRuleInput,
  condition?: ModelFantaRuleConditionInput | null,
};

export type CreateFantaRuleMutation = {
  createFantaRule?:  {
    __typename: "FantaRule",
    id: string,
    title: string,
    description: string,
    points: number,
    pointDescription: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFantaRuleMutationVariables = {
  input: UpdateFantaRuleInput,
  condition?: ModelFantaRuleConditionInput | null,
};

export type UpdateFantaRuleMutation = {
  updateFantaRule?:  {
    __typename: "FantaRule",
    id: string,
    title: string,
    description: string,
    points: number,
    pointDescription: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFantaRuleMutationVariables = {
  input: DeleteFantaRuleInput,
  condition?: ModelFantaRuleConditionInput | null,
};

export type DeleteFantaRuleMutation = {
  deleteFantaRule?:  {
    __typename: "FantaRule",
    id: string,
    title: string,
    description: string,
    points: number,
    pointDescription: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFantaScoreEntryMutationVariables = {
  input: CreateFantaScoreEntryInput,
  condition?: ModelFantaScoreEntryConditionInput | null,
};

export type CreateFantaScoreEntryMutation = {
  createFantaScoreEntry?:  {
    __typename: "FantaScoreEntry",
    id: string,
    rule:  {
      __typename: "FantaRule",
      id: string,
      title: string,
      description: string,
      points: number,
      pointDescription: string,
      createdAt: string,
      updatedAt: string,
    },
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      color: string,
      teams?:  {
        __typename: "ModelFantaTeamGroupsConnection",
        items:  Array< {
          __typename: "FantaTeamGroups",
          id: string,
          groupId: string,
          fantaTeamId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    date: string,
    createdAt: string,
    updatedAt: string,
    fantaScoreEntryRuleId: string,
    fantaScoreEntryGroupId: string,
  } | null,
};

export type UpdateFantaScoreEntryMutationVariables = {
  input: UpdateFantaScoreEntryInput,
  condition?: ModelFantaScoreEntryConditionInput | null,
};

export type UpdateFantaScoreEntryMutation = {
  updateFantaScoreEntry?:  {
    __typename: "FantaScoreEntry",
    id: string,
    rule:  {
      __typename: "FantaRule",
      id: string,
      title: string,
      description: string,
      points: number,
      pointDescription: string,
      createdAt: string,
      updatedAt: string,
    },
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      color: string,
      teams?:  {
        __typename: "ModelFantaTeamGroupsConnection",
        items:  Array< {
          __typename: "FantaTeamGroups",
          id: string,
          groupId: string,
          fantaTeamId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    date: string,
    createdAt: string,
    updatedAt: string,
    fantaScoreEntryRuleId: string,
    fantaScoreEntryGroupId: string,
  } | null,
};

export type DeleteFantaScoreEntryMutationVariables = {
  input: DeleteFantaScoreEntryInput,
  condition?: ModelFantaScoreEntryConditionInput | null,
};

export type DeleteFantaScoreEntryMutation = {
  deleteFantaScoreEntry?:  {
    __typename: "FantaScoreEntry",
    id: string,
    rule:  {
      __typename: "FantaRule",
      id: string,
      title: string,
      description: string,
      points: number,
      pointDescription: string,
      createdAt: string,
      updatedAt: string,
    },
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      color: string,
      teams?:  {
        __typename: "ModelFantaTeamGroupsConnection",
        items:  Array< {
          __typename: "FantaTeamGroups",
          id: string,
          groupId: string,
          fantaTeamId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    date: string,
    createdAt: string,
    updatedAt: string,
    fantaScoreEntryRuleId: string,
    fantaScoreEntryGroupId: string,
  } | null,
};

export type CreateFantaTeamGroupsMutationVariables = {
  input: CreateFantaTeamGroupsInput,
  condition?: ModelFantaTeamGroupsConditionInput | null,
};

export type CreateFantaTeamGroupsMutation = {
  createFantaTeamGroups?:  {
    __typename: "FantaTeamGroups",
    id: string,
    groupId: string,
    fantaTeamId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      color: string,
      teams?:  {
        __typename: "ModelFantaTeamGroupsConnection",
        items:  Array< {
          __typename: "FantaTeamGroups",
          id: string,
          groupId: string,
          fantaTeamId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    fantaTeam:  {
      __typename: "FantaTeam",
      id: string,
      name: string,
      groups?:  {
        __typename: "ModelFantaTeamGroupsConnection",
        items:  Array< {
          __typename: "FantaTeamGroups",
          id: string,
          groupId: string,
          fantaTeamId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      leaderGroup?:  {
        __typename: "Group",
        id: string,
        name: string,
        color: string,
        teams?:  {
          __typename: "ModelFantaTeamGroupsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      fantaTeamLeaderGroupId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFantaTeamGroupsMutationVariables = {
  input: UpdateFantaTeamGroupsInput,
  condition?: ModelFantaTeamGroupsConditionInput | null,
};

export type UpdateFantaTeamGroupsMutation = {
  updateFantaTeamGroups?:  {
    __typename: "FantaTeamGroups",
    id: string,
    groupId: string,
    fantaTeamId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      color: string,
      teams?:  {
        __typename: "ModelFantaTeamGroupsConnection",
        items:  Array< {
          __typename: "FantaTeamGroups",
          id: string,
          groupId: string,
          fantaTeamId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    fantaTeam:  {
      __typename: "FantaTeam",
      id: string,
      name: string,
      groups?:  {
        __typename: "ModelFantaTeamGroupsConnection",
        items:  Array< {
          __typename: "FantaTeamGroups",
          id: string,
          groupId: string,
          fantaTeamId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      leaderGroup?:  {
        __typename: "Group",
        id: string,
        name: string,
        color: string,
        teams?:  {
          __typename: "ModelFantaTeamGroupsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      fantaTeamLeaderGroupId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFantaTeamGroupsMutationVariables = {
  input: DeleteFantaTeamGroupsInput,
  condition?: ModelFantaTeamGroupsConditionInput | null,
};

export type DeleteFantaTeamGroupsMutation = {
  deleteFantaTeamGroups?:  {
    __typename: "FantaTeamGroups",
    id: string,
    groupId: string,
    fantaTeamId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      color: string,
      teams?:  {
        __typename: "ModelFantaTeamGroupsConnection",
        items:  Array< {
          __typename: "FantaTeamGroups",
          id: string,
          groupId: string,
          fantaTeamId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    fantaTeam:  {
      __typename: "FantaTeam",
      id: string,
      name: string,
      groups?:  {
        __typename: "ModelFantaTeamGroupsConnection",
        items:  Array< {
          __typename: "FantaTeamGroups",
          id: string,
          groupId: string,
          fantaTeamId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      leaderGroup?:  {
        __typename: "Group",
        id: string,
        name: string,
        color: string,
        teams?:  {
          __typename: "ModelFantaTeamGroupsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      fantaTeamLeaderGroupId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetGroupQueryVariables = {
  id: string,
};

export type GetGroupQuery = {
  getGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    color: string,
    teams?:  {
      __typename: "ModelFantaTeamGroupsConnection",
      items:  Array< {
        __typename: "FantaTeamGroups",
        id: string,
        groupId: string,
        fantaTeamId: string,
        group:  {
          __typename: "Group",
          id: string,
          name: string,
          color: string,
          createdAt: string,
          updatedAt: string,
        },
        fantaTeam:  {
          __typename: "FantaTeam",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
          fantaTeamLeaderGroupId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGroupsQueryVariables = {
  filter?: ModelGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGroupsQuery = {
  listGroups?:  {
    __typename: "ModelGroupConnection",
    items:  Array< {
      __typename: "Group",
      id: string,
      name: string,
      color: string,
      teams?:  {
        __typename: "ModelFantaTeamGroupsConnection",
        items:  Array< {
          __typename: "FantaTeamGroups",
          id: string,
          groupId: string,
          fantaTeamId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFantaTeamQueryVariables = {
  id: string,
};

export type GetFantaTeamQuery = {
  getFantaTeam?:  {
    __typename: "FantaTeam",
    id: string,
    name: string,
    groups?:  {
      __typename: "ModelFantaTeamGroupsConnection",
      items:  Array< {
        __typename: "FantaTeamGroups",
        id: string,
        groupId: string,
        fantaTeamId: string,
        group:  {
          __typename: "Group",
          id: string,
          name: string,
          color: string,
          createdAt: string,
          updatedAt: string,
        },
        fantaTeam:  {
          __typename: "FantaTeam",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
          fantaTeamLeaderGroupId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    leaderGroup?:  {
      __typename: "Group",
      id: string,
      name: string,
      color: string,
      teams?:  {
        __typename: "ModelFantaTeamGroupsConnection",
        items:  Array< {
          __typename: "FantaTeamGroups",
          id: string,
          groupId: string,
          fantaTeamId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    fantaTeamLeaderGroupId?: string | null,
  } | null,
};

export type ListFantaTeamsQueryVariables = {
  filter?: ModelFantaTeamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFantaTeamsQuery = {
  listFantaTeams?:  {
    __typename: "ModelFantaTeamConnection",
    items:  Array< {
      __typename: "FantaTeam",
      id: string,
      name: string,
      groups?:  {
        __typename: "ModelFantaTeamGroupsConnection",
        items:  Array< {
          __typename: "FantaTeamGroups",
          id: string,
          groupId: string,
          fantaTeamId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      leaderGroup?:  {
        __typename: "Group",
        id: string,
        name: string,
        color: string,
        teams?:  {
          __typename: "ModelFantaTeamGroupsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      fantaTeamLeaderGroupId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFantaRuleQueryVariables = {
  id: string,
};

export type GetFantaRuleQuery = {
  getFantaRule?:  {
    __typename: "FantaRule",
    id: string,
    title: string,
    description: string,
    points: number,
    pointDescription: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFantaRulesQueryVariables = {
  filter?: ModelFantaRuleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFantaRulesQuery = {
  listFantaRules?:  {
    __typename: "ModelFantaRuleConnection",
    items:  Array< {
      __typename: "FantaRule",
      id: string,
      title: string,
      description: string,
      points: number,
      pointDescription: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFantaScoreEntryQueryVariables = {
  id: string,
};

export type GetFantaScoreEntryQuery = {
  getFantaScoreEntry?:  {
    __typename: "FantaScoreEntry",
    id: string,
    rule:  {
      __typename: "FantaRule",
      id: string,
      title: string,
      description: string,
      points: number,
      pointDescription: string,
      createdAt: string,
      updatedAt: string,
    },
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      color: string,
      teams?:  {
        __typename: "ModelFantaTeamGroupsConnection",
        items:  Array< {
          __typename: "FantaTeamGroups",
          id: string,
          groupId: string,
          fantaTeamId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    date: string,
    createdAt: string,
    updatedAt: string,
    fantaScoreEntryRuleId: string,
    fantaScoreEntryGroupId: string,
  } | null,
};

export type ListFantaScoreEntriesQueryVariables = {
  filter?: ModelFantaScoreEntryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFantaScoreEntriesQuery = {
  listFantaScoreEntries?:  {
    __typename: "ModelFantaScoreEntryConnection",
    items:  Array< {
      __typename: "FantaScoreEntry",
      id: string,
      rule:  {
        __typename: "FantaRule",
        id: string,
        title: string,
        description: string,
        points: number,
        pointDescription: string,
        createdAt: string,
        updatedAt: string,
      },
      group:  {
        __typename: "Group",
        id: string,
        name: string,
        color: string,
        teams?:  {
          __typename: "ModelFantaTeamGroupsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      date: string,
      createdAt: string,
      updatedAt: string,
      fantaScoreEntryRuleId: string,
      fantaScoreEntryGroupId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFantaTeamGroupsQueryVariables = {
  id: string,
};

export type GetFantaTeamGroupsQuery = {
  getFantaTeamGroups?:  {
    __typename: "FantaTeamGroups",
    id: string,
    groupId: string,
    fantaTeamId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      color: string,
      teams?:  {
        __typename: "ModelFantaTeamGroupsConnection",
        items:  Array< {
          __typename: "FantaTeamGroups",
          id: string,
          groupId: string,
          fantaTeamId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    fantaTeam:  {
      __typename: "FantaTeam",
      id: string,
      name: string,
      groups?:  {
        __typename: "ModelFantaTeamGroupsConnection",
        items:  Array< {
          __typename: "FantaTeamGroups",
          id: string,
          groupId: string,
          fantaTeamId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      leaderGroup?:  {
        __typename: "Group",
        id: string,
        name: string,
        color: string,
        teams?:  {
          __typename: "ModelFantaTeamGroupsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      fantaTeamLeaderGroupId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFantaTeamGroupsQueryVariables = {
  filter?: ModelFantaTeamGroupsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFantaTeamGroupsQuery = {
  listFantaTeamGroups?:  {
    __typename: "ModelFantaTeamGroupsConnection",
    items:  Array< {
      __typename: "FantaTeamGroups",
      id: string,
      groupId: string,
      fantaTeamId: string,
      group:  {
        __typename: "Group",
        id: string,
        name: string,
        color: string,
        teams?:  {
          __typename: "ModelFantaTeamGroupsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      fantaTeam:  {
        __typename: "FantaTeam",
        id: string,
        name: string,
        groups?:  {
          __typename: "ModelFantaTeamGroupsConnection",
          nextToken?: string | null,
        } | null,
        leaderGroup?:  {
          __typename: "Group",
          id: string,
          name: string,
          color: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        fantaTeamLeaderGroupId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FantaTeamGroupsByGroupIdQueryVariables = {
  groupId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFantaTeamGroupsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FantaTeamGroupsByGroupIdQuery = {
  fantaTeamGroupsByGroupId?:  {
    __typename: "ModelFantaTeamGroupsConnection",
    items:  Array< {
      __typename: "FantaTeamGroups",
      id: string,
      groupId: string,
      fantaTeamId: string,
      group:  {
        __typename: "Group",
        id: string,
        name: string,
        color: string,
        teams?:  {
          __typename: "ModelFantaTeamGroupsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      fantaTeam:  {
        __typename: "FantaTeam",
        id: string,
        name: string,
        groups?:  {
          __typename: "ModelFantaTeamGroupsConnection",
          nextToken?: string | null,
        } | null,
        leaderGroup?:  {
          __typename: "Group",
          id: string,
          name: string,
          color: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        fantaTeamLeaderGroupId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FantaTeamGroupsByFantaTeamIdQueryVariables = {
  fantaTeamId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFantaTeamGroupsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FantaTeamGroupsByFantaTeamIdQuery = {
  fantaTeamGroupsByFantaTeamId?:  {
    __typename: "ModelFantaTeamGroupsConnection",
    items:  Array< {
      __typename: "FantaTeamGroups",
      id: string,
      groupId: string,
      fantaTeamId: string,
      group:  {
        __typename: "Group",
        id: string,
        name: string,
        color: string,
        teams?:  {
          __typename: "ModelFantaTeamGroupsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      fantaTeam:  {
        __typename: "FantaTeam",
        id: string,
        name: string,
        groups?:  {
          __typename: "ModelFantaTeamGroupsConnection",
          nextToken?: string | null,
        } | null,
        leaderGroup?:  {
          __typename: "Group",
          id: string,
          name: string,
          color: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
        fantaTeamLeaderGroupId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateGroupSubscriptionVariables = {
  filter?: ModelSubscriptionGroupFilterInput | null,
};

export type OnCreateGroupSubscription = {
  onCreateGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    color: string,
    teams?:  {
      __typename: "ModelFantaTeamGroupsConnection",
      items:  Array< {
        __typename: "FantaTeamGroups",
        id: string,
        groupId: string,
        fantaTeamId: string,
        group:  {
          __typename: "Group",
          id: string,
          name: string,
          color: string,
          createdAt: string,
          updatedAt: string,
        },
        fantaTeam:  {
          __typename: "FantaTeam",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
          fantaTeamLeaderGroupId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGroupSubscriptionVariables = {
  filter?: ModelSubscriptionGroupFilterInput | null,
};

export type OnUpdateGroupSubscription = {
  onUpdateGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    color: string,
    teams?:  {
      __typename: "ModelFantaTeamGroupsConnection",
      items:  Array< {
        __typename: "FantaTeamGroups",
        id: string,
        groupId: string,
        fantaTeamId: string,
        group:  {
          __typename: "Group",
          id: string,
          name: string,
          color: string,
          createdAt: string,
          updatedAt: string,
        },
        fantaTeam:  {
          __typename: "FantaTeam",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
          fantaTeamLeaderGroupId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGroupSubscriptionVariables = {
  filter?: ModelSubscriptionGroupFilterInput | null,
};

export type OnDeleteGroupSubscription = {
  onDeleteGroup?:  {
    __typename: "Group",
    id: string,
    name: string,
    color: string,
    teams?:  {
      __typename: "ModelFantaTeamGroupsConnection",
      items:  Array< {
        __typename: "FantaTeamGroups",
        id: string,
        groupId: string,
        fantaTeamId: string,
        group:  {
          __typename: "Group",
          id: string,
          name: string,
          color: string,
          createdAt: string,
          updatedAt: string,
        },
        fantaTeam:  {
          __typename: "FantaTeam",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
          fantaTeamLeaderGroupId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFantaTeamSubscriptionVariables = {
  filter?: ModelSubscriptionFantaTeamFilterInput | null,
};

export type OnCreateFantaTeamSubscription = {
  onCreateFantaTeam?:  {
    __typename: "FantaTeam",
    id: string,
    name: string,
    groups?:  {
      __typename: "ModelFantaTeamGroupsConnection",
      items:  Array< {
        __typename: "FantaTeamGroups",
        id: string,
        groupId: string,
        fantaTeamId: string,
        group:  {
          __typename: "Group",
          id: string,
          name: string,
          color: string,
          createdAt: string,
          updatedAt: string,
        },
        fantaTeam:  {
          __typename: "FantaTeam",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
          fantaTeamLeaderGroupId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    leaderGroup?:  {
      __typename: "Group",
      id: string,
      name: string,
      color: string,
      teams?:  {
        __typename: "ModelFantaTeamGroupsConnection",
        items:  Array< {
          __typename: "FantaTeamGroups",
          id: string,
          groupId: string,
          fantaTeamId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    fantaTeamLeaderGroupId?: string | null,
  } | null,
};

export type OnUpdateFantaTeamSubscriptionVariables = {
  filter?: ModelSubscriptionFantaTeamFilterInput | null,
};

export type OnUpdateFantaTeamSubscription = {
  onUpdateFantaTeam?:  {
    __typename: "FantaTeam",
    id: string,
    name: string,
    groups?:  {
      __typename: "ModelFantaTeamGroupsConnection",
      items:  Array< {
        __typename: "FantaTeamGroups",
        id: string,
        groupId: string,
        fantaTeamId: string,
        group:  {
          __typename: "Group",
          id: string,
          name: string,
          color: string,
          createdAt: string,
          updatedAt: string,
        },
        fantaTeam:  {
          __typename: "FantaTeam",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
          fantaTeamLeaderGroupId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    leaderGroup?:  {
      __typename: "Group",
      id: string,
      name: string,
      color: string,
      teams?:  {
        __typename: "ModelFantaTeamGroupsConnection",
        items:  Array< {
          __typename: "FantaTeamGroups",
          id: string,
          groupId: string,
          fantaTeamId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    fantaTeamLeaderGroupId?: string | null,
  } | null,
};

export type OnDeleteFantaTeamSubscriptionVariables = {
  filter?: ModelSubscriptionFantaTeamFilterInput | null,
};

export type OnDeleteFantaTeamSubscription = {
  onDeleteFantaTeam?:  {
    __typename: "FantaTeam",
    id: string,
    name: string,
    groups?:  {
      __typename: "ModelFantaTeamGroupsConnection",
      items:  Array< {
        __typename: "FantaTeamGroups",
        id: string,
        groupId: string,
        fantaTeamId: string,
        group:  {
          __typename: "Group",
          id: string,
          name: string,
          color: string,
          createdAt: string,
          updatedAt: string,
        },
        fantaTeam:  {
          __typename: "FantaTeam",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
          fantaTeamLeaderGroupId?: string | null,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    leaderGroup?:  {
      __typename: "Group",
      id: string,
      name: string,
      color: string,
      teams?:  {
        __typename: "ModelFantaTeamGroupsConnection",
        items:  Array< {
          __typename: "FantaTeamGroups",
          id: string,
          groupId: string,
          fantaTeamId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    fantaTeamLeaderGroupId?: string | null,
  } | null,
};

export type OnCreateFantaRuleSubscriptionVariables = {
  filter?: ModelSubscriptionFantaRuleFilterInput | null,
};

export type OnCreateFantaRuleSubscription = {
  onCreateFantaRule?:  {
    __typename: "FantaRule",
    id: string,
    title: string,
    description: string,
    points: number,
    pointDescription: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFantaRuleSubscriptionVariables = {
  filter?: ModelSubscriptionFantaRuleFilterInput | null,
};

export type OnUpdateFantaRuleSubscription = {
  onUpdateFantaRule?:  {
    __typename: "FantaRule",
    id: string,
    title: string,
    description: string,
    points: number,
    pointDescription: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFantaRuleSubscriptionVariables = {
  filter?: ModelSubscriptionFantaRuleFilterInput | null,
};

export type OnDeleteFantaRuleSubscription = {
  onDeleteFantaRule?:  {
    __typename: "FantaRule",
    id: string,
    title: string,
    description: string,
    points: number,
    pointDescription: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFantaScoreEntrySubscriptionVariables = {
  filter?: ModelSubscriptionFantaScoreEntryFilterInput | null,
};

export type OnCreateFantaScoreEntrySubscription = {
  onCreateFantaScoreEntry?:  {
    __typename: "FantaScoreEntry",
    id: string,
    rule:  {
      __typename: "FantaRule",
      id: string,
      title: string,
      description: string,
      points: number,
      pointDescription: string,
      createdAt: string,
      updatedAt: string,
    },
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      color: string,
      teams?:  {
        __typename: "ModelFantaTeamGroupsConnection",
        items:  Array< {
          __typename: "FantaTeamGroups",
          id: string,
          groupId: string,
          fantaTeamId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    date: string,
    createdAt: string,
    updatedAt: string,
    fantaScoreEntryRuleId: string,
    fantaScoreEntryGroupId: string,
  } | null,
};

export type OnUpdateFantaScoreEntrySubscriptionVariables = {
  filter?: ModelSubscriptionFantaScoreEntryFilterInput | null,
};

export type OnUpdateFantaScoreEntrySubscription = {
  onUpdateFantaScoreEntry?:  {
    __typename: "FantaScoreEntry",
    id: string,
    rule:  {
      __typename: "FantaRule",
      id: string,
      title: string,
      description: string,
      points: number,
      pointDescription: string,
      createdAt: string,
      updatedAt: string,
    },
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      color: string,
      teams?:  {
        __typename: "ModelFantaTeamGroupsConnection",
        items:  Array< {
          __typename: "FantaTeamGroups",
          id: string,
          groupId: string,
          fantaTeamId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    date: string,
    createdAt: string,
    updatedAt: string,
    fantaScoreEntryRuleId: string,
    fantaScoreEntryGroupId: string,
  } | null,
};

export type OnDeleteFantaScoreEntrySubscriptionVariables = {
  filter?: ModelSubscriptionFantaScoreEntryFilterInput | null,
};

export type OnDeleteFantaScoreEntrySubscription = {
  onDeleteFantaScoreEntry?:  {
    __typename: "FantaScoreEntry",
    id: string,
    rule:  {
      __typename: "FantaRule",
      id: string,
      title: string,
      description: string,
      points: number,
      pointDescription: string,
      createdAt: string,
      updatedAt: string,
    },
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      color: string,
      teams?:  {
        __typename: "ModelFantaTeamGroupsConnection",
        items:  Array< {
          __typename: "FantaTeamGroups",
          id: string,
          groupId: string,
          fantaTeamId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    date: string,
    createdAt: string,
    updatedAt: string,
    fantaScoreEntryRuleId: string,
    fantaScoreEntryGroupId: string,
  } | null,
};

export type OnCreateFantaTeamGroupsSubscriptionVariables = {
  filter?: ModelSubscriptionFantaTeamGroupsFilterInput | null,
};

export type OnCreateFantaTeamGroupsSubscription = {
  onCreateFantaTeamGroups?:  {
    __typename: "FantaTeamGroups",
    id: string,
    groupId: string,
    fantaTeamId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      color: string,
      teams?:  {
        __typename: "ModelFantaTeamGroupsConnection",
        items:  Array< {
          __typename: "FantaTeamGroups",
          id: string,
          groupId: string,
          fantaTeamId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    fantaTeam:  {
      __typename: "FantaTeam",
      id: string,
      name: string,
      groups?:  {
        __typename: "ModelFantaTeamGroupsConnection",
        items:  Array< {
          __typename: "FantaTeamGroups",
          id: string,
          groupId: string,
          fantaTeamId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      leaderGroup?:  {
        __typename: "Group",
        id: string,
        name: string,
        color: string,
        teams?:  {
          __typename: "ModelFantaTeamGroupsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      fantaTeamLeaderGroupId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFantaTeamGroupsSubscriptionVariables = {
  filter?: ModelSubscriptionFantaTeamGroupsFilterInput | null,
};

export type OnUpdateFantaTeamGroupsSubscription = {
  onUpdateFantaTeamGroups?:  {
    __typename: "FantaTeamGroups",
    id: string,
    groupId: string,
    fantaTeamId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      color: string,
      teams?:  {
        __typename: "ModelFantaTeamGroupsConnection",
        items:  Array< {
          __typename: "FantaTeamGroups",
          id: string,
          groupId: string,
          fantaTeamId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    fantaTeam:  {
      __typename: "FantaTeam",
      id: string,
      name: string,
      groups?:  {
        __typename: "ModelFantaTeamGroupsConnection",
        items:  Array< {
          __typename: "FantaTeamGroups",
          id: string,
          groupId: string,
          fantaTeamId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      leaderGroup?:  {
        __typename: "Group",
        id: string,
        name: string,
        color: string,
        teams?:  {
          __typename: "ModelFantaTeamGroupsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      fantaTeamLeaderGroupId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFantaTeamGroupsSubscriptionVariables = {
  filter?: ModelSubscriptionFantaTeamGroupsFilterInput | null,
};

export type OnDeleteFantaTeamGroupsSubscription = {
  onDeleteFantaTeamGroups?:  {
    __typename: "FantaTeamGroups",
    id: string,
    groupId: string,
    fantaTeamId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      color: string,
      teams?:  {
        __typename: "ModelFantaTeamGroupsConnection",
        items:  Array< {
          __typename: "FantaTeamGroups",
          id: string,
          groupId: string,
          fantaTeamId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    fantaTeam:  {
      __typename: "FantaTeam",
      id: string,
      name: string,
      groups?:  {
        __typename: "ModelFantaTeamGroupsConnection",
        items:  Array< {
          __typename: "FantaTeamGroups",
          id: string,
          groupId: string,
          fantaTeamId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      leaderGroup?:  {
        __typename: "Group",
        id: string,
        name: string,
        color: string,
        teams?:  {
          __typename: "ModelFantaTeamGroupsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      fantaTeamLeaderGroupId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
