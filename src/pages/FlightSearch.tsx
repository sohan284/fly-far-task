import { Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import SearchHeader from "../shared/SearchHeader";
import { useSearchFlightsMutation } from "../store/apiSlice";
import FlightCard from "../components/FlightSearch/FlightCard";
import { set } from "date-fns";

const FlightSearch = () => {
  const [flights, setFlights] = useState([]);
  const [searchFlights, { isLoading, isError }] = useSearchFlightsMutation();

  const handleSearch = async () => {
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
        { departure: "DAC", arrival: "CXB", departureDate: "2025-05-07" },
      ],
      advanceSearch: false,
      classes: [],
      paxDetails: [],
      bookingId: "",
    };
    try {
      const result = await searchFlights(searchData).unwrap();
      setFlights(result?.data?.response);
    } catch (err) {
      console.error("Error searching flights:", err);
    }
  };
  useEffect(() => {
    handleSearch();
  }, []);
  return (
    <Box>
      <SearchHeader />
       {isLoading && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                        height: "80vh",
                      padding: 2,
                    }}
                  >
                    <CircularProgress color="primary" size={48} sx={{ color: "#E34825" }} />
                  </Box>
                )}
      {flights.map((flight, index) => (
        <Box key={index}>
          <FlightCard flight={flight} />
        </Box>
      ))}
    </Box>
  );
};

export default FlightSearch;
