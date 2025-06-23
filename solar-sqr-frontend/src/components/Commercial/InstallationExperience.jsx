// src/components/InstallationExperienceSection.jsx
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Image1 from '../../assets/hassle-free-new-1.png';
import Image2 from '../../assets/hassle-free-new-2.png';
const InstallationExperience = () => {
  return (
    <Box sx={{ py: 10, px: 3, textAlign: 'center', backgroundColor: '#fff' }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 900,
          fontFamily: 'Poppins, sans-serif',
          mb: 8,
          maxWidth: '1000px',
          mx: 'auto',
        }}
      >
        Hassle-free, professional and friendly installation experience <br />
        – we are committed to making your solar journey easy
      </Typography>

      <Grid container justifyContent="center" spacing={4}>
        {[{ img: Image1, title: 'Best price challenge', desc: 'We create premium solar systems using top-quality components, all at competitive prices, to guarantee a lifetime of high performance and savings.' },
          { img: Image2, title: 'Great solar starts with precision designs', desc: 'We survey your roof, take measurements, and conduct shadow analysis in our softwares to come up with precise 3D design for your rooftop solar. We consult with you and take approvals on the design before installation.' }]
          .map((item, idx) => (
            <Grid item key={idx}>
              <Box
                sx={{
                  width: { xs: '100%', md: '700px' }, // width increased
                  height: '30rem',
                  background: `url(${item.img})`,
                  backgroundPosition: '50%',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '1rem',
                  color: '#fff',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'flex-end',
                  p: 3,
                  textAlign: 'left',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    // background: 'linear-gradient(to top, rgba(17, 0, 55, 0.8), rgba(17, 0, 55, 0.2))',
                    p: 3,
                    borderRadius: '0 0 1rem 1rem',
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 1000, fontFamily: 'Poppins, sans-serif', mb: 1 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontSize: 18 }}>
                    {item.desc}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default InstallationExperience;
