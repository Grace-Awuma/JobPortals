import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from './Components/Layout/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import JobListings from './Pages/JobListings/JobListings';
import Contact from './Pages/Contacts/Contacts';
import CompanyShowcase from './Pages/CompanyShowcase/CompanyShowcase';
import LoginPage from './Pages/Auth/LoginPage';
import AdminPage from './Pages/AdminPage/AdminPage';
import AdminPrivateRoute from './Pages/HOC/AdminPrivateRoute';
import UserPrivateRoute from './Pages/HOC/UserPrivateRoute';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={ <LoginPage /> } />
          <Route path="/home" element={
            <UserPrivateRoute>
              <Home />
            </UserPrivateRoute>
          } />
          <Route path="/about" element={
            <UserPrivateRoute>
              <About />
            </UserPrivateRoute>
          } />
          <Route path="/jobs" element={
            <UserPrivateRoute>
              <JobListings />
            </UserPrivateRoute>
          } />
          <Route path="/contact" element={
            <UserPrivateRoute>
              <Contact />
            </UserPrivateRoute>
          } />
          <Route path="/companies" element={
            <UserPrivateRoute>
              <CompanyShowcase />
            </UserPrivateRoute>
          } />
          <Route
            path="/admin"
            element={
              <AdminPrivateRoute>
                <AdminPage />
              </AdminPrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;