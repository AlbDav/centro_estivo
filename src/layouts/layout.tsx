// components/Layout.js
import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItemText, ListItemButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

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

const Layout = ({ children }: any) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerItems = [
    { title: 'Groups', href: '/groups' },
    { title: 'Teams', href: '/teams' },
    { title: 'Rules', href: '/rules' },
    { title: 'Admin', href: '/admin' },
  ];

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
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          {drawerItems.map((item, index) => (
            <Link key={index} href={item.href} passHref>
              <ListItemButton component="a">
                <ListItemText primary={item.title} />
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Drawer>
      <Box component="main" paddingTop="64px">
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default Layout;