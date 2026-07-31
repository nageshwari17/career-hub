import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="static" >
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            🎯
          </Typography>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Career Hub
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
