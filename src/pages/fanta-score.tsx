// pages/teams.js
import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { createFantaScoreEntry } from '../graphql/mutations';
import { Box, CircularProgress, Container, Fab } from '@mui/material';
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
      setAuthChecked(true);
    } else if (authStatus === 'unauthenticated') {
      router.push('/account');
    }
  }, [authStatus]);

  const { isUserAdmin, isUserRef } = useUserStatus();

  const [showForm, setShowForm] = useState(false);

  const addScoreEntry = async (scoreEntry: any) => {
	try {
	  await API.graphql({ query: createFantaScoreEntry, variables: { input: scoreEntry } }) as any;
	  setShowForm(false);
	} catch (error) {
	  console.log('Error adding score entry:', error);
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
      </Container>
    </>
  );
};

export default FantaScore;