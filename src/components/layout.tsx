// components/Layout.js
import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
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
});

const Layout = ({ children }: any) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerItems = [
    { title: 'Groups', href: '/' },
    { title: 'Team Ranking', href: '/teamRanking' },
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
          <Typography variant="h6">Fantasy Summer Camp</Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          {drawerItems.map((item, index) => (
            <Link key={index} href={item.href} passHref>
              <ListItem button component="a">
                <ListItemText primary={item.title} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Layout;