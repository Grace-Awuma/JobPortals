import React from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';
import Header from '../../Components/Layout/Headers';

const jobPosts = [
  { id: 1, title: 'Software Engineer', skills: 'React, Node.js', salary: '$80,000 - $120,000' },
  { id: 2, title: 'Data Scientist', skills: 'Python, Machine Learning', salary: '$90,000 - $130,000' },
  { id: 3, title: 'UX Designer', skills: 'Figma, Adobe XD', salary: '$70,000 - $100,000' },
];

const JobListings = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Header />
      <Typography variant="h4" sx={{ mt: 6 }} gutterBottom>
        Job Listings
      </Typography>
      <Grid container spacing={3}>
        {jobPosts.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {job.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Skills: {job.skills}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Salary: {job.salary}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default JobListings;