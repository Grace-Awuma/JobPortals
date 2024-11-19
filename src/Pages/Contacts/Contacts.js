import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  TextField, 
  Button, 
  Box, 
  Grid, 
  useTheme,
  useMediaQuery,
  Snackbar,
  Alert
} from '@mui/material';
import { Email, Phone, LocationOn, Send } from '@mui/icons-material';
import Header from '../../Components/Layout/Headers';

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically handle the form submission
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ backgroundColor: theme.palette.grey[100], minHeight: '100vh' }}>
      <Header />
      <Container maxWidth="lg" sx={{ pt: 8, pb: 6 }}>
        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          We'd love to hear from you. Please fill out the form below or use our contact information.
        </Typography>
        
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Send us a message
                </Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Name"
                    margin="normal"
                    required
                    sx={{ backgroundColor: 'white' }}
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    margin="normal"
                    required
                    type="email"
                    sx={{ backgroundColor: 'white' }}
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    margin="normal"
                    required
                    multiline
                    rows={4}
                    sx={{ backgroundColor: 'white' }}
                  />
                  <Button 
                    variant="contained" 
                    color="primary" 
                    type="submit" 
                    sx={{ mt: 2 }}
                    startIcon={<Send />}
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Contact Information
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Email color="primary" sx={{ mr: 2 }} />
                  <Typography>contact@example.com</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Phone color="primary" sx={{ mr: 2 }} />
                  <Typography>+1 (555) 123-4567</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <LocationOn color="primary" sx={{ mr: 2 }} />
                  <Typography>123 Tech Street, San Francisco, CA 94105</Typography>
                </Box>
                <Box sx={{ mt: 4 }}>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0968870204795!2d-122.39997368468215!3d37.78779997975775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807abad77a61%3A0x1f35f5c413882a72!2sSan%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1621436591520!5m2!1sen!2sus" 
                    width="100%" 
                    height={isMobile ? "200" : "300"} 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                    title="Our Location"
                  ></iframe>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Message sent successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;