import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// ✅ Create a basic theme (you can customize colors later)
const theme = createTheme({
  palette: {
    mode: 'light', // change to 'dark' if you want dark mode
    primary: {
      main: '#1976d2', // your brand blue
    },
    secondary: {
      main: '#f50057', // pink
    },
  },
  shape: {
    borderRadius: 8,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />  {/* Reset CSS for consistent look */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
