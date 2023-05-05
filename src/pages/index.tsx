import { useMenuItems } from '@/hooks/useMenuItems';
import { Card, CardContent, Container, Grid, Typography } from '@mui/material'
import Link from 'next/link';

export default function Home() {
  const menuItems = useMenuItems();

  return (
    <Container sx={{ marginTop: 2 }}>
      <Grid container spacing={3}>
        {menuItems.filter((el: any) => el.condition && el.href !== '/').map((item, index) => (
          <Grid item xs={12} md={4} lg={3} key={index}>
            <Link href={item.href} passHref>
              <Card variant="elevation">
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    {item.icon}
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
