import React from 'react';
import { Container, Typography, Card, CardContent, TextField, Button } from '@mui/material';
import Header from '../../Components/Layout/Headers';

const Contact = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
       <Header />
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>
          <form>
            <TextField
              fullWidth
              label="Name"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              required
              type="email"
            />
            <TextField
              fullWidth
              label="Message"
              margin="normal"
              required
              multiline
              rows={4}
            />
            <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Contact;