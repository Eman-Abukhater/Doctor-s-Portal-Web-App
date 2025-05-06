import React, { useState, useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import AppointmentCard from "./AppointmentCard";
import dayjs from "dayjs";

function BookAppointment() {
  const defaultAppointments = [
    {
      id: 1,
      name: "Teeth Orthodontics",
      time: "8:00 AM - 9:00 AM",
      spaces: 10,
      doctors: ["Dr. Smith", "Dr. Jane", "Dr. Doe", "Dr. Brown"],
    },
    {
      id: 2,
      name: "Cavity Protection",
      time: "10:05 AM - 11:30 AM",
      spaces: 10,
      doctors: ["Dr. Smith", "Dr. Jane", "Dr. Doe", "Dr. Brown"],
    },
    {
      id: 3,
      name: "Teeth Cleaning",
      time: "8:00 AM - 9:00 AM",
      spaces: 10,
      doctors: ["Dr. Smith", "Dr. Jane", "Dr. Doe", "Dr. Brown"],
    },
    {
      id: 4,
      name: "Wisdom Teeth Removal",
      time: "11:00 AM - 12:00 PM",
      spaces: 10,
      doctors: ["Dr. Smith", "Dr. Jane", "Dr. Doe", "Dr. Brown"],
    },
    {
      id: 5,
      name: "Checkup",
      time: "1:00 PM - 2:00 PM",
      spaces: 10,
      doctors: ["Dr. Smith", "Dr. Jane", "Dr. Doe", "Dr. Brown"],
    },
    {
      id: 6,
      name: "Tooth Extraction",
      time: "3:00 PM - 4:00 PM",
      spaces: 1,
      doctors: ["Dr. Smith", "Dr. Jane", "Dr. Doe", "Dr. Brown"],
    },
  ];

  const [appointments, setAppointments] = useState([]);

  // Load appointments from localStorage or fallback to default
  useEffect(() => {
    const saved = localStorage.getItem("appointments");
    if (saved) {
      setAppointments(JSON.parse(saved));
    } else {
      setAppointments(defaultAppointments);
    }
  }, []);

  // Update appointments and persist in localStorage
  const handleBooking = (id) => {
    const updatedAppointments = appointments.map((appointment) =>
      appointment.id === id && appointment.spaces > 0
        ? { ...appointment, spaces: appointment.spaces - 1 }
        : appointment
    );
    setAppointments(updatedAppointments);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
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
