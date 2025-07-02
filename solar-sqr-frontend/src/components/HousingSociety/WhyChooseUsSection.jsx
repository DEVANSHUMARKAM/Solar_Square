//rating and reviews of their company

import { Box, Typography, Grid } from '@mui/material';

import StarRating from '../../assets/rated-google-review.png'; 
import Icon1 from '../../assets/icon_2.png';
import Icon2 from '../../assets/icon_3.png';
import Icon3 from '../../assets/icon_4.png';
import Icon4 from '../../assets/icon_5.png';

import Godrej from '../../assets/godrej_icon.png';
import Piramal from '../../assets/piramal_icon.png';
import Lodha from '../../assets/lodha_icon.png';
import Century from '../../assets/century_icon.png';
import Reliance from '../../assets/reliance_icon.png';
import MontVert from '../../assets/montvert_icon.png';
import Brigade from '../../assets/brigade_icon.png';
import Sobha from '../../assets/icon_sobha.png';
import Kumar from '../../assets/kumar_icon.png';
import SNN from '../../assets/snn_icon.png';
import Eisha from '../../assets/icon_10.png';

const stats = [
  { icon: Icon1, value: '250+', label: 'Societies Solarised' },
  { icon: Icon2, value: '700 Cr+', label: 'Solar Projects Executed' },
  { icon: Icon3, value: '10+ Years', label: 'Industry Experience' },
  { icon: Icon4, value: '25,000+', label: 'Happy Customers' },
];

const companyLogos = [Godrej, Piramal, Lodha, Century, Reliance, MontVert, Brigade, Sobha, Kumar, SNN, Eisha];

const WhyChooseUsSection = () => {
  return (
    <Box sx={{ textAlign: 'center', px: { xs: 2, sm: 6 }, py: 6 }}>
      
      <Box sx={{ mb: 3 }}>
        <Box component="img" src={StarRating} alt="Rating" sx={{ height: 60, mb: 1 }} />
        <Typography
          sx={{
            fontSize: 25,
            fontWeight: 600,
            fontFamily: 'Poppins, sans-serif',
            color: '#2c2c2c',
          }}
        >
          4.8/5 Google Rating 6000+ reviews
        </Typography>
      </Box>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 1000,
          fontFamily: 'Poppins, sans-serif',
          fontSize: { xs: 20, sm: 38 },
          color: '#101f9d',
          mb: 5,
        }}
      >
        India’s <Box component="span" sx={{ color: '#00AEEF' }}>#1</Box> home solar company*
      </Typography>

      <Box sx={{ maxWidth: 800, mx: 'auto', mb: 10 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 1000, color: '#black', fontSize: 28 }}
        >
          Why choose us?
        </Typography>
        <Typography
          sx={{ fontWeight: 800, fontSize: 25, color: '#101f9d', my: 4 }}
        >
          SolarSquare - Quality that lasts 25+ years.
        </Typography>
        <Typography sx={{ fontSize: 20, color: '#555' }}>
          From design and installation to maintenance and subsidy paperwork,
          we provide end-to-end support.
        </Typography>
      </Box>

      {/* Stats Section */}
      <Box sx={{ mb: 8 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 1000, fontSize: 30, mb: 6, fontFamily: 'Poppins, sans-serif' }}
        >
          Unmatched Experience and Expertise
        </Typography>

        <Grid container spacing={12} justifyContent="center">
          {stats.map((item, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Box component="img" src={item.icon} alt={item.label} sx={{ height: 50, mb: 1 }} />
              <Typography sx={{ fontWeight: 1000, fontSize: 25, color: '#101f9d' }}>
                {item.value}
              </Typography>
              <Typography sx={{ fontSize: 14, color: '#555', mt: 0.5 }}>
                {item.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Trusted By Logos */}
      <Typography
        variant="h6"
        sx={{ fontWeight: 1000, fontSize: 28, mb: 4, color: '#black' }}
      >
        Trusted by Housing Societies Across India
      </Typography>

      <Grid container spacing={8} justifyContent="center">
        {companyLogos.map((logo, index) => (
          <Grid item key={index} xs={4} sm={2} md={1.8}>
            <Box component="img" src={logo} alt={`Company ${index}`} sx={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyChooseUsSection;
