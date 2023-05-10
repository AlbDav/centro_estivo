// components/Layout.js
import React, { useEffect, useMemo, useState } from 'react';
import { BottomNavigation, BottomNavigationAction, createTheme, Hidden, Paper, ThemeProvider } from '@mui/material';
import { CssBaseline, AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItemText, ListItemButton, Box, ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { styled } from '@mui/system';
import { useMenuItems } from '@/hooks/useMenuItems';
import { useRouter } from 'next/router';

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
            borderRadius: '0.75rem'
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

const getMobileMenuItems = (menuItems: any) => {
  const bottomNavigationItems = [];
  const mobileDrawerItems = [];

  const filteredItems = menuItems.filter((item: any) => item.condition);

  if (filteredItems.length <= 4) {
    bottomNavigationItems.push(...filteredItems);
  } else {
    bottomNavigationItems.push(...filteredItems.slice(0, 3));
    bottomNavigationItems.push({
      title: 'Altro',
      icon: <MenuIcon />,
      condition: true,
    });
    mobileDrawerItems.push(...filteredItems.slice(3));
  }

  return [bottomNavigationItems, mobileDrawerItems];
};

const Layout = ({ children }: any) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [navigation, setNavigation] = useState(0);

  const router = useRouter();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const toggleMobileDrawer = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  }

  const menuItems = useMenuItems();
  const [bottomNavigationItems, mobileDrawerItems] = useMemo(() => getMobileMenuItems(menuItems), [menuItems]);

  useEffect(() => {
    const currentPath = router.pathname;

    const currentIndex = bottomNavigationItems.findIndex((item) => item.href === currentPath);

    setNavigation(currentIndex);
  }, [router.pathname, bottomNavigationItems]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Hidden mdDown>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography variant="h5" marginLeft={2}>FantaCE</Typography>
        </Toolbar>
      </AppBar>
      <StyledDrawer anchor="left" open={drawerOpen} onClose={toggleDrawer} transitionDuration={400}>
        <List>
          {menuItems.filter((el: any) => el.condition).map((item, index) => (
            <Link key={index} href={item.href} passHref onClick={toggleDrawer}>
              <StyledListItemButton>
                <ListItemIcon sx={{ fontSize: '1.5rem' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </StyledListItemButton>
            </Link>
          ))}
        </List>
      </StyledDrawer>
      <StyledDrawer anchor="right" open={mobileDrawerOpen} onClose={toggleMobileDrawer} transitionDuration={400}>
        <List>
          {mobileDrawerItems.filter((el: any) => el.condition).map((item, index) => (
            <Link key={index} href={item.href} passHref onClick={toggleMobileDrawer}>
              <StyledListItemButton>
                <ListItemIcon sx={{ fontSize: '1.5rem' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </StyledListItemButton>
            </Link>
          ))}
        </List>
      </StyledDrawer>
      <Box component="main" paddingTop="64px" paddingBottom="64px">
        {children}
      </Box>
      <Hidden mdUp>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1100 }} elevation={3}>
          <BottomNavigation
            value={navigation}
            showLabels
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              '& .MuiBottomNavigationAction-root': {
                minWidth: 'auto',
                padding: '6px 8px',
                '@media (min-width: 600px)': {
                  padding: '6px 12px',
                },
              },
            }}
          >
            {bottomNavigationItems
              .map((item, index) => (
                <BottomNavigationAction
                  sx={{ fontSize: '1.5rem' }}
                  key={index}
                  icon={item.icon}
                  label={item.title}
                  onClick={() => {
                    if (item.href) router.push(item.href)
                    else toggleMobileDrawer()
                  }}
                />
              ))}
          </BottomNavigation>
        </Paper>
      </Hidden>
    </ThemeProvider>
  );
};

export default Layout;