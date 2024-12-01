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

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/jobs" element={<JobListings />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/companies" element={<CompanyShowcase />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;