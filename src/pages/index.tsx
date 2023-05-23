import { Authenticator } from '@aws-amplify/ui-react'
import { Box, Button, Typography } from '@mui/material'
import { styled } from '@mui/system'

export default function Home() {
  const LargeButton = styled(Button)(({ theme }) => ({
    padding: '10px 60px', // Aumenta il padding intorno al testo
  }));

  return (
    <Box height="calc(100vh - 64px)" display="flex" alignItems="center" justifyContent="center">
      <Authenticator
        hideSignUp={true}
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
