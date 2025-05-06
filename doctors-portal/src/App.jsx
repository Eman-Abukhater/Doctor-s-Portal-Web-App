import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DoctorDashboard from "./components/Dashboard/DoctorDashboard";
import PatientDashboard from "./components/Dashboard/PatientDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ fontFamily: "Open Sans, sans-serif" }}>
        <Navbar />
        <AppRoutes />
      </Box>
    </BrowserRouter>
  );
}

function AppRoutes() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Check if user is logged in and determine role
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/login" element={<Login />} />

      {/* Route for the dashboard with dynamic role-based rendering */}
      {user ? (
        <>
          <Route path="/dashboard" element={<Dashboard />} />
          {user.role === "doctor" && (
            <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
          )}
          {user.role === "patient" && (
            <Route path="/patient-dashboard" element={<PatientDashboard />} />
          )}
          {user.role === "admin" && (
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          )}
        </>
      ) : (
        <Route path="/login" element={<Login />} />
      )}
    </Routes>
  );
}

export default App;
