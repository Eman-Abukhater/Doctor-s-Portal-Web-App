import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

const Service = ({ icon, title, description }) => {
  return (
    <Card elevation={3} sx={{ borderRadius: 3, textAlign: 'center', p: 2 }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <img src={icon} alt={title} style={{ width: 60 }} />
        </Box>
        <Typography variant="h6" fontWeight="bold" color='#3A4256' gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="#000000">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Service;
