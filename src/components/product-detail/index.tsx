import React from 'react';
import { Stack } from '@mui/material';
import { IProduct } from '@/models/products.model';
import { NumericCounterButton } from '../numeric-counter-button';
import { ProductActions, ProductContent, ProductImage } from './components';

export interface IProductProps {
  data: IProduct;
}

export const Product = (props: IProductProps) => {
  const { images: src, title, description, price } = props.data;

  return (
    <Stack flexDirection="row" width="100%">
      <ProductImage src={src[0]} alt={title} />
      <Stack ml={5} width="100%" justifyContent="space-between">
        <ProductContent title={title} description={description} />
        <NumericCounterButton />
        <ProductActions price={price} />
      </Stack>
    </Stack>
  );
};
