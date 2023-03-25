import React, { useRef } from 'react';
import { Box } from '@mui/material';
import { useFavorites } from '@/hooks/useFavorites';
import { ProductList } from '@/components/product-list';
import { NoDataWrapper } from '@/components/no-data';
import { NO_DATA_FAVORITES_URL } from '@/constants/no-data-assets';

export const FavoritesContainer = () => {
  const { favorites } = useFavorites();
  const listRef = useRef<HTMLDivElement>(null);

  const isEmpty = favorites.products.length === 0;

  return (
    <Box>
      {isEmpty ? (
        <NoDataWrapper src={NO_DATA_FAVORITES_URL} />
      ) : (
        <ProductList
          sx={{
            my: {
              xs: 3,
              md: 5,
            },
          }}
          ref={listRef}
          items={favorites.products}
        />
      )}
    </Box>
  );
};
