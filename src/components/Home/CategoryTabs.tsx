import React, { useEffect, useState } from "react";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import DomainIcon from "@mui/icons-material/Domain";
import TravelExploreSharpIcon from "@mui/icons-material/TravelExploreSharp";
import { Box, Typography } from "@mui/material";
import FlightTypeTab from "./FlightTypeTab";

const CategoryTabs = () => {
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

  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("Air Ticket"); // Track the active tab

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        gap: 0.5,
        marginTop: {lg:7,xs:5},
        flexWrap: "wrap",
        justifyContent: { xs: "center", lg: "flex-start" },
      }}
    >
      {/* Tabs container */}
      {tabs?.slice(0, isMobile ? 3 : tabs.length).map((tab, index) => (
        <Box key={index}>
          <Box
            onClick={() => setActiveTab(tab.label)} // Set active tab on click
            sx={{
              backgroundColor: activeTab === tab.label ? "#E34825" : "#E34826",
              color:  "white" ,
              borderRadius: "5px",
              paddingX: 2,
              paddingY: 1.3,
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer", // Add pointer cursor for better UX
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
      {/* Show FlightTypeTab only when "Air Ticket" is active */}
      {activeTab === "Air Ticket" && <FlightTypeTab />}
    </Box>
  );
};

export default CategoryTabs;
