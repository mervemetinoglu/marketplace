import React, { useRef, useState, useCallback, useMemo } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { NoDataWrapper } from '@/components/no-data';
import { ProductList } from '@/components/product-list';
import { IProductsResponse } from '@/models/products.model';
import { fetchProducts } from '@/services/products.service';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

export interface IProductListContainerProps {
  initialData: IProductsResponse;
}

export const ProductListContainer = (props: IProductListContainerProps) => {
  const { initialData } = props;
  const { products: initialProducts } = initialData;
  const listRef = useRef<HTMLDivElement>(null);
  const [products, setProducts] = useState(initialProducts);

  const isEmptyData = products.length === 0;

  const isLastPage = useMemo(
    () => initialData.total <= products.length,
    [initialData, products]
  );

  const fetchData = useCallback(async () => {
    const response = await fetchProducts({
      limit: 20,
      skip: products.length,
    });
    setProducts([...products, ...response.products]);
  }, [products]);

  const { isFetching } = useInfiniteScroll({
    listRef,
    isLastPage,
    getNextPage: fetchData,
  });

  return (
    <Box>
      {isEmptyData ? (
        <NoDataWrapper />
      ) : (
        <>
          <ProductList
            sx={{
              my: {
                xs: 3,
                md: 5,
              },
            }}
            items={products}
            ref={listRef}
          />
          {isFetching && (
            <Box
              sx={{
                mb: 5,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <CircularProgress
                role="progressbar"
                aria-label="loading"
                sx={{
                  color: '#9BA17B',
                }}
              />
            </Box>
          )}
        </>
      )}
    </Box>
  );
};
