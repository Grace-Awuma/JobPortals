import React from 'react';
import { Container, 
         Typography, 
         Card, 
         CardContent, 
         CardMedia, 
         Grid2, 
         Box, 
         Button, 
         useTheme, 
         useMediaQuery 
} from '@mui/material';
import Header from '../../Components/Layout/Headers';
import Company1 from '../../assets/Company1.webp';
import Company2 from '../../assets/Company2.svg';
import Company3 from '../../assets/Company3.png';
import Company4 from '../../assets/Company4.png';
import Company5 from '../../assets/Company5.jpg';
import Company6 from '../../assets/Company6.png';

const companies = [
  { id: 1, 
    name: 'JP Morgan', 
    image: Company1, 
    description: 'Global leader in financial services' 
  },
  { id: 2, 
    name: 'Red Hat', 
    image: Company2, 
    description: 'Open source software solutions provider' 
  },
  { id: 3, 
    name: 'Pizza Hut', 
    image: Company3, 
    description: 'Iconic pizza restaurant chain' 
  },
  { id: 4, 
    name: 'Google', 
    image: Company4, 
    description: 'Leading technology company and search engine' 
  },
  { id: 5, 
    name: 'Tesla', 
    image: Company5, 
    description: 'Electric vehicle and clean energy company' 
  },
  { id: 6, 
    name: 'Amazon', 
    image: Company6, 
    description: 'E-commerce and cloud computing giant' 
  },
];

const CompanyShowcase = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ backgroundColor: theme.palette.grey[100], minHeight: '100vh' }}>
      <Header />
      <Container maxWidth="lg" sx={{ pt: 8, pb: 6 }}>
        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
          Company Showcase
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Explore our featured companies and discover exciting career opportunities.
        </Typography>
        <Grid2 container spacing={4} sx={{ mt: 4 }}>
          {companies.map((company) => (
            <Grid2 item xs={12} sm={6} md={4} key={company.id}>
              <Card sx={{ height: '100%', width: '350px', display: 'flex', flexDirection: 'column', transition: '0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <CardMedia
                  component="img"
                  height={isSmallScreen ? '140' : '200'}
                  image={company.image}
                  alt={company.name}
                  sx={{
                    width: '100%',
                    objectFit: 'fill', // Ensures image scales properly within the container
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {company.name}
                  </Typography>
                  <Typography>
                    {company.description}
                  </Typography>
                </CardContent>
                <Box sx={{ p: 2 }}>
                  <Button variant="contained" color="primary" fullWidth>
                    Learn More
                  </Button>
                </Box>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
};

export default CompanyShowcase;