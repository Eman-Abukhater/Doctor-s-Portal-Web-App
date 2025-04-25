import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

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
  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Doctors Portal
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem button key={item}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", boxShadow: "none" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" ,mt:-1}}>
          <Typography variant="h7" sx={{ color: "black" }}>
            Doctors Portal
          </Typography>

          {/* Nav Items */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: item === "Home" ? "#D4D9E3" : "black",
                  backgroundColor: item === "Home" ? "#3A4256" : "transparent",
                  borderRadius: "8px",
                  textTransform: "none",
                  fontSize: "14px",
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
          {/* Mobile Menu Icon */}
          <IconButton
            aria-label="menue"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" }, color: "black" }}
          >
            <MenuIcon sx={{ fontSize: 30}} />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* Mobile Menu */}
      {/* Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Navbar;
