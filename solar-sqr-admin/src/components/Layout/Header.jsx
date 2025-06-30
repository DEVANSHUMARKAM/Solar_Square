import React from 'react';
import { AppBar, Tabs, Tab, Toolbar, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine current tab based on path
  const currentTab = location.pathname === '/leads' ? 1 : 0;

  const handleChange = (event, newValue) => {
    if (newValue === 0) {
      navigate('/dashboard');
    } else if (newValue === 1) {
      navigate('/leads');
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Solar Admin
        </Typography>
        <Tabs value={currentTab} onChange={handleChange} textColor="inherit" indicatorColor="secondary">
          <Tab label="Dashboard" />
          <Tab label="Leads" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
