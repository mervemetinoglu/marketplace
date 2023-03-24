import React from 'react';
import { Stack } from '@mui/material';
import { Product } from '@/components/product-detail';
import { IProduct } from '@/models/products.model';

export interface IProductContainerProps {
  productData: IProduct;
}

export const ProductContainer = (props: IProductContainerProps) => {
  const { productData } = props;

  return (
    <Stack
      mt={5}
      flexDirection="row"
      alignItems={{ xs: 'center', md: 'flex-start' }}
    >
      <Product data={productData} />
    </Stack>
  );
};
