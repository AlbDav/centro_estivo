import { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { createFantaScoreEntry, deleteFantaScoreEntry } from '../graphql/mutations';
import { Box, Button, Card, CardContent, CardHeader, CircularProgress, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab } from '@mui/material';
import { useRouter } from 'next/router';
import NewScoreForm from '@/components/fanta-score/NewScoreForm';
import { Add } from '@mui/icons-material';
import { ListFantaScoreEntriesQuery } from '@/API';
import { listFantaScoreEntries } from '@/graphql/queries';
import { useAuth } from '@/hooks/useAuth';
import ScoreCard from '@/components/fanta-score/ScoreCard';
import { styled } from '@mui/system';

const StyledCardHeader = styled(CardHeader)({
  textAlign: 'center',
  textTransform: 'uppercase',
  paddingBottom: 0,
  '& .MuiCardHeader-title': {
    fontSize: '1.8rem',
  },
});

const FantaScore = () => {
  const { isUserLogged, isUserAdmin, isUserRef } = useAuth();
  const [authChecked, setAuthChecked] = useState(false);
  const router = useRouter();
  const [progressDialogOpen, setProgressDialogOpen] = useState(false);
  const [completed, setCompleted] = useState(0);
  const [total, setTotal] = useState(0);
  const [failedRules, setFailedRules] = useState<any>([]);
  const [scoreEntries, setScoreEntries] = useState([]);
  const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);
  const [scoreEntryToDelete, setScoreEntryToDelete] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isUserLogged) {
      fetchScoreEntries();
      setAuthChecked(true);
    } else if (isUserLogged === false) {
      router.push({ pathname: '/account', query: { redirect: router.pathname } });
    }
  }, [isUserLogged]);

  const [showForm, setShowForm] = useState(false);

  const fetchScoreEntries = async () => {
    try {
      const scoreEntries = await API.graphql<ListFantaScoreEntriesQuery>({ query: listFantaScoreEntries, variables: { limit: 1000 } }) as any;
      const scoreEntriesItems = scoreEntries.data.listFantaScoreEntries.items;
      setScoreEntries(scoreEntriesItems);
      setIsLoading(false);
    } catch (error) {
      console.log('Error fetching scores:', error);
    }
  };

  const addScoreEntries = async (scoreEntriesToAdd: any) => {
    setTotal(scoreEntriesToAdd.length);
    setProgressDialogOpen(true);

    for (const scoreEntry of scoreEntriesToAdd) {
      try {
        await addScoreEntry(scoreEntry);
      } catch (error) {
        console.log('Error adding score entry:', error);
        setFailedRules([...failedRules, scoreEntry.fantaScoreEntryRuleId]);
      } finally {
        setCompleted(c => c + 1);
      }
    }

    setCompleted(0);
    setTotal(0);

    if (failedRules.length === 0) {
      setProgressDialogOpen(false);
    }

    fetchScoreEntries();
  }

  const addScoreEntry = async (scoreEntry: any) => {
    try {
      if (!scoreEntry.date || !scoreEntry.fantaScoreEntryRuleId || !scoreEntry.fantaScoreEntryGroupId) {
        throw new Error('Missing mandatory fields');
      }

      const existingEntry = await checkForExistingEntry(scoreEntry.date, scoreEntry.fantaScoreEntryRuleId, scoreEntry.fantaScoreEntryGroupId);

      if (existingEntry) {
        throw new Error('Already existing rule');
      }

      await API.graphql({
        query: createFantaScoreEntry, variables: {
          input: scoreEntry,
        }
      }) as any;
    } catch (error) {
      console.log('Error adding score entry:', error);
    }
  };

  const checkForExistingEntry = async (date: any, ruleId: any, groupId: any) => {
    const existingEntries = await API.graphql({
      query: listFantaScoreEntries,
      variables: {
        filter: {
          date: { eq: date },
          fantaScoreEntryRuleId: { eq: ruleId },
          fantaScoreEntryGroupId: { eq: groupId }
        }
      }
    }) as any;
    return existingEntries.data.listFantaScoreEntries.items.length > 0;
  };

  const toggleProgressDialog = () => {
    setProgressDialogOpen(!progressDialogOpen);
  };

  const toggleDeleteDialog = (entry?: any) => {
    if (!deleteDialogVisible) {
      setScoreEntryToDelete(entry);
      setDeleteDialogVisible(true);
    } else {
      setDeleteDialogVisible(false);
      setScoreEntryToDelete(null);
    }
  }

  const deleteAndClose = () => {
    deleteScoreEntry(scoreEntryToDelete.id);
    toggleDeleteDialog();
  }

  const deleteScoreEntry = async (scoreEntryId: string) => {
    try {
      await API.graphql({ query: deleteFantaScoreEntry, variables: { input: { id: scoreEntryId } } }) as any;
      fetchScoreEntries();
    } catch (error) {
      console.log('Error deleting rule:', error);
    }
  };

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
              onSave={(scoreEntriesToAdd: any) => addScoreEntries(scoreEntriesToAdd)}
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
        <Box marginTop={4}>
          <Card variant="elevation">
            <StyledCardHeader title="Punti assegnati" />
            <CardContent>
              {isLoading ?
                <Box display="flex" justifyContent="center">
                  <CircularProgress color="secondary" />
                </Box> :
                <ScoreCard rows={scoreEntries} onDelete={toggleDeleteDialog} />}
            </CardContent>
          </Card>
        </Box>
      </Container>

      <Dialog
        open={progressDialogOpen}
        onClose={toggleProgressDialog}
      >
        <DialogTitle>{"Aggiunta regole"}</DialogTitle>
        {(completed !== total) ?
          <DialogContent>
            <CircularProgress variant="determinate" value={(completed / total) * 100} />
          </DialogContent>
          : (
            <>
              <DialogContent>
                <DialogContentText>
                Punteggi già esistenti: {failedRules.join(', ')}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={toggleProgressDialog} variant="contained">OK</Button>
              </DialogActions>
            </>
          )}
      </Dialog>

      <Dialog open={deleteDialogVisible} onClose={() => setDeleteDialogVisible(false)}>
        <DialogTitle>Eliminare la regola?</DialogTitle>
        <DialogContent>
          {scoreEntryToDelete ? (<DialogContentText>
            Sei sicuro di voler eliminare <strong>{scoreEntryToDelete && scoreEntryToDelete.rule.title} - {scoreEntryToDelete && scoreEntryToDelete.group.name} - {scoreEntryToDelete && scoreEntryToDelete.date}</strong>?
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