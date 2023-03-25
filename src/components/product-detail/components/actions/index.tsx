import React from 'react';
import { Button, Stack, useTheme } from '@mui/material';

export interface IProductActionsProps {
  isFavorite: boolean;
  onAddToCart: () => void;
  onAddToFavorite: () => void;
  onRemoveFromFavorites: () => void;
}

export const ProductActions = (props: IProductActionsProps) => {
  const muiTheme = useTheme();
  const { isFavorite, onAddToCart, onAddToFavorite, onRemoveFromFavorites } =
    props;

  return (
    <Stack
      sx={{
        width: '100%',
        flexDirection: 'row',
        alignSelf: {
          xs: 'flex-start',
          md: 'flex-end',
        },
      }}
    >
      {isFavorite ? (
        <Button onClick={onRemoveFromFavorites}>Remove from Favorites</Button>
      ) : (
        <Button
          sx={{
            py: '10px',
            width: '100%',
            [muiTheme.breakpoints.up('md')]: {
              minWidth: 150,
              maxWidth: 150,
            },
          }}
          onClick={onAddToFavorite}
        >
          Add to Favorites
        </Button>
      )}
      <Button
        sx={{
          ml: 3,
          width: '100%',
          [muiTheme.breakpoints.up('md')]: {
            minWidth: 150,
            maxWidth: 150,
          },
        }}
        onClick={onAddToCart}
      >
        Add to Cart
      </Button>
    </Stack>
  );
};
