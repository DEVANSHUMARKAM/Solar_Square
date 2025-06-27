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
  Snackbar,
  Alert,
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

  const [status, setStatus] = useState({ success: null, message: '' });

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

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/commercial/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ success: true, message: 'Form submitted successfully!' });
        setFormData({
          name: '',
          companyName: '',
          whatsapp: '',
          city: '',
          pinCode: '',
          avgBill: '',
          agree: false,
        });
      } else {
        setStatus({ success: false, message: 'Submission failed. Please try again.' });
      }
    } catch (err) {
      console.error('Error:', err);
      setStatus({ success: false, message: 'An error occurred. Try again later.' });
    }
  };

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
        {/* LEFT TEXT */}
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

        {/* RIGHT FORM */}
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
            {[
              { name: 'name', label: 'Name', required: true },
              { name: 'companyName', label: 'Company Name', required: true },
              { name: 'whatsapp', label: 'WhatsApp number', required: true },
              { name: 'city', label: 'City', required: true },
              { name: 'pinCode', label: 'Company Pin code', required: false },
              { name: 'avgBill', label: 'Average Monthly Bill', required: true },
            ].map(({ name, label, required }) => (
              <Box key={name} sx={{ mb: 2 }}>
                <Typography sx={{ fontWeight: 900, mb: 0.5 }}>
                  {label} {required && <span style={{ color: 'red' }}>*</span>}
                </Typography>
                <TextField
                  fullWidth
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  InputProps={{ style: { borderRadius: '8px' } }}
                />
              </Box>
            ))}

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
              disabled={!formData.agree}
              onClick={handleSubmit}
            >
              Submit
            </Button>

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
        </Grid>
      </Grid>
    </Box>
  );
};

export default FormCommercial;
