import { createContext, useState, useEffect } from 'react';
import { Hub, Auth, API } from 'aws-amplify';
import { isAdmin, isRef, isStand, isUser } from '@/helpers/AuthHelpers';
import { GetUserQuery, User } from '@/API';
import { getUser } from '@/graphql/queries';


export const AuthContext = createContext<any | undefined>(undefined);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(undefined);
  const [userInfo, setUserInfo] = useState({} as User);
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

  const fetchUserInfo = async () => {
    try {
      const userData = await API.graphql<GetUserQuery>({ query: getUser, variables: { id: user.attributes.sub } }) as any;
      const userInfo = userData.data.getUser;
      setUserInfo(userInfo);
    } catch (error) {
      console.log('Error fetching user:', error);
    }
  }

  useEffect(() => {
    setIsUserUser(isUser(user));
    setIsUserStand(isStand(user));
    setIsUserRef(isRef(user));
    setIsUserAdmin(isAdmin(user));
    if (user) {
      fetchUserInfo();
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, userInfo, fetchUserInfo, isUserLogged, isUserUser, isUserStand, isUserRef, isUserAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};