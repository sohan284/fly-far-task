import { Box } from '@mui/material';
import React from 'react';

const SideBar = () => {
    return (
       <Box sx={{ width: '250px', padding: '20px', backgroundColor: 'white' }}>
            <h1>SideBar</h1>
            <p>This is the sidebar content.</p>
       </Box>
    );
};

export default SideBar;