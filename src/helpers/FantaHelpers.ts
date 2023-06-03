export const getGroupedScores = (scoreEntries: any) => {
  let grouped = scoreEntries.reduce((acc: any, entry: any) => {
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

  grouped = grouped.map((group: any) => {
    group.groupScoreEntries.sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime());
    return group;
  });

  return grouped;
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