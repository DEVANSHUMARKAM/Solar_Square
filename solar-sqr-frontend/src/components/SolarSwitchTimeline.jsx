// src/components/SolarSwitchTimeline.jsx

import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import StepIcon1 from '../assets/free-in-home.png';
import StepIcon2 from '../assets/personalized-manager.png';
import StepIcon3 from '../assets/paperwork.png';
import StepIcon4 from '../assets/solar-installation.png';
import StepIcon5 from '../assets/grid-connection.png';
import StepIcon6 from '../assets/power-new-system.png';
import StepIcon7 from '../assets/deep-cleaning.png';

const steps = [
  {
    title: 'Free in-home consultation',
    description:
      'Our expert visits your home, answers your questions, and shows you a 3D solar layout customized for your rooftop.',
    icon: StepIcon1,
    button: 'Schedule a free consultation',
  },
  {
    title: 'Personalised proposal & dedicated manager',
    description:
      'You get a tailor-made solar proposal with pricing and savings, along with a dedicated Delight Manager.',
    icon: StepIcon2,
  },
  {
    title: 'Paperwork & subsidy help',
    description:
      'We handle all the paperwork with local DISCOMs and help you apply for government subsidies.',
    icon: StepIcon3,
  },
  {
    title: 'Safe rooftop solar installation',
    description:
      'We install your system using chemical anchoring, tested for extreme weather and cyclone protection.',
    icon: StepIcon4,
  },
  {
    title: 'Connection to the power grid',
    description:
      'We ensure smooth connection to the grid with new bi-directional meter installation.',
    icon: StepIcon5,
  },
  {
    title: 'Powering your solar system',
    description:
      'Switch on your new solar system and start saving instantly on your electricity bills!',
    icon: StepIcon6,
  },
  {
    title: '5-year deep cleaning & maintenance',
    description:
      'We call you for quarterly cleaning and checkups, keeping your system in top condition.',
    icon: StepIcon7,
  },
];

const SolarSwitchTimeline = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        background: 'linear-gradient(90.16deg, #101f9d -15.84%, #11111c 122.54%)',
        py: 10,
        px: 2,
      }}
    >
      <Typography
        variant="h3"
        align="center"
        sx={{ fontWeight: 1000, fontSize: 60, color: '#fff', fontFamily: 'Poppins', mb: 1 }}
      >
        The solar switch made simple
      </Typography>
      <Typography
        align="center"
        sx={{ color: '#d1d1d1', mb: 6, fontSize: 20, fontFamily: 'Poppins' }}
      >
        Switching to solar can seem daunting, but we’ve got you covered. Here’s how it works
      </Typography>

      <Box
        sx={{
          position: 'relative',
          maxWidth: '1200px',
          mx: 'auto',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '50%',
            width: '4px',
            backgroundColor: '#ffffff80',
            transform: 'translateX(-50%)',
          },
        }}
      >
        {steps.map((step, index) => {
          const isLeft = index % 2 === 0;

          return (
            <Grid
              container
              key={index}
              sx={{
                position: 'relative',
                mb: 10,
              }}
              justifyContent="center"
            >
              {/* Dot on the vertical line */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '18px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 16,
                  height: 16,
                  backgroundColor: '#00d2ff',
                  borderRadius: '50%',
                  zIndex: 2,
                }}
              />

              {/* Content near center */}
              <Grid
                item
                xs={12}
                md={5.5}
                sx={{
                  order: isMobile ? 2 : isLeft ? 1 : 3,
                  pl: isLeft
                    ? 0
                    : index === 1 || index === 3 || index === 5
                      ? '630px'
                      : 4,
                  pr: isLeft
                    ? index === 0 || index === 2 || index === 4 || index === 6
                      ? '630px'
                      : 4
                    : 0,
                  textAlign: isLeft ? 'right' : 'left',
                }}
              >

                <Box>
                  <Box
                    component="img"
                    src={step.icon}
                    alt={step.title}
                    sx={{ width: 80, mb: 2 }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 900,
                      color: '#fff',
                      fontFamily: 'Poppins-Regular',
                      mb: 2,
                      wordWrap: 'break-word',
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#ccc',
                      fontSize: 20,
                      fontFamily: 'Poppins-Regular',
                      mb: step.button ? 2 : 0,
                    }}
                  >
                    {step.description}
                  </Typography>
                  {step.button && (
                    <Button
                      variant="contained"
                      sx={{
                        mt: 2,
                        backgroundColor: '#00d2ff',
                        color: '#000',
                        fontWeight: 600,
                        borderRadius: '8px',
                        textTransform: 'none',
                        px: 3,
                        py: 1,
                        fontFamily: 'Poppins',
                        '&:hover': {
                          backgroundColor: '#00b8e0',
                        },
                      }}
                    >
                      {step.button}
                    </Button>
                  )}
                </Box>
              </Grid>

              {/* Spacer to balance alignment */}
              <Grid item xs={12} md={5.5} order={isMobile ? 3 : isLeft ? 3 : 1} />
            </Grid>
          );
        })}
      </Box>
    </Box>
  );
};

export default SolarSwitchTimeline;
