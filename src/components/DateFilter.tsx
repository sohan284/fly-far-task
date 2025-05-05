import React, { useState } from "react";
import { Box, Typography, Popover } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { SlCalender } from "react-icons/sl";
import { format } from "date-fns";

const DateFilter: React.FC<{
  isReturnFlight?: boolean;
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
}> = ({ isReturnFlight = false, selectedDate, setSelectedDate }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  interface HandleClickEvent {
    currentTarget: HTMLElement;
  }

  const handleClick = (event: HandleClickEvent): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDateChange = (newDate: Date | null): void => {
    setSelectedDate(newDate);
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? "date-popover" : undefined;

  // Only format date if a date is selected
  const dateSelected = selectedDate !== null;
  const month = dateSelected ? format(selectedDate, "MMMM") : "";
  const day = dateSelected ? format(selectedDate, "d") : "";
  const weekday = dateSelected ? format(selectedDate, "EEEE") : "";

  // Render date content (used for both components when date is selected)
  const renderDateContent = () => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 2,
        }}
      >
        <Typography variant="caption" sx={{ color: "gray" }}>
          {month}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              lineHeight: "none",
              color: "#202124",
              fontWeight: "bold",
            }}
          >
            {day}
          </Typography>
          <Typography variant="caption" sx={{ color: "gray" }}>
            {weekday}
          </Typography>
        </Box>
      </Box>
    );
  };

  // For return flight without date selected
  const renderReturnPrompt = () => {
    return (
      <Box sx={{ marginTop: 3 }}>
        <Typography variant="caption" sx={{ color: "gray" }}>
          Click to Return <br /> Flight
        </Typography>
      </Box>
    );
  };

  return (
    <>
      {isReturnFlight && !dateSelected ? (
        // Return flight without date - show original column design
        <Box
          onClick={handleClick}
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingX: 2,
            paddingY: 2,
            backgroundColor: "white",
            borderRadius: 1,
            cursor: "pointer",
          }}
        >
          <SlCalender size={24} />
          {renderReturnPrompt()}
        </Box>
      ) : (
        // Either departure flight OR return flight with date selected - use the first design
        <Box
          onClick={handleClick}
          sx={{
            display: "flex",
            gap: 2,
            paddingX: 2,
            paddingY: 2,
            backgroundColor: "white",
            borderRadius: 1,
            cursor: "pointer",
          }}
        >
          <SlCalender size={24} />
          {renderDateContent()}
        </Box>
      )}

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDatePicker
            displayStaticWrapperAs="desktop"
            openTo="day"
            value={selectedDate || null}
            onChange={handleDateChange}
          />
        </LocalizationProvider>
      </Popover>
    </>
  );
};

export default DateFilter;
