import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, Typography } from "@mui/material";
import AirportSearch from "././AirportSearch";
import React, { useState } from "react";

export interface Airport {
  code: string;
  name: string;
  cityName: string;
  countryName: string;
}
import Calender from "././Calender";
import { useNavigate } from "react-router-dom";

export default function FlightSearch() {
  const navigate = useNavigate();
  const [departureAirport, setDepartureAirport] =
    React.useState<Airport | null>({
      "code": "DAC",
      "name": "Hazrat Shahjalal Intl Airport",
      "cityName": "Dhaka",
      "countryName": "BANGLADESH"
  });
  const [arrivalAirport, setArrivalAirport] = React.useState<Airport | null>(
    {
      "code": "CXB",
      "name": "COX's Bazar Airport",
      "cityName": "Cox's Bazar",
      "countryName": "BANGLADESH"
  }
  );
  
  const [departureDate, setDepatureDate] = useState<Date | null>(new Date());
  const [returnDate, setReturnDate] = useState<Date | null>(null);
console.log(departureAirport , arrivalAirport);

  const handleFlightSearch = () =>{
    const searchData = {
      passengers: [
        { type: "ADT", count: 1, ages: [] },
        { type: "CNN", count: 0, ages: [] },
        { type: "INF", count: 0, ages: [] },
      ],
      cabin: "Economy",
      tripType: "oneway",
      vendorPref: [],
      studentFare: false,
      umrahFare: false,
      seamanFare: false,
      segmentsList: [
        { departure: departureAirport?.code, arrival: arrivalAirport?.code, departureDate: departureDate?.toISOString().split("T")[0] },
      ],
      advanceSearch: false,
      classes: [],
      paxDetails: [],
      bookingId: "",
    };
    localStorage.setItem("flightSearchData", JSON.stringify(searchData))
    
   navigate("/flight-search")
  }
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
          onChange={(airport: Airport) => setDepartureAirport(airport)}
        />
        <AirportSearch
          icon={<FlightLandIcon sx={{ color: "#2A2E2D", fontSize: "34px" }} />}
          value={arrivalAirport}
          onChange={(airport: Airport) => setArrivalAirport(airport)}
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
        onClick={() => handleFlightSearch()}
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
