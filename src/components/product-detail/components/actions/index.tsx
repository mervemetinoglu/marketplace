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
        <Button
          sx={{
            py: '10px',
            width: '100%',
            [muiTheme.breakpoints.up('md')]: {
              minWidth: 200,
              maxWidth: 200,
            },
            backgroundColor: muiTheme.customColors.productDetail.buttonBg,
            '&:hover': {
              backgroundColor:
                muiTheme.customColors.productDetail.buttonHoverBg,
            },
          }}
          onClick={onRemoveFromFavorites}
        >
          Remove from Favorites
        </Button>
      ) : (
        <Button
          sx={{
            py: '10px',
            width: '100%',
            [muiTheme.breakpoints.up('md')]: {
              minWidth: 200,
              maxWidth: 200,
            },
            backgroundColor: muiTheme.customColors.productDetail.buttonBg,
            '&:hover': {
              backgroundColor:
                muiTheme.customColors.productDetail.buttonHoverBg,
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
            minWidth: 200,
            maxWidth: 200,
          },
          backgroundColor: muiTheme.customColors.productDetail.buttonBg,
          '&:hover': {
            backgroundColor: muiTheme.customColors.productDetail.buttonHoverBg,
          },
        }}
        onClick={onAddToCart}
      >
        Add to Cart
      </Button>
    </Stack>
  );
};
