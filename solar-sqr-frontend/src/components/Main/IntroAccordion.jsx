//Introduction 

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Collapse,
  IconButton,
  Divider
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const IntroAccordion = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

  return (
    <Box sx={{ px: { xs: 2, md: 20 }, py: 8 }}>
      <Divider sx={{ mb: 4 }} />

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          mb: 2,
        }}
        onClick={handleToggle}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          Introduction to SolarSquare
        </Typography>

        <IconButton>
          {open ? (
            <ExpandLessIcon sx={{ color: '#3C00A0' }} />
          ) : (
            <ExpandMoreIcon sx={{ color: '#3C00A0' }} />
          )}
        </IconButton>
      </Box>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <Typography
          sx={{
            mt: 2,
            fontFamily: 'Poppins, sans-serif',
            lineHeight: 1.7,
            color: '#333',
            fontSize: 16,
          }}
        >
          SolarSquare is a leading rooftop solar installation company in India
          committed to making clean energy affordable and accessible. Founded
          with a mission to power homes and businesses with solar solutions,
          we've delivered thousands of installations across the country. Our
          end-to-end service — from site survey to installation and maintenance —
          ensures a smooth transition to solar. We’re proud to partner with top
          brands and serve customers with unmatched quality and innovation.
        </Typography>
      </Collapse>
    </Box>
  );
};

export default IntroAccordion;
