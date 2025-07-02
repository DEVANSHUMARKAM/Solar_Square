//FAQ section of their website

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FaqGuy from '../../assets/FAQ_new.png'; 

const faqData = {
  general: [
    {
      question: 'What is the life of a rooftop solar system?',
      answer: 'A rooftop solar system typically lasts for 25 years or more with minimal maintenance.',
    },
    {
      question: 'Do Solar Rooftop projects have a high maintenance cost?',
      answer: 'No, solar rooftop systems are low maintenance. Occasional cleaning and inspections are usually enough.',
    },
    {
      question: 'Can Solar projects damage my roof?',
      answer: 'No, when installed correctly, solar systems actually protect your roof by shielding it from the elements.',
    },
    {
      question: 'Do I need to clean my Solar plant?',
      answer: 'Yes, cleaning the panels occasionally improves performance. But the system itself is maintenance-friendly.',
    },
    {
      question: 'My roof is not made of concrete; can I still install a Solar Project?',
      answer: 'Yes, there are various mounting solutions available for different roof types, including metal and tiled roofs.',
    },
  ],
  maintenance: [
    {
      question: 'How often should I clean my solar panels?',
      answer: 'Every 1–3 months, depending on your local dust or pollen levels.',
    },
    {
      question: 'What is the cost of regular solar maintenance?',
      answer: 'Very low. Most providers offer annual check-ups for under ₹1000.',
    },
  ],
  economics: [
    {
      question: 'How long does it take to break even?',
      answer: 'Most customers recover their cost within 4–5 years via electricity savings.',
    },
    {
      question: 'Do I need to pay upfront?',
      answer: 'Not necessarily. Many providers offer EMI and financing options.',
    },
  ],
};

const FAQSection = () => {
  const [expanded, setExpanded] = useState(null);
  const [selectedTab, setSelectedTab] = useState('general');

  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const renderTabs = () => {
    const tabs = [
      { id: 'general', label: 'General' },
      { id: 'maintenance', label: 'Solar Maintenance' },
      { id: 'economics', label: 'Solar Economics' },
    ];

    return (
      <Box
        sx={{
          display: 'flex',
          borderBottom: '1px solid #ccc',
          mb: 4,
          gap: 2,
        }}
      >
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            onClick={() => {
              setSelectedTab(tab.id);
              setExpanded(null);
            }}
            sx={{
              textTransform: 'none',
              fontWeight: 600,
              fontFamily: 'Poppins, sans-serif',
              fontSize: '16px',
              borderRadius: 0,
              borderBottom: selectedTab === tab.id ? '4px solid #3C00A0' : '4px solid transparent',
              backgroundColor: selectedTab === tab.id ? '#3C00A0' : 'transparent',
              color: selectedTab === tab.id ? '#fff' : '#000',
              px: 3,
              py: 1,
              '&:hover': {
                backgroundColor: selectedTab === tab.id ? '#3C00A0' : '#f0f0f0',
              },
            }}
          >
            {tab.label}
          </Button>
        ))}
      </Box>
    );
  };

  return (
    <Box sx={{ py: 8, px: { xs: 2, md: '200px' } }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 1000,
          textAlign: 'center',
          mb: 6,
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        Frequently Asked Questions
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          alignItems: 'flex-start',
        }}
      >
        <Box sx={{ flex: 1, minWidth: 0 }}>
          {renderTabs()}
          <Box sx={{ minHeight: 400 }}>
            {faqData[selectedTab].map((faq, index) => (
              <Accordion
                key={index}
                expanded={expanded === index}
                onChange={() => handleToggle(index)}
                sx={{
                  mb: 2,
                  boxShadow: 'none',
                  borderBottom: '1px solid #ccc',
                }}
              >
                <AccordionSummary>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 700,
                      fontSize: '1rem',
                    }}
                  >
                    {expanded === index ? (
                      <RemoveIcon sx={{ color: '#3C00A0', fontSize: '1.4rem', fontWeight: 'bold' }} />
                    ) : (
                      <AddIcon sx={{ color: '#3C00A0', fontSize: '1.4rem', fontWeight: 'bold' }} />
                    )}
                    <Typography sx={{ fontWeight: 700 }}>{faq.question}</Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      fontFamily: 'Poppins, sans-serif',
                      color: '#444',
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            flexShrink: 0,
            width: { xs: '100%', md: '40%' },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <Box
            component="img"
            src={FaqGuy}
            alt="FAQ Guy"
            sx={{
              width: '100%',
              maxWidth: 500,
              borderRadius: '50%',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FAQSection;
