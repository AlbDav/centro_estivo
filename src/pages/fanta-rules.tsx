// pages/rules.js
import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { listFantaRules } from '../graphql/queries';
import { createFantaRule } from '../graphql/mutations';
import { Box, Card, CardContent, CardHeader, CircularProgress, Container, Fab, Skeleton, Typography } from '@mui/material';
import NewRuleForm from '../components/fanta-rules/NewRuleForm';
import RuleCard from '@/components/fanta-rules/RuleCard';
import { ListFantaRulesQuery } from '@/API';
import { Add } from '@mui/icons-material';
import { styled } from '@mui/system';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { isAdmin } from '@/helpers/AuthHelpers';
import { useRouter } from 'next/router';

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

const StyledCardHeader = styled(CardHeader)({
  textAlign: 'center',
  textTransform: 'uppercase',
  paddingBottom: 0,
  '& .MuiCardHeader-title': {
    fontSize: '1.8rem',
  },
});

const FantaRules = () => {
  const { user } = useAuthenticator((context) => [context.user]);
  const [authChecked, setAuthChecked] = useState(false);
  const isUserAdmin = isAdmin(user);

  const router = useRouter();

  const [positiveRules, setPositiveRules] = useState([]);
  const [negativeRules, setNegativeRules] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      router.push('/');
    } else {
      fetchRules();
      setAuthChecked(true);
    }
  }, []);

  const fetchRules = async () => {
    try {
      const ruleData = await API.graphql<ListFantaRulesQuery>({ query: listFantaRules }) as any;
      const ruleItems = ruleData.data.listFantaRules.items.sort((a: any, b: any) => b.points - a.points);
      splitRules(ruleItems);
      setIsLoading(false);
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

  const splitRules = (rules: any) => {
    let positive = rules.filter((el: any) => el.points >= 0);
    let negative = rules.filter((el: any) => el.points < 0);

    setPositiveRules(positive);
    setNegativeRules(negative);
  };

  if (!authChecked) {
    return (
      <Box height="calc(100vh - 64px)" display="flex" alignItems="center" justifyContent="center">
        <CircularProgress color="secondary" size={60} />
      </Box>
    )
  }

  return (
    <Container>
      <Box marginTop={2}>
        <Typography variant="h4" align="center" color="text.primary" sx={{ textTransform: 'uppercase' }}>Regolamento</Typography>
        <Typography component="div" variant="body1" color="text.primary" marginX={1} marginTop={1}>
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
              Il Team dovrà essere comunicato entro il 21 maggio per poter essere inserito prima dell&#39;inizio del Centro Estivo.
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
      {isUserAdmin && <Box marginTop={3} display="flex" justifyContent="center">
        {showForm ? (
          <NewRuleForm
            onCancel={() => setShowForm(false)}
            onSave={(rule: any) => addRule(rule)}
          />
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
      </Box>}
      <Box marginY={4}>
        <Card>
          <StyledCardHeader title="Bonus" />
          <CardContent sx={{ paddingTop: 0 }}>
            {isLoading ?
              <Box display="flex" justifyContent="center">
                <CircularProgress color="secondary" />
              </Box>
              : positiveRules.map((rule: any) => (
                <RuleBox key={rule.id}>
                  <RuleCard rule={rule} />
                </RuleBox>
              ))}
          </CardContent>
        </Card>
      </Box>
      <Box marginY={4}>
        <Card>
          <StyledCardHeader title="Malus" />
          <CardContent sx={{ paddingTop: 0 }}>
            {isLoading ?
              <Box display="flex" justifyContent="center">
                <CircularProgress color="secondary" />
              </Box>
              : negativeRules.map((rule: any) => (
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