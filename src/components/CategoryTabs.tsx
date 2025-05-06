import React from "react";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import DomainIcon from "@mui/icons-material/Domain";
import TravelExploreSharpIcon from "@mui/icons-material/TravelExploreSharp";
import { Box, Typography } from "@mui/material";

const SearchTabs = () => {
  const tabs = [
    {
      label: "Air Ticket",
      icon: <AirplanemodeActiveIcon sx={{ transform: "rotate(45deg)" }} />,
    },
    { label: "Hotel", icon: <DomainIcon /> },
    { label: "Holidays", icon: <TravelExploreSharpIcon /> },
    { label: "PNR Share", icon: <TravelExploreSharpIcon /> },
    { label: "Group Fare", icon: <TravelExploreSharpIcon /> },
    { label: "Visa", icon: <TravelExploreSharpIcon /> },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        gap: 0.5,
        marginTop: 7,
        flexWrap: "wrap",
        justifyContent: { xs: "center", lg: "flex-start" },
      }}
    >
      {/* Tabs container */}
      {tabs?.map((tab, index) => (
        <Box key={index}>
          <Box
            sx={{
              backgroundColor: "#E34825",
              color: "white",
              borderRadius: "5px",
              paddingX: 2,
              paddingY: 1.3,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            {tab.icon}
            <Typography
              component="p"
              sx={{
                overflow: "wrap",
                display: "inline",
                fontSize: "15px",
              }}
            >
              {tab.label}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default SearchTabs;
