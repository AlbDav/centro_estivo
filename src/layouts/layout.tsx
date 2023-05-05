// components/Layout.js
import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { CssBaseline, AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItemText, ListItemButton, Box, ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { styled } from '@mui/system';
import { useMenuItems } from '@/hooks/useMenuItems';

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
    MuiCard: {
      variants: [
        {
          props: { variant: 'elevation' },
          style: {
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          }
        }
      ],
    },
    MuiFab: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 15px 0 rgba(0, 0, 0, 0.1)"
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          '&:last-child': {
            paddingBottom: '16px', // Usa il valore di paddingBottom desiderato per l'ultimo figlio
          },
        }
      }
    }
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
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = useMenuItems();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" marginLeft={2}>FantaCE</Typography>
        </Toolbar>
      </AppBar>
      <StyledDrawer anchor="left" open={drawerOpen} onClose={toggleDrawer} transitionDuration={400}>
        <List>
          {menuItems.filter((el: any) => el.condition).map((item, index) => (
            <Link key={index} href={item.href} passHref onClick={toggleDrawer}>
              <StyledListItemButton>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
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