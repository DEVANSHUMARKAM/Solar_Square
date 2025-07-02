//Their services

import { Grid, Container } from '@mui/material';
import HoverCard from './HoverCard';

const cardData = [
  {
    title: 'Residential',
    icon: '/icons/home.png',
    description: 'Solar for your house',
  },
  {
    title: 'Commercial',
    icon: '/icons/office.png',
    description: 'Power your business with solar',
  },
  {
    title: 'Housing Societies',
    icon: '/icons/apartment.png',
    description: 'Save energy for your society',
  },
];

const ServicesSection = () => {
  return (
    <Container sx={{ py: 10 }}>
      <Grid container spacing={4} justifyContent="center">
        {cardData.map((item, index) => (
          <Grid item key={index}>
            <HoverCard
              title={item.title}
              icon={item.icon}
              description={item.description}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServicesSection;
