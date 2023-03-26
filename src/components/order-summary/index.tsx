import React from 'react';
import { Button, Stack, Typography, useTheme } from '@mui/material';

export interface IOrderSummaryProps {
  total: number;
  quantity: number;
}

export const OrderSummary = (props: IOrderSummaryProps) => {
  const { total, quantity } = props;
  const muiTheme = useTheme();

  return (
    <Stack
      sx={{
        [muiTheme.breakpoints.down('md')]: {
          p: 1,
          mt: 3,
          pt: 2,
          left: 0,
          bottom: 0,
          ml: '-16px',
          position: 'sticky',
          width: 'calc(100% + 32px)',
          borderTop: muiTheme.customBorders.borderSolid1,
          backgroundColor: muiTheme.customColors.orderSummary.background,
        },
        [muiTheme.breakpoints.up('md')]: {
          ml: 3,
          top: 80,
          right: 2,
          flexBasis: '30%',
          position: 'sticky',
          maxHeight: 'calc(100vh - 100px)',
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
