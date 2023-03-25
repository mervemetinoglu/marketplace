import { createAction } from '@reduxjs/toolkit';
import { IProduct, IProducts } from '@/models/products.model';

export const addProduct = createAction<IProducts>('cart/addProduct');
export const removeProduct = createAction<number>('cart/removeProduct');
export const updateProduct = createAction<{ id: number; quantity: number }>(
  'cart/updateProduct'
);
