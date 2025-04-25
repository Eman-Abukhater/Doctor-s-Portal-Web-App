import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';
import Service from './Service';

const serviceData = [
  {
    title: 'Fluoride Treatment',
    description: 'Lorem Ipsum is simply dummy printing and typesetting industry.',
    icon: '/assets/icons/fluoride.png', 
  },
  {
    title: 'Cavity Filling',
    description: 'Lorem Ipsum is simply dummy printing and typesetting industry.',
    icon: '/assets/icons/cavity.png',
  },
  {
    title: 'Teeth Whitening',
    description: 'Lorem Ipsum is simply dummy printing and typesetting industry.',
    icon: '/assets/icons/whitening.png',
  },
];

const Services = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: '#fff' }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="subtitle1" color="#19D3AE" fontWeight="bolder">
            OUR SERVICES
          </Typography>
          <Typography variant="h4" color="#3A4256" fontWeight="light" mt={1}>
            Services We Provide
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {serviceData.map((service, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Service {...service} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
