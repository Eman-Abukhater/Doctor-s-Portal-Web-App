import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

function AppointmentCard({ appointment }) {
  return (
    <Card elevation={1}>
      <CardContent sx={{ textAlign: "center" }}>
        <Typography  sx={{ color: "#19D3AE", fontWeight: 600 , fontSize: 18}}>
          {appointment.name}
        </Typography>
        <Typography sx={{ my: 1, fontSize: 13 }}>{appointment.time}</Typography>
        <Typography sx={{ mb: 2, fontSize: 10 }}>
          {appointment.spaces} SPACES AVAILABLE
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundImage:
              "linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)",
            px: 3,
            py: 1,
            borderRadius: 2,
            color: "white",
            fontWeight: "800",
            fontSize: "12px",
            boxShadow: "none",
            textTransform: 'uppercase',

            
          }}
        >
          {" "}
          Book Appointment
        </Button>
      </CardContent>
    </Card>
  );
}

export default AppointmentCard;
