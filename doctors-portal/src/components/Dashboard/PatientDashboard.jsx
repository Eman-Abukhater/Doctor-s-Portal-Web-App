import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Divider,
} from '@mui/material';

function PatientDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [patientName, setPatientName] = useState('');

  useEffect(() => {
    const storedPatientAppointments = JSON.parse(localStorage.getItem("bookedAppointments"));
    setAppointments(storedPatientAppointments || []);

    // Get the patient's name from localStorage 
    const storedPatientName = localStorage.getItem("name");
    setPatientName(storedPatientName );
  }, []);


  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 800, mx: 'auto' }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', color: '#2E7D32' }}>
      {`Hello, ${patientName}!`}
      </Typography>

      <Typography variant="h6" sx={{ mb: 2 }}>
        Your Appointments
      </Typography>

      {appointments.length === 0 ? (
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography color="text.secondary">No upcoming appointments.</Typography>
        </Paper>
      ) : (
        <Paper elevation={3}>
          <List>
            {appointments.map((appointment, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <ListItemText
                    primary={`${appointment.date} - ${appointment.time}`}
                    secondary={`Doctor: ${appointment.doctor}`}
                  />
                </ListItem>
                {index < appointments.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  );
}

export default PatientDashboard;
