import React from 'react';
import { Stack } from '@mui/material';
import { IProduct } from '@/models/products.model';
import { CounterButton } from '@/components/counter-button';
import { ProductActions, ProductContent, ProductImage } from './components';

export interface IProductProps {
  quantity: number;
  isFavorite: boolean;
  productItem: IProduct;
  onAddToCart: () => void;
  onIncrement: () => void;
  onDecrement: () => void;
  onAddToFavorite: () => void;
  onRemoveFromFavorites: () => void;
}

export const Product = (props: IProductProps) => {
  const {
    isFavorite,
    productItem,
    onAddToCart,
    onAddToFavorite,
    onRemoveFromFavorites,
  } = props;
  const { images: src, title, description, price } = productItem;

  return (
    <Stack
      sx={{
        flexDirection: {
          md: 'row',
        },
        height: {
          xs: '100vh',
          md: 'auto',
        },
      }}
    >
      <ProductImage src={src[0]} alt={title} />
      <Stack
        sx={{
          ml: {
            md: 5,
          },
          width: '100%',
        }}
      >
        <ProductContent title={title} price={price} description={description} />
        <CounterButton
          quantity={props.quantity}
          onIncrement={props.onIncrement}
          onDecrement={props.onDecrement}
          sx={{
            mt: {
              xs: 2,
              md: 3,
            },
            mb: {
              xs: 2,
              md: 5,
            },
            minWidth: {
              xs: 'unset',
              md: 130,
            },
            maxWidth: {
              xs: 'unset',
              md: 130,
            },
          }}
        />
        <ProductActions
          isFavorite={isFavorite}
          onAddToCart={onAddToCart}
          onAddToFavorite={onAddToFavorite}
          onRemoveFromFavorites={onRemoveFromFavorites}
        />
      </Stack>
    </Stack>
  );
};
