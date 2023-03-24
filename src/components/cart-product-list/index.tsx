import React from 'react';
import { Grid, GridProps } from '@mui/material';
import { CartProductListItem } from './components';

export type ICartProductListProps = Omit<GridProps, 'children'>;

export const CartProductList = (props: ICartProductListProps) => {
  const { ...rest } = props;

  return (
    <Grid
      container
      spacing={2}
      {...rest}
      sx={{
        borderRight: '1px solid #e0e0e0',
      }}
    >
      {[...Array(10)].map((_, index) => (
        <CartProductListItem
          key={index}
          product={{
            title: 'title',
            thumbnail: 'thumbnail',
            description:
              'Tune in to the Make it Big Podcast — our thought leadership audio series for retailers, entrepreneurs and ecommerce professionals. Youll get expert insights, strategies and tactics to help grow your business.',
            price: 1,
            brand: 'brand',
            id: 1,
            category: 'category',
            discountPercentage: 1,
            images: ['images'],
            rating: 1,
            stock: 1,
          }}
        />
      ))}
    </Grid>
  );
};
