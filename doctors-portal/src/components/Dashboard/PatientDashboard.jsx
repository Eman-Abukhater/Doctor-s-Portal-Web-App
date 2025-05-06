import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Divider,
} from "@mui/material";
import CheckoutButton from "../CheckoutButton";

function PatientDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [patientName, setPatientName] = useState("");

  useEffect(() => {
    // Load appointments from localStorage, with fallback if no data
    const storedPatientAppointments = JSON.parse(localStorage.getItem("patientAppointments"));
    if (storedPatientAppointments) {
      setAppointments(storedPatientAppointments);
    } else {
      setAppointments([]); // If no appointments saved, set to empty array
    }

    // Load patient name from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.name) {
      setPatientName(storedUser.name);
    } else {
      setPatientName("Patient");
    }
  }, []);

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 800, mx: "auto" }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold", color: "#2E7D32" }}>
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
                <ListItem alignItems="flex-start" sx={{ flexDirection: "column", alignItems: "flex-start" }}>
                  <ListItemText
                    primary={`${appointment.date} - ${appointment.time}`}
                    secondary={`Doctor: ${appointment.doctor}`}
                  />
                  {/* Pay Now Button */}
                  <CheckoutButton appointment={appointment} />
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
