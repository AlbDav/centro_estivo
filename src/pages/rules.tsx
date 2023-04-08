// pages/rules.js
import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listRules } from '../graphql/queries';
import { createRule } from '../graphql/mutations';
import { Box, Button, Container, Grid } from '@mui/material';
import NewRuleForm from '../components/rules/NewRuleForm';
import RuleCard from '@/components/rules/RuleCard';
import { ListRulesQuery } from '@/API';

const Rules = () => {
  const [rules, setRules] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchRules();
  }, []);

  const fetchRules = async () => {
    try {
      console.log('ciao');
      const ruleData = await API.graphql<ListRulesQuery>({ query: listRules, authMode: "AMAZON_COGNITO_USER_POOLS" }) as any;
      const rules = ruleData.data.listRules.items;
      setRules(rules);
    } catch (error) {
      console.log('Error fetching rules:', error);
    }
  };

  const addRule = async (rule: any) => {
    try {
      await API.graphql({ query: createRule, variables: { input: rule }, authMode: "AMAZON_COGNITO_USER_POOLS" }) as any;
      fetchRules();
      setShowForm(false);
    } catch (error) {
      console.log('Error adding rule:', error);
    }
  };

  return (
    <Container>
      <Box marginTop={4}>
        {showForm ? (
          <NewRuleForm
            onCancel={() => setShowForm(false)}
            onSave={(rule: any) => addRule(rule)}
          />
        ) : (
          <Button variant="contained" color="primary" onClick={() => setShowForm(true)}>
            +
          </Button>
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

export default Rules;