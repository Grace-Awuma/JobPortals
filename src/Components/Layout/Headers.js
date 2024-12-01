import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { clearUserData } from '../../redux/userSlice';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearUserData();
    navigate('/');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          JobScape
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/home">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/jobs">Jobs</Button>
          <Button color="inherit" component={Link} to="/companies">Companies</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
          <Button
            onClick={handleLogout}
            sx={{
              color: '#ffffff',
              backgroundColor: '#ff6f91',
              fontWeight: 'bold',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#ff9671',
              },
            }}
          >
            Log out
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;