//landing page of commercial page

import { Box, Typography, Button } from '@mui/material';
import BgImage from '../../assets/commercial-banner.png'; 

const CommercialHero = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        background: `linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), url(${BgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        color: '#fff',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 800,
          fontFamily: 'Poppins, sans-serif',
          mb: 3,
        }}
      >
        India's top companies choose SolarSquare.
      </Typography>

      <Button
        variant="contained"
        sx={{
          background: 'linear-gradient(90deg, #101F9D, #11111C)',
          borderRadius: '50px',
          px: 4,
          py: 1.5,
          fontSize: 16,
          fontWeight: 600,
          fontFamily: 'Poppins, sans-serif',
          color: '#fff',
          textTransform: 'none',
          '&:hover': {
            background: 'linear-gradient(90deg, #0d1880, #0d0d1a)',
          },
        }}
      >
        Get a quote
      </Button>
    </Box>
  );
};

export default CommercialHero;
