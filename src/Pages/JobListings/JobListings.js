import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  TextField,
  InputAdornment,
  Box,
  useTheme,
} from '@mui/material';
import { Search, LocationOn, Work } from '@mui/icons-material';
import Header from '../../Components/Layout/Headers';

const jobListings = [
  {
    id: 1,
    title: 'Senior React Developer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'We are seeking an experienced React developer to lead our front-end team.',
    skills: ['React', 'Redux', 'JavaScript', 'Node.js'],
  },
  {
    id: 2,
    title: 'Data Scientist',
    company: 'AI Innovations',
    location: 'New York, NY',
    type: 'Full-time',
    description: 'Join our team to work on cutting-edge machine learning projects.',
    skills: ['Python', 'TensorFlow', 'SQL', 'Data Visualization'],
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    company: 'CloudSolutions',
    location: 'Seattle, WA',
    type: 'Full-time',
    description: 'Help us build and maintain our cloud infrastructure and CI/CD pipelines.',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins'],
  },
  {
    id: 4,
    title: 'UX/UI Designer',
    company: 'DesignMasters',
    location: 'Los Angeles, CA',
    type: 'Full-time',
    description: 'Create beautiful and intuitive user interfaces for our web and mobile applications.',
    skills: ['Figma', 'Adobe XD', 'Sketch', 'User Research'],
  },
  {
    id: 5,
    title: 'Blockchain Developer',
    company: 'CryptoTech',
    location: 'Miami, FL',
    type: 'Full-time',
    description: 'Develop and implement blockchain solutions for our fintech products.',
    skills: ['Solidity', 'Ethereum', 'Smart Contracts', 'Web3.js'],
  },
  {
    id: 6,
    title: 'Full Stack Java Developer',
    company: 'Enterprise Solutions',
    location: 'Chicago, IL',
    type: 'Full-time',
    description: 'Build robust enterprise applications using Java and related technologies.',
    skills: ['Java', 'Spring Boot', 'React', 'MySQL'],
  },
];

function JobListings() {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredJobs = jobListings.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
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
          placeholder="Search for jobs, companies, or skills"
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
                  <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                    <Work fontSize="small" sx={{ mr: 1, verticalAlign: 'middle' }} />
                    {job.company}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    <LocationOn fontSize="small" sx={{ mr: 1, verticalAlign: 'middle' }} />
                    {job.location}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {job.description}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    {job.skills.map((skill) => (
                      <Chip key={skill} label={skill} size="small" sx={{ mr: 1, mb: 1 }} />
                    ))}
                  </Box>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                  <Button size="small" color="primary">
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