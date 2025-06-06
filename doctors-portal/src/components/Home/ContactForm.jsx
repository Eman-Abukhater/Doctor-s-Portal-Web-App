import React from "react";
import { Box, Container, Typography, TextField, Button } from "@mui/material";

const ContactForm = () => {
  return (
    <Box
      sx={{
        background: `url('/assets/bg-blue.png') center/cover no-repeat`,
        backgroundBlendMode: "overlay",
        height: 500,
        py: 5,
      }}
    >
      <Container maxWidth="xs" sx={{ textAlign: "center", color: "white" }}>
        <Typography
          variant="subtitle1"
          sx={{ color: "#19D3AE", fontWeight: "600" }}
        >
          Contact Us
        </Typography>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: "200" }}>
          Stay connected with us
        </Typography>

        <Box component="form">
          <TextField
            fullWidth
            margin="normal"
            label="Email Address"
            variant="filled"
            sx={{
              "& .MuiFilledInput-root": {
                backgroundColor: "white",
                borderRadius: 2,
                mb: 2,
              },
              "& .MuiInputLabel-root": {
                color: "#3A425666",
              },
            }}
          />

          <TextField
            fullWidth
            label="Subject"
            variant="filled"
            sx={{
              "& .MuiFilledInput-root": {
                backgroundColor: "white",
                borderRadius: 2,
                mb: 2,
              },
              "& .MuiInputLabel-root": {
                color: "#3A425666",
              },
            }}
          />
          <TextField
            fullWidth
            label="Your message"
            variant="filled"
            multiline
            rows={4}
            sx={{
              "& .MuiFilledInput-root": {
                backgroundColor: "white",
                borderRadius: 2,
                mb: 2,
              },
              "& .MuiInputLabel-root": {
                color: "#3A425666",
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundImage:
                "linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)",
              px: 3,
              py: 1.5,
              borderRadius: 2,
              textTransform: "capitalize",
              color: "white",
              fontWeight: "800",
              fontSize: "12px",
              boxShadow: "none",
              mt: 2,
            }}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactForm;
