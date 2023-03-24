import React, { forwardRef } from 'react';
import { Grid, GridProps } from '@mui/material';
import { IProduct } from '@/models/products.model';
import { ProductListItem } from './components';

export interface IProductListProps extends Omit<GridProps, 'children'> {
  items: IProduct[];
}

export const ProductList = forwardRef<HTMLDivElement, IProductListProps>(
  (props, forwardedRef) => {
    const { items, ...rest } = props;

    return (
      <Grid container spacing={3} ref={forwardedRef} {...rest}>
        {items.map((item) => (
          <ProductListItem key={item.id} product={item} />
        ))}
      </Grid>
    );
  }
);
