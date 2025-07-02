//Location footer details

import { Box, Container, Typography, Link } from '@mui/material';

const locations = [
  {
    state: 'Delhi NCR',
    cities: ['Solar in Delhi', 'Solar in Gurugram', 'Solar in NCR'],
  },
  {
    state: 'Gujarat',
    cities: ['Solar in Ahmedabad', 'Solar in Anand', 'Solar in Gandhinagar', 'Solar in Surat', 'Solar in Vadodara'],
  },
  {
    state: 'Karnataka',
    cities: ['Solar in Bengaluru', 'Solar in Mysuru'],
  },
  {
    state: 'Madhya Pradesh',
    cities: ['Solar in Bhopal', 'Solar in Gwalior', 'Solar in Indore', 'Solar in Jabalpur'],
  },
  {
    state: 'Maharashtra',
    cities: [
      'Solar in Amravati', 'Solar in Chhatrapati Sambhajinagar', 'Solar in Jalgaon', 'Solar in Mumbai',
      'Solar in Nagpur', 'Solar in Nashik', 'Solar in Pune', 'Solar in Thane', 'Solar in Kolhapur',
    ],
  },
  {
    state: 'Rajasthan',
    cities: ['Solar in Ajmer', 'Solar in Jaipur'],
  },
  {
    state: 'Telangana',
    cities: [
      'Solar in Hyderabad', 'Solar in Rangareddy', 'Solar in Sangareddy', 'Solar in Trimulgherry', 'Solar in Warangal',
    ],
  },
  {
    state: 'Uttar Pradesh',
    cities: [
      'Solar in Gautam Buddha Nagar', 'Solar in Kanpur Nagar', 'Solar in Lucknow', 'Solar in Varanasi', 'Solar in Ghaziabad',
    ],
  },
  {
    state: 'Tamil Nadu',
    cities: ['Solar in Chennai'],
  },
];

const LocationFooter = () => {
  return (
    <Box sx={{ backgroundColor: '#11132a', color: '#fff', py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontFamily: 'Poppins, sans-serif',
            mb: 3,
          }}
        >
          We are present here
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {locations.map((location, idx) => (
            <Box key={idx} sx={{ mr: 4 }}>
              <Typography
                component="span"
                sx={{
                  fontWeight: 600,
                  color: '#fff',
                  mr: 1,
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                • {location.state}
              </Typography>
              {location.cities.map((city, cidx) => (
                <Link
                  key={cidx}
                  href="#"
                  underline="hover"
                  sx={{
                    mx: 1,
                    fontSize: '14px',
                    color: '#ccc',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  {city}
                </Link>
              ))}
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 5,
            gap: 2,
            flexWrap: 'wrap',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: 16,
            }}
          >
            Proudly made in India ❤️
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 2,
              fontSize: '14px',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            <Link href="#" underline="hover" color="inherit">Whistleblower Policy</Link>
            <Typography>/</Typography>
            <Link href="#" underline="hover" color="inherit">Privacy Policy</Link>
            <Typography>/</Typography>
            <Link href="#" underline="hover" color="inherit">Terms of Service</Link>
            <Typography>/</Typography>
            <Link href="#" underline="hover" color="inherit">TnC GoodZero</Link>
            <Typography>/</Typography>
            <Typography>Copyright ©2025</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LocationFooter;
