import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { useNavigate } from "react-router-dom"; // Import navigation
import { sendPasswordResetEmail } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { query, collection, where, getDocs } from "firebase/firestore";

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState(null); // message text
  const [messageType, setMessageType] = useState(null); // 'success' or 'error'
  const [role, setRole] = useState("patient"); // default role
  const [allDoctorNames, setAllDoctorNames] = useState([]);
  const [selectedDoctorName, setSelectedDoctorName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      if (isSignUp) {
        // Sign up process
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), { name, email, role });

        setMessageType("success");
        setMessage("Signup successful! Please login.");
        setIsSignUp(false);
      } else {
        // Login process
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();

          // Store user info in localStorage
          const nameToStore =
            userData.role === "doctor" ? selectedDoctorName : userData.name;
          localStorage.setItem(
            "user",
            JSON.stringify({
              uid: user.uid,
              name: nameToStore,
              email: userData.email,
              role: userData.role,
            })
          );

          // Fetch role-based data
          await fetchRoleData(userData);

          navigate("/dashboard");
        } else {
          setMessageType("error");
          setMessage("User data not found.");
        }
      }
    } catch (error) {
      handleError(error);
    }
  };
  useEffect(() => {
    const fetchDoctorNames = async () => {
      if (role === "doctor" && !isSignUp) {
        const q = query(collection(db, "users"), where("role", "==", "doctor"));
        const querySnapshot = await getDocs(q);
        const names = querySnapshot.docs.map((doc) => doc.data().name);
        setAllDoctorNames(names);
      }
    };
    fetchDoctorNames();
  }, [role, isSignUp]);

  const fetchRoleData = async (userData) => {
    let querySnapshot;
  
    if (userData.role === "patient") {
      const user = JSON.parse(localStorage.getItem("user"));
      const patientEmail = user?.email;
  
      if (patientEmail) {
        console.log("Fetching appointments for patient:", patientEmail);
  
        querySnapshot = await getDocs(
          query(collection(db, "appointments"), where("email", "==", patientEmail))
        );
  
        const patientAppointments = querySnapshot.docs.map((doc) => doc.data());
        console.log("Patient appointments:", patientAppointments);
  
        localStorage.setItem(
          "patientAppointments",
          JSON.stringify(patientAppointments)
        );
      }
    } 
    
    else if (userData.role === "doctor") {
      console.log("Fetching appointments for doctor:", userData.name);
  
      querySnapshot = await getDocs(collection(db, "appointments"));
      const allAppointments = querySnapshot.docs.map((doc) => doc.data());
      console.log("All appointments fetched:", allAppointments);
  
      const doctorAppointments = allAppointments.filter(
        (appointment) => appointment.doctor === userData.name
      );
      console.log("Doctor's filtered appointments:", doctorAppointments);
  
      localStorage.setItem(
        "doctorAppointments",
        JSON.stringify(doctorAppointments)
      );
    } 
    
    else if (userData.role === "admin") {
      console.log("Fetching all appointments for admin...");
  
      querySnapshot = await getDocs(collection(db, "appointments"));
      const allAppointments = querySnapshot.docs.map((doc) => doc.data());
      console.log("All appointments (admin):", allAppointments);
  
      localStorage.setItem("allAppointments", JSON.stringify(allAppointments));
    }
  };
  

  const handleError = (error) => {
    setMessageType("error");
    if (error.code === "auth/email-already-in-use") {
      setMessage("This email is already registered. Please login.");
    } else if (error.code === "auth/invalid-email") {
      setMessage("Invalid email format.");
    } else if (error.code === "auth/wrong-password") {
      setMessage("Incorrect password.");
    } else if (error.code === "auth/user-not-found") {
      setMessage("No user found with this email.");
    } else {
      setMessage(error.message);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setMessageType("error");
      setMessage("Please enter your email first.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setMessageType("success");
      setMessage("Password reset email sent!");
    } catch (error) {
      setMessageType("error");
      if (error.code === "auth/user-not-found") {
        setMessage("No user found with this email.");
      } else if (error.code === "auth/invalid-email") {
        setMessage("Invalid email address.");
      } else {
        setMessage(error.message);
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setMessageType("success");
      setMessage("Logged in with Google! Redirecting...");
      setTimeout(() => navigate("/"), 1500);
    } catch (error) {
      setMessageType("error");
      setMessage(error.message);
    }
  };

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
    setMessage(null);
  };

  return (
    <Box
      sx={{
        maxWidth: 300,
        mx: "auto",
        my: { xs: 10, md: 30 },
        p: 4,
        boxShadow: 1,
        borderRadius: 3,
        textAlign: "center",
      }}
    >
      <Typography variant="h6" mb={5}>
        {isSignUp ? "Sign Up" : "Login"}
      </Typography>

      {/* Alert message */}
      {message && (
        <Alert severity={messageType} sx={{ mb: 2 }}>
          {message}
        </Alert>
      )}

      {/* Name Field */}
      {isSignUp && (
        <Box sx={{ textAlign: "left", mb: 2 }}>
          <label
            style={{
              fontSize: "14px",
              fontWeight: "500",
              marginBottom: "5px",
              display: "block",
            }}
          >
            Name
          </label>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ "& fieldset": { borderRadius: 2 } }}
          />
        </Box>
      )}
      {/* Role Field */}
      {isSignUp && (
        <Box sx={{ textAlign: "left", mb: 2 }}>
          <label
            style={{
              fontSize: "14px",
              fontWeight: "500",
              marginBottom: "5px",
              display: "block",
            }}
          >
            Role
          </label>
          <TextField
            select
            SelectProps={{ native: true }}
            fullWidth
            variant="outlined"
            size="small"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            sx={{ "& fieldset": { borderRadius: 2 } }}
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
            <option value="admin">Admin</option>
          </TextField>
        </Box>
      )}

      {/* Email Field */}
      <Box sx={{ textAlign: "left", mb: 2 }}>
        <label
          style={{
            fontSize: "14px",
            fontWeight: "500",
            marginBottom: "5px",
            display: "block",
          }}
        >
          Email
        </label>
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ "& fieldset": { borderRadius: 2 } }}
        />
      </Box>

      {/* Password Field */}
      <Box sx={{ textAlign: "left", mb: 1 }}>
        <label
          style={{
            fontSize: "14px",
            fontWeight: "500",
            marginBottom: "5px",
            display: "block",
          }}
        >
          Password
        </label>
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ "& fieldset": { borderRadius: 2 } }}
        />
      </Box>

      {/* Forgot Password */}
      <Typography
        variant="body2"
        onClick={handleForgotPassword}
        sx={{
          textAlign: "left",
          fontSize: "13px",
          mb: 2,
          mt: 1,
          color: "#00BCD4",
          cursor: "pointer",
        }}
      >
        Forgot Password?
      </Typography>

      {/* Submit Button */}
      <Button
        fullWidth
        variant="contained"
        onClick={handleSubmit}
        sx={{
          backgroundColor: "#3A4256",
          color: "#D4D9E3",
          mt: 1,
          mb: 2,
          height: "45px",
          textTransform: "none",
          fontSize: "16px",
          borderRadius: 2,
          "&:hover": {
            backgroundColor: "#2C3342",
          },
        }}
      >
        {isSignUp ? "SIGN UP" : "LOGIN"}
      </Button>

      {/* Toggle between Login and Sign Up */}
      <Typography variant="body2" mb={2}>
        {isSignUp ? "Already have an account?" : "New to Doctors Portal?"}
        <span
          onClick={handleToggle}
          style={{ color: "#00BCD4", cursor: "pointer", marginLeft: "5px" }}
        >
          {isSignUp ? "Login here" : "Create new account"}
        </span>
      </Typography>

      {/* Divider */}
      <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
        <Divider sx={{ flexGrow: 1 }} />
        <Typography sx={{ mx: 2, fontSize: "14px" }}>OR</Typography>
        <Divider sx={{ flexGrow: 1 }} />
      </Box>

      <Button
        fullWidth
        variant="outlined"
        onClick={handleGoogleLogin}
        sx={{
          height: "50px",
          textTransform: "none",
          fontSize: "16px",
          borderRadius: 2,
          borderColor: "#3A4256",
          color: "#3A4256",
        }}
      >
        CONTINUE WITH GOOGLE
      </Button>
    </Box>
  );
}

export default Login;
