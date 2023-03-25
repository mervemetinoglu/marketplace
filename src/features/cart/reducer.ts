import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct, IProducts } from '@/models/products.model';
import { addProduct, removeProduct, updateProduct } from './actions';

export interface ICartStates {
  products: IProducts[];
}

const initialState: ICartStates = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProduct, (state, action: PayloadAction<IProducts>) => {
        const product = state.products.find(
          (_product) => _product.item.id === action.payload.item.id
        );

        if (product) {
          product.quantity += 1;
          product.totalPrice += action.payload.item.price;
        } else {
          state.products.push(action.payload);
        }
      })
      .addCase(removeProduct, (state, action: PayloadAction<number>) => {
        const productt = state.products.find(
          (_product) => _product.item.id === action.payload
        );

        if (!productt) return;

        state.products = state.products.filter(
          (product) => product.item.id !== action.payload
        );
      })
      .addCase(
        updateProduct,
        (state, action: PayloadAction<{ id: number; quantity: number }>) => {
          const productt = state.products.find(
            (_product) => _product.item.id === action.payload.id
          );

          if (!productt) return;

          productt.quantity = action.payload.quantity;
          productt.totalPrice = action.payload.quantity * productt.item.price;
        }
      );
  },
});

export default cartSlice.reducer;
