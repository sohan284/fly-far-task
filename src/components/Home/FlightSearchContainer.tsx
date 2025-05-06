import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, Typography } from "@mui/material";
import AirportSearch from "././AirportSearch";
import React, { useState } from "react";

// Import the Airport type from airports.tsx
import { Airport } from "../../data/airports";
import Calender from "././Calender";

export default function FlightSearch() {
  const [departureAirport, setDepartureAirport] =
    React.useState<Airport | null>(null);
  const [arrivalAirport, setArrivalAirport] = React.useState<Airport | null>(
    null
  );

  const [departureDate, setDepatureDate] = useState<Date | null>(new Date());
  const [returnDate, setReturnDate] = useState<Date | null>(null);

  return (
    <Box
      sx={{
        display: "flex",
        gap: '5px',
        width: "100%",
        marginX: "auto",
        flexDirection: { lg: "row", xs: "column" },
        alignItems: "center",
      }}
    >
      {/* Origin Airport */}
      <Box
        sx={{
          display: "grid",
          gap: '5px',
          width: { lg: "420px" },
        }}
      >
        <AirportSearch
          icon={
            <FlightTakeoffIcon sx={{ color: "#2A2E2D", fontSize: "34px" }} />
          }
          value={departureAirport}
          onChange={(airport) => setDepartureAirport(airport)}
        />
        <AirportSearch
          icon={<FlightLandIcon sx={{ color: "#2A2E2D", fontSize: "34px" }} />}
          value={arrivalAirport}
          onChange={(airport) => setArrivalAirport(airport)}
        />
      </Box>

      {/* Date Selection */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: '5px',
          width: { xs: "85vw", lg: "420px" },
        }}
      >
        <Calender
          selectedDate={departureDate}
          setSelectedDate={setDepatureDate}
        />
        <Calender
          selectedDate={returnDate}
          setSelectedDate={setReturnDate}
          isReturnFlight={true}
        />
      </Box>

      {/* Economy Class and Passenger Count */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
          gap: '5px',
          width: { xs: "85vw", lg: "280px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingX: 2.5,
            paddingY: 2.8,
            backgroundColor: "white",
            borderRadius: 1,
          }}
        >
          <Typography variant="body2" sx={{ color: "gray" }}>
            Economy
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingX: 2.5,
            paddingY: 2.8,
            backgroundColor: "white",
            borderRadius: 1,
          }}
        >
          <Typography variant="body2" sx={{ color: "gray" }}>
            1 Passenger
          </Typography>
        </Box>
      </Box>

      {/* Search Button */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 1,
          backgroundColor: "#2A2E2D",
          "&:hover": { opacity: 0.9 },
          width: { xs: "85vw", lg: "134px" },
          cursor: "pointer",
        }}
      >
        <Button
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            color: "white",
            paddingX: 4,
            paddingY: 5,
          }}
        >
          <SearchIcon fontSize="large" />
          <Typography
            variant="body2"
            sx={{ marginLeft: 2, fontWeight: "medium" }}
          >
            Search
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}
