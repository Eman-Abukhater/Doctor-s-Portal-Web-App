import React from "react";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment"; // 👉 Import Appointment page
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ fontFamily: "Open Sans, sans-serif" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
