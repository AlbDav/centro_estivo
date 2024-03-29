import { useMemo } from 'react';
import Home from '@mui/icons-material/Home';
import Group from '@mui/icons-material/Group';
import { Assignment, EmojiEvents, Key, Person, Scoreboard } from '@mui/icons-material';
import { useAuth } from './useAuth';

export const useMenuItems = () => {
  const { isUserLogged, isUserAdmin, isUserRef } = useAuth();

  const drawerItems = useMemo(() => [
    { title: 'Home', href: '/', icon: <Home fontSize="inherit" />, condition: true },
    { title: 'Regole', href: '/fanta-rules', icon: <Assignment fontSize="inherit" />, condition: isUserLogged },
    { title: 'Classifica', href: '/fanta-teams', icon: <EmojiEvents fontSize="inherit" />, condition: isUserLogged },
    { title: 'Punteggi', href: '/fanta-score', icon: <Scoreboard fontSize="inherit" />, condition: isUserAdmin || isUserRef },
    { title: 'Gruppi', href: '/groups', icon: <Group fontSize="inherit" />, condition: isUserAdmin },
    { title: 'Responsabili', href: '/resps', icon: <Key fontSize="inherit" />, condition: isUserAdmin },
    { title: 'Account', href: '/account', icon: <Person fontSize="inherit" />, condition: true },
  ], [isUserLogged, isUserAdmin, isUserRef]);

  return drawerItems;
};
