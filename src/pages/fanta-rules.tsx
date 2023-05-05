// pages/rules.js
import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { listFantaRules } from '../graphql/queries';
import { createFantaRule, deleteFantaRule } from '../graphql/mutations';
import { Box, Button, Card, CardContent, CardHeader, CircularProgress, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, Typography } from '@mui/material';
import NewRuleForm from '../components/fanta-rules/NewRuleForm';
import RuleCard from '@/components/fanta-rules/RuleCard';
import { ListFantaRulesQuery } from '@/API';
import { Add } from '@mui/icons-material';
import { styled } from '@mui/system';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/router';
import { useUserStatus } from '@/hooks/useUserStatus';

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
  const { authStatus } = useAuthenticator((context) => [context.user, context.authStatus]);
  const [authChecked, setAuthChecked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (authStatus === 'authenticated') {
      fetchRules();
      setAuthChecked(true);
    } else if (authStatus === 'unauthenticated') {
      router.push('/account');
    }
  }, [authStatus]);

  const { isUserAdmin, isUserRef } = useUserStatus();

  const [positiveRules, setPositiveRules] = useState([]);
  const [negativeRules, setNegativeRules] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);
  const [ruleToDelete, setRuleToDelete] = useState<any | null>(null);

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

  const deleteRule = async (ruleId: string) => {
    try {
      await API.graphql({ query: deleteFantaRule, variables: { input: { id: ruleId } } }) as any;
      fetchRules();
    } catch (error) {
      console.log('Error deleting rule:', error);
    }
  };

  const splitRules = (rules: any) => {
    let positive = rules.filter((el: any) => el.points >= 0);
    let negative = rules.filter((el: any) => el.points < 0);

    setPositiveRules(positive);
    setNegativeRules(negative);
  };

  const toggleDeleteDialog = (rule?: any) => {
    if (!deleteDialogVisible) {
      setRuleToDelete(rule);
      setDeleteDialogVisible(true);
    } else {
      setDeleteDialogVisible(false);
      setRuleToDelete(null);
    }
  }

  const deleteAndClose = () => {
    deleteRule(ruleToDelete.id);
    toggleDeleteDialog();
  }

  if (!authChecked) {
    return (
      <Box height="calc(100vh - 64px)" display="flex" alignItems="center" justifyContent="center">
        <CircularProgress color="secondary" size={60} />
      </Box>
    )
  }

  return (
    <>
      <Container>
        <Box marginTop={2}>
          <Typography variant="h4" align="center" color="text.primary" sx={{ textTransform: 'uppercase' }}>Regolamento</Typography>
          <Typography component="div" variant="body1" color="text.primary" marginX={1} marginTop={1}>
            <StyledUl>
              <li>
                <strong>Ogni Gruppo</strong> del Centro Estivo avrà la possibilità di <strong>creare il proprio Team</strong>, che sarà formato da <strong>3 Gruppi</strong>.
              </li>
              <li>
                Ogni Team dovrà avere un <strong>nome</strong>.
              </li>
              <li>
                <strong>Uno dei 3 Gruppi</strong> scelti dovrà essere <strong>il proprio</strong>.
              </li>
              <li>
                Tra i 3 Gruppi scelti bisogna sceglierne 1 che sarà il <strong>Gruppo Leader</strong> e prenderà il <strong>doppio dei punti</strong>.
              </li>
              <li>
                Il Team dovrà essere comunicato <strong>entro il 21 maggio</strong> per poter essere inserito prima dell&#39;inizio del Centro Estivo.
              </li>
              <li>
                Durante il Centro Estivo sarà possibile <strong>prendere o perdere punti</strong> in base ai bonus e ai malus <strong>elencati di seguito</strong>.
              </li>
              <li>
                I punti <strong>non sono cumulabili</strong> alll&#39;interno dello stesso giorno.
              </li>
              <li>
                I punti e la classifica saranno <strong>aggiornati ogni giorno</strong> e saranno visibili in una apposita sezione del sito.
              </li>
            </StyledUl>
          </Typography>
        </Box>
        {(isUserAdmin || isUserRef) && <Box marginTop={3} display="flex" justifyContent="center">
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
          <Card variant="elevation">
            <StyledCardHeader title="Bonus" />
            <CardContent sx={{ paddingTop: 0 }}>
              {isLoading ?
                <Box display="flex" justifyContent="center">
                  <CircularProgress color="secondary" />
                </Box>
                : positiveRules.map((rule: any) => (
                  <RuleBox key={rule.id}>
                    <RuleCard rule={rule} isUserAdmin={isUserAdmin} onDelete={toggleDeleteDialog} />
                  </RuleBox>
                ))}
            </CardContent>
          </Card>
        </Box>
        <Box marginTop={4}>
          <Card variant="elevation">
            <StyledCardHeader title="Malus" />
            <CardContent sx={{ paddingTop: 0 }}>
              {isLoading ?
                <Box display="flex" justifyContent="center">
                  <CircularProgress color="secondary" />
                </Box>
                : negativeRules.map((rule: any) => (
                  <RuleBox key={rule.id}>
                    <RuleCard rule={rule} isUserAdmin={isUserAdmin} onDelete={toggleDeleteDialog} />
                  </RuleBox>
                ))}
            </CardContent>
          </Card>
        </Box>
      </Container>
      <Dialog open={deleteDialogVisible} onClose={() => setDeleteDialogVisible(false)}>
        <DialogTitle>Eliminare la regola?</DialogTitle>
        <DialogContent>
          {ruleToDelete ? (<DialogContentText>
            Sei sicuro di voler eliminare la regola <strong>{ruleToDelete && ruleToDelete.title}: {ruleToDelete && ruleToDelete.description}</strong>?
          </DialogContentText>) : (
            <Box display="flex" justifyContent="center">
              <CircularProgress color="secondary" />
            </Box>
          )}
        </DialogContent>
        <DialogActions sx={{ marginRight: 2 }}>
          <Button onClick={toggleDeleteDialog} variant="outlined" color="secondary">
            Annulla
          </Button>
          <Button onClick={deleteAndClose} color="error" variant="contained">
            Elimina
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FantaRules;