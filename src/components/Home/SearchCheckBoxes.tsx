import { useState } from "react";
import {
  Box,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  styled,
} from "@mui/material";

// Custom styled components
const CustomCheckbox = styled(Checkbox)(() => ({
  padding: 0,
  "&.MuiCheckbox-root": {
    color: "#FF6B00", // Orange border by default
  },
  "& .MuiSvgIcon-root": {
    fontSize: 18, // Reduced from 20
  },
  "&.Mui-checked": {
    color: "#FF6B00", // Orange fill when checked
  },
}));

const CheckboxContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  padding: "10px", // Reduced from 10px
 
  cursor: "pointer",
}));

const StyledFormControlLabel = styled(FormControlLabel)({
  margin: 0, // Reduced from 2
  "& .MuiFormControlLabel-label": {
    fontSize: "13px", // Reduced from 12px
    fontWeight: 500,
    color: "#8C8080",
  },
});

// Borderless Select styled as plain text with reduced size
const BorderlessSelect = styled(Select)({
  "&.MuiOutlinedInput-root": {
    fontSize: "13px", // Reduced from 12px
    backgroundColor: "white",
    height: "36px", // Added to make the select smaller
    "& fieldset": {
      border: "none", // Remove border completely
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      border: "none", // Remove border on hover
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "none", // Remove border when focused
    },
  },
  "& .MuiSelect-select": {
    paddingTop: "6px", // Reduced padding
    paddingBottom: "6px", // Reduced padding
    paddingRight: "20px", // Space for dropdown icon, reduced from 24px
    color: "#8C8080",
    fontWeight: 500,
  },
});

// Custom Checkbox Icon - empty box with border
const CustomIcon = styled("span")({
  width: 14, // Reduced from 16
  height: 14, // Reduced from 16
  marginRight: 8, // Reduced from 10
  border: ".5px solid #FF6B00",
  marginLeft: 0,
  borderRadius: 3,
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

// Custom Checked Icon - filled box with no checkmark
const CustomCheckedIcon = styled(CustomIcon)({
  backgroundColor: "#FF6B00",
  "&:before": {
    display: "none", // No checkmark
  },
});

export default function SearchCheckBoxes() {
  const [selected, setSelected] = useState({
    regular: true,
    advanced: false,
    student: false,
    umrah: false,
    seaman: false,
  });

  interface SelectedState {
    regular: boolean;
    advanced: boolean;
    student: boolean;
    umrah: boolean;
    seaman: boolean;
  }

  const handleCheckboxChange = (name: keyof SelectedState): void => {
    setSelected((prev: SelectedState) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const checkboxItems: { id: keyof SelectedState; label: string }[] = [
    { id: "regular", label: "Regular Search" },
    { id: "advanced", label: "Advanced Search" },
    { id: "student", label: "Student Fare" },
    { id: "umrah", label: "Umrah Fare" },
    { id: "seaman", label: "Seaman Fare" },
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "repeat(1, 1fr)", lg: "repeat(7, 1fr)" },
        width: { xs: "85vw", lg: "100%" },
        marginX: { xs: "auto", lg: 0 },
        flexWrap: "wrap",
        alignItems: "center",
        marginTop: 3,
        gap: 1,
      }}
    >
      {/* First Section: Column Span 2 */}
      <Box
        sx={{
          gridColumn: { xs: "span 1", lg: "span 2" },
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          backgroundColor: "white",
          borderRadius: '5px',
        }}
      >
        {checkboxItems.slice(0, 2).map((item) => (
          <CheckboxContainer key={item.id}>
            <StyledFormControlLabel
              control={
                <CustomCheckbox
                  checked={selected[item.id]}
                  onChange={() => handleCheckboxChange(item.id)}
                  icon={<CustomIcon />}
                  checkedIcon={<CustomCheckedIcon />}
                />
              }
              label={item.label}
            />
          </CheckboxContainer>
        ))}
      </Box>

      {/* Middle Section: Column Span 3 */}
      <Box
        sx={{
          gridColumn: { xs: "span 1", lg: "span 3" },
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          backgroundColor: "white",
          borderRadius: '5px',
        }}
      >
        {checkboxItems.slice(2, 5).map((item) => (
          <CheckboxContainer key={item.id}>
            <StyledFormControlLabel
              control={
                <CustomCheckbox
                  checked={selected[item.id]}
                  onChange={() => handleCheckboxChange(item.id)}
                  icon={<CustomIcon />}
                  checkedIcon={<CustomCheckedIcon />}
                />
              }
              label={item.label}
            />
          </CheckboxContainer>
        ))}
      </Box>

      {/* Last Section: Column Span 2 */}
      <Box
        sx={{
          gridColumn: { xs: "span 1", lg: "span 2" },
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: '5px',
      
        }}
      >
        <BorderlessSelect
          displayEmpty
          defaultValue=""
          renderValue={(selected) => {
            if (!selected) {
              return <span>Select Preferred Airlines</span>;
            }
            return <span>{selected as string}</span>;
          }}
          IconComponent={(props) => (
            <span {...props} style={{ 
              color: "#8C8080", 
              marginRight: "4px", // Reduced from 5px
              fontSize: "13px"  // Reduced from 12px
            }}></span>
          )}
        >
          <MenuItem value="" disabled>
            Select Preferred Airlines
          </MenuItem>
          <MenuItem value="Emirates">Emirates</MenuItem>
          <MenuItem value="Qatar Airways">Qatar Airways</MenuItem>
          <MenuItem value="Singapore Airlines">Singapore Airlines</MenuItem>
          <MenuItem value="Lufthansa">Lufthansa</MenuItem>
        </BorderlessSelect>
      </Box>
    </Box>
  );
}