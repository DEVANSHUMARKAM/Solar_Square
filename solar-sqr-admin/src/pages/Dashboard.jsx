import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import StatCard from '../components/Dashboard/StatCard';
import GroupIcon from '@mui/icons-material/Group';
import BusinessIcon from '@mui/icons-material/Business';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import HouseIcon from '@mui/icons-material/House';
import axios from 'axios';

const Dashboard = () => {
  const [counts, setCounts] = useState({
    total: 0,
    commercial: 0,
    housing: 0,
    residential: 0
  });

  useEffect(() => {
    axios.get('http://localhost:8080/api/stats/counts')
      .then(res => {
        setCounts(res.data);
      })
      .catch(err => {
        console.error('Failed to fetch counts:', err);
      });
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard 
            icon={<GroupIcon fontSize="inherit" />} 
            label="Total Leads" 
            count={counts.total} 
            color="#1976d2" 
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard 
            icon={<HomeWorkIcon fontSize="inherit" />} 
            label="Housing Leads" 
            count={counts.housing} 
            color="#f57c00" 
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard 
            icon={<BusinessIcon fontSize="inherit" />} 
            label="Commercial Leads" 
            count={counts.commercial} 
            color="#388e3c" 
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard 
            icon={<HouseIcon fontSize="inherit" />} 
            label="Residential Leads" 
            count={counts.residential} 
            color="#d32f2f" 
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
