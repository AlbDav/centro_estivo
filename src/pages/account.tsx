import '@aws-amplify/ui-react/styles.css'
import LargeButton from '@/components/shared/LargeButton';
import { Authenticator } from '@aws-amplify/ui-react'
import { Box, Typography } from '@mui/material'
import { Hub } from 'aws-amplify';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Account() {
  const router = useRouter();

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

  return (
    <Box height="calc(100vh - 64px)" display="flex" alignItems="center" justifyContent="center">
      <Authenticator
      >
        {({ signOut, user }: any) => (
          <>
            <main>
              <Box marginX={2}>
                <Typography variant="h4" color="text.primary">Ciao {user.username}, purtroppo si, sei loggato. Vuoi sloggarti!?</Typography>
              </Box>
              <Box display="flex" justifyContent="center" marginTop={3}>
                <LargeButton variant="contained" color="primary" onClick={signOut}>
                  Logout
                </LargeButton>
              </Box>
            </main>
          </>
        )}
      </Authenticator>
    </Box>
  )
}