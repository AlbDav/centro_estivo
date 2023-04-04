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
  teams?: ModelTeamGroupsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelTeamGroupsConnection = {
  __typename: "ModelTeamGroupsConnection",
  items:  Array<TeamGroups | null >,
  nextToken?: string | null,
};

export type TeamGroups = {
  __typename: "TeamGroups",
  id: string,
  groupId: string,
  teamId: string,
  group: Group,
  team: Team,
  createdAt: string,
  updatedAt: string,
};

export type Team = {
  __typename: "Team",
  id: string,
  name: string,
  groups?: ModelTeamGroupsConnection | null,
  leaderGroup?: Group | null,
  createdAt: string,
  updatedAt: string,
  teamLeaderGroupId?: string | null,
};

export type UpdateGroupInput = {
  id: string,
  name?: string | null,
  color?: string | null,
};

export type DeleteGroupInput = {
  id: string,
};

export type CreateTeamInput = {
  id?: string | null,
  name: string,
  teamLeaderGroupId?: string | null,
};

export type ModelTeamConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelTeamConditionInput | null > | null,
  or?: Array< ModelTeamConditionInput | null > | null,
  not?: ModelTeamConditionInput | null,
  teamLeaderGroupId?: ModelIDInput | null,
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

export type UpdateTeamInput = {
  id: string,
  name?: string | null,
  teamLeaderGroupId?: string | null,
};

export type DeleteTeamInput = {
  id: string,
};

export type CreateScoreEntryInput = {
  id?: string | null,
  date: string,
  scoreEntryRuleId: string,
  scoreEntryGroupId: string,
};

export type ModelScoreEntryConditionInput = {
  date?: ModelStringInput | null,
  and?: Array< ModelScoreEntryConditionInput | null > | null,
  or?: Array< ModelScoreEntryConditionInput | null > | null,
  not?: ModelScoreEntryConditionInput | null,
  scoreEntryRuleId?: ModelIDInput | null,
  scoreEntryGroupId?: ModelIDInput | null,
};

export type ScoreEntry = {
  __typename: "ScoreEntry",
  id: string,
  rule: Rule,
  group: Group,
  date: string,
  createdAt: string,
  updatedAt: string,
  scoreEntryRuleId: string,
  scoreEntryGroupId: string,
};

export type Rule = {
  __typename: "Rule",
  id: string,
  title: string,
  description: string,
  points: number,
  pointDescription: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateScoreEntryInput = {
  id: string,
  date?: string | null,
  scoreEntryRuleId?: string | null,
  scoreEntryGroupId?: string | null,
};

export type DeleteScoreEntryInput = {
  id: string,
};

export type CreateTeamGroupsInput = {
  id?: string | null,
  groupId: string,
  teamId: string,
};

export type ModelTeamGroupsConditionInput = {
  groupId?: ModelIDInput | null,
  teamId?: ModelIDInput | null,
  and?: Array< ModelTeamGroupsConditionInput | null > | null,
  or?: Array< ModelTeamGroupsConditionInput | null > | null,
  not?: ModelTeamGroupsConditionInput | null,
};

export type UpdateTeamGroupsInput = {
  id: string,
  groupId?: string | null,
  teamId?: string | null,
};

export type DeleteTeamGroupsInput = {
  id: string,
};

export type CreateRuleInput = {
  id?: string | null,
  title: string,
  description: string,
  points: number,
  pointDescription: string,
};

export type ModelRuleConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  points?: ModelIntInput | null,
  pointDescription?: ModelStringInput | null,
  and?: Array< ModelRuleConditionInput | null > | null,
  or?: Array< ModelRuleConditionInput | null > | null,
  not?: ModelRuleConditionInput | null,
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

export type UpdateRuleInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  points?: number | null,
  pointDescription?: string | null,
};

export type DeleteRuleInput = {
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

export type ModelTeamFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelTeamFilterInput | null > | null,
  or?: Array< ModelTeamFilterInput | null > | null,
  not?: ModelTeamFilterInput | null,
  teamLeaderGroupId?: ModelIDInput | null,
};

export type ModelTeamConnection = {
  __typename: "ModelTeamConnection",
  items:  Array<Team | null >,
  nextToken?: string | null,
};

export type ModelScoreEntryFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelScoreEntryFilterInput | null > | null,
  or?: Array< ModelScoreEntryFilterInput | null > | null,
  not?: ModelScoreEntryFilterInput | null,
  scoreEntryRuleId?: ModelIDInput | null,
  scoreEntryGroupId?: ModelIDInput | null,
};

export type ModelScoreEntryConnection = {
  __typename: "ModelScoreEntryConnection",
  items:  Array<ScoreEntry | null >,
  nextToken?: string | null,
};

export type ModelTeamGroupsFilterInput = {
  id?: ModelIDInput | null,
  groupId?: ModelIDInput | null,
  teamId?: ModelIDInput | null,
  and?: Array< ModelTeamGroupsFilterInput | null > | null,
  or?: Array< ModelTeamGroupsFilterInput | null > | null,
  not?: ModelTeamGroupsFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelRuleFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  points?: ModelIntInput | null,
  pointDescription?: ModelStringInput | null,
  and?: Array< ModelRuleFilterInput | null > | null,
  or?: Array< ModelRuleFilterInput | null > | null,
  not?: ModelRuleFilterInput | null,
};

export type ModelRuleConnection = {
  __typename: "ModelRuleConnection",
  items:  Array<Rule | null >,
  nextToken?: string | null,
};

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

export type ModelSubscriptionTeamFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTeamFilterInput | null > | null,
  or?: Array< ModelSubscriptionTeamFilterInput | null > | null,
};

export type ModelSubscriptionScoreEntryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionScoreEntryFilterInput | null > | null,
  or?: Array< ModelSubscriptionScoreEntryFilterInput | null > | null,
};

export type ModelSubscriptionTeamGroupsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  groupId?: ModelSubscriptionIDInput | null,
  teamId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionTeamGroupsFilterInput | null > | null,
  or?: Array< ModelSubscriptionTeamGroupsFilterInput | null > | null,
};

export type ModelSubscriptionRuleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  points?: ModelSubscriptionIntInput | null,
  pointDescription?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRuleFilterInput | null > | null,
  or?: Array< ModelSubscriptionRuleFilterInput | null > | null,
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
      __typename: "ModelTeamGroupsConnection",
      items:  Array< {
        __typename: "TeamGroups",
        id: string,
        groupId: string,
        teamId: string,
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
      __typename: "ModelTeamGroupsConnection",
      items:  Array< {
        __typename: "TeamGroups",
        id: string,
        groupId: string,
        teamId: string,
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
      __typename: "ModelTeamGroupsConnection",
      items:  Array< {
        __typename: "TeamGroups",
        id: string,
        groupId: string,
        teamId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTeamMutationVariables = {
  input: CreateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type CreateTeamMutation = {
  createTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    groups?:  {
      __typename: "ModelTeamGroupsConnection",
      items:  Array< {
        __typename: "TeamGroups",
        id: string,
        groupId: string,
        teamId: string,
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
        __typename: "ModelTeamGroupsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamLeaderGroupId?: string | null,
  } | null,
};

export type UpdateTeamMutationVariables = {
  input: UpdateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type UpdateTeamMutation = {
  updateTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    groups?:  {
      __typename: "ModelTeamGroupsConnection",
      items:  Array< {
        __typename: "TeamGroups",
        id: string,
        groupId: string,
        teamId: string,
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
        __typename: "ModelTeamGroupsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamLeaderGroupId?: string | null,
  } | null,
};

export type DeleteTeamMutationVariables = {
  input: DeleteTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type DeleteTeamMutation = {
  deleteTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    groups?:  {
      __typename: "ModelTeamGroupsConnection",
      items:  Array< {
        __typename: "TeamGroups",
        id: string,
        groupId: string,
        teamId: string,
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
        __typename: "ModelTeamGroupsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamLeaderGroupId?: string | null,
  } | null,
};

export type CreateScoreEntryMutationVariables = {
  input: CreateScoreEntryInput,
  condition?: ModelScoreEntryConditionInput | null,
};

export type CreateScoreEntryMutation = {
  createScoreEntry?:  {
    __typename: "ScoreEntry",
    id: string,
    rule:  {
      __typename: "Rule",
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
        __typename: "ModelTeamGroupsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    date: string,
    createdAt: string,
    updatedAt: string,
    scoreEntryRuleId: string,
    scoreEntryGroupId: string,
  } | null,
};

export type UpdateScoreEntryMutationVariables = {
  input: UpdateScoreEntryInput,
  condition?: ModelScoreEntryConditionInput | null,
};

export type UpdateScoreEntryMutation = {
  updateScoreEntry?:  {
    __typename: "ScoreEntry",
    id: string,
    rule:  {
      __typename: "Rule",
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
        __typename: "ModelTeamGroupsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    date: string,
    createdAt: string,
    updatedAt: string,
    scoreEntryRuleId: string,
    scoreEntryGroupId: string,
  } | null,
};

export type DeleteScoreEntryMutationVariables = {
  input: DeleteScoreEntryInput,
  condition?: ModelScoreEntryConditionInput | null,
};

export type DeleteScoreEntryMutation = {
  deleteScoreEntry?:  {
    __typename: "ScoreEntry",
    id: string,
    rule:  {
      __typename: "Rule",
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
        __typename: "ModelTeamGroupsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    date: string,
    createdAt: string,
    updatedAt: string,
    scoreEntryRuleId: string,
    scoreEntryGroupId: string,
  } | null,
};

export type CreateTeamGroupsMutationVariables = {
  input: CreateTeamGroupsInput,
  condition?: ModelTeamGroupsConditionInput | null,
};

export type CreateTeamGroupsMutation = {
  createTeamGroups?:  {
    __typename: "TeamGroups",
    id: string,
    groupId: string,
    teamId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      color: string,
      teams?:  {
        __typename: "ModelTeamGroupsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      groups?:  {
        __typename: "ModelTeamGroupsConnection",
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
      teamLeaderGroupId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTeamGroupsMutationVariables = {
  input: UpdateTeamGroupsInput,
  condition?: ModelTeamGroupsConditionInput | null,
};

export type UpdateTeamGroupsMutation = {
  updateTeamGroups?:  {
    __typename: "TeamGroups",
    id: string,
    groupId: string,
    teamId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      color: string,
      teams?:  {
        __typename: "ModelTeamGroupsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      groups?:  {
        __typename: "ModelTeamGroupsConnection",
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
      teamLeaderGroupId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTeamGroupsMutationVariables = {
  input: DeleteTeamGroupsInput,
  condition?: ModelTeamGroupsConditionInput | null,
};

export type DeleteTeamGroupsMutation = {
  deleteTeamGroups?:  {
    __typename: "TeamGroups",
    id: string,
    groupId: string,
    teamId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      color: string,
      teams?:  {
        __typename: "ModelTeamGroupsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      groups?:  {
        __typename: "ModelTeamGroupsConnection",
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
      teamLeaderGroupId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRuleMutationVariables = {
  input: CreateRuleInput,
  condition?: ModelRuleConditionInput | null,
};

export type CreateRuleMutation = {
  createRule?:  {
    __typename: "Rule",
    id: string,
    title: string,
    description: string,
    points: number,
    pointDescription: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRuleMutationVariables = {
  input: UpdateRuleInput,
  condition?: ModelRuleConditionInput | null,
};

export type UpdateRuleMutation = {
  updateRule?:  {
    __typename: "Rule",
    id: string,
    title: string,
    description: string,
    points: number,
    pointDescription: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRuleMutationVariables = {
  input: DeleteRuleInput,
  condition?: ModelRuleConditionInput | null,
};

export type DeleteRuleMutation = {
  deleteRule?:  {
    __typename: "Rule",
    id: string,
    title: string,
    description: string,
    points: number,
    pointDescription: string,
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
      __typename: "ModelTeamGroupsConnection",
      items:  Array< {
        __typename: "TeamGroups",
        id: string,
        groupId: string,
        teamId: string,
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
        __typename: "ModelTeamGroupsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTeamQueryVariables = {
  id: string,
};

export type GetTeamQuery = {
  getTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    groups?:  {
      __typename: "ModelTeamGroupsConnection",
      items:  Array< {
        __typename: "TeamGroups",
        id: string,
        groupId: string,
        teamId: string,
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
        __typename: "ModelTeamGroupsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamLeaderGroupId?: string | null,
  } | null,
};

export type ListTeamsQueryVariables = {
  filter?: ModelTeamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTeamsQuery = {
  listTeams?:  {
    __typename: "ModelTeamConnection",
    items:  Array< {
      __typename: "Team",
      id: string,
      name: string,
      groups?:  {
        __typename: "ModelTeamGroupsConnection",
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
      teamLeaderGroupId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetScoreEntryQueryVariables = {
  id: string,
};

export type GetScoreEntryQuery = {
  getScoreEntry?:  {
    __typename: "ScoreEntry",
    id: string,
    rule:  {
      __typename: "Rule",
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
        __typename: "ModelTeamGroupsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    date: string,
    createdAt: string,
    updatedAt: string,
    scoreEntryRuleId: string,
    scoreEntryGroupId: string,
  } | null,
};

export type ListScoreEntriesQueryVariables = {
  filter?: ModelScoreEntryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListScoreEntriesQuery = {
  listScoreEntries?:  {
    __typename: "ModelScoreEntryConnection",
    items:  Array< {
      __typename: "ScoreEntry",
      id: string,
      rule:  {
        __typename: "Rule",
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
        createdAt: string,
        updatedAt: string,
      },
      date: string,
      createdAt: string,
      updatedAt: string,
      scoreEntryRuleId: string,
      scoreEntryGroupId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTeamGroupsQueryVariables = {
  id: string,
};

export type GetTeamGroupsQuery = {
  getTeamGroups?:  {
    __typename: "TeamGroups",
    id: string,
    groupId: string,
    teamId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      color: string,
      teams?:  {
        __typename: "ModelTeamGroupsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      groups?:  {
        __typename: "ModelTeamGroupsConnection",
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
      teamLeaderGroupId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTeamGroupsQueryVariables = {
  filter?: ModelTeamGroupsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTeamGroupsQuery = {
  listTeamGroups?:  {
    __typename: "ModelTeamGroupsConnection",
    items:  Array< {
      __typename: "TeamGroups",
      id: string,
      groupId: string,
      teamId: string,
      group:  {
        __typename: "Group",
        id: string,
        name: string,
        color: string,
        createdAt: string,
        updatedAt: string,
      },
      team:  {
        __typename: "Team",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        teamLeaderGroupId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TeamGroupsByGroupIdQueryVariables = {
  groupId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTeamGroupsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TeamGroupsByGroupIdQuery = {
  teamGroupsByGroupId?:  {
    __typename: "ModelTeamGroupsConnection",
    items:  Array< {
      __typename: "TeamGroups",
      id: string,
      groupId: string,
      teamId: string,
      group:  {
        __typename: "Group",
        id: string,
        name: string,
        color: string,
        createdAt: string,
        updatedAt: string,
      },
      team:  {
        __typename: "Team",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        teamLeaderGroupId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TeamGroupsByTeamIdQueryVariables = {
  teamId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTeamGroupsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TeamGroupsByTeamIdQuery = {
  teamGroupsByTeamId?:  {
    __typename: "ModelTeamGroupsConnection",
    items:  Array< {
      __typename: "TeamGroups",
      id: string,
      groupId: string,
      teamId: string,
      group:  {
        __typename: "Group",
        id: string,
        name: string,
        color: string,
        createdAt: string,
        updatedAt: string,
      },
      team:  {
        __typename: "Team",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        teamLeaderGroupId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRuleQueryVariables = {
  id: string,
};

export type GetRuleQuery = {
  getRule?:  {
    __typename: "Rule",
    id: string,
    title: string,
    description: string,
    points: number,
    pointDescription: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRulesQueryVariables = {
  filter?: ModelRuleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRulesQuery = {
  listRules?:  {
    __typename: "ModelRuleConnection",
    items:  Array< {
      __typename: "Rule",
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
      __typename: "ModelTeamGroupsConnection",
      items:  Array< {
        __typename: "TeamGroups",
        id: string,
        groupId: string,
        teamId: string,
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
      __typename: "ModelTeamGroupsConnection",
      items:  Array< {
        __typename: "TeamGroups",
        id: string,
        groupId: string,
        teamId: string,
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
      __typename: "ModelTeamGroupsConnection",
      items:  Array< {
        __typename: "TeamGroups",
        id: string,
        groupId: string,
        teamId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTeamSubscriptionVariables = {
  filter?: ModelSubscriptionTeamFilterInput | null,
};

export type OnCreateTeamSubscription = {
  onCreateTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    groups?:  {
      __typename: "ModelTeamGroupsConnection",
      items:  Array< {
        __typename: "TeamGroups",
        id: string,
        groupId: string,
        teamId: string,
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
        __typename: "ModelTeamGroupsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamLeaderGroupId?: string | null,
  } | null,
};

export type OnUpdateTeamSubscriptionVariables = {
  filter?: ModelSubscriptionTeamFilterInput | null,
};

export type OnUpdateTeamSubscription = {
  onUpdateTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    groups?:  {
      __typename: "ModelTeamGroupsConnection",
      items:  Array< {
        __typename: "TeamGroups",
        id: string,
        groupId: string,
        teamId: string,
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
        __typename: "ModelTeamGroupsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamLeaderGroupId?: string | null,
  } | null,
};

export type OnDeleteTeamSubscriptionVariables = {
  filter?: ModelSubscriptionTeamFilterInput | null,
};

export type OnDeleteTeamSubscription = {
  onDeleteTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    groups?:  {
      __typename: "ModelTeamGroupsConnection",
      items:  Array< {
        __typename: "TeamGroups",
        id: string,
        groupId: string,
        teamId: string,
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
        __typename: "ModelTeamGroupsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamLeaderGroupId?: string | null,
  } | null,
};

export type OnCreateScoreEntrySubscriptionVariables = {
  filter?: ModelSubscriptionScoreEntryFilterInput | null,
};

export type OnCreateScoreEntrySubscription = {
  onCreateScoreEntry?:  {
    __typename: "ScoreEntry",
    id: string,
    rule:  {
      __typename: "Rule",
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
        __typename: "ModelTeamGroupsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    date: string,
    createdAt: string,
    updatedAt: string,
    scoreEntryRuleId: string,
    scoreEntryGroupId: string,
  } | null,
};

export type OnUpdateScoreEntrySubscriptionVariables = {
  filter?: ModelSubscriptionScoreEntryFilterInput | null,
};

export type OnUpdateScoreEntrySubscription = {
  onUpdateScoreEntry?:  {
    __typename: "ScoreEntry",
    id: string,
    rule:  {
      __typename: "Rule",
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
        __typename: "ModelTeamGroupsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    date: string,
    createdAt: string,
    updatedAt: string,
    scoreEntryRuleId: string,
    scoreEntryGroupId: string,
  } | null,
};

export type OnDeleteScoreEntrySubscriptionVariables = {
  filter?: ModelSubscriptionScoreEntryFilterInput | null,
};

export type OnDeleteScoreEntrySubscription = {
  onDeleteScoreEntry?:  {
    __typename: "ScoreEntry",
    id: string,
    rule:  {
      __typename: "Rule",
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
        __typename: "ModelTeamGroupsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    date: string,
    createdAt: string,
    updatedAt: string,
    scoreEntryRuleId: string,
    scoreEntryGroupId: string,
  } | null,
};

export type OnCreateTeamGroupsSubscriptionVariables = {
  filter?: ModelSubscriptionTeamGroupsFilterInput | null,
};

export type OnCreateTeamGroupsSubscription = {
  onCreateTeamGroups?:  {
    __typename: "TeamGroups",
    id: string,
    groupId: string,
    teamId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      color: string,
      teams?:  {
        __typename: "ModelTeamGroupsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      groups?:  {
        __typename: "ModelTeamGroupsConnection",
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
      teamLeaderGroupId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTeamGroupsSubscriptionVariables = {
  filter?: ModelSubscriptionTeamGroupsFilterInput | null,
};

export type OnUpdateTeamGroupsSubscription = {
  onUpdateTeamGroups?:  {
    __typename: "TeamGroups",
    id: string,
    groupId: string,
    teamId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      color: string,
      teams?:  {
        __typename: "ModelTeamGroupsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      groups?:  {
        __typename: "ModelTeamGroupsConnection",
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
      teamLeaderGroupId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTeamGroupsSubscriptionVariables = {
  filter?: ModelSubscriptionTeamGroupsFilterInput | null,
};

export type OnDeleteTeamGroupsSubscription = {
  onDeleteTeamGroups?:  {
    __typename: "TeamGroups",
    id: string,
    groupId: string,
    teamId: string,
    group:  {
      __typename: "Group",
      id: string,
      name: string,
      color: string,
      teams?:  {
        __typename: "ModelTeamGroupsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      groups?:  {
        __typename: "ModelTeamGroupsConnection",
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
      teamLeaderGroupId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRuleSubscriptionVariables = {
  filter?: ModelSubscriptionRuleFilterInput | null,
};

export type OnCreateRuleSubscription = {
  onCreateRule?:  {
    __typename: "Rule",
    id: string,
    title: string,
    description: string,
    points: number,
    pointDescription: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRuleSubscriptionVariables = {
  filter?: ModelSubscriptionRuleFilterInput | null,
};

export type OnUpdateRuleSubscription = {
  onUpdateRule?:  {
    __typename: "Rule",
    id: string,
    title: string,
    description: string,
    points: number,
    pointDescription: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRuleSubscriptionVariables = {
  filter?: ModelSubscriptionRuleFilterInput | null,
};

export type OnDeleteRuleSubscription = {
  onDeleteRule?:  {
    __typename: "Rule",
    id: string,
    title: string,
    description: string,
    points: number,
    pointDescription: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
