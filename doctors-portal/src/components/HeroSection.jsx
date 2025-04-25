import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
function HeroSection() {
  return (
    <Grid
      container
      spacing={10}
      alignItems="center"
      sx={{ px: { xs: 2, md: 8 }, py: { xs: 8, md: "15%" } }}
    >
      <Grid item xs={12} md={6} sx={{ textAlign: "left" ,order: { xs: 2, md: 1 }}}>
        <Typography
          variant="h3"
          sx={{ fontWeight:600, mb: 2, color: "#3A4256" }}
        >
          Your New Smile Starts Here
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#3A4256", mb: 3, fontWeight: "400" }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundImage:
              "linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)",
            px: 1,
            py: 1.5,
            borderRadius: 2,
            textTransform: "capitalize",
            color: "white",
            fontWeight: "800",
            fontSize: "12px",
            boxShadow: "none",
          }}
        >
          GET STARTED
        </Button>
      </Grid>
      <Grid item xs={12} md={6} sx={{order: { xs: 1, md: 2 } }}>
        <Box
          component="img"
          src="/assets/chair.png"
          alt="Dental Chair"
          sx={{ width: "100%", maxHeight: 400 }}
        />
      </Grid>
    </Grid>
  );
}

export default HeroSection;
