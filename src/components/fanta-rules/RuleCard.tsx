// components/RuleCard.js
import React from 'react';
import { Grid, Typography, useTheme } from '@mui/material';

const RuleCard = ({ rule }: any) => {
  const theme = useTheme();

  return (
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h6">{rule.title}</Typography>
            <Typography variant="body1">{rule.description}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" sx={{
              color: rule.points < 0 ? theme.palette.error.light : theme.palette.success.light,
              fontWeight: 'bold'
            }}>
              {rule.pointDescription}
            </Typography>
          </Grid>
        </Grid>
  );
};

export default RuleCard;