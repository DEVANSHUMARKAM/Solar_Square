// src/components/FormCommercial.jsx
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
} from '@mui/material';

const FormCommercial = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    whatsapp: '',
    city: '',
    pinCode: '',
    avgBill: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const allRequiredFilled =
    formData.name &&
    formData.companyName &&
    formData.whatsapp &&
    formData.city &&
    formData.avgBill;

  return (
    <Box
      sx={{
        background: 'linear-gradient(90.16deg, #101f9d -15.84%, #11111c 122.54%)',
        py: 10,
        px: { xs: 2, md: 10 },
      }}
    >
      <Grid
        container
        spacing={8}
        alignItems="center"
        justifyContent="center"
        maxWidth="1400px"
        margin="0 auto"
      >
        {/* LEFT SIDE TEXT */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 900,
              fontFamily: 'Poppins, sans-serif',
              color: '#fff',
              mb: 2,
            }}
          >
            Submit a <br />
            <Box component="span" sx={{ color: '#00D2FF' }}>solar project</Box> enquiry
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Poppins, sans-serif',
              color: '#EAEAEA',
              fontSize: 18,
            }}
          >
            Our solar experts will guide you in your solar journey.
          </Typography>
        </Grid>

        {/* RIGHT SIDE FORM */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: '#fff',
              borderRadius: 3,
              p: 4,
              width: '100%',
              maxWidth: 500,
              mx: 'auto',
            }}
          >
            <TextField
              fullWidth
              label="Name *"
              name="name"
              value={formData.name}
              onChange={handleChange}
              sx={{ mb: 2 }}
              InputProps={{ style: { borderRadius: '8px' } }}
            />
            <TextField
              fullWidth
              label="Company Name *"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              sx={{ mb: 2 }}
              InputProps={{ style: { borderRadius: '8px' } }}
            />
            <TextField
              fullWidth
              label="WhatsApp number *"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              sx={{ mb: 2 }}
              InputProps={{ style: { borderRadius: '8px' } }}
            />
            <TextField
              fullWidth
              label="City *"
              name="city"
              value={formData.city}
              onChange={handleChange}
              sx={{ mb: 2 }}
              InputProps={{ style: { borderRadius: '8px' } }}
            />
            <TextField
              fullWidth
              label="Company Pin code"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              sx={{ mb: 2 }}
              InputProps={{ style: { borderRadius: '8px' } }}
            />
            <TextField
              fullWidth
              label="Average Monthly Bill *"
              name="avgBill"
              value={formData.avgBill}
              onChange={handleChange}
              sx={{ mb: 2 }}
              InputProps={{ style: { borderRadius: '8px' } }}
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.agree}
                  onChange={handleChange}
                  name="agree"
                  disabled={!allRequiredFilled}
                  sx={{ color: '#00D2FF' }}
                />
              }
              label={
                <Typography sx={{ fontSize: 14 }}>
                  I agree to SolarSquare’s{' '}
                  <Link href="/terms-of-service" underline="hover">terms of service</Link> &{' '}
                  <Link href="/privacy-policy" underline="hover">privacy policy</Link>
                </Typography>
              }
              sx={{ mb: 2 }}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: '#00D2FF',
                color: '#fff',
                fontWeight: 600,
                textTransform: 'none',
                fontSize: 16,
                py: 1.2,
                borderRadius: '50px',
                '&:hover': {
                  backgroundColor: '#00b8e0',
                },
              }}
              disabled={!formData.agree}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FormCommercial;
