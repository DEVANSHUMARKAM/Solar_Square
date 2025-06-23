import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Collapse,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Images
import ReviewImg1 from '../../assets/cm-carousel-1.png';
import ReviewImg2 from '../../assets/cm-carousel-2.png';

const CommercialTestimonials = () => {
    const [expanded, setExpanded] = useState(false);
    const handleExpandToggle = () => setExpanded(!expanded);
  
    const testimonials = [
      {
        img: ReviewImg1,
        gradient: 'linear-gradient(90deg, #101f9d 0%, #11111c 100%)',
        text: `Solar team was very professional and had excellent interpersonal relations. Asbestos to GI roof sheet replacement and 2MW Solar Project was completed within 3 months time without escalations. During project execution, even a single drop of rain would have ruined our operations. No doubt it was a good job done.`,
        author: 'C K Tharad, Senior VP, LNJ Bhilwara Group',
        textColor: '#fff',
      },
      {
        img: ReviewImg2,
        gradient: '#fff',
        text: `I am happy to acknowledge that SolarSquare has met the strictest Quality & Safety norms dictated by the Global Standards of Johnson & Johnson.`,
        author: 'Anish Sengupta, EHS & S, Johnson & Johnson',
        textColor: '#000',
      },
    ];
  
    return (
      <Box sx={{ py: 10, px: 2, backgroundColor: '#f5f5f5' }}>
        {/* Heading */}
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: 800,
            mb: 6,
            fontFamily: 'Poppins, sans-serif',
            color: '#101f9d',
          }}
        >
          Exceptional quality. End-to-end service. Delighted customers
        </Typography>
  
        {/* Testimonial Cards */}
        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {testimonials.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  height: '100%',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: 3,
                  bgcolor: '#fff',
                }}
              >
                {/* Left Image */}
                <Box
                  component="img"
                  src={item.img}
                  alt="Customer review"
                  sx={{
                    width: { xs: '100%', sm: '40%' },
                    objectFit: 'cover',
                    height: { xs: 200, sm: '100%' },
                  }}
                />
  
                {/* Right Review */}
                <Box
                  sx={{
                    background: item.gradient,
                    color: item.textColor,
                    p: 3,
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: 16,
                      lineHeight: 1.6,
                      mb: 2,
                    }}
                  >
                    {item.text}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: 16,
                    }}
                  >
                    {item.author}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
  
        {/* Read More Expand */}
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Button
            endIcon={<ExpandMoreIcon />}
            onClick={handleExpandToggle}
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              textTransform: 'none',
              fontSize: 16,
            }}
          >
            {expanded ? 'Hide details' : 'Read more'}
          </Button>
  
          <Collapse in={expanded}>
            <Box
              sx={{
                mt: 3,
                mx: 'auto',
                maxWidth: 800,
                bgcolor: '#fff',
                borderRadius: '12px',
                p: 3,
                fontFamily: 'Poppins, sans-serif',
                boxShadow: 2,
                lineHeight: 1.7,
                textAlign: 'left',
              }}
            >
              <Typography variant="body1">
                SolarSquare has helped hundreds of commercial partners streamline their solar journey, from evaluation to post-installation support. We bring precision engineering, custom consultation, and timely delivery at competitive rates.
              </Typography>
            </Box>
          </Collapse>
        </Box>
      </Box>
    );
  };
  
  export default CommercialTestimonials;
  