import React from 'react';
import { Box, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
import WhiteLogo from '../assets/brand-logo-white.svg'; // ✅ White version of logo

const Footer = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(90.16deg, #101f9d -15.84%, #11111c 122.54%)',
        color: '#fff',
        px: { xs: 4, md: 20 },
        py: 6,
      }}
    >
      <Grid container spacing={4}>
        {/* Left Column */}
        <Grid item xs={12} md={4}>
          <Box sx={{ mb: 2 }}>
            <img src={WhiteLogo} alt="SolarSquare Logo" style={{ height: 50 }} />
          </Box>
          <Typography variant="body2" sx={{ mb: 2, fontFamily: 'Poppins, sans-serif' }}>
            Rooftop solar made simple. We don't just sell solar — we give you peace of mind.
          </Typography>
          <Typography variant="body2" sx={{ mb: 1, fontFamily: 'Poppins, sans-serif' }}>
            📞 1800-123-4567
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, fontFamily: 'Poppins, sans-serif' }}>
            ✉️ support@solarsquare.in
          </Typography>
          <Box>
            <IconButton color="inherit"><Facebook /></IconButton>
            <IconButton color="inherit"><Twitter /></IconButton>
            <IconButton color="inherit"><LinkedIn /></IconButton>
            <IconButton color="inherit"><Instagram /></IconButton>
          </Box>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={4}>
            {/* Our Solution */}
            <Grid item xs={6} md={6}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Our Solution
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link href="#" underline="hover" color="inherit">Homes</Link>
                <Link href="#" underline="hover" color="inherit">Commercial</Link>
                <Link href="#" underline="hover" color="inherit">Housing Society</Link>
              </Box>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={6} md={6}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link href="#" underline="hover" color="inherit">About Us</Link>
                <Link href="#" underline="hover" color="inherit">SolarPro Partner</Link>
                <Link href="#" underline="hover" color="inherit">Sitemap</Link>
                <Link href="#" underline="hover" color="inherit">Career</Link>
                <Link href="#" underline="hover" color="inherit">On Grid Solar</Link>
                <Link href="#" underline="hover" color="inherit">Off Grid Solar</Link>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Bottom Address */}
      <Box sx={{ borderTop: '1px solid #ffffff33', mt: 4, pt: 3 }}>
        <Typography variant="body2" sx={{ fontFamily: 'Poppins, sans-serif' }}>
          © 2025 SolarSquare Energy Pvt. Ltd., 4th Floor, Solar Towers, Mumbai - 400001, Maharashtra, India.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
