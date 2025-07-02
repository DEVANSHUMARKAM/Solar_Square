//Avalibility of their own guide book

import {
  Box,
  Grid,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import SquareIcon from '@mui/icons-material/Square';
import GuideImage from '../../assets/handbook.png'; 

const guidePoints = [
  'Best rooftop system for your home',
  'Savings to expect with solar',
  'Indian states with the best solar output',
  'Easy financing to make the switch',
  'Govt subsidy and assistance',
  'From buying, installing to maintenance - how it works',
];

const GuideBookSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#06ccf8',
        px: { xs: 2, md: 6 },
        py: 10,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Grid
        container
        spacing={6}
        alignItems="center"
        justifyContent="center"
        sx={{ maxWidth: '1400px' }}
      >
        {/* LEFT SIDE */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 1000,
              fontFamily: 'Poppins, sans-serif',
              mb: 2,
              color: '#101f9d',
            }}
          >
            Homeowners Guide To <br /> Buying Rooftop Solar
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: 20,
              fontFamily: 'Poppins, sans-serif',
              color: '#000',
              mb: 3,
            }}
          >
            Learn everything you need to know before installing a rooftop solar system in your home.
          </Typography>

          <List sx={{ pl: 1 }}>
            {guidePoints.map((point, index) => (
              <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                <ListItemIcon sx={{ minWidth: '29px', color: '#000' }}>
                  <SquareIcon sx={{ fontSize: 15 }} />
                </ListItemIcon>
                <ListItemText
                  primary={point}
                  primaryTypographyProps={{
                    fontSize: 19,
                    fontFamily: 'Poppins, sans-serif',
                    color: '#000',
                  }}
                />
              </ListItem>
            ))}
          </List>

          <Button
            variant="contained"
            sx={{
              mt: 3,
              background: 'linear-gradient(97.83deg, #101f9d 6.22%, #11111c 87.68%)',
              borderRadius: '50px',
              px: 4,
              py: 1.2,
              fontWeight: 600,
              fontSize: 16,
              fontFamily: 'Poppins, sans-serif',
              color: '#fff',
              textTransform: 'none',
              '&:hover': {
                background: 'linear-gradient(97.83deg, #0d1880 6.22%, #0d0d1a 87.68%)',
              },
            }}
          >
            Download for free
          </Button>
        </Grid>

        {/* RIGHT SIDE */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              src={GuideImage}
              alt="Guide Book"
              sx={{
                maxWidth: '440px',
                width: '100%',
                // boxShadow: '0 20px 60px rgba(0, 0, 0, 0.35)',
                borderRadius: 0,
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GuideBookSection;
