import { Button, Stack, Typography } from '@mui/material';
import React from 'react';

export interface IOrderSummaryProps {
  total: number;
  quantity: number;
}

export const OrderSummary = (props: IOrderSummaryProps) => {
  const { total, quantity } = props;

  return (
    <Stack
      sx={{
        ml: {
          xs: 0,
          md: 3,
        },
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: '1.2rem',
        }}
      >
        Order Summary
      </Typography>
      <Stack mt={2} flexDirection="row" alignItems="center">
        <Typography fontWeight={600}>{`Subtotal (${quantity}):`}</Typography>
        <Typography ml={2} fontWeight={600}>{`$${total}`}</Typography>
      </Stack>
      <Button sx={{ mt: 2 }}>Checkout</Button>
    </Stack>
  );
};
