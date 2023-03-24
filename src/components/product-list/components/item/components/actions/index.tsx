import React from 'react';
import { Typography, CardActions, Button } from '@mui/material';

export interface IProductListItemActionsProps {
  price: number;
}

export const ProductListItemActions = (props: IProductListItemActionsProps) => {
  const { price } = props;

  return (
    <CardActions
      sx={{
        justifyContent: 'space-between',
        mt: 3,
        p: 0,
        py: 1,
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontSize: '1.2rem',
          fontWeight: 700,
        }}
      >
        {price} TL
      </Typography>
      <Button
        sx={{
          ml: 1,
          textTransform: 'none',
        }}
      >
        Add to Cart
      </Button>
    </CardActions>
  );
};
