import React, { useEffect, useState, useRef } from 'react';
import { Box, Grid, Typography } from '@mui/material';

const reviews = [
  "I am happy to acknowledge that SolarSquare has met the strictest Quality &amp; Safety norms dictated by the Global Standards of Johnson &amp; Johnson.",
  "Fantastic experience! Highly recommend their professionalism.",
  "Our electricity bill is now zero. Can’t believe it!",
  "Fast installation, helpful staff, and clean execution.",
  "SolarSquare’s team was efficient and courteous.",
  "Their pricing was transparent and worth every rupee.",
  "Customer support was responsive even post-installation.",
  "Everything was explained clearly before and after setup.",
  "We got net metering set up fast — loved it.",
  "Service exceeded expectations — from start to finish.",
];

const TestimonialSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const intervalRef = useRef(null);
  const reviewBoxRef = useRef(null);
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
    <Box
      sx={{
        py: 10,
        px: { xs: 2, md: '200px' },
        backgroundColor: '#f5f5f5',
      }}
    >
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

        {/* Right Side: Auto-Scrolling Reviews */}
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
            ref={reviewBoxRef}
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
            <Box
              sx={{
                backgroundColor: '#101f9d',
                color: '#fff',
                padding: 3,
                borderRadius: 2,
                boxShadow: 6,
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                minHeight: '120px',
                display: 'flex',
                alignItems: 'center',
                transition: 'all 0.5s ease',
              }}
            >
              {activeReview}
            </Box>

            <Box
              sx={{
                backgroundColor: '#e0e0e0',
                color: '#333',
                padding: 3,
                borderRadius: 2,
                fontFamily: 'Poppins, sans-serif',
                minHeight: '120px',
                display: 'flex',
                alignItems: 'center',
                transition: 'all 0.5s ease',
              }}
            >
              {nextReview}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TestimonialSection;
