import React from 'react';
import { Grid, GridProps } from '@mui/material';
import { IProducts } from '@/models/products.model';
import { useDeleteProductModal } from '@/hooks/useDeleteProductModal';
import { DeleteProductModal } from '@/components/delete-product-modal';
import { CartProductListItem } from './components';

export interface ICartProductListProps extends Omit<GridProps, 'children'> {
  items: IProducts[];
}

export const CartProductList = (props: ICartProductListProps) => {
  const { items, ...rest } = props;

  const {
    isOpen,
    productData,
    handleClose,
    handleDelete,
    handleConfirm,
    handleDeleteAndAddFavorite,
  } = useDeleteProductModal();

  return (
    <Grid
      container
      spacing={2}
      sx={{
        minHeight: 'calc(100vh - 235px)',
        borderRight: {
          md: (theme) => theme.customBorders.borderSolid1,
        },
      }}
      {...rest}
    >
      {items.map((item) => (
        <CartProductListItem
          key={item.item.id}
          productData={item}
          onClickDelete={handleDelete}
        />
      ))}
      {isOpen && productData && (
        <DeleteProductModal
          onClose={handleClose}
          productData={productData}
          onClickConfirm={handleConfirm}
          onClickDeleteAndAddFavorite={handleDeleteAndAddFavorite}
        />
      )}
    </Grid>
  );
};
