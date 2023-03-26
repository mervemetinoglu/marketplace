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
      <CartProductList items={products} />
      <OrderSummary total={totalPrice} quantity={totalQuantity} />
    </Stack>
  );
};
