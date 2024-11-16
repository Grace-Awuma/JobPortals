import React from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1">
            We are a leading job portal connecting talented professionals with top companies.
            Our mission is to make the job search and recruitment process seamless and efficient.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default About;