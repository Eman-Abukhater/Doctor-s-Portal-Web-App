import React, { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import AppointmentCard from "./AppointmentCard";
import dayjs from "dayjs";

function BookAppointment() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      name: "Teeth Orthodontics",
      time: "8:00 AM - 9:00 AM",
      spaces: 10,
    },
    {
      id: 2,
      name: "Cavity Protection",
      time: "10:05 AM - 11:30 AM",
      spaces: 10,
    },
    {
      id: 3,
      name: "Teeth Cleaning",
      time: "8:00 AM - 9:00 AM",
      spaces: 10,
    },
    {
      id: 4,
      name: "Wisdom Teeth Removal",
      time: "11:00 AM - 12:00 PM",
      spaces: 10,
    },
    {
      id: 5,
      name: "Checkup",
      time: "1:00 PM - 2:00 PM",
      spaces: 10,
    },
    {
      id: 6,
      name: "Tooth Extraction",
      time: "3:00 PM - 4:00 PM",
      spaces: 10,
    },
  ]);

  const handleBooking = (id) => {
    const updated = appointments.map((app) =>
      app.id === id ? { ...app, spaces: app.spaces - 1 } : app
    );
    setAppointments(updated);
  };

  return (
    <Box sx={{ mt: { xs: 7, md: 30 }, px: 2, mb: 15 }}>
      <Typography
        variant="h6"
        align="center"
        sx={{ color: "#19D3AE", fontWeight: 400, mb: 5 }}
      >
        {`Available Appointments on ${dayjs().format("MMMM D, YYYY")}`}
      </Typography>

      <Grid container spacing={4} sx={{ px: 3, py: 6 }}>
        {appointments.map((appointment) => (
          <Grid item xs={12} sm={6} md={4} key={appointment.id}>
            <AppointmentCard
              appointment={appointment}
              selectedDate={new Date()}
              handleBooking={handleBooking}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default BookAppointment;
