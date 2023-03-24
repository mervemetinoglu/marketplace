import React, { useRef } from 'react';
import { ProductList } from '@/components/product-list';
import { Box } from '@mui/material';
import { IProductsResponse } from '@/models/products.model';

export interface IProductListContainerProps {
  initialData: IProductsResponse;
}

export const ProductListContainer = (props: IProductListContainerProps) => {
  const { initialData } = props;
  const listRef = useRef<HTMLDivElement>(null);

  return (
    <Box>
      <ProductList sx={{ my: 5 }} items={initialData.products} ref={listRef} />
    </Box>
  );
};
