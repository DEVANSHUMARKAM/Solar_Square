import React from 'react';
import { Box, Typography } from '@mui/material';

const HoverCard = ({ title, icon, description }) => {
  return (
    <Box
      sx={{
        width: { xs: '100%', sm: 260 },
        height: 280,
        padding: 3,
        borderRadius: '16px',
        backgroundColor: '#ffffff',
        boxShadow: 2,
        textAlign: 'center',
        transition: 'all 0.4s ease-in-out',
        cursor: 'pointer',
        '&:hover': {
          background: 'linear-gradient(97.83deg, #101F9D 6.22%, #11111C 87.68%)',
          color: '#ffffff',
          transform: 'translateY(-8px)',
          boxShadow: 6,
        },
      }}
    >
      <Box
        component="img"
        src={icon}
        alt={title}
        sx={{
          height: 56,
          width: 56,
          marginBottom: 2,
          transition: 'filter 0.3s',
        }}
      />
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          fontFamily: 'Poppins, sans-serif',
          mb: 1,
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default HoverCard;
