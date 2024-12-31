import { Box, Button, Typography } from "@mui/material";
import React from "react";
import HeroBannerImage from "../assets/images/banner.png";
const HoroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "190px", xs: "70px", ml: { sm: "50px" } } }}
      position="relative"
      p="20px">
      <Typography color="#ff2625" fontWeight="600" fontSize="32px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "64px", xs: "40px" } }}>
        Sweat, smile <br />
        and Repeat
      </Typography>
      <Typography fontSize="40px" lineHeight="35px" mb={3}>
        Check out the most effective exercises
      </Typography>
      <Button variant="contained" color="error">
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="300px">
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HoroBanner;
