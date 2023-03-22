import React from 'react';
import { Box } from '@mui/material';

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer>
      <Box
        sx={{
          bottom: 0,
          width: '100%',
          height: '100px',
          margin: '0 auto',
          position: 'absolute',
        }}
      >
        Footer
      </Box>
    </footer>
  );
};
