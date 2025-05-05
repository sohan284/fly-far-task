import React from 'react';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import DomainIcon from '@mui/icons-material/Domain';
import TravelExploreSharpIcon from '@mui/icons-material/TravelExploreSharp';
import { Box, Typography } from '@mui/material';

const SearchTabs = () => {
  const tabs = [
    { label: 'Air Ticket', icon: <AirplanemodeActiveIcon sx={{ transform: 'rotate(45deg)' }} /> },
    { label: 'Hotel', icon: <DomainIcon /> },
    { label: 'Holidays', icon: <TravelExploreSharpIcon /> },
    { label: 'PNR Share', icon: <TravelExploreSharpIcon /> },
    { label: 'Group Fare', icon: <TravelExploreSharpIcon /> },
    { label: 'Visa', icon: <TravelExploreSharpIcon /> },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        marginTop: 8,
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
      }}
    >
      {/* Tabs container */}
      {tabs?.map((tab, index) => (
        <Box key={index}>
          <Box
            sx={{
              backgroundColor: '#E34825',
              color: 'white',
              borderRadius: '5px',
              paddingX: 4,
              paddingY: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            {tab.icon}
            <Typography
              component="p"
              sx={{
                display: 'inline',
              }}
            >
              {tab.label}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default SearchTabs;