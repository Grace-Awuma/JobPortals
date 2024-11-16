import React from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';
import Header from '../../Components/Layout/Headers';

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
       <Header />
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Welcome to Job Portal
          </Typography>
          <Typography variant="body1">
            Find your dream job or the perfect candidate for your company.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Home;