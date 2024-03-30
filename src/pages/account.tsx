import '@aws-amplify/ui-react/styles.css'
import LargeButton from '@/components/shared/LargeButton';
import { Authenticator } from '@aws-amplify/ui-react'
import { Box, Button, Card, CardContent, CardHeader, Container, FormControl, FormControlLabel, Grid, IconButton, InputLabel, MenuItem, Select, Switch, TextField, Typography } from '@mui/material'
import { API, Hub } from 'aws-amplify';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { GetUserQuery } from '@/API';
import { getUser } from '@/graphql/queries';
import CancelSaveButtons from '@/components/shared/CancelSaveButtons';
import { Edit } from '@mui/icons-material';
import GroupAvatar from '@/components/shared/GroupAvatar';
import AccountForm from '@/components/account/AccountForm';
import AccountData from '@/components/account/AccountData';

export default function Account() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isResp, setIsResp] = useState(false);
  const [group, setGroup] = useState('');
  const [resp, setResp] = useState('');
  const [isEdit, setIsEdit] = useState(false);

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

  const enterEditMode = () => {
    setIsEdit(true);
  }

  const onCancel = () => {
    setIsEdit(false);
  }

  const onSave = () => {
    console.log('save');
  }

  return (
    <Box height="calc(100vh - 64px)" display="flex" alignItems="center" justifyContent="center">
      <Authenticator socialProviders={['google']}
      >
        {({ signOut }: any) => (
          <Container>
            <Card variant="elevation" sx={{ flexGrow: 1 }}>
              <CardContent>
                <CardHeader title="I miei dati"
                  action={
                    <IconButton onClick={enterEditMode}>
                      <Edit />
                    </IconButton>
                  } />
                {isEdit ? <AccountForm initialFirstName={firstName}
                    initialLastName={lastName}
                    initialIsResp={isResp}
                    initialGroup={group}
                    initialResp={resp}
                    onCancel={onCancel}
                    onSave={onSave} /> :
                  <AccountData firstName={firstName}
                    lastName={lastName}
                    isResp={isResp}
                    group={group}
                    resp={resp} />}

              </CardContent>
            </Card>
            <Box display="flex" justifyContent="center" marginTop={3}>
              <Button variant="text" onClick={signOut}>Logout</Button>
            </Box>
          </Container>
        )}
      </Authenticator>
    </Box>
  )
}