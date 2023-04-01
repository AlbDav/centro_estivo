// components/RuleCard.js
import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';

const RuleCard = ({ rule }: any) => {
  return (
    <Card>
      <CardContent>
        <Grid container justifyContent="space-between">
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
      </CardContent>
    </Card>
  );
};

export default RuleCard;