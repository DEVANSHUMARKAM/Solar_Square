//

import { Box, Grid, Typography } from '@mui/material';

// Import images
import BgImage from '../../assets/comparrallax.png';
import VanImage from '../../assets/cm-stats-truck.png';
import Icon1 from '../../assets/hs-section-3-1.png';
import Icon2 from '../../assets/hs-section-3-3.png';
import Icon3 from '../../assets/hs-section-3-4.png';
import Icon4 from '../../assets/cm-stats-2.png';

const stats = [
  { icon: Icon1, number: '200+', label: 'commercial projects' },
  { icon: Icon2, number: '10+', label: 'years' },
  { icon: Icon3, number: '130+ MWp', label: 'installation experience' },
  { icon: Icon4, number: '140+ Cr', label: 'saving annually' },
];

const CommercialStatsSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${BgImage})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 0,
      }}
    >
      <Grid
        container
        sx={{
          backgroundColor: '#00cfff',
          width: '100%',
          py: { xs: 6, md: 8 },
          m: 0,
        }}
        alignItems="center"
      >
        {/* Van at EXTREME left */}
        <Grid
          item
          xs={12}
          md="auto"
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            pl: 0,
          }}
        >
          <Box
            component="img"
            src={VanImage}
            alt="Van"
            sx={{
              width: { xs: '85%', sm: 300, md: 360 },
              maxWidth: '100%',
              pl: 0,
              ml: 0,
            }}
          />
        </Grid>

        {/* Stats on right side */}
        <Grid
          item
          xs={12}
          md
          container
          spacing={16}
          justifyContent="center"
          alignItems="center"
          sx={{ px: { xs: 3, md: 18 } }}
        >
          {stats.map((item, index) => (
            <Grid item xs={6} md={3} key={index} sx={{ textAlign: 'center' }}>
              <Box
                component="img"
                src={item.icon}
                alt={item.label}
                sx={{ width: 75, height: 75, mb: 1 }}
              />
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 1000,
                  fontFamily: 'Poppins, sans-serif',
                  color: '#black',
                }}
              >
                {item.number}
              </Typography>
              <Typography
                sx={{
                  fontSize: 20,
                  fontWeight: 600,
                  fontFamily: 'Poppins, sans-serif',
                  color: '#222',
                }}
              >
                {item.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CommercialStatsSection;
