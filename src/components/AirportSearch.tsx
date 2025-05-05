import React, { useState, useRef, useEffect } from "react";
import { Airport, airports } from "../data/airports";
import { Box, Typography, TextField, MenuItem } from "@mui/material";

interface AirportSearchProps {
  value: Airport | null;
  onChange: (airport: Airport) => void;
  icon?: React.ReactNode; // Optional icon property
}

const AirportSearch: React.FC<AirportSearchProps> = ({
  value,
  onChange,
  icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);

  const filteredAirports = airports.filter(
    (airport) =>
      airport.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      airport.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      airport.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  return (
    <Box
      ref={wrapperRef}
      sx={{ position: "relative", width: "100%", height: "100%" }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: 1,
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => setIsOpen(!isOpen)}
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
            : "DAC, Hazrat Sha Jalal Intl Airport"}
        </Typography>
      </Box>
      {isOpen && (
        <Box
          sx={{
            position: "absolute",
            zIndex: 10,
            width: "100%",
            marginTop: 1,
            backgroundColor: "white",
            color: "#E34825",
            boxShadow: 3,
            border: "1px solid #ccc",
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
              onChange={(e) => setSearchTerm(e.target.value)}
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
          <Box sx={{ backgroundColor: "#E34825" }}>
            {filteredAirports.map((airport) => (
              <MenuItem
                key={airport.code}
                onClick={() => {
                  onChange(airport);
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
                    {airport.name}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#E34825" }}>
                    {airport.city}, {airport.country}
                  </Typography>
                </Box>
              </MenuItem>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default AirportSearch;
