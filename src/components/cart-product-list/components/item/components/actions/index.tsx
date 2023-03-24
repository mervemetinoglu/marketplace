import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import { IconButton, Typography, CardActions, Stack } from '@mui/material';
import { NumericCounterButton } from '@/components/numeric-counter-button';

export interface ICartProductListItemActionsProps {
  price?: number;
}

export const CartProductListItemActions = (
  props: ICartProductListItemActionsProps
) => {
  const { price } = props;

  return (
    <CardActions
      sx={{
        display: 'flex',
        p: 0,
        width: '100%',
        justifyContent: 'space-between',
      }}
    >
      <NumericCounterButton />
      <IconButton>
        <HiOutlineTrash />
      </IconButton>
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: '1.2rem',
        }}
      >
        {price} TL
      </Typography>
    </CardActions>
  );
};
