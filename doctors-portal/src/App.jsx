import React from "react";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";
import HeroSection from "./components/HeroSection"; // (even though not used here yet)
import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ fontFamily: "Open Sans, sans-serif" }}>
        <Navbar />
        <Home />
      </Box>
    </BrowserRouter>
  );
}

export default App;
