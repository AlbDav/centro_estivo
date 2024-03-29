import '@aws-amplify/ui-react/styles.css'
import LargeButton from '@/components/shared/LargeButton';
import { Authenticator } from '@aws-amplify/ui-react'
import { Box, Button, Card, CardContent, Container, FormControlLabel, Grid, Switch, TextField, Typography } from '@mui/material'
import { API, Hub } from 'aws-amplify';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { GetUserQuery } from '@/API';
import { getUser } from '@/graphql/queries';

export default function Account() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    const removeListener = Hub.listen('auth', async ({ payload: { event } }) => {
      if (event === 'signIn') {
        const redirect = router.query.redirect as string;
        router.push(redirect || '/');
      }
    });

    return () => {
      removeListener();
    };
  }, []);

  useEffect(() => {
    if (user) {
      fetchUserInfo();
    }
  }, [user]);

  const fetchUserInfo = async () => {
    try {
      const userData = await API.graphql<GetUserQuery>({ query: getUser, variables: { id: user.attributes.sub } }) as any;
      const userInfo = userData.data.getUser;
      setFirstName(userInfo.firstName);
      setLastName(userInfo.lastName);
    } catch (error) {
      console.log('Error fetching grous:', error);
    }
  }

  return (
    <Box height="calc(100vh - 64px)" display="flex" alignItems="center" justifyContent="center">
      <Authenticator socialProviders={['google']}
      >
        {({ signOut }: any) => (
          <Container>
            <Card variant="elevation" sx={{ flexGrow: 1 }}>
              <CardContent>
                <Grid container justifyContent="flex-start" spacing={2}>
                  <Grid item xs={12} md={8}>
                    <TextField
                      label="Nome"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <TextField
                      label="Cognome"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <FormControlLabel control={<Switch color="secondary" />} label="Sono un responsabile" />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={2}>
                      <Grid item>
                        <Button size="large" variant="outlined" color="secondary">
                          Annulla
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button size="large" variant="contained" color="primary">
                          Salva
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Box marginX={3} marginY={3}>
              <Typography variant="h4" color="text.primary">Ciao user, purtroppo si, sei loggato. Vuoi sloggarti!?</Typography>
              <Box display="flex" justifyContent="center" marginTop={2}>
                <LargeButton variant="contained" color="primary" onClick={signOut}>
                  Logout
                </LargeButton>
              </Box>
            </Box>
          </Container>
        )}
      </Authenticator>
    </Box>
  )
}