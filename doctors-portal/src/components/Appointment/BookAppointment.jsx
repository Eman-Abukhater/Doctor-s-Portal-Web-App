import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import AppointmentCard from "./AppointmentCard";

const appointments = [
  {
    name: "Teeth Orthodontics",
    time: "8:00 AM - 9:00 AM",
    spaces: 10,
  },
  {
    name: "Cosmetic Dentistry",
    time: "10:05 AM - 11:30 AM",
    spaces: 10,
  },
  {
    name: "Teeth Cleaning",
    time: "8:00 AM - 9:00 AM",
    spaces: 10,
  },
  {
    name: "Teeth Orthodontics",
    time: "8:00 AM - 9:00 AM",
    spaces: 10,
  },
  {
    name: "Teeth Orthodontics",
    time: "8:00 AM - 9:00 AM",
    spaces: 10,
  },
  {
    name: "Teeth Orthodontics",
    time: "8:00 AM - 9:00 AM",
    spaces: 10,
  },
];

function BookAppointment() {
  return (
    <Box sx={{ mt: 30, px: 2 }}>
      {/* Title */}
      <Typography
        variant="h6"
        align="center"
        sx={{ color: "#19D3AE", fontWeight: 400, mb: 5 }}
      >
        Available Appointments on April 30, 2022
      </Typography>

      {/* Grid of Appointments */}
      <Grid container spacing={4} sx={{px:3,py:6}}>
        {appointments.map((appointment, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <AppointmentCard appointment={appointment} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default BookAppointment;
