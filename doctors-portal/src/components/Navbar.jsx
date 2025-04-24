import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";

const navItems = [
  "Home",
  "About",
  "Appointment",
  "Reviews",
  "Contact Us",
  "Login",
];
function Navbar() {
  // state to control the mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", boxShadow: "none" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ color: "black" }}>
            Doctors Portal
          </Typography>

          {/* Nav Items */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: item === "Home" ? "#D4D9E3" : "black",
                  backgroundColor: item === "Home" ? "#3A4256" : "transparent",
                  borderRadius: "8px",
                  textTransform: "none",
                  fontSize: "16px",
                  "&:hover":
                    item === "Home"
                      ? { backgroundColor: "#D4D9E3", color: "#3A4256" }
                      : "none",
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
