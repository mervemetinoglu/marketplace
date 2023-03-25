import React from 'react';
import { Link } from '@/components/link';
import { useCart } from '@/hooks/useCart';
import { Card, Grid } from '@mui/material';
import { IProduct } from '@/models/products.model';
import { useFavorites } from '@/hooks/useFavorites';
import {
  ProductListItemImage,
  ProductListItemActions,
  ProductListItemContent,
} from './components';

export interface IProductItemProps {
  productData: IProduct;
}

export const ProductListItem = (props: IProductItemProps) => {
  const { productData } = props;
  const { title, thumbnail, description, price, id } = productData;

  const { addProductToCart } = useCart();
  const { toggleFavoriteProduct, isFavoriteProduct } = useFavorites();

  return (
    <Grid item xs={6} md={3}>
      <Link href={`/product/${id}`}>
        <Card
          sx={{
            padding: '5px 10px',
            border: (theme) => theme.customBorders.borderSolid1,
          }}
        >
          <ProductListItemImage
            title={title}
            src={thumbnail}
            isFavorite={isFavoriteProduct(id)}
            onToggleFavorite={() => toggleFavoriteProduct(productData)}
          />
          <ProductListItemContent title={title} description={description} />
          <ProductListItemActions
            price={price}
            onAddToCart={() =>
              addProductToCart({
                item: productData,
                quantity: 1,
                totalPrice: price,
              })
            }
          />
        </Card>
      </Link>
    </Grid>
  );
};
