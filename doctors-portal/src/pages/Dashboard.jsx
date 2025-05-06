import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

function Dashboard() {
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setRole(storedUser.role);
      // Redirect to the corresponding dashboard based on the role
      if (storedUser.role === "doctor") {
        navigate("/doctor-dashboard");
      } else if (storedUser.role === "patient") {
        navigate("/patient-dashboard");
      } else if (storedUser.role === "admin") {
        navigate("/admin-dashboard");
      }
    }
  }, [navigate]);

  return (
    <Box>
      <Typography variant="h5">Loading dashboard...</Typography>
    </Box>
  );
}

export default Dashboard;
