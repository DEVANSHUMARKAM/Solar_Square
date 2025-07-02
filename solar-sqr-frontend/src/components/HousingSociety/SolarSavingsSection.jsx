//showing advantages of solar and savings

import { Box, Typography, Grid } from '@mui/material';
import SubsidyIcon from '../../assets/emi.png';
import FinanceIcon from '../../assets/icon_7.png';
import BreakEvenIcon from '../../assets/icon_8.png';

const savingsAdvantages = [
  {
    icon: SubsidyIcon,
    title: 'Save more with Government Subsidy',
    desc: 'Avail ₹18,000 per kW subsidy (up to ₹90 lakhs) under government schemes.',
  },
  {
    icon: FinanceIcon,
    title: 'Financing Options, Tailored for You',
    desc: 'Choose from OPEX, CAPEX, or our Zero Investment plan to switch to solar with ease.',
  },
  {
    icon: BreakEvenIcon,
    title: 'When will you break even?',
    desc: 'The break even period is anywhere between 1 to 4 years depending on electricity tariffs and your choice of components.',
  },
];

const SolarSavingsSection = () => {
  return (
    <Box sx={{ py: 10, px: { xs: 3, md: 10 }, maxWidth: 1300, mx: 'auto' }}>
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontWeight: 1000,
          fontFamily: 'Poppins, sans-serif',
          color: '#000',
          mb: 4,
        }}
      >
        Sahi Solar, Guaranteed Savings
      </Typography>

      <Typography
        align="center"
        sx={{
          fontSize: 20,
          color: '#444',
          fontFamily: 'Poppins, sans-serif',
          mb: 10,
          maxWidth: 1100,
          mx: 'auto',
        }}
      >
        The right solar ensures reliability, longevity, and proper savings. At SolarSquare, our
        advanced IIT-Bombay-approved WindPro Mount™ structures withstand wind speeds up to 170 kmph,
        offering unmatched safety and durability.
      </Typography>

      <Typography
        align="center"
        sx={{
          fontSize: 20,
          color: '#444',
          fontFamily: 'Poppins, sans-serif',
          mb: 10,
          maxWidth: 1100,
          mx: 'auto',
        }}
      >
        With our money-back guarantee, we ensure your savings are secure—if your solar system
        doesn’t generate the promised units, we’ll compensate you for the shortfall. Furthermore,
        our global standard in chemical anchoring ensures a leakage-free rooftop. We also offer a
        ₹1-lakh leakage-free guarantee.
      </Typography>

      <Grid container spacing={8} justifyContent="center">
        {savingsAdvantages.map((item, index) => (
          <Grid item xs={12} md={4} key={index} sx={{ textAlign: 'center' }}>
            <Box
              component="img"
              src={item.icon}
              alt={item.title}
              sx={{ width: 60, height: 60, mb: 2 }}
            />
            <Typography
              sx={{
                fontWeight: 900,
                fontFamily: 'Poppins, sans-serif',
                fontSize: 18,
                color: '#000',
                mb: 1,
              }}
            >
              {item.title}
            </Typography>
            <Typography
              sx={{
                fontSize: 15,
                color: '#555',
                fontFamily: 'Poppins, sans-serif',
                maxWidth: 320,
                mx: 'auto',
              }}
            >
              {item.desc}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SolarSavingsSection;
