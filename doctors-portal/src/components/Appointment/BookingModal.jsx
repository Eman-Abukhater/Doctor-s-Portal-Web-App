import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import dayjs from "dayjs";
// Firebase configuration and initialization for Firestore
import { db } from "../../firebase"; // Adjust the import path as necessary
import { collection, addDoc } from "firebase/firestore";

function BookingModal({ open, handleClose, appointment, selectedDate }) {
  // State variables for form inputs
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" or "error"

  // Function to handle form submission
  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, "appointments"), {
        name: fullName,
        phone,
        email,
        doctor: appointment.name,
        time: appointment.time,
        date: dayjs(selectedDate).format("YYYY-MM-DD"),
        createdAt: new Date(),
      });

      setMessage(
        `Appointment booked successfully with Dr. ${
          appointment.name
        } on ${dayjs(selectedDate).format("YYYY-MM-DD")} at ${appointment.time}`
      );
      setMessageType("success");
      setFullName("");
      setPhone("");
      setEmail("");
    } catch (error) {
      console.error("Error booking appointment:", error);
      setMessage("Failed to book appointment. Please try again.");
      setMessageType("error");
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: { xs: "60%", sm: "50%" },
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: 420 },
          bgcolor: "#FFFFFF",
          borderRadius: { xs: "16px 16px 0 0", sm: 4 },
          p: 2,
          boxShadow: 3,
          border: "none",
        }}
      >
        {/* Close button */}
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 10,
            right: 8,
            backgroundColor: "#3A4256",
            color: "#8391AD",
            "&:hover": {
              backgroundColor: "#2c3244",
            },
            width: 35,
            height: 35,
          }}
          size="small"
        >
          <CloseIcon fontSize="medium" />
        </IconButton>

        {/* Title */}
        <Typography fontSize={18} fontWeight={600} sx={{ mb: 5 }}>
          {appointment.name}
        </Typography>

        {/* Disabled Fields */}
        <TextField
          fullWidth
          disabled
          size="small"
          value={dayjs(selectedDate).format("MMMM D, YYYY")}
          sx={{
            mb: 3,
            "& .MuiInputBase-root.Mui-disabled": {
              backgroundColor: "#E6E6E6",
              color: "#000000",
              borderRadius: 2,
            },
            "& .MuiInputLabel-root": {
              color: "#000000", // <-- now correct!
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
        />

        <TextField
          fullWidth
          disabled
          size="small"
          value={appointment.time}
          sx={{
            mb: 3,
            "& .MuiInputBase-root.Mui-disabled": {
              backgroundColor: "#E6E6E6",
              color: "#000000",
              borderRadius: 2,
            },
            "& .MuiInputLabel-root": {
              color: "#000000",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
        />

        {/* Inputs */}
        <TextField
          fullWidth
          size="small"
          label="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          sx={{
            mb: 3,
            "& .MuiInputBase-root": {
              color: "#000000",
              borderRadius: 2,
            },
          }}
        />

        <TextField
          fullWidth
          size="small"
          label="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          sx={{
            mb: 3,
            "& .MuiInputBase-root": {
              color: "#000000",
              borderRadius: 2,
            },
          }}
        />

        <TextField
          fullWidth
          size="small"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            mb: 3,
            "& .MuiInputBase-root": {
              color: "#000000",
              borderRadius: 2,
            },
          }}
        />

        {/* Submit Button */}
        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#3A4256",
            padding: "10px 0",
            textTransform: "uppercase",
            fontSize: "14px",
            fontWeight: 500,
            color: "#D4D9E3",
            borderRadius: 2,
            "&:hover": {
              backgroundColor: "#2c3244",
            },
          }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
        {message && (
          <Typography
            sx={{ mt: 2 }}
            color={messageType === "success" ? "green" : "red"}
          >
            {message}
          </Typography>
        )}
      </Box>
    </Modal>
  );
}

export default BookingModal;
