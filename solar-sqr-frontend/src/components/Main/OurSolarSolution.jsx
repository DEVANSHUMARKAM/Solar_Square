import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

import HomeImg from '../../assets/Home.jpg';
import HousingImg from '../../assets/Category-housing.jpg';
import CommercialImg from '../../assets/Category-commer.jpg';

const data = [
  { title: 'Homes', img: HomeImg },
  { title: 'Housing societies', img: HousingImg },
  { title: 'Commercial', img: CommercialImg },
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
        }}
      >
        Our Solar Solution
      </Typography>

      <Box
        sx={{
          display: 'flex',
          gap: 3,
          height: '800px',
          transition: 'all 0.4s ease-in-out',
          overflow: 'hidden', // ✅ Prevent jumpiness
        }}
      >
        {data.map((item, index) => {
          let flexValue = hoveredIndex === null && index === 0 ? 2 : 1;
          if (hoveredIndex === index) flexValue = 2;

          return (
            <Box
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              sx={{
                flex: flexValue,
                minWidth: 0, // ✅ Smooth resize
                borderRadius: '32px',
                overflow: 'hidden',
                boxShadow: 3,
                transition: 'flex 0.5s ease-in-out',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}
            >
              <Box
                component="img"
                src={item.img}
                alt={item.title}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  // ✅ Removed transform: scale
                  transition: 'all 0.5s ease-in-out',
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
