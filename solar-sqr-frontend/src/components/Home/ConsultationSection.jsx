import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  CircularProgress,
  Snackbar,
  Alert,
} from '@mui/material';
import axios from 'axios';

const billOptions = [
  'Less than ₹1500',
  '₹1500 – ₹2500',
  '₹2500 – ₹4000',
  '₹4000 – ₹8000',
  'More than ₹8000',
];

const ConsultationSection = () => {
  const [selectedBill, setSelectedBill] = useState('');
  const [loadingCity, setLoadingCity] = useState(false);
  const [pincodeError, setPincodeError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState({ success: null, message: '' });

  const [form, setForm] = useState({
    name: '',
    phone: '',
    pincode: '',
    city: '',
    email: '',
  });

  const handleChange = (field) => async (e) => {
    const value = e.target.value;
    setForm({ ...form, [field]: value });

    if (field === 'pincode') {
      setPincodeError('');
      setForm((prev) => ({ ...prev, city: '' }));

      if (value.length === 6) {
        try {
          setLoadingCity(true);
          const res = await fetch(`https://api.postalpincode.in/pincode/${value}`);
          const data = await res.json();

          if (data[0].Status === 'Success' && data[0].PostOffice.length > 0) {
            const postOffice = data[0].PostOffice[0];
            setForm((prev) => ({
              ...prev,
              city: postOffice.District,
            }));
          } else {
            setForm((prev) => ({ ...prev, city: '' }));
            setPincodeError('Invalid pincode. Please enter a valid 6-digit Indian pincode.');
          }
        } catch (error) {
          setPincodeError('Something went wrong. Try again later.');
        } finally {
          setLoadingCity(false);
        }
      }
    }
  };

  const allRequiredFilled = form.name && form.phone && form.pincode && selectedBill;

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      await axios.post('http://localhost:8080/api/residential/submit', {
        name: form.name,
        phone: form.phone,
        pincode: form.pincode,
        city: form.city,
        email: form.email,
        electricityBill: selectedBill,
      });

      setStatus({ success: true, message: 'Form submitted successfully!' });

      setForm({ name: '', phone: '', pincode: '', city: '', email: '' });
      setSelectedBill('');
      setAgreed(false);
    } catch (error) {
      console.error('Submission error:', error);
      setStatus({ success: false, message: 'Submission failed. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box>
      {/* White header */}
      <Box sx={{ bgcolor: '#fff', py: 2 }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: 900, fontFamily: 'Poppins, sans-serif', color: '#101f9d' }}
        >
          India’s <span style={{ color: '#00AEEF', fontWeight: 700 }}>#1</span> home solar company*
        </Typography>
      </Box>

      {/* Gradient section */}
      <Box
        sx={{
          background: 'linear-gradient(90.16deg, #101f9d -15.84%, #11111c 122.54%)',
          py: 8,
          px: { xs: 1, md: 4 },
        }}
      >
        <Grid
          container
          spacing={2}
          alignItems="flex-start"
          paddingTop={'50px'}
          justifyContent="space-between"
          sx={{ maxWidth: '1100px', mx: 'auto' }}
        >
          {/* Left content */}
          <Grid item xs={12} md={5}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 1000,
                fontFamily: 'Poppins, sans-serif',
                color: '#fff',
                mb: 3,
              }}
            >
              Schedule a <br />
              <Box component="span" sx={{ color: '#00D2FF' }}>FREE consultation</Box><br />
              with us today!
            </Typography>
            <Typography
              sx={{
                color: '#EAEAEA',
                fontFamily: 'Poppins, sans-serif',
                fontSize: 20,
                mt: 2,
              }}
            >
              Get genuine advice from our solar experts.
              <br />
              No pressure, book only if you are satisfied!
            </Typography>
          </Grid>

          {/* Right form */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                bgcolor: '#fff',
                borderRadius: 8,
                p: 4,
                width: '100%',
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              <Typography sx={{ fontWeight: 900, mb: 0.5 }}>
                Full Name <span style={{ color: 'red' }}>*</span>
              </Typography>
              <TextField
                fullWidth
                value={form.name}
                label="Full Name"
                onChange={handleChange('name')}
                sx={{ mb: 2 }}
              />

              <Typography sx={{ fontWeight: 900, mb: 0.5 }}>
                WhatsApp number <span style={{ color: 'red' }}>*</span>
              </Typography>
              <TextField
                fullWidth
                value={form.phone}
                label="WhatsApp number"
                onChange={handleChange('phone')}
                sx={{ mb: 2 }}
              />

              <Typography sx={{ fontWeight: 900, mb: 1 }}>
                Monthly Electricity Bill <span style={{ color: 'red' }}>*</span>
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                {billOptions.map((option) => (
                  <Button
                    key={option}
                    onClick={() => setSelectedBill(option)}
                    sx={{
                      fontSize: 14,
                      fontWeight: 900,
                      textTransform: 'none',
                      borderRadius: 3,
                      px: 2,
                      bgcolor: selectedBill === option ? '#0905a1' : '#fff',
                      border:
                        selectedBill === option ? '1px solid #0905a1' : '1px solid #b8b8b8',
                      color: selectedBill === option ? '#fff' : '#000',
                      '&:hover': {
                        bgcolor: selectedBill === option ? '#0905a1' : '#f0f0f0',
                      },
                    }}
                  >
                    {option}
                  </Button>
                ))}
              </Box>

              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={6}>
                  <Typography sx={{ fontWeight: 900, mb: 0.5 }}>
                    Pin code <span style={{ color: 'red' }}>*</span>
                  </Typography>
                  <TextField
                    fullWidth
                    value={form.pincode}
                    label="Pin code"
                    onChange={handleChange('pincode')}
                  />
                  {pincodeError && (
                    <Typography sx={{ color: 'red', mt: 1, fontSize: 13 }}>
                      {pincodeError}
                    </Typography>
                  )}
                </Grid>

                <Grid item xs={6}>
                  <Typography sx={{ fontWeight: 900, mb: 0.5 }}>
                    City
                  </Typography>
                  <TextField
                    fullWidth
                    value={form.city}
                    label="City"
                    disabled
                    InputProps={{
                      endAdornment: loadingCity && <CircularProgress size={20} />,
                    }}
                  />
                </Grid>
              </Grid>

              <Typography sx={{ fontWeight: 900, mb: 0.5 }}>
                Email
              </Typography>
              <TextField
                fullWidth
                value={form.email}
                label="Email"
                onChange={handleChange('email')}
                sx={{ mb: 2 }}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    disabled={!allRequiredFilled}
                  />
                }
                label={
                  <Typography sx={{ fontSize: 14 }}>
                    I agree to SolarSquare’s&nbsp;
                    <Link href="/terms-of-service" underline="hover">terms of service</Link> &nbsp;and&nbsp;
                    <Link href="/privacy-policy" underline="hover">privacy policy</Link>
                  </Typography>
                }
              />

              <Button
                fullWidth
                variant="contained"
                disabled={!agreed || submitting}
                onClick={handleSubmit}
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
                {submitting ? 'Submitting...' : 'Yes! Reduce my electricity bill'}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Snackbar Alert */}
      <Snackbar
        open={status.message !== ''}
        autoHideDuration={3000}
        onClose={() => setStatus({ success: null, message: '' })}
      >
        <Alert
          onClose={() => setStatus({ success: null, message: '' })}
          severity={status.success ? 'success' : 'error'}
          sx={{ width: '100%' }}
        >
          {status.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ConsultationSection;
