import React from "react";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";

function App() {
  return (
    <Box sx={{ px: { xs: 2, md: 6 }, fontFamily: "Open Sans, sans-serif" }}>
      <Navbar />
    </Box>
  );
}

export default App;
