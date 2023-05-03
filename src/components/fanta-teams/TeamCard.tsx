// components/TeamCard.js
import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';

const TeamCard = ({ team }: any) => {
  return (
    <Card>
      <CardContent>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h6">{team.name}</Typography>
            <Typography variant="body1">Grouppo Leader: {team.leaderGroup.name}</Typography>
            {team.groups.items.map((groupItem: any, index: any) => (
              <Typography key={index} variant="body1">Grouppo {index + 2}: {groupItem.group.name}</Typography>
            ))}
          </Grid>
          <Grid item>
            <Typography variant="body1">
              {team.points > 0 ? '+' : ''}{team.points} {team.pointDescription}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TeamCard;