import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';

const AppointmentBanner = () => {
  return (
    <Box
      sx={{
        position: 'relative', 
        backgroundImage: `url('/assets/bg-blue.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        height: { xs: 400, md: 400 }, 
        display: 'flex',
        alignItems: 'center',
        my: 10,
      }}
    >
      {/* Doctor Image */}
      <Box
        component="img"
        src="/assets/doctor.png"
        alt="Doctor"
        sx={{
          position: 'absolute',
          top: '-25%' , 
          left:  '5%' ,
          height: { xs: 0, md: 500 }, 
       
        }}
      />

      {/* Content */}
      <Container sx={{ ml: { md: '50%' }, textAlign: 'left' }}>
        <Typography variant="subtitle1" sx={{ color: '#19D3AE', fontWeight: 600 }}>
          Appointment
        </Typography>
        <Typography variant="h4" fontWeight="bold" mt={1} mb={2}>
          Make an appointment Today
        </Typography>
        <Typography variant="body1" color="white" mb={3}>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundImage:
              "linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)",
            px: 1,
            py: 1.5,
            borderRadius: 2,
            textTransform: "capitalize",
            color: "white",
            fontWeight: "800",
            fontSize: "12px",
            boxShadow: "none",
          }}
        >
          GET STARTED
        </Button>
      </Container>
    </Box>
  );
};

export default AppointmentBanner;
