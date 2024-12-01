import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  InputAdornment,
  Box,
  useTheme,
} from '@mui/material';
import { Search } from '@mui/icons-material';
import Header from '../../Components/Layout/Headers';
import { getAllJobs } from '../../Api';


function JobListings() {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [jobListings, setJobListings] = useState([]);


  useEffect(() => {
    getAllJobs().then((jobs) => {
      setJobListings(jobs?.data?.jobs || []);
    });
  }, []);

  const filteredJobs = jobListings.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ backgroundColor: theme.palette.grey[100], minHeight: '100vh' }}>
      <Header />
      <Container maxWidth="lg" sx={{ pt: 8, pb: 6 }}>
        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
          Job Listings
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Discover your next career opportunity in the tech industry
        </Typography>
        
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search for jobs or skills"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ mb: 4, mt: 2, backgroundColor: 'white' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />

        <Grid container spacing={4}>
          {filteredJobs.map((job) => (
            <Grid item xs={12} sm={6} md={4} key={job.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: 3 } }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {job.title}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {job.description}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    {job.lastUpdated}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between', padding: '16px' }}>
                  <Button size="small" disabled color="primary">
                     {job.name}
                  </Button>
                  <Button size="small" color="primary" variant="contained" href={""} target="_blank" rel="noopener noreferrer">
                    Apply Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default JobListings;

