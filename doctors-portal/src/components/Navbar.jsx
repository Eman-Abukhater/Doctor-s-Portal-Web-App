import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Appointment", path: "/appointment" },
  { name: "Reviews", path: "/reviews" },
  { name: "Contact Us", path: "/contact" },
  { name: "Login", path: "/login" },
];

function Navbar() {
  const location = useLocation(); // gives the current URL path

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
          <ListItem button key={item.name}>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", boxShadow: "none", px: { md: 6 } }}
      >
        <Toolbar sx={{ justifyContent: "space-between", mt: -1 }}>
          <Typography variant="h7" sx={{ color: "black" }}>
            Doctors Portal
          </Typography>

          {/* Nav Items for Desktop */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={Link}  // Use Link for navigation
                to={item.path}
                sx={{
                  color: location.pathname === item.path ? "#D4D9E3" : "black",
                  backgroundColor:
                    location.pathname === item.path ? "#3A4256" : "transparent",
                  borderRadius: "8px",
                  textTransform: "none",
                  fontSize: "14px",
                  "&:hover":
                    location.pathname === item.path
                      ? { backgroundColor: "#D4D9E3", color: "#3A4256" }
                      : "none",
                }}
              >
                {item.name} 
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            aria-label="menu"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" }, color: "black" }}
          >
            <MenuIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Menu (Drawer) */}
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
