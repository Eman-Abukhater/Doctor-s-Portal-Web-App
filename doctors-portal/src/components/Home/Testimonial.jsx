import React from 'react';
import { Box, Container, Grid, Typography, Avatar, Card, CardContent } from '@mui/material';


const testimonials = [
  {
    id: 1,
    text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
    name: 'Winson Herry',
    location: 'California',
    img: "/assets/patient.png",
  },
  {
    id: 2,
    text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
    name: 'Winson Herry',
    location: 'California',
    img: "/assets/patient.png",
  },
  {
    id: 3,
    text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
    name: 'Winson Herry',
    location: 'California',
    img: "/assets/patient.png",
  },
];

const Testimonial = () => {
  return (
    <Box sx={{ my: 10 , px:2}}>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
          <Box>
            <Typography variant="subtitle2" sx={{ color: '#19D3AE', fontWeight: 700 }}>
              Testimonial
            </Typography>
            <Typography variant="h4" color='#3A4256' mt={1}>
              What Our Patients Says
            </Typography>
          </Box>
          <Box
            component="img"
            src="/assets/quote.png"
            alt="quote"
            sx={{ width: { xs: '70px', md: '150px' } }}
          />
        </Box>

        <Grid container spacing={4} sx={{px:{md:5} ,mt:10}}>
          {testimonials.map(({ id, text, name, location, img }) => (
            <Grid item xs={12} md={4} key={id}>
              <Card sx={{ py: {xs:0,md:2}, px: {xs:0,md:1},boxShadow: 1, borderRadius: 2 }}>
                <CardContent>
                  <Typography fontSize={15} mb={4} color='#000000'>
                    {text}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 4 }}>
                    <Avatar src={img} sx={{ width: 56, height: 56, border: '1px solid #00D8D8' }} />
                    <Box ml={2}>
                      <Typography variant="subtitle1" color='#3A4256'>
                        {name}
                      </Typography>
                      <Typography variant="body2" color="#000000">
                        {location}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonial;
