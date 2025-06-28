// src/components/Auth/Login.jsx
import React from 'react';
import {
  Box,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
  Typography,
  Grid,
} from '@mui/material';

const Login = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/assets/bg-login.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          bgcolor: 'white',
          p: 4,
          borderRadius: 3,
          boxShadow: 4,
          width: '100%',
          maxWidth: 400,
        }}
      >
        <Typography variant="h5" fontWeight="bold" mb={3}>
          Admin Login
        </Typography>
        <TextField fullWidth label="Username" margin="normal" />
        <TextField fullWidth label="Password" type="password" margin="normal" />

        <Grid container justifyContent="space-between" alignItems="center" sx={{ my: 2 }}>
          <FormControlLabel control={<Checkbox />} label="Remember me" />
          <Link href="#" underline="hover">Forgot password?</Link>
        </Grid>

        <Button variant="contained" fullWidth sx={{ mt: 2, py: 1.5, fontWeight: 'bold' }}>
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
