import React, { useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// Import assets
import BengaluruImage from '../../assets/bengluru-min.png';
import PuneImage from '../../assets/pune-min.png';
import MumbaiImage from '../../assets/Seawood-1-min.png';

import BengaluruMap from '../../assets/map_3.png';
import PuneMap from '../../assets/map_2.png';
import MumbaiMap from '../../assets/map_1.png';

const cities = [
  {
    name: 'Mumbai',
    projects: '100+',
    image: MumbaiImage,
    map: MumbaiMap,
    capacity: [
      { name: 'Lodha Palava', size: '320kW' },
      { name: 'Godrej Hillside', size: '260kW' },
      { name: 'Runwal Greens', size: '210kW' },
    ],
  },
  {
    name: 'Pune',
    projects: '100+',
    image: PuneImage,
    map: PuneMap,
    capacity: [
      { name: 'Magarpatta City', size: '300kW' },
      { name: 'Kumar Meadows', size: '280kW' },
      { name: 'Blue Ridge Society', size: '230kW' },
    ],
  },
  {
    name: 'Bengaluru',
    projects: '75+',
    image: BengaluruImage,
    map: BengaluruMap,
    capacity: [
      { name: 'SNN Raj Greenbay Apartments', size: '341kW' },
      { name: 'Akme Ballet Apartments', size: '285kW' },
      { name: 'Divinity Apartment', size: '250kW' },
    ],
  },
];

const CityProjectShowcase = () => {
  const [activeCity, setActiveCity] = useState(cities[2]); // Default: Bengaluru

  return (
    <Box
      sx={{
        py: 10,
        px: { xs: 2, md: 8 },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid
        container
        spacing={12}
        alignItems="center"
        justifyContent="center"
        sx={{ maxWidth: '1200px' }}
      >
        {/* LEFT SECTION */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', gap: 6, mb: 4, flexWrap: 'wrap' }}>
            {cities.map((city) => (
              <Box
                key={city.name}
                onClick={() => setActiveCity(city)}
                sx={{
                  position: 'relative',
                  width: 120,
                  height: 150,
                  borderRadius: 2,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.3s',
                  boxShadow: activeCity.name === city.name ? '0 0 0 3px #7b61ff' : '',
                  transform: activeCity.name === city.name ? 'scale(1.2)' : 'scale(1)',
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url(${city.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  color: '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 1000,
                  fontSize: 18,
                }}
              >
                {city.name}
                <Typography fontSize={14} fontWeight={400}>
                  {city.projects} Projects
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Capacity Projects */}
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: 800,
              fontFamily: 'Poppins, sans-serif',
              mb: 2,
            }}
          >
            Our Highest Capacity Projects
          </Typography>

          {activeCity.capacity.map((project) => (
            <Box
              key={project.name}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 1.5,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon sx={{ color: '#7b61ff' }} />
                <Typography fontSize={15}>{project.name}</Typography>
              </Box>
              <Typography fontWeight={800}>{project.size}</Typography>
            </Box>
          ))}
        </Grid>

        {/* RIGHT SECTION - MAP */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={activeCity.map}
            alt={`${activeCity.name} map`}
            sx={{
              width: '100%',
              maxWidth: 500,
              borderRadius: 6,
              boxShadow: 3,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CityProjectShowcase;
