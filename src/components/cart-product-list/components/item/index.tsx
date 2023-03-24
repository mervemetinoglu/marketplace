import React from 'react';
import { Card, Typography, Grid, Stack, Box } from '@mui/material';
import { IProduct } from '@/models/products.model';
import {
  CartProductListItemActions,
  CartProductListItemContent,
  CartProductListItemImage,
} from './components';

export interface IProductItemProps {
  product: IProduct;
}

export const CartProductListItem = (props: IProductItemProps) => {
  const { title, thumbnail, description, price, id } = props.product;

  return (
    <Grid item xs={12}>
      <Card
        sx={{
          display: 'flex',
          boxShadow: 'none',
          borderRadius: '0',
          borderBottom: '1px solid #e0e0e0',
          alignItems: 'center',
          minHeight: '120px',
          maxHeight: '120px',
          px: 3,
        }}
      >
        <CartProductListItemImage src={thumbnail} />
        <CartProductListItemContent title={title} description={description} />
        <CartProductListItemActions price={price} />
       
      </Card>
    </Grid>
  );
};
