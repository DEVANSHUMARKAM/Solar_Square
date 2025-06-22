import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  MenuItem,
} from '@mui/material';

import Slider1 from '../assets/Seawood-1-min.png';
import Slider2 from '../assets/Seawood-2-min.png';
import Slider3 from '../assets/Seawood-3-min.png';

const originalSlides = [Slider1, Slider2, Slider3];
const slides = [...originalSlides, Slider1]; // clone for smooth loop

const billOptions = ['0 - 50000', '50000 - 1L', '1L+'];
const designationOptions = [
  'Management committee member',
  'Resident',
  'Builder',
  'Facility Manager',
];
const approvalOptions = [
  'We already have AGM approval',
  "We don't have an AGM approval",
  'We want help in preparing for our AGM',
];

const HousingHero = () => {
  const [index, setIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(true);

  const [form, setForm] = useState({
    fullName: '',
    societyName: '',
    pinCode: '',
    whatsapp: '',
    bill: '',
    designation: '',
    approvalStatus: '',
    agreed: false,
  });

  const allRequiredFilled =
    form.fullName &&
    form.societyName &&
    form.pinCode &&
    form.whatsapp &&
    form.bill &&
    form.designation &&
    form.approvalStatus;

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === originalSlides.length) {
      setTimeout(() => {
        setTransitioning(false);
        setIndex(0);
      }, 500);
    } else {
      setTransitioning(true);
    }
  }, [index]);

  return (
    <Box
      sx={{
        background: 'linear-gradient(90.16deg, #101f9d -15.84%, #11111c 122.54%)',
        py: 10,
        px: { xs: 2, md: 6 },
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="space-between"
        sx={{ maxWidth: '1300px', mx: 'auto' }}
      >
        {/* LEFT SIDE */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              fontSize: 28,
              fontFamily: 'Poppins, sans-serif',
              color: '#fff',
              mb: 3,
            }}
          >
            Slash Your Society's Electricity Bills by 90% <br />
            <Box component="span" sx={{ color: '#00D2FF' }}>
              with SolarSquare!
            </Box>
          </Typography>

          <Typography
            sx={{
              color: '#EAEAEA',
              fontFamily: 'Poppins, sans-serif',
              fontSize: 16,
              mb: 4,
            }}
          >
            Switch to rooftop solar and enjoy unbeatable savings
          </Typography>

          <Box
            sx={{
              borderRadius: 3,
              overflow: 'hidden',
              boxShadow: 4,
              width: '100%',
              maxWidth: 680,
              aspectRatio: '16/9',
              position: 'relative',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                width: `${slides.length * 100}%`,
                transform: `translateX(-${(100 / slides.length) * index}%)`,
                transition: transitioning ? 'transform 0.5s ease-in-out' : 'none',
              }}
            >
              {slides.map((img, i) => (
                <Box
                  key={i}
                  component="img"
                  src={img}
                  alt={`slide-${i}`}
                  sx={{
                    width: `${100 / slides.length}%`,
                    objectFit: 'cover',
                    height: '100%',
                    flexShrink: 0,
                  }}
                />
              ))}
            </Box>
          </Box>
        </Grid>

        {/* RIGHT FORM */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              bgcolor: '#fff',
              borderRadius: 6,
              p: 3,
              width: '100%',
              maxWidth: 550,
              mx: 'auto',
              mt: { xs: 4, md: 0 },
            }}
          >
            <Typography sx={{ fontWeight: 800, fontSize: 14, mb: 0.5 }}>
              Full Name <span style={{ color: 'red' }}>*</span>
            </Typography>
            <TextField
              fullWidth
              label="Full Name"
              value={form.fullName}
              onChange={handleChange('fullName')}
              sx={{ mb: 2 }}
            />

            <Typography sx={{ fontWeight: 800, fontSize: 14, mb: 0.5 }}>
              Name of Housing Society <span style={{ color: 'red' }}>*</span>
            </Typography>
            <TextField
              fullWidth
              label="Name of Housing Society"
              value={form.societyName}
              onChange={handleChange('societyName')}
              sx={{ mb: 2 }}
            />

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography sx={{ fontWeight: 800, fontSize: 14, mb: 0.5 }}>
                  Pin code <span style={{ color: 'red' }}>*</span>
                </Typography>
                <TextField
                  fullWidth
                  label="Pin Code"
                  value={form.pinCode}
                  onChange={handleChange('pinCode')}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ fontWeight: 800, fontSize: 14, mb: 0.5 }}>
                  WhatsApp number <span style={{ color: 'red' }}>*</span>
                </Typography>
                <TextField
                  fullWidth
                  label="WhatsApp number"
                  value={form.whatsapp}
                  onChange={handleChange('whatsapp')}
                />
              </Grid>
            </Grid>

            <Typography sx={{ fontWeight: 800, fontSize: 14, mt: 3, mb: 1 }}>
              Monthly Electricity Bill <span style={{ color: 'red' }}>*</span>
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
              {billOptions.map((option) => (
                <Button
                  key={option}
                  onClick={() => setForm({ ...form, bill: option })}
                  sx={{
                    fontSize: 13,
                    fontWeight: 800,
                    textTransform: 'none',
                    borderRadius: 3,
                    px: 2,
                    bgcolor: form.bill === option ? '#0905a1' : '#fff',
                    border:
                      form.bill === option ? '1px solid #0905a1' : '1px solid #b8b8b8',
                    color: form.bill === option ? '#fff' : '#000',
                    '&:hover': {
                      bgcolor: form.bill === option ? '#0905a1' : '#f0f0f0',
                    },
                  }}
                >
                  {option}
                </Button>
              ))}
            </Box>

            <Typography sx={{ fontWeight: 800, fontSize: 14, mb: 1 }}>
              What is your designation in Housing Society?{' '}
              <span style={{ color: 'red' }}>*</span>
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
              {designationOptions.map((role) => (
                <Button
                  key={role}
                  onClick={() => setForm({ ...form, designation: role })}
                  sx={{
                    fontSize: 13,
                    fontWeight: 800,
                    textTransform: 'none',
                    borderRadius: 3,
                    px: 2,
                    bgcolor: form.designation === role ? '#0905a1' : '#fff',
                    border:
                      form.designation === role ? '1px solid #0905a1' : '1px solid #b8b8b8',
                    color: form.designation === role ? '#fff' : '#000',
                    '&:hover': {
                      bgcolor: form.designation === role ? '#0905a1' : '#f0f0f0',
                    },
                  }}
                >
                  {role}
                </Button>
              ))}
            </Box>

            <Typography sx={{ fontWeight: 800, fontSize: 14, mb: 1 }}>
              AGM approval status <span style={{ color: 'red' }}>*</span>
            </Typography>
            <TextField
              fullWidth
              select
              value={form.approvalStatus}
              onChange={handleChange('approvalStatus')}
              sx={{ mb: 2 }}
            >
              {approvalOptions.map((option) => (
                <MenuItem value={option} key={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>

            <FormControlLabel
              control={
                <Checkbox
                  checked={form.agreed}
                  onChange={(e) =>
                    setForm({ ...form, agreed: e.target.checked })
                  }
                  disabled={!allRequiredFilled}
                />
              }
              label={
                <Typography sx={{ fontSize: 14 }}>
                  I agree to SolarSquare’s&nbsp;
                  <Link href="/terms-of-service" underline="hover">
                    terms of service
                  </Link>
                  &nbsp;and&nbsp;
                  <Link href="/privacy-policy" underline="hover">
                    privacy policy
                  </Link>
                </Typography>
              }
            />

            <Button
              fullWidth
              variant="contained"
              disabled={!form.agreed}
              sx={{
                mt: 3,
                backgroundColor: '#00D2FF',
                color: '#fff',
                fontWeight: 900,
                textTransform: 'none',
                fontSize: 16,
                py: 1.2,
                borderRadius: '50px',
                '&:hover': {
                  backgroundColor: '#00b8e0',
                },
              }}
            >
              Submit Details
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HousingHero;
