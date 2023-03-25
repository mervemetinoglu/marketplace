import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '@/models/products.model';
import { addFavorite, removeFavorite } from './actions';

export interface FavoritesState {
  products: IProduct[];
}

const initialState: FavoritesState = {
  products: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addFavorite, (state, action: PayloadAction<IProduct>) => {
        state.products.push(action.payload);
      })
      .addCase(removeFavorite, (state, action: PayloadAction<number>) => {
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      });
  },
});

export default favoritesSlice.reducer;
