// components/RuleCard.js
import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';

const RuleCard = ({ rule }: any) => {
  return (
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h6">{rule.title}</Typography>
            <Typography variant="body1">{rule.description}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              {rule.points > 0 ? '+' : ''}{rule.points} {rule.pointDescription}
            </Typography>
          </Grid>
        </Grid>
  );
};

export default RuleCard;