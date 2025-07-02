//customers reviews

import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';

const testimonials = [
  {
    name: 'Shrikanth Aithala',
    society: 'Mont Vert Finesse CHSL',
    location: 'Pashan Pune',
    review:
      'We chose Solar Square after evaluating more than 10 other vendor proposals... Their team has exceeded our expectations.',
  },
  {
    name: 'Mr. Prashant',
    society: 'MC Purva Fairmont, HSR',
    location: 'Bengaluru, Karnataka',
    review:
      'We chose SolarSquare as our preferred vendor... I would recommend SolarSquare without hesitation.',
  },
  {
    name: 'Suresh Patel',
    society: 'Green Grove Residency',
    location: 'Ahmedabad, Gujarat',
    review:
      'SolarSquare impressed us with their knowledge... We are now saving significantly on electricity.',
  },
  {
    name: 'Anita Sharma',
    society: 'Skyline Heights',
    location: 'Indore, MP',
    review:
      'Their dedication to service and timely delivery was commendable... Great experience overall!',
  },
];

const loopedTestimonials = [...testimonials, ...testimonials];

const CustomerTestimonials = () => {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const totalSlides = loopedTestimonials.length / 2; 
    const container = sliderRef.current;
    const slideWidth = container.offsetWidth / 2; 

    container.style.transition = 'transform 0.8s ease-in-out';
    container.style.transform = `translateX(-${slideWidth * index}px)`;

    if (index >= totalSlides) {
      setTimeout(() => {
        container.style.transition = 'none';
        container.style.transform = `translateX(0px)`;
        setIndex(0);
      }, 900); 
    }
  }, [index]);

  return (
    <Box sx={{ overflow: 'hidden', py: 10, px: { xs: 2, md: 8 } }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 900,
          fontFamily: 'Poppins, sans-serif',
          mb: 6,
          textAlign: 'center',
        }}
      >
        A Glimpse of Our Customer’s Solar Journey
      </Typography>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexWrap: 'nowrap',
          overflow: 'hidden',
        }}
      >
        <Box
          ref={sliderRef}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            width: `${loopedTestimonials.length * 50}%`,
          }}
        >
          {loopedTestimonials.map((t, i) => (
            <Box
              key={i}
              sx={{
                flex: '0 0 50%',
                px: 2,
              }}
            >
              <Box
                sx={{
                  border: '1.5px solid #7b61ff',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  textAlign: 'left',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box sx={{ bgcolor: '#f3f6ff', p: 3 }}>
                  <Typography
                    sx={{
                      fontWeight: 900,
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: 18,
                      color: '#222',
                    }}
                  >
                    {t.name}
                  </Typography>
                  <Typography sx={{ fontSize: 15 }}>{t.society}</Typography>
                  <Typography sx={{ fontSize: 14, color: '#888' }}>{t.location}</Typography>
                </Box>
                <Box sx={{ bgcolor: '#fff', p: 3, minHeight: 180 }}>
                  <Typography sx={{ fontSize: 15, fontFamily: 'Poppins, sans-serif', color: '#333' }}>
                    “{t.review}”
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CustomerTestimonials;
