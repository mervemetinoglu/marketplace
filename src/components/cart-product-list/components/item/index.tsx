import React from 'react';
import { Box, Card, Grid, useTheme } from '@mui/material';
import { IProduct, IProducts } from '@/models/products.model';
import { useCart } from '@/hooks/useCart';
import {
  CartProductListItemImage,
  CartProductListItemActions,
  CartProductListItemContent,
} from './components';

export interface ICartProductListItemProps {
  productData: IProducts;
  onClickDelete: (productData: IProduct) => void;
}

export const CartProductListItem = (props: ICartProductListItemProps) => {
  const { productData, onClickDelete } = props;
  const { totalPrice, quantity, item } = productData;
  const { title, thumbnail, description } = item;
  const { updateProductQuantity } = useCart();
  const muiTheme = useTheme();

  const handleUpdateQuantity = (_quantity: number) => {
    if (quantity === 0) return;

    updateProductQuantity(item.id, _quantity);
  };

  return (
    <Grid item xs={12}>
      <Card
        sx={{
          pb: 2,
          borderRadius: 0,
          justifyContent: 'space-between',
          borderBottom: muiTheme.customBorders.borderSolid1,
          [muiTheme.breakpoints.up('md')]: {
            display: 'flex',
            alignItems: 'center',
            minHeight: '120px',
            maxHeight: '120px',
            px: 3,
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mr: {
              md: 3,
            },
          }}
        >
          <CartProductListItemImage src={thumbnail} title={title} />
          <CartProductListItemContent title={title} description={description} />
        </Box>
        <CartProductListItemActions
          price={totalPrice}
          quantity={quantity}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveProduct={() => onClickDelete(productData.item)}
        />
      </Card>
    </Grid>
  );
};
