import { useState } from 'react';
import { IProduct } from '@/models/products.model';
import { useCart } from './useCart';
import { useFavorites } from './useFavorites';

export interface IDeleteProductModalState {
  isOpen: boolean;
  productData?: IProduct;
}

export const useDeleteProductModal = () => {
  const { removeProductFromCart } = useCart();
  const { addFavoriteProduct } = useFavorites();

  const [deleteProductModalState, setDeleteProductModalState] =
    useState<IDeleteProductModalState>({
      isOpen: false,
    });

  const handleClose = () => {
    setDeleteProductModalState({
      isOpen: false,
    });
  };

  const handleDelete = (productData: IProduct) => {
    setDeleteProductModalState({
      isOpen: true,
      productData,
    });
  };

  const handleConfirm = () => {
    if (!deleteProductModalState.productData) return;

    removeProductFromCart(deleteProductModalState.productData.id);
    setDeleteProductModalState({
      isOpen: false,
    });
  };

  const handleDeleteAndAddFavorite = () => {
    if (!deleteProductModalState.productData) return;

    removeProductFromCart(deleteProductModalState.productData.id);
    addFavoriteProduct(deleteProductModalState.productData);
    setDeleteProductModalState({
      isOpen: false,
    });
  };

  return {
    handleClose,
    handleDelete,
    handleConfirm,
    handleDeleteAndAddFavorite,
    isOpen: deleteProductModalState.isOpen,
    productData: deleteProductModalState.productData,
  };
};
