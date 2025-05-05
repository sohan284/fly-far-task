import React from "react";
import CarouselHome from "../components/CarouselHome";
import FlightTypeTab from "../components/FlightTypeTab";
import SearchHeader from "../components/SearchHeader";
import SearchTabs from "../components/CategoryTabs";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        maxWidth: "1180px",
        marginX: "auto",
        marginTop: 2,
      }}
    >
      <SearchHeader />
      <SearchTabs />
      <FlightTypeTab />
      <CarouselHome />
    </Box>
  );
};

export default Home;
