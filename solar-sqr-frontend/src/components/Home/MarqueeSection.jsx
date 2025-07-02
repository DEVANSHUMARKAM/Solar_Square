//brand trusted by severla companies

import React, { useRef, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

const companies = [
  {
    name: 'Decor',
    logo: 'https://sse-website.s3.ap-south-1.amazonaws.com/trusted-by/ddecore.png',
  },
  {
    name: 'TVS',
    logo: 'https://sse-website.s3.ap-south-1.amazonaws.com/trusted-by/tvs.svg',
  },
  {
    name: 'Ultratech',
    logo: 'https://sse-website.s3.ap-south-1.amazonaws.com/trusted-by/ultratech-cement.svg',
  },
  {
    name: 'Jhonson',
    logo: 'https://sse-website.s3.ap-south-1.amazonaws.com/trusted-by/johnson-and-johnson.svg',
  },
  {
    name: 'Prince',
    logo: 'https://sse-website.s3.ap-south-1.amazonaws.com/trusted-by/prince-piping-systems.svg',
  },
];

const MarqueeSection = () => {
  const trackRef = useRef(null);
  const pauseRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    let animationFrameId;
    let offset = 0;

    const scroll = () => {
      if (!pauseRef.current) {
        offset += 0.5; 
        track.style.transform = `translateX(${-offset}px)`;
        if (offset >= track.scrollWidth / 3) offset = 0;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: '#f9f9f9',
        py: 6,
        px: { xs: 2, md: 40 },
        overflow: 'hidden',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 1000,
          color: '#black',
          mb: 5,
        }}
      >
        Trusted By
      </Typography>

      <Box
        onMouseEnter={() => (pauseRef.current = true)}
        onMouseLeave={() => (pauseRef.current = false)}
        sx={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        <Box
          ref={trackRef}
          sx={{
            display: 'flex',
            gap: 15, 
            whiteSpace: 'nowrap',
            willChange: 'transform',
          }}
        >
          {[...companies, ...companies, ...companies].map((company, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minWidth: 140,
              }}
            >
              <Box
                component="img"
                src={company.logo}
                alt={company.name}
                sx={{
                  height: 50,
                  objectFit: 'contain',
                  mb: 1,
                }}
              />
              <Typography
                sx={{
                  fontSize: '14px',
                  color: '#333',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                {company.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default MarqueeSection;
