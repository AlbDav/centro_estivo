// pages/404.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          404 - Page Not Found
        </Typography>
            <Link href="/" passHref>
				<span>Home</span>
            </Link>
        <Link href="/">
          Go to the homepage
        </Link>
      </Box>
    </Container>
  );
};

export default Custom404;