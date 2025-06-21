// src/components/TestimonialSection.jsx
import React from 'react';
import { Box, Typography, Grid, Avatar } from '@mui/material';

// Import images
import QuoteLeft from '../assets/air-quotes.png';
import QuoteRight from '../assets/air-quotes.png';
import DirectorImg from '../assets/n-krishnamoorthy.png';
import CarRoadImage from '../assets/moving-van.png';

const TestimonialSection = () => {
    return (
      <Box sx={{ py: 10, textAlign: 'center', bgcolor: '#fff' }}>
        {/* Testimonial Quote */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            mb: 4,
            px: 2,
            flexWrap: 'wrap',
          }}
        >
          <Box
            component="img"
            src={QuoteLeft}
            alt="Left Quote"
            sx={{ width: 80, height: 'auto', mr: 2 }}
          />
          <Typography
            variant="h5"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              maxWidth: '900px',
              color: '#222',
              fontSize: { xs: 18, sm: 34 },
              lineHeight: 1.5,
            }}
          >
            The solar installation by SolarSquare is one of those rare projects, where I have not had
            to get involved during the execution phase.
          </Typography>
          <Box
            component="img"
            src={QuoteRight}
            alt="Right Quote"
            sx={{
              width: 80,
              height: 'auto',
              ml: 2,
              transform: 'rotate(180deg)',
            }}
          />
        </Box>
  
        {/* Director Info */}
        <Grid container justifyContent="center" alignItems="center" spacing={4}>
          <Grid item>
            <Avatar
              src={DirectorImg}
              alt="Director"
              sx={{
                width: 140,
                height: 140,
                borderRadius: '12px',
              }}
            />
          </Grid>
          <Grid item>
            <Typography
              sx={{
                fontWeight: 1000,
                fontFamily: 'Poppins, sans-serif',
                fontSize: 20,
                color: '#3A0CA3',
              }}
            >
              N Krishnamoorthy,
            </Typography>
            <Typography
              sx={{
                fontWeight: 800,
                fontFamily: 'Poppins, sans-serif',
                fontSize: 18,
                color: '#222',
              }}
            >
              Director, TVS & Sons
            </Typography>
          </Grid>
        </Grid>
  
        {/* Cityscape Car Image */}
        <Box
          component="img"
          src={CarRoadImage}
          alt="Cityscape with Car"
          sx={{
            width: '100%',
            mt: 25,
          }}
        />
      </Box>
    );
  };
export default TestimonialSection;
