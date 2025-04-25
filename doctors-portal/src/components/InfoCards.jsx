import React from "react";
import { Grid, Box, Typography } from "@mui/material";

const cardData = [
  {
    icon: "clock.png",
    title: "Opening Hours",
    description: "Lorem Ipsum is simply dummy text of the pri",
    bgColor: "linear-gradient(to right, #19D3AE, #0FCFEC)",
    color: "white",
  },
  {
    icon: "location.png",
    title: "Visit our location",
    description: "Brooklyn, NY 10036, United States",
    bgColor: "#3A4256",
    color: "white",
  },
  {
    icon: "phone.png",
    title: "Contact us now",
    description: "+000 123 456789",
    bgColor: "linear-gradient(to right, #19D3AE, #0FCFEC)",
    color: "white",
  },
];

const InfoCards = () => {
  return (
    <Box sx={{ mt: 8, mb: 4, px: { xs: 1, md: 2 } }}>
      <Grid container spacing={3} sx={{ py: 4 }}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={4} key={index} sx={{ mb: 6 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { md: "row", xs: "column" },
                background: card.bgColor,
                color: card.color,
                borderRadius: 2,
                p: 3,
                height: "100%",
              }}
            >
              {/* Image Box */}
              <Box
                sx={{
                  mr: 2,
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" }, // Center image on small screens, left-align on large screens
                  alignItems: "center", // Vertically center the image in column mode
                  mb: { xs: 2, md: 0 }, // Margin below the image in column mode (small screens)
                }}
              >
                <img
                  src={`/assets/icons/${card.icon}`}
                  alt={card.title}
                  width={80}
                  height={80}
                  style={{ objectFit: "contain" }}
                />
              </Box>

              {/* Text Box */}
              <Box
                sx={{
                  justifyContent: { xs: "flex-start", md: "center" }, 
                  alignItems: "center", 
                  mt: { xs: 0, md: 6 }
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 600, mb: { xs: 0, md: 1 } }}
                >
                  {card.title}
                </Typography>
                <Typography variant="body2">{card.description}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default InfoCards;
