import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  IconButton,
  InputBase,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";

import {
  ArrowRightLeft,
  Users,
  ChevronDown,
  Clock,
  Plus,
  Edit,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { SlCalender } from "react-icons/sl";
interface SearchData {
  segmentsList: { departure: string; arrival: string; departureDate: string }[];
  passengers: { count: number }[];
  cabin: string;
}

interface SearchUpdateContainerProps {
 searchData: SearchData;
}

const SearchUpdateContainer = ({ searchData }: SearchUpdateContainerProps) => {
  console.log(searchData);

  const [tripType, setTripType] = useState("One Way");
  const [passengerCount, setPassengerCount] = useState("01");
  const [cabinClass, setCabinClass] = useState("Economy");
  const [tripTypeAnchorEl, setTripTypeAnchorEl] = useState<HTMLElement | null>(
    null
  );
  const [passengersAnchorEl, setPassengersAnchorEl] =
    useState<HTMLElement | null>(null);
  const [cabinAnchorEl, setCabinAnchorEl] = useState<HTMLElement | null>(null);

  interface TripTypeClickEvent {
    currentTarget: HTMLElement;
  }

  const handleTripTypeClick = (event: TripTypeClickEvent) => {
    setTripTypeAnchorEl(event.currentTarget);
  };

  interface PassengersClickEvent {
    currentTarget: HTMLElement;
  }

  const handlePassengersClick = (event: PassengersClickEvent) => {
    setPassengersAnchorEl(event.currentTarget);
  };

  interface CabinClickEvent {
    currentTarget: HTMLElement;
  }

  const handleCabinClick = (event: CabinClickEvent) => {
    setCabinAnchorEl(event.currentTarget);
  };

  interface TripTypeCloseOption {
    option: string | null;
  }

  const handleTripTypeClose = (option: TripTypeCloseOption["option"]) => {
    if (typeof option === "string") {
      setTripType(option);
    }
    setTripTypeAnchorEl(null);
  };

  interface PassengersCloseOption {
    option: string | null;
  }

  const handlePassengersClose = (option: PassengersCloseOption["option"]) => {
    if (typeof option === "string") {
      setPassengerCount(option);
    }
    setPassengersAnchorEl(null);
  };

  interface CabinCloseOption {
    option: string | null;
  }

  const handleCabinClose = (option: CabinCloseOption["option"]) => {
    if (typeof option === "string") {
      setCabinClass(option);
    }
    setCabinAnchorEl(null);
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: { lg: "200px", xs: "62px" },
        mt: { lg: 2, xs: "none" },
        backgroundColor: "#E34825",
      }}
    >
      <Box
        sx={{
          display: { xs: "flex", lg: "none" },
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          maxWidth: "90vw",
          margin: "auto",
        }}
      >
        <Box>
          <Typography
            sx={{ fontSize: "16px", color: "white", fontWeight: "500" }}
          >
            {searchData?.segmentsList[0]?.departure} -{" "}
            {searchData?.segmentsList[0]?.arrival}
          </Typography>
          <Typography
            sx={{ fontSize: "12px", color: "white", fontWeight: "500" }}
          >
            {new Intl.DateTimeFormat("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            }).format(
              new Date(searchData?.segmentsList[0]?.departureDate)
            )}{" "}
            | {searchData?.passengers[0]?.count} Traveler | {searchData?.cabin}
          </Typography>
        </Box>
        <Button
          sx={{
            display: "flex",
            gap: 1,
            textTransform: "capitalize",
            color: "#E34825",
            backgroundColor: "white",
            px: "10px",
            py: "3px",
          }}
        >
          <Edit size={15} /> Edit
        </Button>
      </Box>
      <Box
        sx={{
          width: { xs: "90vw", lg: "1180px" },
          margin:'auto',
          display: { lg: "flex", xs: "none" },
          justifyContent:'center'
        }}
      >
        <Box sx={{ width: "100%", p: 2 }}>
          <Box sx={{ mb: 1, display: "flex", justifyContent: "space-between" }}>
            {/* Trip Type Dropdown */}
            <Button
              onClick={handleTripTypeClick}
              sx={{
                color: "white",
                textTransform: "none",
                "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
              }}
              endIcon={<ChevronDown size={16} />}
            >
              {tripType}
            </Button>
            <Menu
              anchorEl={tripTypeAnchorEl}
              open={Boolean(tripTypeAnchorEl)}
              onClose={() => handleTripTypeClose(null)}
            >
                <MenuItem onClick={() => handleTripTypeClose("One Way")}>
                One Way
              </MenuItem>
              <MenuItem onClick={() => handleTripTypeClose("Round Trip")}>
                Round Trip
              </MenuItem>
              <MenuItem onClick={() => handleTripTypeClose("Multi-City")}>
                Multi-City
              </MenuItem>
            </Menu>

            {/* Passenger Count */}
            <Button
              onClick={handlePassengersClick}
              sx={{
                color: "white",
                textTransform: "none",
                "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
              }}
              startIcon={<Users size={16} />}
              endIcon={<ChevronDown size={16} />}
            >
              {passengerCount}
            </Button>
            <Menu
              anchorEl={passengersAnchorEl}
              open={Boolean(passengersAnchorEl)}
              onClose={() => handlePassengersClose(null)}
            >
              <MenuItem onClick={() => handlePassengersClose("01")}>
                01
              </MenuItem>
              <MenuItem onClick={() => handlePassengersClose("02")}>
                02
              </MenuItem>
              <MenuItem onClick={() => handlePassengersClose("03")}>
                03
              </MenuItem>
              <MenuItem onClick={() => handlePassengersClose("04")}>
                04
              </MenuItem>
            </Menu>

            {/* Cabin Class */}
            <Button
              onClick={handleCabinClick}
              sx={{
                color: "white",
                textTransform: "none",
                "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
              }}
              endIcon={<ChevronDown size={16} />}
            >
              {cabinClass}
            </Button>
            <Menu
              anchorEl={cabinAnchorEl}
              open={Boolean(cabinAnchorEl)}
              onClose={() => handleCabinClose(null)}
            >
              <MenuItem onClick={() => handleCabinClose("Economy")}>
                Economy
              </MenuItem>
              <MenuItem onClick={() => handleCabinClose("Premium Economy")}>
                Premium Economy
              </MenuItem>
              <MenuItem onClick={() => handleCabinClose("Business")}>
                Business
              </MenuItem>
              <MenuItem onClick={() => handleCabinClose("First")}>
                First
              </MenuItem>
            </Menu>

            {/* Time Remaining */}
            <Box sx={{ display: "flex", alignItems: "center", color: "white" }}>
              <Clock size={16} />
              <Typography variant="body2" sx={{ ml: 1 }}>
                Time Remaining: 22:50
              </Typography>
            </Box>
          </Box>

          {/* Route Selection and Date Picker */}
          <Box sx={{ display: "flex", gap: 1 }}>
            {/* Route Selection */}
            <Paper
              sx={{
                display: "flex",
                flex: 2,
                p: 0,
                borderRadius: 1,
                position: "relative",
              }}
            >
              {/* From */}
              <Box
                sx={{
                  display: "flex",
                  backgroundColor: "#E34825",
                  border: "1px solid white",
                  borderRadius: "4px 0 0 4px",
                  alignItems: "center",
                  flex: 1,
                  px: 2,
                  py: 1,
                }}
              >
                <LocationOnIcon fontSize="medium" sx={{ color: "#D9D9D9" }} />
                <Box sx={{ ml: 1 }}>
                  <InputBase
                    placeholder="City or Airport"
                    defaultValue={searchData?.segmentsList[0]?.departure}
                    sx={{
                      fontSize: "1rem",
                      backgroundColor: "",
                      color: "white",
                    }}
                  />
                </Box>
              </Box>

              {/* Swap Button */}
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 10,
                  border: "1px solid white",
                  bgcolor: "#E84C24",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 32,
                  height: 32,
                }}
              >
                <ArrowRightLeft size={16} color="white" />
              </Box>

              {/* Divider */}
              {/* <Divider orientation="vertical" flexItem /> */}

              {/* To */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flex: 1,
                  backgroundColor: "#E34825",
                  border: "1px solid white",
                  borderRadius: "0 4px 4px 0",
                  px: 2,
                  py: 1,
                }}
              >
                <LocationOnIcon fontSize="medium" sx={{ color: "#D9D9D9" }} />
                <Box sx={{ ml: 1 }}>
                  <InputBase
                    placeholder="City or Airport"
                    defaultValue={searchData?.segmentsList[0]?.arrival}
                    sx={{
                      fontSize: "1rem",
                      color: "white",
                    }}
                  />
                </Box>
              </Box>
            </Paper>

            {/* Date Picker */}
            <Paper
              sx={{
                display: "flex",
                flex: 1,
                p: 0,
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor:'#E34825',
                color:'white',
                px: 2,
                borderRadius: 1,
                border:'1px solid white'
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <SlCalender size={18} color="white" />
                <Box sx={{ ml: 1 }}>
                  <Typography variant="body2">
                    {new Intl.DateTimeFormat("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    }).format(
                      new Date(searchData?.segmentsList[0]?.departureDate)
                    )}{" "}
                  </Typography>
                </Box>
              </Box>
              <Box>
                <IconButton size="small">
                  <ChevronLeft size={20} color="white" />
                </IconButton>
                <IconButton size="small">
                  <ChevronRight size={20} color="white" />
                </IconButton>
              </Box>
            </Paper>
          </Box>

          {/* Applied Filters */}
          <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
            <Typography variant="body2" sx={{ color: "white", mr: 2 }}>
              Applied Filter
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  color: "white",
                  borderColor: "white",
                  borderRadius: 4,
                  textTransform: "none",
                  px: 1,
                  py: 0.5,
                  minWidth: 0,
                  fontSize: "0.75rem",
                }}
                startIcon={<Plus size={14} />}
              >
                Please Add Filter
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchUpdateContainer;
