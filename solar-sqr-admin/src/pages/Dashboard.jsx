import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import InsightsIcon from '@mui/icons-material/Insights';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const Dashboard = () => {
  return (
    <Box p={3}>
      {/* Header / greeting */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        Good morning, Admin!
      </Typography>

      {/* Stats cards */}
      <Grid container spacing={3}>
        {/* Total Installations */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              bgcolor: '#f5f5f5',
              borderRadius: 2,
            }}
            elevation={3}
          >
            <InsightsIcon sx={{ fontSize: 40, color: '#1976d2' }} />
            <Typography variant="h5" fontWeight="bold">
              120
            </Typography>
            <Typography color="text.secondary">Total Installations</Typography>
          </Paper>
        </Grid>

        {/* Pending Installations */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              bgcolor: '#f5f5f5',
              borderRadius: 2,
            }}
            elevation={3}
          >
            <PendingActionsIcon sx={{ fontSize: 40, color: '#ffa000' }} />
            <Typography variant="h5" fontWeight="bold">
              15
            </Typography>
            <Typography color="text.secondary">Pending Installations</Typography>
          </Paper>
        </Grid>

        {/* Total Leads */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              bgcolor: '#f5f5f5',
              borderRadius: 2,
            }}
            elevation={3}
          >
            <GroupAddIcon sx={{ fontSize: 40, color: '#388e3c' }} />
            <Typography variant="h5" fontWeight="bold">
              350
            </Typography>
            <Typography color="text.secondary">Total Leads</Typography>
          </Paper>
        </Grid>

        {/* Revenue this month */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              bgcolor: '#f5f5f5',
              borderRadius: 2,
            }}
            elevation={3}
          >
            <MonetizationOnIcon sx={{ fontSize: 40, color: '#2e7d32' }} />
            <Typography variant="h5" fontWeight="bold">
              ₹4,50,000
            </Typography>
            <Typography color="text.secondary">Revenue this month</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
