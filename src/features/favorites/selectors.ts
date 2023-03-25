import { RootState } from '@/app/store/store';

export const selectFavorites = (state: RootState) => state.favorites;
