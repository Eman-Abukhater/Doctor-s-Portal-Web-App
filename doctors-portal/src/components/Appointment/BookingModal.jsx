import React from "react";
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

function BookingModal({ open, handleClose, appointment, selectedDate }) {
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
        >
          Submit
        </Button>
      </Box>
    </Modal>
  );
}

export default BookingModal;
