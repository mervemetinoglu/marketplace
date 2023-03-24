import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';

type Props = {};

export const OrderSummary = (props: Props) => {
  return (
    <Stack
      sx={{
        ml: 3,
      }}
    >
      <Typography
        sx={{
          fontSize: '1.2rem',
          fontWeight: 600,
        }}
      >
        Order Summary
      </Typography>

      <Stack mt={2} flexDirection="row" alignItems="center">
        <Typography>Subtotal:</Typography>
        <Typography ml={2}>$100</Typography>
      </Stack>

      <Button
        sx={{
          mt: 2,
          bgcolor: 'red',
        }}
      >
        Checkout
      </Button>
    </Stack>
  );
};
