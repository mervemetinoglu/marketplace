import React from 'react';
import { Box } from '@mui/material';

export const Footer = () => {
  return (
    <footer>
      <Box
        sx={{
          left: 0,
          bottom: 0,
          width: '100%',
          height: '100px',
          position: 'absolute',
          backgroundColor: '#e0e0e0',
        }}
      >
        Footer
      </Box>
    </footer>
  );
};
