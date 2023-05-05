import { useMemo } from 'react';
import Home from '@mui/icons-material/Home';
import Description from '@mui/icons-material/Description';
import Group from '@mui/icons-material/Group';
import SportsEsports from '@mui/icons-material/SportsEsports';
import BarChart from '@mui/icons-material/BarChart';
import { useUserStatus } from './useUserStatus'; // Importa il tuo hook useUserStatus
import { Person } from '@mui/icons-material';

export const useMenuItems = () => {
  const { isUserLogged, isUserAdmin } = useUserStatus();

  const drawerItems = useMemo(() => [
    { title: 'Home', href: '/', icon: <Home fontSize="inherit" />, condition: true },
    { title: 'Rules', href: '/fanta-rules', icon: <Description fontSize="inherit" />, condition: isUserLogged },
    { title: 'Groups', href: '/groups', icon: <Group fontSize="inherit" />, condition: isUserAdmin },
    { title: 'Teams', href: '/fanta-teams', icon: <SportsEsports fontSize="inherit" />, condition: isUserAdmin },
    { title: 'Classifica', href: '/fanta-score', icon: <BarChart fontSize="inherit" />, condition: isUserAdmin },
    { title: 'Account', href: '/account', icon: <Person fontSize="inherit" />, condition: true },
  ], [isUserLogged, isUserAdmin]);

  return drawerItems;
};
