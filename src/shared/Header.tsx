import { Box } from "@mui/material";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
  return (
    <Box
      sx={{
        height: "84px",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{cursor:'pointer'}} onClick={() => navigate('/')}>
      <img  src={logo} alt="" />
      </Box>
    </Box>
  );
};

export default Header;
