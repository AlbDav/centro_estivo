// pages/rules.js
import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { listFantaRules } from '../graphql/queries';
import { createFantaRule } from '../graphql/mutations';
import { Box, Card, CardContent, Container, Fab, Typography } from '@mui/material';
import NewRuleForm from '../components/fanta-rules/NewRuleForm';
import RuleCard from '@/components/fanta-rules/RuleCard';
import { ListFantaRulesQuery } from '@/API';
import { Add } from '@mui/icons-material';
import { styled } from '@mui/system';

const RuleBox = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  borderBottom: `1px solid ${theme.palette.divider}`,
  '&:last-child': {
    borderBottom: 'none',
  },
}));

const StyledUl = styled('ul')({
  marginLeft: '16px'
});

const FantaRules = () => {
  const [rules, setRules] = useState([]);
  const [showForm, setShowForm] = useState(false);

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
      <Box marginTop={2}>
        <Typography variant="h4" color="textPrimary" align="center" sx={{ textTransform: 'uppercase' }}>Regolamento</Typography>
        <Typography variant="body1" color="textPrimary" marginX={1} marginTop={1}>
          <StyledUl>
            <li>
              Ogni Gruppo del Centro Estivo avrà la possibilità di creare il proprio Team, che sarà formato da 3 Gruppi.
            </li>
            <li>
              Uno dei 3 Gruppi scelti dovrà essere il proprio.
            </li>
            <li>
              Tra i 3 Gruppi scelti bisogna sceglierne 1 che sarà il Gruppo Leader e prenderà il doppio dei punti.
            </li>
            <li>
              Il Team dovrà essere comunicato entro il 21 maggio per poter essere inserito prima dell'inizio del Centro Estivo.
            </li>
            <li>
              Durante il centro estivo sarà possibile prendere o perdere punti in base ai bonus e ai malus elencati di seguito.
            </li>
            <li>
              I punti e la classifica saranno aggiornati ogni giorno e saranno visibili in una apposita sezione del sito.
            </li>
          </StyledUl>
        </Typography>
      </Box>
      <Box marginTop={3} display="flex" justifyContent="center">
        {showForm ? (
          <Box sx={{ flex: 1 }}>
            <NewRuleForm
              onCancel={() => setShowForm(false)}
              onSave={(rule: any) => addRule(rule)}
            />
          </Box>
        ) : (
          <Fab variant="extended" color="secondary"
            sx={{
              color: "white",
            }}
            aria-label="add" onClick={() => setShowForm(true)}>
            <Add sx={{ mr: 1 }} />
            Aggiungi regola
          </Fab>
        )}
      </Box>
      <Box marginY={4}>
        <Card>
          <CardContent>
            {rules.map((rule: any) => (
              <RuleBox key={rule.id}>
                <RuleCard rule={rule} />
              </RuleBox>
            ))}
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default FantaRules;