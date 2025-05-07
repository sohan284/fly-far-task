import  { useState } from "react";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import AppsIcon from "@mui/icons-material/Apps";
import { Database } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BottomNav = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: "white",
        height: "88px",
        position: "fixed",
        bottom: 0,
        paddingY: 1,
        width: "100vw",
        boxShadow: "0px -2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
          console.log(event);
          
        }}
        sx={{
          height: "100%",
          maxWidth: "85vw",
          margin: "auto",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <BottomNavigationAction
          onClick={() => navigate("/")} // Navigate to home
          label="Home"
          icon={<HomeIcon />}
          sx={{
            "&.Mui-selected": {
              color: "#E34825",
              backgroundColor: "#FFE5E0",
              borderRadius: "20px",
            },
          }}
        />
        <BottomNavigationAction
          label="Database"
          icon={<Database />}
          sx={{
            "&.Mui-selected": {
              color: "#E34825",
              backgroundColor: "#FFE5E0",
              borderRadius: "20px",
            },
          }}
        />
        <BottomNavigationAction
          label="Search"
          icon={<SearchIcon />}
          sx={{
            "&.Mui-selected": {
              color: "#E34825",
              backgroundColor: "#FFE5E0",
              borderRadius: "20px",
            },
          }}
        />
        <BottomNavigationAction
          label="Swap"
          icon={<SwapHorizIcon />}
          sx={{
            "&.Mui-selected": {
              color: "#E34825",
              backgroundColor: "#FFE5E0",
              borderRadius: "20px",
            },
          }}
        />
        <BottomNavigationAction
          label="Apps"
          icon={<AppsIcon />}
          sx={{
            "&.Mui-selected": {
              color: "#E34825",
              backgroundColor: "#FFE5E0",
              borderRadius: "20px",
            },
          }}
        />
      </BottomNavigation>
    </Box>
  );
};

export default BottomNav;