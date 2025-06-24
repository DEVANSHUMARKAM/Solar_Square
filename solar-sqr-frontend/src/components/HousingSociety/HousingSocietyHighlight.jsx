import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import GodrejImage from '../../assets/Seawood-1-min.png'; // Update path if needed

const HousingSocietyHighlight = () => {
  return (
    <Box sx={{ py: 10, px: { xs: 2, md: 8 }, bgcolor: '#fff' }}>
      {/* Section Headings */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 1000,
            fontFamily: 'Poppins, sans-serif',
            color: '#000',
            mb: 1,
          }}
        >
          Sneak-Peek Into Our Housing Societies With Big Savings
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#444',
            fontSize: 22,
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          200+ Housing societies across 20+ cities have switched to solar with us.
        </Typography>
      </Box>

      {/* Image + Description Block */}
      <Grid container spacing={6} alignItems="center" justifyContent="center">
        {/* Left Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={GodrejImage}
            alt="Godrej Infinity Housing Society"
            sx={{
              width: '100%',
              maxWidth: 600,
              borderRadius: '20px',
              boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
              display: 'block',
              mx: 'auto',
            }}
          />
        </Grid>

        {/* Right Description */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: 'left', maxWidth: 550, mx: 'auto' }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 1000,
                fontFamily: 'Poppins, sans-serif',
                fontSize: 28,
                mb: 2,
                color: '#101f9d',
              }}
            >
              Godrej Infinity Housing Society
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 18,
                color: '#555',
                mb: 4,
                lineHeight: 1.6,
              }}
            >
              This is our largest CHS installation in Pune, with a 400 kW solar system installed across
              common areas. This large-scale system is poised to deliver significant savings for society.
            </Typography>

            {/* Stats 2x2 */}
            <Grid container spacing={3}>
              {[
                { label: 'May 2023', desc: 'Commissioned' },
                { label: '₹64,89,000', desc: 'Lifetime Savings' },
                { label: 'Just 1 year', desc: 'Time to Break Even' },
                { label: '₹60 lakhs', desc: 'Subsidy Received' },
              ].map((item, index) => (
                <Grid item xs={6} key={index}>
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: 18,
                      color: '#000',
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 15,
                      color: '#666',
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HousingSocietyHighlight;
