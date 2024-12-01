import React, { useState } from 'react';
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

const jobListings = [
  {
    id: 1,
    title: 'Full Stack Developer',
    description: 'Join our dynamic team to work on cutting-edge technologies. Develop and maintain sophisticated web applications for our diverse client base.',
    lastUpdated: 'Last updated 2 days ago',
    applyLink: 'https://example.com/apply/full-stack-developer',
  },
  {
    id: 2,
    title: 'Data Scientist',
    description: 'Exciting opportunity for a skilled data scientist to work on groundbreaking AI projects. Apply machine learning techniques to solve complex business problems.',
    lastUpdated: 'Last updated 3 days ago',
    applyLink: 'https://example.com/apply/data-scientist',
  },
  {
    id: 3,
    title: 'UX/UI Designer',
    description: 'We are looking for a creative UX/UI designer to craft intuitive and visually appealing interfaces for our web and mobile applications.',
    lastUpdated:'Last updated 1 day ago',
    applyLink: 'https://example.com/apply/ux-ui-designer',
  },
  
  {
    id: 4,
    title: 'DevOps Engineer',
    description: 'Join our DevOps team to streamline our development processes, manage cloud infrastructure, and implement robust CI/CD pipelines.',
    lastUpdated: 'Last updated 4 days ago',
    applyLink: 'https://example.com/apply/devops-engineer',
  },

  {
    id: 5,
    title: 'Blockchain Developer',
    description: 'Exciting role for a blockchain enthusiast to develop decentralized applications and smart contracts for our fintech products.',
    lastUpdated: 'Last updated 2 days ago',
    applyLink: 'https://example.com/apply/blockchain-developer',
  },

  {
    id: 6,
    title: 'Machine Learning Engineer',
    description: 'We are seeking a talented ML engineer to develop and deploy advanced machine learning models for our AI-driven products.',
    lastUpdated: 'Last updated 1 day ago',
    applyLink: 'https://example.com/apply/machine-learning-engineer',
  },
];

function JobListings() {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState('');

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
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                  <Button size="small" color="primary" variant="contained" href={job.applyLink} target="_blank" rel="noopener noreferrer">
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

