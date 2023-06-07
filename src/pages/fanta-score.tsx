// pages/teams.js
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
  const [scoreEntries, setScoreEntries] = useState([]);
  const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);
  const [scoreEntryToDelete, setScoreEntryToDelete] = useState<any | null>(null);

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
      const scoreEntries = await API.graphql<ListFantaScoreEntriesQuery>({ query: listFantaScoreEntries }) as any;
      const scoreEntriesItems = scoreEntries.data.listFantaScoreEntries.items;
      console.log(scoreEntriesItems);
      setScoreEntries(scoreEntriesItems);
    } catch (error) {
      console.log('Error fetching scores:', error);
    }
  };

  const addScoreEntry = async (scoreEntry: any) => {
    try {
      if (!scoreEntry.date || !scoreEntry.fantaScoreEntryRuleId || !scoreEntry.fantaScoreEntryGroupId) {
        throw new Error('Missing mandatory fields');
      }

      const existingEntry = await checkForExistingEntry(scoreEntry.date, scoreEntry.fantaScoreEntryRuleId, scoreEntry.fantaScoreEntryGroupId);

      if (existingEntry) {
        toggleProgressDialog();
        throw new Error('Already existing rule');
      }

      await API.graphql({
        query: createFantaScoreEntry, variables: {
          input: scoreEntry,
        }
      }) as any;
      setShowForm(false);
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
              onSave={(rule: any) => addScoreEntry(rule)}
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
              <ScoreCard rows={scoreEntries} onDelete={toggleDeleteDialog} />
            </CardContent>
          </Card>
        </Box>
      </Container>
      <Dialog
        open={progressDialogOpen}
        onClose={toggleProgressDialog}
      >
        <DialogTitle>{"Errore"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Punteggio già esistente.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleProgressDialog} variant="contained">OK</Button>
        </DialogActions>
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