// components/TeamCard.js
import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';

const TeamCard = ({ team }: any) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h6">{team.title}</Typography>
            <Typography variant="body1">{team.description}</Typography>
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