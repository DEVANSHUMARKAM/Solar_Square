import React from 'react';
import { Card, Typography, Box } from '@mui/material';

const StatCard = ({ icon, label, count, color }) => {
  return (
    <Card 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        p: 2, 
        boxShadow: 3, 
        borderRadius: 2,
        bgcolor: 'white'
      }}
    >
      <Box 
        sx={{ 
          mr: 2, 
          color: color, 
          display: 'flex', 
          fontSize: 40 
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography variant="h6" color="text.secondary">{label}</Typography>
        <Typography variant="h5" fontWeight="bold">{count}</Typography>
      </Box>
    </Card>
  );
};

export default StatCard;
