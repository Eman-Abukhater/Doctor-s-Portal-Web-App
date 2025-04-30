import React, { useState } from "react";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";
import { auth, googleProvider } from "./firebase"; // adjust the path as needed

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <Box
      sx={{
        maxWidth: 300,
        mx: "auto",
        my: {xs:10,md:30},
        p: 4,
        boxShadow: 1,
        borderRadius: 3,
        textAlign: "center",
      }}
    >
      <Typography variant="h6" mb={5}>
        {isSignUp ? "Sign Up" : "Login"}
      </Typography>

      {/* Name Field for Sign Up */}
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
            sx={{ "& fieldset": { borderRadius: 2 } }}
          />
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
          sx={{ "& fieldset": { borderRadius: 2 } }}
        />
      </Box>

      {/* Forgot Password */}
      <Typography
        variant="body2"
        sx={{
          textAlign: "left",
          fontSize: "13px",
          mb: 2,
          mt: 1,
          color: "#555",
          cursor: "pointer",
        }}
      >
        Forgot Password ?
      </Typography>

      {/* Submit Button */}
      <Button
        fullWidth
        variant="contained"
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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          my: 2,
        }}
      >
        <Divider sx={{ flexGrow: 1 }} />
        <Typography sx={{ mx: 2, fontSize: "14px" }}>OR</Typography>
        <Divider sx={{ flexGrow: 1 }} />
      </Box>

      {/* Continue with Google Button */}
      <Button
        fullWidth
        variant="outlined"
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
