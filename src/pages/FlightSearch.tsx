import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import SearchHeader from "../shared/SearchHeader";
import { useSearchFlightsMutation } from "../store/apiSlice";
import FlightCard from "../components/FlightSearch/FlightCard";
import { useNavigate } from "react-router-dom";

const FlightSearch = () => {
    const navigate = useNavigate();
  const [flights, setFlights] = useState([]);
  const [searchFlights, { isLoading, isError }] = useSearchFlightsMutation();

  const handleSearch = async () => {
    const searchData = JSON.parse(localStorage.getItem('flightSearchData') || '{}');
    console.log(searchData);
    
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
          <CircularProgress
            color="primary"
            size={48}
            sx={{ color: "#E34825" }}
          />
        </Box>
      )}
      {isError && (
        <Typography
          sx={{
            color: "red",
            textAlign: "center",
            padding: 2,
          }}
        >
          Error fetching flights. Please try again.
        </Typography>
      )}
     {!isLoading && flights.length === 0 && !isError && (
        <Typography
          sx={{
            textAlign: "center",
            padding: 2,
            color: "gray",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
            fontSize: "18px",
          }}
        >
          No flights found. Please adjust your search criteria.
       <Button onClick={()=>navigate('/')}>Back to home</Button>
        </Typography>
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
