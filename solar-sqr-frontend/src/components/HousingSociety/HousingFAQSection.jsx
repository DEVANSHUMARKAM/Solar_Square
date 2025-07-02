//faq asked by the customers

import React, { useState } from 'react';
import { Box, Grid, Typography, IconButton, Collapse } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const faqData = [
  {
    question: 'What is the lifespan of a rooftop solar system?',
    answer: 'Typically, rooftop solar systems last for over 25 years with minimal maintenance.',
  },
  {
    question: 'Will my society’s electricity bill become zero?',
    answer: 'It can be reduced by up to 90%, depending on system size and consumption.',
  },
  {
    question: 'Do we need government permissions for installation?',
    answer: 'Yes, and SolarSquare handles all paperwork and approvals for you.',
  },
  {
    question: 'What maintenance is required post-installation?',
    answer: 'Minimal maintenance is needed. We offer annual check-ups and deep cleaning.',
  },
  {
    question: 'Will solar panels damage our society’s roof?',
    answer: 'No, our installations follow chemical anchoring that ensures zero leakage.',
  },
  {
    question: 'Is subsidy available for housing societies?',
    answer: 'Yes. Societies can get ₹18,000 per kW (up to ₹90 lakhs) under government schemes.',
  },
  {
    question: 'How long does installation take?',
    answer: 'On average, between 15–30 days depending on project complexity and permissions.',
  },
  {
    question: 'What happens on cloudy or rainy days?',
    answer: 'The system still works, though output may be lower. Grid power balances the shortfall.',
  },
  {
    question: 'Is financing available for societies?',
    answer: 'Yes. We offer OPEX, CAPEX, and zero investment plans.',
  },
  {
    question: 'Can we monitor the solar system’s performance?',
    answer: 'Yes. You’ll have access to real-time monitoring via a mobile app or dashboard.',
  },
];

const HousingFAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box sx={{ py: 10, px: { xs: 2, md: 8 }, backgroundColor: '#f5f7fa' }}>
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: 1000,
          fontFamily: 'Poppins, sans-serif',
          mb: 6,
          color: '#101f9d',
        }}
      >
        Frequently Asked Questions
      </Typography>

      <Grid container spacing={8} justifyContent="center">
        {[0, 1].map((col) => (
          <Grid item xs={12} md={5.5} key={col}>
            {faqData.slice(col * 5, col * 5 + 5).map((faq, index) => {
              const realIndex = col * 5 + index;
              const isOpen = openIndex === realIndex;

              return (
                <Box key={realIndex} sx={{ mb: 2, bgcolor: '#fff', borderRadius: 2, p: 2 }}>
                  <Box
                    onClick={() => toggleQuestion(realIndex)}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 1,
                      cursor: 'pointer',
                    }}
                  >
                    <IconButton size="small" sx={{ p: 0 }}>
                      {isOpen ? <RemoveIcon fontSize="small" /> : <AddIcon fontSize="small" />}
                    </IconButton>

                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 1000,
                          fontSize: 18,
                          fontFamily: 'Poppins, sans-serif',
                          color: '#111',
                        }}
                      >
                        {faq.question}
                      </Typography>

                      <Collapse in={isOpen}>
                        <Typography
                          sx={{
                            mt: 1,
                            fontSize: 14,
                            fontFamily: 'Poppins, sans-serif',
                            color: '#444',
                          }}
                        >
                          {faq.answer}
                        </Typography>
                      </Collapse>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HousingFAQSection;
