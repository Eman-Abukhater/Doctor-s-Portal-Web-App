import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

function DoctorDashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const storedDoctorAppointments = JSON.parse(localStorage.getItem("doctorAppointments"));
    setAppointments(storedDoctorAppointments || []);
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Doctor Dashboard</Typography>
      <Typography variant="h6" gutterBottom>Your Appointments:</Typography>

      {appointments.length === 0 ? (
        <Typography>No appointments scheduled.</Typography>
      ) : (
        appointments.map((appointment, index) => (
          <Card key={index} sx={{ mb: 2 }}>
            <CardContent>
              <Typography><strong>Patient:</strong> {appointment.name}</Typography>
              <Typography><strong>Date:</strong> {appointment.date}</Typography>
              <Typography><strong>Time:</strong> {appointment.time}</Typography>
              <Typography><strong>Service:</strong> {appointment.service}</Typography>
              <Typography><strong>Phone:</strong> {appointment.phone}</Typography>
              <Typography><strong>Email:</strong> {appointment.email}</Typography>
            </CardContent>
          </Card>
        ))
      )}
    </Box>
  );
}

export default DoctorDashboard;
