import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

// Replace with your actual image imports
import SafetyIcon1 from '../../assets/image_iso.png';
import SafetyIcon2 from '../../assets/image_iso_1.png';
import SafetyIcon3 from '../../assets/icon-18.png';

import Cert1 from '../../assets/icon-15.png';
import Cert2 from '../../assets/icon-17.png';
import Cert3 from '../../assets/icon-16.png';
import Cert4 from '../../assets/icon-14.png';

const SafetySection = () => {
  return (
    <Box sx={{ py: 10, px: { xs: 2, md: 6 }, textAlign: 'center', bgcolor: '#fff' }}>
      {/* Main Heading */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 1000,
          fontFamily: 'Poppins, sans-serif',
          color: '#000',
          mb: 2,
        }}
      >
        Your Safety, Our Obsession
      </Typography>

      {/* Subheading */}
      <Typography
        variant="body1"
        sx={{
          fontSize: 20,
          fontFamily: 'Poppins, sans-serif',
          color: '#555',
          mb: 6,
        }}
      >
        We ensure state-of-the-art safety measures during and after post-installation
      </Typography>

      {/* Safety Icons */}
      <Grid container spacing={4} justifyContent="center" sx={{ mb: 8 }}>
        {[ 
          { icon: SafetyIcon1, label: 'Safety Harness & Helmets' },
          { icon: SafetyIcon2, label: 'Fire Safety Compliant' },
          { icon: SafetyIcon3, label: 'Leakage-Free Anchoring' },
        ].map((item, index) => (
          <Grid item xs={12} sm={4} md={3} key={index}>
            <Box>
              <Box
                component="img"
                src={item.icon}
                alt={item.label}
                sx={{ width: 80, height: 80, mb: 2 }}
              />
              <Typography
                sx={{
                  fontWeight: 800,
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: 16,
                  color: '#333',
                }}
              >
                {item.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Certification Heading */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 1000,
          fontFamily: 'Poppins, sans-serif',
          fontSize: 34,
          color: '#000',
          mb: 4,
        }}
      >
        Certified by Leading Organizations
      </Typography>

      {/* Certification Logos */}
      <Grid container spacing={12} justifyContent="center">
        {[Cert1, Cert2, Cert3, Cert4].map((cert, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <Box
              component="img"
              src={cert}
              alt={`cert-${index}`}
              sx={{ width: '100%', maxWidth: 120, mx: 'auto' }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SafetySection;
