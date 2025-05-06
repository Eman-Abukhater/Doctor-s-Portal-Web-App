import React, { useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

function AdminDashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem("allAppointments"));
    setAppointments(storedAppointments || []);
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>
      <Typography variant="h6" gutterBottom>All Appointments:</Typography>

      {appointments.length === 0 ? (
        <Typography>No appointments found.</Typography>
      ) : (
        appointments.map((appointment, index) => (
          <Card key={index} sx={{ mb: 2 }}>
            <CardContent>
              <Typography><strong>Patient:</strong> {appointment.name}</Typography>
              <Typography><strong>Doctor:</strong> {appointment.doctor}</Typography>
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

export default AdminDashboard;
