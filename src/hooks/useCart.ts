import {
  addProduct,
  removeProduct,
  selectCart,
  updateProduct,
} from '@/features/cart';
import { IProducts } from '@/models/products.model';
import { useDispatch, useSelector } from 'react-redux';

export const useCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  const totalQuantity = cart.products.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const totalPrice = cart.products.reduce(
    (total, product) => total + product.totalPrice,
    0
  );

  const isProductInCart = (productId: number) => {
    return cart.products.some((product) => product.item.id === productId);
  };

  const addProductToCart = (product: IProducts) => {
    dispatch(addProduct(product));
  };

  const removeProductFromCart = (productId: number) => {
    dispatch(removeProduct(productId));
  };

  const updateProductQuantity = (productId: number, quantity: number) => {
    dispatch(updateProduct({ id: productId, quantity }));
  };

  return {
    cart,
    totalPrice,
    totalQuantity,
    isProductInCart,
    addProductToCart,
    updateProductQuantity,
    removeProductFromCart,
  };
};
