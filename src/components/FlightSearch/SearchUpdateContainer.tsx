import React, { useState } from 'react';
import { 
  Box, 
  Paper, 
  Typography, 
  IconButton, 
  InputBase,
  Button,
  Chip,
  Divider,
  Menu,
  MenuItem
 } from "@mui/material";

import { 
  Map, 
  ArrowRightLeft, 
  Users, 
  Calendar, 
  ChevronDown, 
  Clock,
  Plus,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const SearchUpdateContainer = () => {
    const [tripType, setTripType] = useState('Round Trip');
    const [passengerCount, setPassengerCount] = useState('01');
    const [cabinClass, setCabinClass] = useState('Economy');
    const [tripTypeAnchorEl, setTripTypeAnchorEl] = useState(null);
    const [passengersAnchorEl, setPassengersAnchorEl] = useState(null);
    const [cabinAnchorEl, setCabinAnchorEl] = useState(null);
  
    const handleTripTypeClick = (event) => {
      setTripTypeAnchorEl(event.currentTarget);
    };
  
    const handlePassengersClick = (event) => {
      setPassengersAnchorEl(event.currentTarget);
    };
  
    const handleCabinClick = (event) => {
      setCabinAnchorEl(event.currentTarget);
    };
  
    const handleTripTypeClose = (option) => {
      if (typeof option === 'string') {
        setTripType(option);
      }
      setTripTypeAnchorEl(null);
    };
  
    const handlePassengersClose = (option) => {
      if (typeof option === 'string') {
        setPassengerCount(option);
      }
      setPassengersAnchorEl(null);
    };
  
    const handleCabinClose = (option) => {
      if (typeof option === 'string') {
        setCabinClass(option);
      }
      setCabinAnchorEl(null);
    };
  return (
    <Box
      sx={{ width: "100%", height: "197px", mt: 2, backgroundColor: "#E34825" }}
    >
      <Box
        sx={{
          width: { xs: "90vw", lg: "1180px" },
          marginX: "auto",
        }}
      >
          <Box sx={{ width: '100%', p: 2 }}>
      <Box sx={{ mb: 1, display: 'flex', justifyContent: 'space-between' }}>
        {/* Trip Type Dropdown */}
        <Button 
          onClick={handleTripTypeClick}
          sx={{ 
            color: 'white', 
            textTransform: 'none',
            fontWeight: 'bold',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
          }}
          endIcon={<ChevronDown size={16} />}
        >
          {tripType}
        </Button>
        <Menu
          anchorEl={tripTypeAnchorEl}
          open={Boolean(tripTypeAnchorEl)}
          onClose={() => handleTripTypeClose()}
        >
          <MenuItem onClick={() => handleTripTypeClose('Round Trip')}>Round Trip</MenuItem>
          <MenuItem onClick={() => handleTripTypeClose('One Way')}>One Way</MenuItem>
          <MenuItem onClick={() => handleTripTypeClose('Multi-City')}>Multi-City</MenuItem>
        </Menu>

        {/* Passenger Count */}
        <Button 
          onClick={handlePassengersClick}
          sx={{ 
            color: 'white', 
            textTransform: 'none',
            fontWeight: 'bold',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
          }}
          startIcon={<Users size={16} />}
          endIcon={<ChevronDown size={16} />}
        >
          {passengerCount}
        </Button>
        <Menu
          anchorEl={passengersAnchorEl}
          open={Boolean(passengersAnchorEl)}
          onClose={() => handlePassengersClose()}
        >
          <MenuItem onClick={() => handlePassengersClose('01')}>01</MenuItem>
          <MenuItem onClick={() => handlePassengersClose('02')}>02</MenuItem>
          <MenuItem onClick={() => handlePassengersClose('03')}>03</MenuItem>
          <MenuItem onClick={() => handlePassengersClose('04')}>04</MenuItem>
        </Menu>

        {/* Cabin Class */}
        <Button 
          onClick={handleCabinClick}
          sx={{ 
            color: 'white', 
            textTransform: 'none',
            fontWeight: 'bold',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
          }}
          endIcon={<ChevronDown size={16} />}
        >
          {cabinClass}
        </Button>
        <Menu
          anchorEl={cabinAnchorEl}
          open={Boolean(cabinAnchorEl)}
          onClose={() => handleCabinClose()}
        >
          <MenuItem onClick={() => handleCabinClose('Economy')}>Economy</MenuItem>
          <MenuItem onClick={() => handleCabinClose('Premium Economy')}>Premium Economy</MenuItem>
          <MenuItem onClick={() => handleCabinClose('Business')}>Business</MenuItem>
          <MenuItem onClick={() => handleCabinClose('First')}>First</MenuItem>
        </Menu>

        {/* Time Remaining */}
        <Box sx={{ display: 'flex', alignItems: 'center', color: 'white' }}>
          <Clock size={16} />
          <Typography variant="body2" sx={{ ml: 1 }}>
            Time Remaining: 22:50
          </Typography>
        </Box>
      </Box>

      {/* Route Selection and Date Picker */}
      <Box sx={{ display: 'flex', gap: 1 }}>
        {/* Route Selection */}
        <Paper 
          sx={{ 
            display: 'flex', 
            flex: 2, 
            p: 0, 
            borderRadius: 1,
            position: 'relative'
          }}
        >
          {/* From */}
          <Box sx={{ 
            display: 'flex', 
            backgroundColor: '#E34825',
            border: '1px solid white',
            borderRadius: '4px 0 0 4px',
            alignItems: 'center', 
            flex: 1, 
            px: 2, 
            py: 1 
          }}>
             <LocationOnIcon fontSize="medium" sx={{color:'#D9D9D9'}} />
            <Box sx={{ ml: 1 , }}>
            
              <InputBase 
                placeholder="City or Airport"
                defaultValue="DAC, Dhaka, BD"
                sx={{ 
                  fontSize: '1rem',
                  backgroundColor: '',
                  color: 'white'
                }}
              />
            </Box>
          </Box>

          {/* Swap Button */}
          <Box sx={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            zIndex: 10,
            border: '1px solid white',
            bgcolor: '#E84C24',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 32,
            height: 32
          }}>
            <ArrowRightLeft size={16} color="white" />
          </Box>

          {/* Divider */}
          {/* <Divider orientation="vertical" flexItem /> */}

          {/* To */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            flex: 1, 
            backgroundColor: '#E34825',
            border: '1px solid white',
            borderRadius: '0 4px 4px 0',
            px: 2, 
            py: 1, 
          }}>
           <LocationOnIcon fontSize="medium" sx={{color:'#D9D9D9'}} />
            <Box sx={{ ml: 1 }}>
              <InputBase 
                placeholder="City or Airport"
                defaultValue="DXB, Dubai, AE"
                sx={{ 
                  fontSize: '1rem',
                  color: 'white'
                }}
              />
            </Box>
          </Box>
        </Paper>

        {/* Date Picker */}
        <Paper sx={{ 
          display: 'flex', 
          flex: 1, 
          p: 0, 
          alignItems: 'center', 
          justifyContent: 'space-between',
          px: 2,
          borderRadius: 1
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Calendar size={18} color="#777" />
            <Box sx={{ ml: 1 }}>
              <Typography variant="body2" fontWeight="bold">
                WED, 14 AUG
              </Typography>
            </Box>
          </Box>
          <Box>
            <IconButton size="small">
              <ArrowLeft size={16} />
            </IconButton>
            <IconButton size="small">
              <ArrowRight size={16} />
            </IconButton>
          </Box>
        </Paper>
      </Box>

      {/* Applied Filters */}
      <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
        <Typography variant="body2" sx={{ color: 'white', mr: 2 }}>
          Applied Filter
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button 
            variant="outlined" 
            size="small" 
            sx={{ 
              color: 'white', 
              borderColor: 'white', 
              borderRadius: 4,
              textTransform: 'none',
              px: 1,
              py: 0.5,
              minWidth: 0,
              fontSize: '0.75rem'
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
