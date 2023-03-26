import React from 'react';
import { Stack, useTheme } from '@mui/material';
import { CartProductList } from '@/components/cart-product-list';
import { OrderSummary } from '@/components/order-summary';
import { useCart } from '@/hooks/useCart';
import { NoDataWrapper } from '@/components/no-data';
import { NO_DATA_CART_URL } from '@/constants/no-data-assets';

export const CartContainer = () => {
  const { cart, totalPrice, totalQuantity } = useCart();
  const { products } = cart;
  const muiTheme = useTheme();

  const isEmpty = products.length === 0;

  return isEmpty ? (
    <NoDataWrapper src={NO_DATA_CART_URL} />
  ) : (
    <Stack
      sx={{
        mt: 3,
        [muiTheme.breakpoints.up('md')]: {
          mt: 5,
          position: 'relative',
          flexDirection: 'row',
        },
      }}
    >
      <Stack
        sx={{
          [muiTheme.breakpoints.up('md')]: {
            padding: 1,
            width: '70%',
          },
        }}
      >
        <CartProductList items={products} />
      </Stack>
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
            backgroundColor: muiTheme.customColors.orderSummary.background,
            borderTop: muiTheme.customBorders.borderSolid1,
          },
          [muiTheme.breakpoints.up('md')]: {
            top: 80,
            right: 2,
            width: '30%',
            position: 'sticky',
            maxHeight: 'calc(100vh - 100px)',
          },
        }}
      >
        <OrderSummary total={totalPrice} quantity={totalQuantity} />
      </Stack>
    </Stack>
  );
};
