import React, { useEffect, useRef } from 'react';
import { Box, Grid, Typography } from '@mui/material';

const reviews = [
  {
    quote: `I am a working person, but the SolarSquare team did everything perfectly even though I wasn’t present on the site. My bills have gone down from Rs 4300 to Rs 500–700 a month.`,
    name: 'Braj Bhushan',
    location: 'Uttar Pradesh',
    system: 'Home solar system',
  },
  {
    quote: "Fantastic experience! Highly recommend their professionalism.",
    name: 'Shruti Mehta',
    location: 'Delhi',
    system: 'Commercial solar system',
  },
  {
    quote: "Fast installation, helpful staff, and clean execution.",
    name: 'Ajay Kumar',
    location: 'Pune',
    system: 'Housing society setup',
  },
  {
    quote: "Smooth onboarding, brilliant service overall!",
    name: 'Ritika Jain',
    location: 'Nagpur',
    system: 'Home solar system',
  },
  {
    quote: "They handled the whole process smoothly. Subsidy, net metering, and installation.",
    name: 'Suresh Verma',
    location: 'Bhopal',
    system: 'Home solar system',
  },
];

const TestimonialSection = () => {
  const scrollRef = useRef(null);
  const pauseScroll = useRef(false);

  useEffect(() => {
    const scrollBox = scrollRef.current;

    // Duplicate content for seamless loop
    const contentClone = scrollBox.innerHTML;
    scrollBox.innerHTML += contentClone;

    let scrollY = 0;
    let animationFrameId;

    const scrollStep = () => {
      if (!pauseScroll.current) {
        scrollY += 0.5; // speed
        if (scrollY >= scrollBox.scrollHeight / 2) {
          scrollY = 0;
        }
        scrollBox.scrollTop = scrollY;
      }
      animationFrameId = requestAnimationFrame(scrollStep);
    };

    scrollStep();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

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

        {/* Right Side Auto-Scrolling Reviews */}
        <Grid item xs={12} md={6}>
          <Box
            ref={scrollRef}
            onMouseEnter={() => (pauseScroll.current = true)}
            onMouseLeave={() => (pauseScroll.current = false)}
            sx={{
              height: '370px',
              overflow: 'hidden',
              background: 'linear-gradient(90.16deg, #101f9d -15.84%, #11111c 122.54%)',
              borderRadius: '12px',
              px: 2,
              py: 2,
              maxWidth: '100%',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': { display: 'none' },
            }}
          >
            {reviews.concat(reviews).map((r, i) => (
              <Box
                key={i}
                className="review-card"
                sx={{
                  transition: 'all 0.3s ease-out',
                  background: '#fff',
                  borderRadius: '16px',
                  boxShadow: 2,
                  mb: 3,
                  p: 3,
                  fontFamily: 'Poppins, sans-serif',
                  textAlign: 'center',
                  transform: 'scale(1)',
                  opacity: 0.9,
                }}
              >
                <Typography
                  sx={{
                    fontSize: '15px',
                    mb: 1,
                    whiteSpace: 'normal',
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word',
                    color: '#333',
                  }}
                >
                  “{r.quote}”
                </Typography>
                <Typography sx={{ fontWeight: 600, fontSize: 14, color: '#555' }}>
                  – {r.name}, {r.location} <br />({r.system})
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TestimonialSection;
