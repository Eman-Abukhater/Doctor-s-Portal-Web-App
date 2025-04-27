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
        height: { xs: 400, md: 500 }, 
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
          top: '-20%' , 
          left:  '2%' ,
          height: { xs: 0, md: 600 }, 
       
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
        <Typography fontSize={14} fontWeight={300} color="white" mb={3} sx={{width:{xs:"100%",md:450}}}>        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page            </Typography>
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
