// components/Layout.js
import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItemText, ListItemButton, Box, ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { isAdmin } from '@/helpers/AuthHelpers';
import { styled } from '@mui/styles';
import GroupIcon from '@mui/icons-material/Group';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import DescriptionIcon from '@mui/icons-material/Description';
import BarChartIcon from '@mui/icons-material/BarChart';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6C3483',
    },
    secondary: {
      main: '#1ABC9C',
    },
    background: {
      default: '#F1F2F3',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#F1F2F3',
        },
      },
    },
  },
});

const StyledListItemButton = styled(ListItemButton)({
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
  },
  '&:focus': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },
});

const StyledDrawer = styled(Drawer)({
  width: '240px',
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: '240px',
    boxSizing: 'border-box',
  },
});

const Layout = ({ children }: any) => {
  const { user } = useAuthenticator((context) => [context.user]);
  const isUserAdmin = isAdmin(user);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerItems = [
    { title: 'Groups', href: '/groups', icon: <GroupIcon /> },
    isUserAdmin ? { title: 'Teams', href: '/fanta-teams', icon: <SportsEsportsIcon /> } : null,
    { title: 'Rules', href: '/fanta-rules', icon: <DescriptionIcon /> },
    isUserAdmin ? { title: 'Classifica', href: '/fanta-score', icon: <BarChartIcon /> } : null,
  ].filter(Boolean);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">FantaCE</Typography>
        </Toolbar>
      </AppBar>
      <StyledDrawer anchor="left" open={drawerOpen} onClose={toggleDrawer} transitionDuration={400}>
        <List>
          {drawerItems.map((item, index) => (
            <Link key={index} href={item!.href} passHref onClick={toggleDrawer}>
              <StyledListItemButton>
                <ListItemIcon>
                  {item!.icon}
                </ListItemIcon>
                <ListItemText primary={item!.title} />
              </StyledListItemButton>
            </Link>
          ))}
        </List>
      </StyledDrawer>
      <Box component="main" paddingTop="64px">
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default Layout;