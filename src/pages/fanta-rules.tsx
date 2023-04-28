// pages/rules.js
import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { listFantaRules } from '../graphql/queries';
import { createFantaRule } from '../graphql/mutations';
import { Box, Button, Container, Fab, Grid, Typography } from '@mui/material';
import NewRuleForm from '../components/fanta-rules/NewRuleForm';
import RuleCard from '@/components/fanta-rules/RuleCard';
import { ListFantaRulesQuery } from '@/API';
import { Add } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  newRuleForm: {
    flex: 1,
    color: "blue",
  },
}));

const FantaRules = () => {
  const [rules, setRules] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    fetchRules();
  }, []);

  const fetchRules = async () => {
    try {
      const ruleData = await API.graphql<ListFantaRulesQuery>({ query: listFantaRules }) as any;
      const ruleItems = ruleData.data.listFantaRules.items;
      setRules(ruleItems);
    } catch (error) {
      console.log('Error fetching rules:', error);
    }
  };

  const addRule = async (rule: any) => {
    try {
      await API.graphql({ query: createFantaRule, variables: { input: rule } }) as any;
      fetchRules();
      setShowForm(false);
    } catch (error) {
      console.log('Error adding rule:', error);
    }
  };

  return (
    <Container>
      <Box marginTop={4}>
        <Typography variant="h4" color="textPrimary" align="center">Regole</Typography>
      </Box>
      <Box marginTop={4} display="flex" justifyContent="center">
        {showForm ? (
          <Box className={classes.newRuleForm}>
            <NewRuleForm
              onCancel={() => setShowForm(false)}
              onSave={(rule: any) => addRule(rule)}
            />
          </Box>
        ) : (
          <Fab variant="extended" color="secondary" aria-label="add" onClick={() => setShowForm(true)}>
            <Add sx={{ mr: 1 }} />
            Aggiungi regola
          </Fab>
        )}
      </Box>
      <Box marginTop={4}>
        <Grid container spacing={4}>
          {rules.map((rule: any) => (
            <Grid key={rule.id} item xs={12}>
              <RuleCard rule={rule} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default FantaRules;