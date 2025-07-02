//Details about their service present in 

import { Box, Typography, Grid, Paper } from '@mui/material';
import MapImg from '../../assets/india-map.png'; 
import BgGrid from '../../assets/india-map-bg.png'; 

import IconGujarat from '../../assets/Gujrat.png';
import IconMaharashtra from '../../assets/Maharashtra.png';
import IconMP from '../../assets/MP.png';
import IconKarnataka from '../../assets/Karnataka.png';
import IconRajasthan from '../../assets/Rajasthan.png';
import IconUP from '../../assets/UP.png';
import IconOther from '../../assets/Others.png';

const stateData = [
  {
    icon: IconGujarat,
    state: 'Gujarat',
    cities: 'Ahmedabad, Surat',
  },
  {
    icon: IconMaharashtra,
    state: 'Maharashtra',
    cities: 'Nagpur, Pune, Nashik,\nChhatrapati Sambhajinagar,\nKolhapur, Amravati',
  },
  {
    icon: IconMP,
    state: 'Madhya Pradesh',
    cities: 'Bhopal, Indore, Jabalpur, Gwalior',
  },
  {
    icon: IconKarnataka,
    state: 'Karnataka',
    cities: 'Bengaluru, Mysuru',
  },
  {
    icon: IconRajasthan,
    state: 'Rajasthan',
    cities: 'Jaipur',
  },
  {
    icon: IconUP,
    state: 'Uttar Pradesh',
    cities: 'Lucknow, Varanasi, Ghaziabad,\nKanpur',
  },
  {
    icon: IconOther,
    state: 'Others',
    cities: 'Delhi NCR, Telangana',
  },
];

const SolarLocations = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${BgGrid})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        py: 8,
        px: { xs: 2, md: 10 },
      }}
    >
      {/* Top Section */}
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{ mb: 8 }}
      >
        <Grid item xs={12} md={5}>
          <Typography
            variant="h3"
            sx={{ fontWeight: 1000, fontFamily: 'Poppins, sans-serif', mb: 2 }}
          >
            SolarSquare <br />
            locations
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 18,
              color: '#333',
            }}
          >
            We offer solar services in 20+ Indian cities,
            <br />
            and are expanding every day!
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={MapImg}
            alt="India Map"
            sx={{ width: '100%', maxWidth: '600px', display: 'block', mx: 'auto' }}
          />
        </Grid>
      </Grid>

      {/* Bottom Section: Location Cards */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="stretch"
      >
        {stateData.map((state, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index} display="flex" justifyContent="center">
            <Paper
              elevation={3}
              sx={{
                width: 300,
                height: 350,
                p: 3,
                borderRadius: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Box
                component="img"
                src={state.icon}
                alt={state.state}
                sx={{ height: 180, mb: 2 }}
              />
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 900,
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '20px',
                  mb: 1,
                }}
              >
                {state.state}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: '18px',
                  fontFamily: 'Poppins, sans-serif',
                  color: '#444',
                  whiteSpace: 'pre-wrap',
                  wordWrap: 'break-word',
                }}
              >
                {state.cities}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SolarLocations;
