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
          color: (theme) => theme.customColors.orderSummary.title,
        }}
      >
        Order Summary
      </Typography>
      <Stack mt={2} flexDirection="row" alignItems="center">
        <Typography
          fontWeight={600}
          sx={{
            color: (theme) => theme.customColors.orderSummary.subtitle,
          }}
        >{`Subtotal (${quantity}):`}</Typography>
        <Typography
          ml={2}
          fontWeight={600}
          sx={{
            color: (theme) => theme.customColors.orderSummary.price,
          }}
        >{`$${total}`}</Typography>
      </Stack>
      <Button
        aria-label="checkout"
        sx={{
          mt: 2,
          backgroundColor: (theme) => theme.customColors.productDetail.buttonBg,
          '&:hover': {
            backgroundColor: (theme) =>
              theme.customColors.productDetail.buttonHoverBg,
          },
        }}
      >
        Checkout
      </Button>
    </Stack>
  );
};
