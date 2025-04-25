import React from "react";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";
import HeroSection from "./components/HeroSection";
import Home from "./pages/Home";

function App() {
  return (
    <Box sx={{fontFamily: "Open Sans, sans-serif" }}>
      <Navbar />
      <Home />
    </Box>
  );
}

export default App;
