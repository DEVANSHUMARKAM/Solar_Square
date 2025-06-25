import React from 'react';
import { Box, Typography } from '@mui/material';
import OffGridBg from '../../assets/cropedhero.png'; // update path if needed

const OffGridIntroSection = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'calc(50vh - 5rem)', // updated height
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${OffGridBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: '#fff',
          fontWeight: 1000,
          fontFamily: 'Poppins, sans-serif',
          maxWidth: '1500px',
          fontSize: { xs: 24, md: 44 },
        }}
      >
        Off Grid Solar System For Home: Prices, Subsidy, ROI & Working
      </Typography>
    </Box>
  );
};

export default OffGridIntroSection;
