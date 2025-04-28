import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";

const ExceptionalCare = () => {
  return (
    <Box sx={{ py: {md:10 }}}>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1,
          }}
        >
          <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <Box
              component="img"
              src="/assets/treatment.png"
              alt="Exceptional Dental Care"
              sx={{ width:{xs:"80%", md:"70%"}, borderRadius: 2 }}
            />
          </Box>

          <Box sx={{ flex: 1 , mt:3,px:1}}>
            <Typography
              variant="h4"
              fontWeight="700"
              color="#3A4256"
              width={{ xs: "100%", md: "70%" }}


              gutterBottom
            >
              Exceptional Dental 
              Care, on Your Terms
            </Typography>
            <Typography variant="body2" color="#000000" mb={3} sx={{width:{md:'70%'}}}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundImage:
                  "linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)",
                px: 1,
                py: 1.5,
                borderRadius: 2,
                textTransform: "capitalize",
                color: "white",
                fontWeight: "800",
                fontSize: "12px",
                boxShadow: "none",
              }}
            >
              GET STARTED
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ExceptionalCare;
