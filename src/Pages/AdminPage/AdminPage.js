import React, { useState, useEffect } from 'react';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Grid,
  TextField,
  Button,
  Snackbar,
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { Add as AddIcon, Group as GroupIcon } from '@mui/icons-material';
import { createJobs, getAllUsers } from '../../Api';

export default function AdminPortal() {
  const [selectedTab, setSelectedTab] = useState('createJobs');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [employees, setEmployees] = useState([]);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const payLoad = {
      title: data.title,
      description: data.description,
      name: data.name,
      salary: data.salary,
    }
    try {
      const res = await createJobs(payLoad);
      if (res.status !== 201) throw new Error('Failed to create job');
      setSuccessMessage('Job created successfully!');
      reset(); // Reset the form fields
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    getAllUsers().then((user) => {
      setEmployees(user?.data?.data)
    })
  }, [selectedTab])

  console.log("employees", employees)

  
  const drawerWidth = 240;

  return (
    <Box sx={{ display: 'flex' }}>
      {/* App Bar */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Side Navigation */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <List>
          <ListItem button onClick={() => setSelectedTab('createJobs')}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Create Jobs" />
          </ListItem>
          <ListItem button onClick={() => setSelectedTab('viewEmployees')}>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="View Employees" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        {/* Create Jobs Tab */}
        {selectedTab === 'createJobs' && (
          <Container>
            <Typography variant="h4" gutterBottom>
              Create Job
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: 'Company name is required',
                      minLength: { value: 3, message: 'Minimum 3 characters required' },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Company Name"
                        error={!!errors.companyName}
                        helperText={errors.companyName?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="title"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: 'Job title is required',
                      minLength: { value: 5, message: 'Minimum 5 characters required' },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Job Title"
                        error={!!errors.jobTitle}
                        helperText={errors.jobTitle?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="description"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: 'Description is required',
                      minLength: { value: 10, message: 'Minimum 10 characters required' },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Description"
                        multiline
                        rows={4}
                        error={!!errors.description}
                        helperText={errors.description?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="salary"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: 'Salary is required',
                      validate: (value) => value > 0 || 'Salary must be greater than 0',
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Salary"
                        type="number"
                        error={!!errors.salary}
                        helperText={errors.salary?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" type="submit" fullWidth>
                    Save Job
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Container>
        )}

        {/* View Employees Tab */}
        {selectedTab === 'viewEmployees' && (
          <Container>
            <Typography variant="h4" gutterBottom>
              Employees
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Type</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {employees.map((employee) => (
                    <TableRow key={employee._id}>
                      <TableCell>{employee.fullName}</TableCell>
                      <TableCell>{employee.email}</TableCell>
                      <TableCell>{employee.isAdmin === true ? 'Admin' : 'User'}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
        )}

        {/* Snackbars */}
        <Snackbar
          open={!!successMessage}
          autoHideDuration={6000}
          onClose={() => setSuccessMessage('')}
        >
          <Alert severity="success" onClose={() => setSuccessMessage('')}>
            {successMessage}
          </Alert>
        </Snackbar>
        <Snackbar
          open={!!errorMessage}
          autoHideDuration={6000}
          onClose={() => setErrorMessage('')}
        >
          <Alert severity="error" onClose={() => setErrorMessage('')}>
            {errorMessage}
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}
