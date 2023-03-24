import React from 'react';
import { IProduct } from '@/models/products.model';
import { Card, Grid } from '@mui/material';
import { Link } from '@/components/link';
import {
  ProductListItemImage,
  ProductListItemActions,
  ProductListItemContent,
} from './components';

export interface IProductItemProps {
  product: IProduct;
}

export const ProductListItem = (props: IProductItemProps) => {
  const { title, thumbnail, description, price, id } = props.product;

  return (
    <Grid item xs={6} md={3}>
      <Link href={`/product/${id}`}>
        <Card
          sx={{
            width: '100%',
            padding: '0 10px',
            boxShadow: 'none',
            borderRadius: '8px',
            border: '1px solid #e0e0e0',
          }}
        >
          <ProductListItemImage src={thumbnail} />
          <ProductListItemContent title={title} description={description} />
          <ProductListItemActions price={price} />
        </Card>
      </Link>
    </Grid>
  );
};
