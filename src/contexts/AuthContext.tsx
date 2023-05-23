import React, { createContext, useState, useEffect } from 'react';
import { Hub, Auth } from 'aws-amplify';
import { isAdmin, isRef, isStand, isUser } from '@/helpers/AuthHelpers';


export const AuthContext = createContext<any | undefined>(undefined);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(undefined);
  const [isUserLogged, setIsUserLogged] = useState<boolean | undefined>(undefined);
  const [isUserUser, setIsUserUser] = useState<boolean | undefined>(undefined);
  const [isUserStand, setIsUserStand] = useState<boolean | undefined>(undefined);
  const [isUserRef, setIsUserRef] = useState<boolean | undefined>(undefined);
  const [isUserAdmin, setIsUserAdmin] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    Hub.listen('auth', async ({ payload: { event } }) => {
      switch (event) {
        case 'signIn':
          const loggedUser = await Auth.currentAuthenticatedUser();
          setUser(loggedUser);
          setIsUserLogged(true);
          break;
        case 'signOut':
          setUser(null);
          setIsUserLogged(false);
          break;
        default:
          break;
      }
    });

    Auth.currentAuthenticatedUser()
    .then(loggedUser => {
      setUser(loggedUser);
      setIsUserLogged(true);
    })
    .catch(() => {
      setUser(undefined);
      setIsUserLogged(false);
    });
  }, []);

  useEffect(() => {
    setIsUserUser(isUser(user));
    setIsUserStand(isStand(user));
    setIsUserRef(isRef(user));
    setIsUserAdmin(isAdmin(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, isUserLogged, isUserUser, isUserStand, isUserRef, isUserAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};