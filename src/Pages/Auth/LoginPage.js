import React, { useState } from 'react';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../Api';
import { ToastContainer, toast } from 'react-toastify';
import { Oval } from 'react-loader-spinner';
import 'react-toastify/dist/ReactToastify.css';
import backgroundImage from '../../assets/background.jpg';

const LoginPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); // Loader state
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true); // Show loader
    try {
      const payload = {
        email: data.email,
        password: data.password,
      };

      const res = await loginUser(payload);

      console.log('res', res)

      if (res.status === 200) {
        toast.success('Login successful!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        localStorage.setItem('user_token', res?.data?.token );
        navigate('/home');
      } else {
        toast.error(res?.response?.data?.msg || 'Login failed. Please try again.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      toast.error(error?.response?.data?.msg || 'An error occurred. Please try again later.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.error("error caught:", error);
    } finally {
      setIsLoading(false); // Hide loader
    }
  };

  return (
      <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Card
        sx={{
          width: '100%',
          padding: '2rem',
          borderRadius: '16px',
          backgroundColor: '#ffffff',
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: '#ff6f91',
            }}
          >
            Welcome Back!
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              marginBottom: '2rem',
              color: '#ff9671',
            }}
          >
            Login to continue
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email Field */}
            <Box sx={{ marginBottom: '1rem' }}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Enter a valid email address',
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    variant="outlined"
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : ''}
                    sx={{
                      backgroundColor: '#f7f7f7',
                      borderRadius: '8px',
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: '#ffc75f' },
                        '&:hover fieldset': { borderColor: '#ff9671' },
                      },
                    }}
                  />
                )}
              />
            </Box>

            {/* Password Field */}
            <Box sx={{ marginBottom: '1.5rem' }}>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{
                  required: 'Password is required',
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters',
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    error={!!errors.password}
                    helperText={errors.password ? errors.password.message : ''}
                    sx={{
                      backgroundColor: '#f7f7f7',
                      borderRadius: '8px',
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: '#ffc75f' },
                        '&:hover fieldset': { borderColor: '#ff9671' },
                      },
                    }}
                  />
                )}
              />
            </Box>

            {/* Login Button */}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                padding: '0.75rem',
                backgroundColor: isLoading ? '#ccc' : '#ff6f91',
                fontWeight: 'bold',
                fontSize: '1rem',
                textTransform: 'none',
                borderRadius: '8px',
                '&:hover': { backgroundColor: isLoading ? '#ccc' : '#ff9671' },
              }}
              disabled={isLoading} // Disable button while loading
            >
              {isLoading ? (
                <Oval
                  height={20}
                  width={20}
                  color="#ffffff"
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="#ffffff"
                  strokeWidth={2}
                  strokeWidthSecondary={2}
                />
              ) : (
                'Login'
              )}
            </Button>
          </form>

          {/* Signup Link */}
          <Typography
            variant="body2"
            sx={{
              textAlign: 'center',
              marginTop: '1.5rem',
              color: '#555',
            }}
          >
            Don’t have an account?{' '}
            <a
              href="/signup"
              style={{ color: '#ff6f91', textDecoration: 'none', fontWeight: 'bold' }}
            >
              Sign up
            </a>
          </Typography>
        </CardContent>
      </Card>

      <ToastContainer />
    </Container>
    </Box>
  );
};

export default LoginPage;
