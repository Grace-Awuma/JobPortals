import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import JPMorgan from '../../assets/JPMorgan.jpg';
import Header from '../../Components/Layout/Headers';

const companies = [
  { id: 1, name: 'JP Morgan', image: 'https://img.freepik.com/premium-photo/glass-building-with-word-company-it_1295754-30727.jpg?w=1800' },
  { id: 2, name: 'Red Hat', image: 'https://www.logo.wine/a/logo/Red_Hat/Red_Hat-Logo.wine.svg' },
  { id: 3, name: 'Pizza Hut', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Pizza_Hut_international_logo_2014.svg/440px-Pizza_Hut_international_logo_2014.svg.png' },
];

const CompanyShowcase = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
       <Header />
      <Typography variant="h4" sx={{ mt: 7 }} gutterBottom>
        Company Showcase
      </Typography>
      <Grid container spacing={3}>
        {companies.map((company) => (
          <Grid item xs={12} sm={6} md={4} key={company.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                width='140'
                image={company.image}
                alt={company.name}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {company.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CompanyShowcase;