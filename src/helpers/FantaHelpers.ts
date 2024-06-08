import { FantaScoreEntry } from "@/API";

export const getGroupedScores = (scoreEntries: FantaScoreEntry[]) => {
  let groupScoreEntries = scoreEntries.filter(el => el.group);
  let groupedGroups = groupScoreEntries.reduce((acc: any, entry: any) => {
    let existing = acc.find((e: any) => e.groupId === entry.group.id);
    if (existing) {
      existing.groupScore += entry.rule.points;
      let existingDate = existing.groupScoreEntries.find((e: any) => e.date === entry.date);
      if (existingDate) {
        existingDate.scoreEntries.push(entry);
      } else {
        existing.groupScoreEntries.push({ date: entry.date, scoreEntries: [entry] });
      }
    } else {
      acc.push({
        groupId: entry.group.id,
        groupName: entry.group.name,
        groupScore: entry.rule.points,
        groupScoreEntries: [{ date: entry.date, scoreEntries: [entry] }]
      });
    }
    return acc;
  }, []);

  groupedGroups = groupedGroups.map((group: any) => {
    group.groupScoreEntries.sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime());
    return group;
  });

  let respScoreEntries = scoreEntries.filter(el => el.resp);
  let groupedResps = respScoreEntries.reduce((acc: any, entry: any) => {
    let existing = acc.find((e: any) => e.respId === entry.resp.id);
    if (existing) {
      existing.respScore += entry.rule.points;
      let existingDate = existing.respScoreEntries.find((e: any) => e.date === entry.date);
      if (existingDate) {
        existingDate.scoreEntries.push(entry);
      } else {
        existing.respScoreEntries.push({ date: entry.date, scoreEntries: [entry] });
      }
    } else {
      acc.push({
        respId: entry.resp.id,
        respName: `${entry.resp.firstName} ${entry.resp.lastName}`,
        respScore: entry.rule.points,
        respScoreEntries: [{ date: entry.date, scoreEntries: [entry] }]
      });
    }
    return acc;
  }, []);

  groupedResps = groupedResps.map((resp: any) => {
    resp.respScoreEntries.sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime());
    return resp;
  });

  return [groupedGroups, groupedResps];
}

export const getGroupScore = (group: any, groupedScores: any, isLeader: boolean = false) => {
  const groupEntry = groupedScores.find((entry: any) => entry.groupId === group.id);
  const groupScore = groupEntry ? groupEntry.groupScore : 0;
  const groupScoreEntries = groupEntry ? groupEntry.groupScoreEntries : [];

  return {
    groupId: group.id,
    groupName: group.name,
	  groupColor: group.color,
    groupScore: isLeader ? groupScore * 2 : groupScore,
    groupScoreEntries: groupScoreEntries
  }
}

export const getRespScore = (resp: any, groupedScores: any) => {
  const respEntry = groupedScores.find((entry: any) => entry.respId === resp.id);
  const respScore = respEntry ? respEntry.respScore : 0;
  const respScoreEntries = respEntry ? respEntry.respScoreEntries : [];

  return {
    respId: resp.id,
    respName: `${resp.firstName} ${resp.lastName}`,
    respScore: respScore,
    respScoreEntries: respScoreEntries
  }
}