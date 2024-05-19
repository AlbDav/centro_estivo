import '@aws-amplify/ui-react/styles.css'
import { Authenticator } from '@aws-amplify/ui-react'
import { Box, Button, Card, CardContent, CardHeader, Container, IconButton } from '@mui/material'
import { API, Hub } from 'aws-amplify';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { User } from '@/API';
import { Edit } from '@mui/icons-material';
import AccountForm from '@/components/account/AccountForm';
import AccountData from '@/components/account/AccountData';
import { updateUser } from '@/graphql/mutations';

export default function Account() {
  const [isEdit, setIsEdit] = useState(false);

  const router = useRouter();
  const { userInfo, fetchUserInfo } = useAuth();

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

  const enterEditMode = () => {
    setIsEdit(true);
  }

  const onCancel = () => {
    setIsEdit(false);
  }

  const onSave = async (firstName: string, lastName: string, isResp: boolean, userRespId: string | null, userGroupId: string | null) => {
    try {
      if ((!firstName && !lastName) ||
        (isResp && userRespId === null) ||
        (!isResp && userGroupId === null)) {
        throw new Error('Missing mandatory fields');
      }

      const updatedUser = {
        id: userInfo.id,
        firstName,
        lastName,
        isResp,
        userGroupId,
        userRespId
      } as User;

      await API.graphql({ query: updateUser, variables: { input: updatedUser } }) as any;
      fetchUserInfo();
    } catch (error) {
      console.log('Error updating user:', error);
    } finally {
      setIsEdit(false);
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
                <CardHeader title="I miei dati"
                  action={!isEdit &&
                    <IconButton onClick={enterEditMode}>
                      <Edit />
                    </IconButton>
                  } />
                {isEdit ? <AccountForm initialFirstName={userInfo.firstName}
                  initialLastName={userInfo.lastName}
                  initialIsResp={userInfo.isResp}
                  initialGroup={userInfo.userGroupId}
                  initialResp={userInfo.userRespId}
                  onCancel={onCancel}
                  onSave={onSave} /> :
                  <AccountData firstName={userInfo.firstName}
                    lastName={userInfo.lastName}
                    isResp={userInfo.isResp}
                    group={userInfo.group}
                    resp={userInfo.resp} />}
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