import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import BgImage from '../../assets/india-map-bg.png'; // background image
import IndiaMap from '../../assets/india-map.png'; // india map image

const IndiaPresenceSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${BgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 10 },
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        sx={{ maxWidth: '1300px', mx: 'auto' }}
      >
        {/* Left: India Map */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={IndiaMap}
            alt="India Map"
            sx={{
              width: '100%',
              maxWidth: 500,
              mx: 'auto',
              display: 'block',
            }}
          />
        </Grid>

        {/* Right: Text */}
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              fontWeight: 1000,
              fontSize: { xs: 24, md: 40 },
              fontFamily: 'Poppins, sans-serif',
              textAlign: { xs: 'center', md: 'left' },
              mt: { xs: 4, md: 0 },
            }}
          >
            <Box component="span" sx={{ color: '#000' }}>
              We are in{' '}
            </Box>
            <Box component="span" sx={{ color: '#00bdff' }}>
              20+ cities & UTs across India!
            </Box>
          </Typography>

        </Grid>
      </Grid>
    </Box>
  );
};

export default IndiaPresenceSection;
