import { useEffect, useState } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { isAdmin, isRef, isStand, isUser } from '@/helpers/AuthHelpers';

export const useUserStatus = () => {
  const { user, authStatus } = useAuthenticator((context) => [context.user, context.authStatus]);
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [isUserUser, setIsUserUser] = useState(false);
  const [isUserStand, setIsUserStand] = useState(false);
  const [isUserRef, setIsUserRef] = useState(false);
  const [isUserAdmin, setIsUserAdmin] = useState(false);

  useEffect(() => {
    setIsUserLogged(authStatus === "authenticated");
  }, [authStatus]);

  useEffect(() => {
	  setIsUserUser(isUser(user));
	  setIsUserStand(isStand(user));
	  setIsUserRef(isRef(user));
	  setIsUserAdmin(isAdmin(user));
  }, [user]);

  return { isUserLogged, isUserUser, isUserStand, isUserRef, isUserAdmin };
};