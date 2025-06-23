import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import placeholderImage from '../../assets/team-collage.png'; // Replace with your team image

const highlights = [
  {
    title: '4.8',
    description: 'rating on Google with 6000+ reviews',
  },
  {
    title: '10+',
    description: 'years of experience',
  },
  {
    title: '25,000+',
    description: 'homes solarised',
  },
  {
    title: '₹90+ Cr',
    description: 'Savings for families across India\n(2020 – 2025)',
  },
];

const WhoWeAreSection = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: 7, textAlign: 'center' }}>
      {/* Heading */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 1000,
          fontFamily: 'Poppins, sans-serif',
          mb: 3,
        }}
      >
        Who are we?
      </Typography>

      {/* Image */}
      <Box
        component="img"
        src={placeholderImage}
        alt="Team of SolarSquare"
        sx={{
          maxWidth: '100%',
          width: '1000px',
          height: 'auto',
          mb: 4,
        }}
      />

      {/* Subheading */}
      <Typography
        variant="body1"
        sx={{
          fontSize: 18,
          fontFamily: 'Poppins, sans-serif',
          maxWidth: 1200,
          mx: 'auto',
          mb: 6,
        }}
      >
        We are a group of 1000+ engineers, MBAs, scientists, creative thinkers driven by the single vision of accelerating adoption of solar in homes.
      </Typography>

      {/* Highlight Cards */}
      <Grid container spacing={3} justifyContent="center">
        {highlights.map((item, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Box
              sx={{
                backgroundColor: '#f1f1f1',
                borderRadius: '16px',
                py: 3,
                px: 2,
                height: '100%',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 1000,
                  fontSize: 50,
                  color: '#440099',
                  fontFamily: 'Poppins, sans-serif',
                  mb: 1,
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  whiteSpace: 'pre-line',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: 20,
                }}
              >
                {item.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhoWeAreSection;
