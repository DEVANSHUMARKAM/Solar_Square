import React from 'react';
import { Box, Typography } from '@mui/material';
import SolarRoof from '../assets/landing.jpg';

const HeroSection = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'calc(100vh - 80px)', // adjust if your navbar height is different
        backgroundImage: `url(${SolarRoof})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: { xs: 4, md: 20 },
        backgroundColor: '#000', // optional fallback
      }}
    >
      <Box sx={{ color: '#ffffff', maxWidth: '600px' }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontFamily: 'Poppins, sans-serif',
            fontSize: { xs: '2rem', md: '3.5rem' },
            lineHeight: 1.2,
          }}
        >
          Still paying for electricity?
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontWeight: 400,
            fontFamily: 'Poppins, sans-serif',
            fontSize: { xs: '1.2rem', md: '1.8rem' },
            marginTop: 2,
          }}
        >
          Switch to solar and let the sun pay the bills
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;
