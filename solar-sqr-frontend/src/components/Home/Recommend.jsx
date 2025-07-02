//recommendations of several customers

import React, { useEffect, useState, useRef } from 'react';
import { Box, Grid, Typography } from '@mui/material';

const reviews = [
  {
    quote: `I am a working person, but the SolarSquare team did everything perfectly even though I wasn’t present on the site. I was worried about the generation. But I am so excited now. My bills have gone down from Rs 4300 to Rs 500–700 a month. The team also comes home and regularly cleans my panels. They also helped me get a subsidy. I just had to fill a form and they did everything else.`,
    name: 'Braj Bhushan',
    location: 'Uttar Pradesh',
    system: 'Home solar system'
  },
  {
    quote: "Fantastic experience! Highly recommend their professionalism.",
    name: 'Shruti Mehta',
    location: 'Delhi',
    system: 'Commercial solar system'
  },
  {
    quote: "Fast installation, helpful staff, and clean execution.",
    name: 'Ajay Kumar',
    location: 'Pune',
    system: 'Housing society setup'
  },
];

const TestimonialSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const intervalRef = useRef(null);
  const hoverPause = useRef(false);

  const startAutoScroll = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        if (!hoverPause.current) {
          setStartIndex((prev) => (prev + 1) % reviews.length);
        }
      }, 3000);
    }
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  const activeReview = reviews[startIndex];
  const nextReview = reviews[(startIndex + 1) % reviews.length];

  return (
    <Box sx={{ py: 10, px: { xs: 2, md: '200px' }, backgroundColor: '#f5f5f5' }}>
      <Grid container spacing={4}>
        {/* Left Side */}
        <Grid item xs={12} md={6}>
          <Box sx={{ px: 5 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                fontSize: 55,
                fontFamily: 'Poppins, sans-serif',
                color: '#000',
                mb: 2,
              }}
            >
              90% of customers <br />recommend us!
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 25,
                color: '#000',
                mb: 4,
              }}
            >
              Don’t just believe us — read the reviews for yourself.
            </Typography>

            <Box
              sx={{
                width: '100%',
                height: '315px',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: 3,
              }}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/EUae_dU_FGE?si=DpZi7O3oFiX-AUtO"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </Box>
          </Box>
        </Grid>

        {/* Right Side */}
        <Grid item xs={12} md={6}>
          <Box
            onMouseEnter={() => {
              hoverPause.current = true;
              stopAutoScroll();
            }}
            onMouseLeave={() => {
              hoverPause.current = false;
              startAutoScroll();
            }}
            sx={{
              height: '350px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 3,
              transition: 'all 0.6s ease-in-out',
              overflow: 'hidden',
            }}
          >
            {[activeReview, nextReview].map((review, idx) => (
              <Box
                key={idx}
                sx={{
                  backgroundColor: idx === 0 ? '#101f9d' : '#e0e0e0',
                  color: idx === 0 ? '#fff' : '#333',
                  padding: 3,
                  borderRadius: 2,
                  boxShadow: idx === 0 ? 6 : 1,
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 500,
                  minHeight: '120px',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'all 0.5s ease',
                  textAlign: 'left',
                  whiteSpace: 'pre-wrap',
                }}
              >
                {review.quote}
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TestimonialSection;
