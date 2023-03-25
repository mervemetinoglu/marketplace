import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import { IconButton, Typography, CardActions, useTheme } from '@mui/material';
import { CounterButton } from '@/components/counter-button';

export interface ICartProductListItemActionsProps {
  price: number;
  quantity: number;
  onRemoveProduct: () => void;
  onUpdateQuantity: (quantity: number) => void;
}

export const CartProductListItemActions = (
  props: ICartProductListItemActionsProps
) => {
  const { price, quantity, onRemoveProduct, onUpdateQuantity } = props;
  const muiTheme = useTheme();

  return (
    <CardActions
      sx={{
        p: 0,
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <CounterButton
        quantity={quantity}
        onIncrement={() => onUpdateQuantity(quantity + 1)}
        onDecrement={() => onUpdateQuantity(quantity - 1)}
        buttonProps={{
          sx: {
            [muiTheme.breakpoints.down('md')]: {
              minWidth: 30,
              maxWidth: 30,
            },
          },
        }}
      />

      <Typography
        sx={{
          fontWeight: 600,
          fontSize: {
            xs: '1.1rem',
            md: '1.2rem',
          },
        }}
      >
        ${price}
      </Typography>
      <IconButton onClick={onRemoveProduct}>
        <HiOutlineTrash stroke={muiTheme.customColors.gray20} />
      </IconButton>
    </CardActions>
  );
};
