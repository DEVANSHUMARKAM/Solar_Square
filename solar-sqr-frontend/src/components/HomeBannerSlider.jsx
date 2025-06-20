import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Box, Typography, Button } from '@mui/material';

// Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

// Import images
import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider2.jpg';
import slider3 from '../assets/slider3.jpg';

const slides = [
  {
    image: slider1,
    title: 'Power Your Home with Solar',
    subtitle: 'Clean. Reliable. Affordable.',
  },
  {
    image: slider2,
    title: 'Switch to Solar, Save Big',
    subtitle: 'Reduce your electricity bills instantly.',
  },
  {
    image: slider3,
    title: 'Join the Green Energy Movement',
    subtitle: 'Be a part of the solar revolution.',
  },
];

const HomeBannerSlider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop
      style={{ height: '100vh', width: '100%' }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <Box
            sx={{
              height: '100vh',
              width: '100%',
              backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              color: '#fff',
              textAlign: 'center',
              px: 2,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontFamily: 'Poppins, sans-serif',
                mb: 2,
              }}
            >
              {slide.title}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 400,
                fontFamily: 'Poppins, sans-serif',
                mb: 4,
              }}
            >
              {slide.subtitle}
            </Typography>
            <Button
              variant="contained"
              sx={{
                background: 'linear-gradient(90deg, #101F9D, #11111C)',
                fontSize: 18,
                px: 4,
                py: 1.5,
                borderRadius: '50px',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              Get a Quote
            </Button>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeBannerSlider;
