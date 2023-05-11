// pages/teams.js
import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { listFantaScoreEntries, listFantaTeams } from '../graphql/queries';
import { createFantaScoreEntry, createFantaTeam, createFantaTeamGroups, deleteFantaScoreEntry } from '../graphql/mutations';
import { Box, Button, Card, CardContent, CircularProgress, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, Grid, Typography } from '@mui/material';
import { ListFantaScoreEntriesQuery, ListFantaTeamsQuery } from '@/API';
import NewTeamForm from '@/components/fanta-teams/NewTeamForm';
import TeamCard from '@/components/fanta-teams/TeamCard';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/router';
import { useUserStatus } from '@/hooks/useUserStatus';
import NewScoreForm from '@/components/fanta-score/NewScoreForm';
import { Add } from '@mui/icons-material';

const FantaScore = () => {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
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
      const ruleData = await API.graphql<ListFantaScoreEntriesQuery>({ query: listFantaScoreEntries }) as any;
      const ruleItems = ruleData.data.listFantaRules.items.sort((a: any, b: any) => b.points - a.points);
      splitRules(ruleItems);
      setIsLoading(false);
    } catch (error) {
      console.log('Error fetching rules:', error);
    }
  };

  const addRule = async (rule: any) => {
    try {
      await API.graphql({ query: createFantaScoreEntry, variables: { input: rule } }) as any;
      fetchRules();
      setShowForm(false);
    } catch (error) {
      console.log('Error adding rule:', error);
    }
  };

  const deleteRule = async (ruleId: string) => {
    try {
      await API.graphql({ query: deleteFantaScoreEntry, variables: { input: { id: ruleId } } }) as any;
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
        {(isUserAdmin || isUserRef) && <Box marginTop={3} display="flex" justifyContent="center">
          {showForm ? (
            <NewScoreForm
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

export default FantaScore;