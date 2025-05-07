import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../shared/Header";

const Layout = () => {
  return (
    <Box>
       <Box>
        <Header/>
      </Box>
      <Outlet />
    </Box>
  );
};

export default Layout;
