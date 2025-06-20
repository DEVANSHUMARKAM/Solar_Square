// src/components/WhyChooseSolar.jsx
import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import IconFinance from '../assets/emi.svg';
import IconStorm from '../assets/cyclone.svg';
import IconLeak from '../assets/waterleak.svg';
import IconMaintain from '../assets/maintenance.svg';

const data = [
  {
    icon: IconFinance,
    title: 'Easy Financing Plans',
    description: 'Switching to solar made easy & affordable with our EMI plans',
  },
  {
    icon: IconStorm,
    title: 'Cyclone-Proof, Safe Rooftop Solar',
    description: (
        <>
          Safe installations that can handle scary storms and<br />
          winds up to 170 kmph speeds
        </>
      ),
  },
  {
    icon: IconLeak,
    title: '₹1 Lakh Guarantee Against Water Leakage',
    description: (
      <>
        Systems secured to your roof with “chemical anchoring” to get<br />
        prevent water leakage on your roof
      </>
    ),
  },
  {
    icon: IconMaintain,
    title: '5-Year Professional Maintenance Included',
    description: 'Quarterly deep cleaning, health checks & repairs included',
  },
];

const WhyChooseSolar = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, sm: 4 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box sx={{ maxWidth: '1100px', width: '100%' }}>
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: 1000,
            fontFamily: 'Poppins, sans-serif',
            mb: 6,
          }}
        >
          Why choose SolarSquare for your solar installation
        </Typography>

        <Grid container spacing={6}>
          {data.map((item, index) => (
            <Grid key={index} item xs={12} md={6}>
              <Box sx={{ display: 'flex', gap: 4, alignItems: 'flex-start' }}>
                <Box
                  component="img"
                  src={item.icon}
                  alt={item.title}
                  sx={{ width: 60 }}
                />
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 900, fontFamily: 'Poppins, sans-serif' }}
                  >
                    {item.title}
                  </Typography>
                  <Typography sx={{ mt: 1, color: '#444', fontFamily: 'Poppins, sans-serif' }}>
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box textAlign="center" mt={6}>
          <Button
            component={Link}
            to="/know-more"
            variant="contained"
            sx={{
              backgroundColor: '#101f9d',
              color: '#fff',
              px: 5,
              py: 1.5,
              borderRadius: '50px',
              fontSize: 16,
              fontWeight: 600,
              fontFamily: 'Poppins, sans-serif',
              '&:hover': {
                backgroundColor: '#0d187d',
              },
            }}
          >
            Know more
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default WhyChooseSolar;
