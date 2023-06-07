import { useAuth } from '@/hooks/useAuth';
import { useMenuItems } from '@/hooks/useMenuItems';
import { Box, Card, CardContent, CircularProgress, Container, Grid, Typography } from '@mui/material'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Home() {
  const menuItems = useMenuItems();
  const [authChecked, setAuthChecked] = useState(false);
  const { isUserLogged } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isUserLogged) {
      setAuthChecked(true);
    } else if (isUserLogged === false) {
      router.push({ pathname: '/account', query: { redirect: router.pathname } });
    }
  }, [isUserLogged]);

  if (!authChecked) {
    return (
      <Box height="calc(100vh - 64px)" display="flex" alignItems="center" justifyContent="center">
        <CircularProgress color="secondary" size={60} />
      </Box>
    )
  }

  return (
    <Container sx={{ marginTop: 2 }}>
      <Grid container spacing={3}>
        {menuItems.filter((el: any) => el.condition && el.href !== '/').map((item, index) => (
          <Grid item xs={12} md={4} lg={3} key={index}>
            <Link href={item.href} passHref>
              <Card variant="elevation">
                <CardContent>
                  <Typography variant="h2" color="textSecondary" textAlign="center">
                    {item.icon}
                  </Typography>
                  <Typography variant="h5" color="textPrimary" textAlign="center">
                    {item.title}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
