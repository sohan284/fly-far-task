import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
             <Box
      sx={{
        width: { xs: "90vw", lg: "1180px" },
        marginX: "auto",
        marginTop: 2,
      }}
    > <Outlet /></Box>

    );
};

export default Layout;