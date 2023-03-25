import { combineReducers } from '@reduxjs/toolkit';
import cartSlice from '@/features/cart/reducer';
import favoritesSlice from '@/features/favorites/reducer';
import themeSlice from '@/features/theme/reducer';

export const rootReducer = combineReducers({
  cart: cartSlice,
  favorites: favoritesSlice,
  theme: themeSlice,
});
