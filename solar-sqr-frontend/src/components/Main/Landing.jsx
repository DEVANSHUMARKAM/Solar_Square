import React from 'react';
import { Box, Typography } from '@mui/material';
import HeroBg from '../../assets/Hero-Image.png'; // Update path if needed

const HeroSection = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'calc(100vh - 80px)', // Adjust based on navbar height
        backgroundImage: `linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), url(${HeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#000', // fallback
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
      }}
    >
      <Box sx={{ color: '#ffffff', maxWidth: '800px', textAlign: 'center' }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 1000,
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
