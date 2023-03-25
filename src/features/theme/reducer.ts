import { createSlice } from '@reduxjs/toolkit';
import { toggleTheme } from './actions';

export interface ThemeState {
  isDarkMode: boolean;
}

const initialState: ThemeState = {
  isDarkMode: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(toggleTheme, (state) => {
      state.isDarkMode = !state.isDarkMode;
    });
  },
});

export default themeSlice.reducer;
