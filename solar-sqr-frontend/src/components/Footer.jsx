import React from 'react';
import { Box, Grid, Typography, Link, IconButton, Container } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
import WhiteLogo from '../assets/brand-logo-white.png';

const Footer = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(90.16deg, #101f9d -15.84%, #11111c 122.54%)',
        color: '#fff',
        py: 6,
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          px: { xs: 2, md: 8 },
          mx: 'auto',
          maxWidth: '1000px',
        }}
      >
        <Grid container spacing={6}>
          {/* Left Column */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 2 }}>
              <img src={WhiteLogo} alt="SolarSquare Logo" style={{ height: 100 }} />
            </Box>
            <Typography variant="body2" sx={{ mb: 3, fontFamily: 'Poppins, sans-serif' }}>
              Rooftop solar made simple. We don't just sell solar <br />
              — we give you peace of mind.
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

          {/* Right Columns */}
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                mb: 4,
                gap: 4,
              }}
            >
              {/* Column 1 */}
              <Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                  Our Solutions
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Link href="#" underline="hover" color="inherit">Homes</Link>
                  <Link href="#" underline="hover" color="inherit">Commercial</Link>
                  <Link href="#" underline="hover" color="inherit">Housing Society</Link>
                </Box>
              </Box>

              {/* Column 2 */}
              <Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                  Quick Links
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Link href="#" underline="hover" color="inherit">About Us</Link>
                  <Link href="#" underline="hover" color="inherit">SolarPro Partner</Link>
                  <Link href="#" underline="hover" color="inherit">Sitemap</Link>
                </Box>
              </Box>

              {/* Column 3 */}
              <Box>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                  {/* Empty title space */}
                  &nbsp;
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Link href="#" underline="hover" color="inherit">Careers</Link>
                  <Link href="#" underline="hover" color="inherit">On-Grid Solar</Link>
                  <Link href="#" underline="hover" color="inherit">Off-Grid Solar</Link>
                </Box>
              </Box>
            </Box>

            {/* Address Below 3 Columns */}
            <Box>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
                Address
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontFamily: 'Poppins, sans-serif', lineHeight: 1.8 }}
              >
                1st floor, Standford Building, S.V. Road & Juhu Lane Junction,<br />
                above Mahindra Showroom, Zalawad Nagar, Ganga Vihar,<br />
                Andheri West, Mumbai, Maharashtra 400058
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Copyright */}
        {/* <Box sx={{ borderTop: '1px solid #ffffff33', mt: 4, pt: 3, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ fontFamily: 'Poppins, sans-serif' }}>
            © 2025 SolarSquare Energy Pvt. Ltd., All rights reserved.
          </Typography>
        </Box> */}
      </Container>
    </Box>
  );
};

export default Footer;
