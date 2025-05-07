import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, TextField, MenuItem, CircularProgress } from "@mui/material";
import { useSearchAirportsMutation } from "../../store/apiSlice";

// Import the shared Airport type instead of defining it locally
// import { Airport } from "../../types/Airport";

interface AirportSearchProps {
  value: Airport | null;
  onChange: (airport: Airport) => void;
  icon?: React.ReactNode; // Optional icon property
}
export interface Airport {
  code: string;
  name: string;
  cityName: string; 
  countryName: string;
}
const AirportSearch: React.FC<AirportSearchProps> = ({
  value, 
  onChange,
  icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null); // Reference for the search input
  
  interface AirportResult {
    code: string;
    result: {
      name: string;
      cityName: string;
      countryName: string;
      cityCode: string; 
    };
  }
  
  const [airportSearchData, setAirportSearchData] = useState<AirportResult[]>([]);
  const [searchAirports, { isLoading, isError }] =
    useSearchAirportsMutation();
  
  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): Promise<void> => {
    if (e.target.value.length > 2) {
      try {
        await searchAirports(e.target.value).unwrap().then((response) => {
          if (response) {
            setAirportSearchData(response?.data);
          }
        });
      } catch (error) {
        console.error("Error searching airports:", error);
      }
    } else {
      setAirportSearchData([]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  };

  return (
    <Box
      ref={wrapperRef}
      sx={{
        position: "relative",
        width: { xs: "85vw", lg: "420px" },
        height: "100%",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: 1,
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={handleToggle} // Use the toggle handler
      >
        <Box
          sx={{
            backgroundColor: "white",
            fontWeight: "bold",
            padding: 2,
            borderRadius: "4px 0 0 4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </Box>
        <Typography
          variant="body2"
          sx={{
            color: "black",
            paddingY: 1,
            paddingX: 2,
            fontSize: "14px",
            fontWeight: "medium",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {value
            ? `${value.name} (${value.code})`
            : "Hazrat Shahjalal Intl Airport (DAC)"}
        </Typography>
      </Box>
      {isOpen && (
        <Box
          sx={{
            position: "absolute",
            zIndex: 10,
            width: "98%",
            marginTop: 1,
            backgroundColor: "white",
            color: "#E34825",
            borderInline: "5px solid #E34825",
            maxHeight: "240px",
            overflowY: "auto",
          }}
        >
          <Box sx={{ padding: 2 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search an airport..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                handleSearch(e);
              }}
              inputRef={inputRef} // Attach the ref to the input
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "white",
                  "&:hover fieldset": {
                    borderColor: "#E34825",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#E34825",
                  },
                },
                "& .MuiInputBase-input": {
                  color: "#E34825",
                  fontSize: "14px",
                },
              }}
            />
          </Box>
            {/* Loader */}
            {isLoading && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 2,
              }}
            >
              <CircularProgress color="primary" size={24} sx={{ color: "#E34825" }} />
            </Box>
          )}

          {/* Error Message */}
          {isError && (
            <Typography
              sx={{
                color: "red",
                textAlign: "center",
                padding: 2,
              }}
            >
              Error fetching airports. Please try again.
            </Typography>
          )}
          {airportSearchData?.length === 0 && !isLoading && (
            <Typography
              sx={{
                color: "red",
                textAlign: "center",
                padding: 2,
              }}
            >
             No airports found
            </Typography>
          )}
          {!isLoading && 
          <Box>
          {airportSearchData?.map((airport) => (
              <MenuItem
                key={airport.code}
                onClick={() => {
                  // Transform the API result to match the expected Airport type
                  const airportData: Airport = {
                    code: airport?.result.cityCode,
                    name: airport.result.name,
                    cityName: airport.result.cityName,
                    countryName: airport.result.countryName
                  };
                  onChange(airportData);
                  setIsOpen(false);
                }}
                sx={{
                  paddingX: 2,
                  paddingY: 1,
                  backgroundColor: "white",
                  color: "#E34825",
                  "&:hover": {
                    color: "white",
                    backgroundColor: "#ececec",
                  },
                  cursor: "pointer",
                }}
              >
                <Box>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: "medium", color: "#E34825" }}
                  >
                    {airport?.result?.name}
                  </Typography>
                {airport?.result?.cityName && 
                    <Typography variant="caption" sx={{ color: "#E34825" }}>
                    {airport?.result?.cityName} , {airport?.result?.countryName}
                  </Typography>
                }
                </Box>
              </MenuItem>
            ))}
          </Box>
          }
        </Box>
      )}
    </Box>
  );
};

export default AirportSearch;