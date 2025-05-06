import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box sx={{marginTop:2}}>
      {" "}
      <Outlet />
    </Box>
  );
};

export default Layout;
