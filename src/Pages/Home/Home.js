import React from 'react';
import { 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Button, 
  Box,
  styled,
  useTheme,
  useMediaQuery
} from '@mui/material';
import Header from '../../Components/Layout/Headers';
import { Link } from 'react-router-dom';
import Image1 from '../../assets/Image1.webp';

const BackgroundImage = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: `url(${Image1})`, 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  zIndex: -1,
});


const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
}));

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ minHeight: '100vh', position: 'relative' }}>
      <BackgroundImage />
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4, position: 'relative' }}>
        <StyledCard>
          <CardContent sx={{ py: 6, px: isMobile ? 2 : 4 }}>
            <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ color: '#00A3C2', fontWeight: 'bold', fontSize: isMobile ? '2.5rem' : '3.75rem' }}>
              Welcome to JobScape
            </Typography>
            <Typography variant="h5" align="center" sx={{ mb: 4, color: '#00A3C2', fontSize: isMobile ? '1.25rem' : '1.5rem' }}>
              Find your dream job or the perfect candidate for your company.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'center', gap: 2 }}>
              <Button 
                component={Link}
                to="/jobs"
                variant="contained" 
                color="secondary" 
                size="large"
                sx={{ 
                  borderRadius: '50px',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  '&:hover': { backgroundColor: theme.palette.secondary.light }
                }}
              >
                Find Jobs
              </Button>
              <Button 
                component={Link}
                to="/companies"
                variant="outlined" 
                size="large"
                sx={{ 
                  color: 'white', 
                  borderColor: 'white',
                  borderRadius: '50px',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
                }}
              >
                Explore Companies
              </Button>
            </Box>
          </CardContent>
        </StyledCard>
      </Container>
    </Box>
  );
};

export default Home;