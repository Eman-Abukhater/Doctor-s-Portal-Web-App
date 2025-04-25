import React from "react";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <Box sx={{ px: { xs: 2, md: 6 }, fontFamily: "Open Sans, sans-serif" }}>
      <Navbar />
      <HeroSection />
    </Box>
  );
}

export default App;
