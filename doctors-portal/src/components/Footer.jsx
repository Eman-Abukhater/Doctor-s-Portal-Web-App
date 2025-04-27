import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#ffffff', 
        backgroundImage: `url('/assets/footer-bg.png')`, 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: {xs:'0' ,md:'cover'}, 
        backgroundPosition: 'center',
        py: 3,
        mt: 4,
      }}
    >
      <Container>
        <Grid container spacing={{xs:10,md:30}} px={{xs:2,md:4}} mb={15}>
          <Grid item xs={12} md={4}>
            <Typography fontSize='8' fontWeight='bold' color='#939393' mb={1}>
              SERVICES
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 ,color:'#3A4256'}}>
              <Link href="#" color="inherit" underline="hover">Emergency Checkup</Link>
              <Link href="#" color="inherit" underline="hover">Monthly Checkup</Link>
              <Link href="#" color="inherit" underline="hover">Weekly Checkup</Link>
              <Link href="#" color="inherit" underline="hover">Deep Checkup</Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
          <Typography fontSize='10' fontWeight='bold' color='#939393' mb={1}>
          ORAL HEALTH
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1,color:'#3A4256' ,fontSize:'6'}}>
              <Link href="#" color="inherit" underline="hover">Fluoride Treatment</Link>
              <Link href="#" color="inherit" underline="hover">Cavity Filling</Link>
              <Link href="#" color="inherit" underline="hover">Teeth Whitening</Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
          <Typography fontSize='10' fontWeight='bold' color='#939393' mb={1} >
          OUR ADDRESS
            </Typography>
            <Typography sx={{color:'#3A4256'}} fontSize='8'>New York - 101010 Hudson</Typography>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 10 }}>
          <Typography variant="body1" color="#000000">
            Copyright © 2022 All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
