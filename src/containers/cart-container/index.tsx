import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { CartProductList } from '@/components/cart-product-list';
import { OrderSummary } from '@/components/order-summary';

type Props = {};

export const CartContainer = (props: Props) => {
  return (
    <Stack
      flexDirection="row"
      alignItems={{ xs: 'center', md: 'flex-start' }}
      sx={{
        mt: 5,
        borderRadius: 1,
        position: 'relative',
      }}
    >
      <Stack
        sx={{
          width: '70%',
          padding: 1,
        }}
      >
        <CartProductList />
      </Stack>
      <Stack
        sx={{
          width: '30%',
          position: 'sticky',
          top: 0,
        }}
      >
        <OrderSummary />
      </Stack>
    </Stack>
  );
};
