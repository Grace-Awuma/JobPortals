import React from 'react';
import { 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Box, 
  Grid,
  styled,
  useTheme,
  useMediaQuery,
  
} from '@mui/material';
import Header from '../../Components/Layout/Headers';

const BackgroundImage = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: 'url("/placeholder.svg?height=1080&width=1920")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  opacity: 0.2,
  zIndex: -1,
});

const GradientOverlay = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  opacity: 0.9,
  zIndex: -1,
}));

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(3),
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(5px)',
  borderRadius: theme.shape.borderRadius,
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const features = [
    { title: 'Extensive Job Listings', description: 'Access thousands of job opportunities across various industries.' },
    { title: 'Seamless Application', description: 'Apply to multiple positions with just a few clicks.' },
    { title: 'Company Profiles', description: 'Explore detailed information about potential employers.' },
    { title: 'Career Resources', description: 'Access tools and advice to advance your professional growth.' },
  ];

  return (
    <Box sx={{ minHeight: '100vh', position: 'relative' }}>
      <BackgroundImage />
      <GradientOverlay />
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4, position: 'relative' }}>
        <StyledCard>
          <CardContent sx={{ py: 6, px: isMobile ? 2 : 4 }}>
            <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ color: 'white', fontWeight: 'bold', fontSize: isMobile ? '2.5rem' : '3.75rem' }}>
              About Us
            </Typography>
            <Typography variant="h5" align="center" sx={{ mb: 4, color: 'white', fontSize: isMobile ? '1.25rem' : '1.5rem' }}>
              Connecting Talent with Opportunity
            </Typography>
            <Typography variant="body1" align="center" sx={{ mb: 6, color: 'white', maxWidth: '800px', mx: 'auto' }}>
            We are a premier employment site committed to matching bright individuals with leading businesses across the globe. Our purpose is to enable businesses and job searchers to accomplish their objectives by streamlining and optimizing the hiring and job search processes.
            </Typography>
            <Grid container spacing={4}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <FeatureCard>
                    <Typography variant="h6" component="h3" align="center" sx={{ color: 'white', mb: 2 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" align="center" sx={{ color: 'white' }}>
                      {feature.description}
                    </Typography>
                  </FeatureCard>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </StyledCard>
      </Container>
    </Box>
  );
};

export default About;