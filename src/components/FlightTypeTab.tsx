import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import FlightSearch from "./FlightSearchContainer";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function FlightTypeTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%"  }}>
      <Box
        sx={{
          marginTop: 5,
          paddingBottom: 3, 
          width: { xs: "90vw", lg: "420px" },
          display: "flex", 
          justifyContent: { xs: "center", lg: "flex-start" }, 
          alignItems: "center", 
          marginX: { xs: "auto", lg: 0 },
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            "& .MuiTabs-indicator": {
              display: "none", // Removes the bottom border/indicator
            },
          }}
        >
          <Tab
            label="One Way"
            {...a11yProps(0)}
            sx={{
              fontSize: "15px",
              color: value === 0 ? "white" : "inherit",
              bgcolor: value === 0 ? "#202124" : "transparent",
              "&.Mui-selected": {
                color: "white",
              },
              borderRadius: "5px",
              textTransform: "capitalize",
              fontWeight: "bold",
            }}
          />
          <Tab
            label="Round Way"
            {...a11yProps(1)}
            sx={{
              fontSize: "15px",
              borderRadius: "5px",
              color: value === 1 ? "white" : "inherit",
              textTransform: "capitalize",
              fontWeight: "bold",
              bgcolor: value === 1 ? "#202124" : "transparent",
              "&.Mui-selected": {
                color: "white",
              },
            }}
          />
          <Tab
            label="Multi City"
            {...a11yProps(2)}
            sx={{
              fontSize: "15px",
              borderRadius: "5px",
              color: value === 2 ? "white" : "inherit",
              bgcolor: value === 2 ? "#202124" : "transparent",
              textTransform: "capitalize",
              fontWeight: "bold",
              "&.Mui-selected": {
                color: "white",
              },
            }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <FlightSearch />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
