import { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { Box, CircularProgress, Container, Fab, Grid } from '@mui/material';
import { createResp } from '../graphql/mutations';
import { listResps } from '../graphql/queries';
import { ListRespsQuery } from '@/API';
import { Add } from '@mui/icons-material';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';
import NewRespForm from '@/components/resps/NewRespForm';
import RespCard from '@/components/resps/RespCard';

const Resps = () => {
  const [resps, setResps] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const { isUserLogged, isUserAdmin, isUserRef } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isUserLogged) {
      fetchResps();
      setAuthChecked(true);
    } else if (isUserLogged === false) {
      router.push({ pathname: '/account', query: { redirect: router.pathname } });
    }
  }, [isUserLogged]);

  const fetchResps = async () => {
    try {
      const respData = await API.graphql<ListRespsQuery>({ query: listResps }) as any;
      const respItems = respData.data.listResps.items;
      setResps(respItems);
    } catch (error) {
      console.log('Error fetching resps:', error);
    }
  };

  const addResp = async (resp: any) => {
    try {
      if (!resp.firstName || !resp.lastName) {
        throw new Error('Missing mandatory fields');
      }

      await API.graphql({ query: createResp, variables: { input: resp } }) as any;
      fetchResps();
      setShowForm(false);
    } catch (error) {
      console.log('Error adding resp:', error);
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
    <Container>
      {(isUserAdmin || isUserRef) && <Box marginTop={3} display="flex" justifyContent="center">
        {showForm ? (
          <NewRespForm
            onCancel={() => setShowForm(false)}
            onSave={(resp: any) => addResp(resp)}
          />
        ) : (
          <Fab variant="extended" color="secondary"
            sx={{
              color: "white",
            }}
            aria-label="add" onClick={() => setShowForm(true)}>
            <Add sx={{ mr: 1 }} />
            Aggiungi responsabile
          </Fab>
        )}
      </Box>}
      <Box marginTop={4}>
        <Grid container spacing={4}>
          {resps.map((resp: any) => (
            <Grid key={resp.id} item xs={12}>
              <RespCard resp={resp} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Resps;