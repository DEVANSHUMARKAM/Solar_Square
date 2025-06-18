import React, { useState } from 'react';
import { Box } from '@mui/material';

import HomeImg from '../assets/Home.jpg';
import CommercialImg from '../assets/Category-commer.jpg';
import SocietyImg from '../assets/Category-housing.jpg';

const HoverSplitGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const images = [
    { id: 1, src: HomeImg, alt: 'Residential' },
    { id: 2, src: CommercialImg, alt: 'Commercial' },
    { id: 3, src: SocietyImg, alt: 'Society' },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '70vh',
        overflow: 'hidden',
        background: 'linear-gradient(90.16deg, #101f9d -15.84%, #11111c 122.54%)',
      }}
    >
      {images.map((image, index) => {
        let flexValue = 1;
        if (hoveredIndex === null && index === 0) flexValue = 2;
        else if (hoveredIndex === index) flexValue = 2;

        return (
          <Box
            key={image.id}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            sx={{
              flex: flexValue,
              transition: 'flex 0.6s ease',
              backgroundImage: `url(${image.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: 24,
              fontWeight: 'bold',
              position: 'relative',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                bottom: 20,
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                padding: '8px 16px',
                borderRadius: '8px',
              }}
            >
              {image.alt}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default HoverSplitGallery;
