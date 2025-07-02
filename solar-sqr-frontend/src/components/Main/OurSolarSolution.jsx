import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import HomeImg from '../../assets/Home.jpg';
import HousingImg from '../../assets/Category-housing.jpg';
import CommercialImg from '../../assets/Category-commer.jpg';

const data = [
  { title: 'Homes', img: HomeImg, link: '/homes' },
  { title: 'Housing Societies', img: HousingImg, link: '/housing-society' },
  { title: 'Commercial', img: CommercialImg, link: '/commercial' },
];

const OurSolarSolution = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Box
      sx={{
        py: 10,
        px: { xs: 2, md: '200px' },
        background: 'linear-gradient(90.16deg, #101f9d -15.84%, #11111c 122.54%)',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          fontFamily: 'Poppins, sans-serif',
          mb: 6,
          color: '#ffffff',
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        Our Solar Solutions
      </Typography>

      <Box
        sx={{
          display: { xs: 'flex', md: 'flex' },
          flexDirection: { xs: 'column', md: 'row' },
          gap: 3,
          height: { xs: 'auto', md: '800px' },
          overflow: 'hidden',
        }}
      >
        {data.map((item, index) => {
          // On desktop: use hover effect
          let flexValue = 1;
          if (hoveredIndex === null && index === 0) flexValue = 2;
          if (hoveredIndex === index) flexValue = 2;

          return (
            <Box
              key={index}
              component={Link}
              to={item.link}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              sx={{
                flex: { xs: 'unset', md: flexValue },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                borderRadius: '32px',
                overflow: 'hidden',
                boxShadow: 3,
                textDecoration: 'none', // remove underline
                transition: { md: 'flex 0.5s ease-in-out' },
              }}
            >
              <Box
                component="img"
                src={item.img}
                alt={item.title}
                sx={{
                  width: '100%',
                  height: { xs: '200px', md: '100%' },
                  objectFit: 'cover',
                }}
              />
              <Typography
                align="center"
                sx={{
                  py: 2,
                  background: 'rgba(0,0,0,0.5)',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '18px',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                {item.title}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default OurSolarSolution;
