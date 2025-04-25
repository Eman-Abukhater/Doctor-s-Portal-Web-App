import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

const cardData = [
  {
    icon: 'clock.png',
    title: 'Opening Hours',
    description: 'Lorem Ipsum is simply dummy text of the pri',
    bgColor: 'linear-gradient(to right, #19D3AE, #0FCFEC)',
    color: 'white'
  },
  {
    icon: 'location.png',
    title: 'Visit our location',
    description: 'Brooklyn, NY 10036, United States',
    bgColor: '#3A4256',
    color: 'white'
  },
  {
    icon: 'phone.png',
    title: 'Contact us now',
    description: '+000 123 456789',
    bgColor: 'linear-gradient(to right, #19D3AE, #0FCFEC)',
    color: 'white'
  }
];

const InfoCards = () => {
  return (
    <Box sx={{mt: 8, mb: 4, px: { xs: 1, md: 2 } }}>
      <Grid container spacing={3} sx={{py:4}}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={4} key={index} sx={{mb: 6}}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                background: card.bgColor,
                color: card.color,
                borderRadius: 2,
                p: 3,
                height: '100%'
              }}
            >
              <Box sx={{ mr: 2 }}>
                <img
                  src={`/assets/icons/${card.icon}`}
                  alt={card.title}
                  width={80}
                  height={80}
                  style={{ objectFit: 'contain' }}
                />
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb:2}}>
                  {card.title}
                </Typography>
                <Typography variant="body2">
                  {card.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default InfoCards;
