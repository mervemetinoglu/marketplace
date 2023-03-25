import { createAction } from '@reduxjs/toolkit';
import { IProduct } from '@/models/products.model';

export const addFavorite = createAction<IProduct>('favorites/addFavorite');
export const removeFavorite = createAction<number>('favorites/removeFavorite');
