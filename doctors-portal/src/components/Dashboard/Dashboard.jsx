import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PatientDashboard } from "./PatientDashboard";
import { DoctorDashboard } from "./DoctorDashboard";
import { AdminDashboard } from "./AdminDashboard";

const Dashboard = () => {
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in by looking in localStorage
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      navigate("/login"); // If no user is logged in, redirect to the login page
    } else {
      setUserRole(user.role); // Set the role of the user
    }
  }, [navigate]);

  // Conditional rendering based on role
  if (userRole === "patient") {
    return <PatientDashboard />;
  } else if (userRole === "doctor") {
    return <DoctorDashboard />;
  } else if (userRole === "admin") {
    return <AdminDashboard />;
  } else {
    return <div>Loading...</div>;
  }
};

export default Dashboard;
