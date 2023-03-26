import {
  addFavorite,
  removeFavorite,
  selectFavorites,
} from '@/features/favorites';
import { IProduct } from '@/models/products.model';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';

export const useFavorites = () => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectFavorites);

  const isFavoriteProduct = (productId: number) =>
    favorites.products.some((product: IProduct) => product.id === productId);

  const addFavoriteProduct = (product: IProduct) => {
    dispatch(addFavorite(product));
  };

  const removeFavoriteProduct = (productId: number) => {
    dispatch(removeFavorite(productId));
  };

  const toggleFavoriteProduct = (product: IProduct) => {
    if (isFavoriteProduct(product.id)) {
      removeFavoriteProduct(product.id);
    } else {
      addFavoriteProduct(product);
    }
  };

  return {
    favorites,
    isFavoriteProduct,
    addFavoriteProduct,
    removeFavoriteProduct,
    toggleFavoriteProduct,
  };
};
