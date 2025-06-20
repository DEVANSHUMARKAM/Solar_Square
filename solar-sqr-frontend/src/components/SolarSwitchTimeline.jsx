import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  useTheme,
  useMediaQuery,
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
      'A SolarSquare consultant will survey your home, answer your questions and generate a custom digital design of what the solar system will look like on your roof.',
    icon: StepIcon1,
    button: 'Schedule a free consultation',
  },
  {
    title: 'Personalised solar proposal & dedicated manager',
    description:
      'Based on your requirements, our team will create a custom proposal for you. A Delight Manager is also assigned to answer your queries and keep you updated on the project.',
    icon: StepIcon2,
  },
  {
    title: 'Paperwork and subsidy assistance',
    description:
      'End-to-end paperwork management by us for hassle-free coordination with the local discom and securing subsidy.',
    icon: StepIcon3,
  },
  {
    title: 'Step-by-step professional & safe installation',
    description:
      'Once you submit the advance amount, your rooftop system will arrive in stylish delivery vans and installed in a timely, clean and professional manner.',
    icon: StepIcon4,
  },
  {
    title: 'Connection to the grid',
    description:
      'We coordinate with the discom to connect your system to the power grid and install a new electricity meter.',
    icon: StepIcon5,
  },
  {
    title: 'Power on your new system',
    description:
      'Switch on your system to enjoy reduced electricity bills and an energy-independent future!',
    icon: StepIcon6,
  },
  {
    title: 'Deep cleaning and maintenance',
    description:
      'We’ll call you to schedule quarterly deep cleaning and preventive health checks of your system for 5 years.',
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
        variant="h4"
        align="center"
        sx={{ fontWeight: 900, color: '#fff', mb: 1, fontFamily: 'Poppins' }}
      >
        The solar switch made simple
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ color: '#e0e0e0', mb: 6, fontFamily: 'Poppins' }}
      >
        Switching to solar can seem daunting, but we’ve got you covered. Here’s how it works
      </Typography>

      <Box
        sx={{
          position: 'relative',
          maxWidth: '1300px',
          mx: 'auto',
          '&::before': {
            content: '""',
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '4px',
            backgroundColor: '#fff',
            transform: 'translateX(-50%)',
            zIndex: 1,
          },
        }}
      >
        {steps.map((step, index) => {
          const isLeft = index % 2 === 0 || isMobile;

          return (
            <Grid
              container
              key={index}
              sx={{
                mb: 8,
                position: 'relative',
                justifyContent: 'center',
              }}
            >
              {/* Dot */}
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

              {/* Content Side */}
              <Grid
                item
                xs={12}
                md={5.5}
                sx={{
                  textAlign: isLeft ? 'right' : 'left',
                  pr: isLeft ? 4 : 0,
                  pl: isLeft ? 0 : 4,
                  order: isLeft ? 1 : 3,
                }}
              >
                <Box>
                  <Box
                    component="img"
                    src={step.icon}
                    alt={step.title}
                    sx={{ width: 70, mb: 2 }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: '#fff',
                      fontFamily: 'Poppins, sans-serif',
                      mb: 1,
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#ccc',
                      fontSize: 15,
                      fontFamily: 'Poppins',
                      mb: step.button ? 2 : 0,
                    }}
                  >
                    {step.description}
                  </Typography>
                  {step.button && (
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#00d2ff',
                        color: '#000',
                        fontWeight: 600,
                        textTransform: 'none',
                        borderRadius: '8px',
                        mt: 1,
                        px: 3,
                        py: 1,
                        fontFamily: 'Poppins, sans-serif',
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

              {/* Empty Grid for spacing */}
              <Grid item xs={12} md={5.5} order={isLeft ? 3 : 1} />
            </Grid>
          );
        })}
      </Box>
    </Box>
  );
};

export default SolarSwitchTimeline;
