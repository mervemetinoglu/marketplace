import React from 'react';
import { Typography, CardActions, Button } from '@mui/material';

export interface IProductListItemActionsProps {
  price: number;
  onAddToCart: () => void;
}

export const ProductListItemActions = (props: IProductListItemActionsProps) => {
  const { price, onAddToCart } = props;

  return (
    <CardActions
      sx={{
        p: 0,
        mt: {
          xs: 0.5,
          md: 1,
        },
        py: 1,
        flexWrap: 'wrap',
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontWeight: 700,
          fontSize: {
            xs: '1.1rem',
            md: '1.2rem',
          },
          mb: 2,
          ml: 'auto',
        }}
      >
        ${price}
      </Typography>
      <Button
        sx={{
          width: {
            xs: '100%',
          },
        }}
        variant="contained"
        onClick={(e) => {
          e.preventDefault();
          onAddToCart();
        }}
      >
        Add to Cart
      </Button>
    </CardActions>
  );
};
