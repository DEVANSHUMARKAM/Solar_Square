//parallax section of this page 

import { Box } from '@mui/material';
import ParallaxImage from '../../assets/parallax.jpg'; 

const ParallaxSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${ParallaxImage})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: { xs: '300px', md: '600px' },
      }}
    />
  );
};

export default ParallaxSection;
