import React from "react";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment"; 
import "./App.css";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ fontFamily: "Open Sans, sans-serif" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
