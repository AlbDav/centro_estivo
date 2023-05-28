// components/TeamCard.js
import { Card, CardActions, CardContent, CardHeader, Chip, Typography } from '@mui/material';

const TeamCard = ({ team }: any) => {
  return (
    <Card variant="elevation">
      <CardHeader
        title={team.teamName}
        action={<Typography variant="h6">{team.teamScore}</Typography>}
      />
      <CardContent>
        <Card variant="outlined">
          <CardHeader
            title={
              <>
                {team.leaderGroup.groupName} <Chip label="x2" size="small" />
              </>
            }
            action={<Typography variant="h6">{team.leaderGroup.groupScore}</Typography>}
          />
          <CardContent>
            {team.leaderGroup.groupScoreEntries.map((entry: any) => (
              <Typography key={entry.date}>
                {entry.date}
                {entry.scoreEntries.map((scoreEntry: any) => (
                  <Typography key={scoreEntry.id}>{scoreEntry.rule.title}: {scoreEntry.points}</Typography>
                ))}
              </Typography>
            ))}
          </CardContent>
        </Card>
        {team.groups.map((group: any) => (
          <Card variant="outlined" key={group.groupName}>
            <CardHeader
              title={group.groupName}
              action={<Typography variant="h6">{group.groupScore}</Typography>}
            />
            <CardContent>
              {group.groupScoreEntries.map((entry: any) => (
                <Typography key={entry.date}>
                  {entry.date}
                  {entry.scoreEntries.map((scoreEntry: any) => (
                    <Typography key={scoreEntry.id}>{scoreEntry.rule.title}: {scoreEntry.points}</Typography>
                  ))}
                </Typography>
              ))}
            </CardContent>
          </Card>
        ))}
      </CardContent>
      <CardActions>
        {/* Put any actions here */}
      </CardActions>
    </Card>
  );
};

export default TeamCard;