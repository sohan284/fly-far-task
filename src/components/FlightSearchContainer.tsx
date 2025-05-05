import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import SearchIcon from "@mui/icons-material/Search";
import { SlCalender } from "react-icons/sl";
import { Box, Button, Typography } from "@mui/material";
import AirportSearch from "./AirportSearch";
import React from "react";

// Import the Airport type from airports.tsx
import { Airport } from "../data/airports";


export default function FlightSearch() {
  const [departureAirport, setDepartureAirport] = React.useState<Airport | null>(null);
  const [arrivalAirport, setArrivalAirport] = React.useState<Airport | null>(null);
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
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
          gap: 1,
          width: { lg: "420px" },
        }}
      >
        <AirportSearch 
          icon={<FlightTakeoffIcon sx={{ color: "#2A2E2D", width: '40px' }} />} 
          value={departureAirport}
          onChange={(airport) => setDepartureAirport(airport)}
        />
        <AirportSearch 
          icon={<FlightLandIcon sx={{ color: "#2A2E2D", width: '40px' }} />} 
          value={arrivalAirport}
          onChange={(airport) => setArrivalAirport(airport)}
        />
      </Box>

      {/* Date Selection */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 1,
          width: { lg: "420px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            paddingX: 2,
            paddingY: 2,
            backgroundColor: "white",
            borderRadius: 1,
          }}
        >
          <SlCalender size={24} />
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 2 }}>
            <Typography variant="caption" sx={{ color: "gray" }}>
              August
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography
                variant="h3"
                sx={{ lineHeight: "none", color: "#202124", fontWeight: "bold" }}
              >
                22
              </Typography>
              <Typography variant="caption" sx={{ color: "gray" }}>
                Tuesday
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Return Flight Option */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingX: 2,
            paddingY: 2,
            backgroundColor: "white",
            borderRadius: 1,
          }}
        >
          <SlCalender size={24} />
          <Box sx={{ marginTop: 3 }}>
            <Typography variant="caption" sx={{ color: "gray" }}>
              Click to Return <br /> Flight
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Economy Class and Passenger Count */}
      <Box
        sx={{
          display: "grid",
          gap: 1,
          width: { lg: "280px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingX: 4,
            paddingY: 3,
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
            paddingX: 4,
            paddingY: 3,
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
          width: { lg: "134px" },
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
          }}
        >
          <SearchIcon fontSize="large" />
          <Typography variant="body2" sx={{ marginLeft: 2, fontWeight: "medium" }}>
            Search
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}
