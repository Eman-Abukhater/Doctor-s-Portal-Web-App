import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user); // true if user exists
  }, [location]); // re-check on route change

  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("patientAppointments");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Appointment", path: "/appointment" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Contact Us", path: "/contact" },
    // We'll handle Login/Logout separately
  ];

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Doctors Portal
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.name}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{ textAlign: "left" }}
          >
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
        {isLoggedIn ? (
          <ListItem button onClick={handleLogout}>
            <ListItemText primary="Logout" />
          </ListItem>
        ) : (
          <ListItem
            component={Link}
            to="/login"
            onClick={handleDrawerToggle}
            sx={{ textAlign: "left" }}
          >
            <ListItemText primary="Login" />
          </ListItem>
        )}
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
                component={Link}
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
            {isLoggedIn ? (
              <Button
                onClick={handleLogout}
                sx={{
                  color: "black",
                  textTransform: "none",
                  fontSize: "14px",
                }}
              >
                Logout
              </Button>
            ) : (
              <Button
                component={Link}
                to="/login"
                sx={{
                  color: "black",
                  textTransform: "none",
                  fontSize: "14px",
                }}
              >
                Login
              </Button>
            )}
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

      {/* Mobile Drawer */}
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
