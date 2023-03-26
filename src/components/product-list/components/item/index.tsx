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
            backgroundColor: (theme) =>
              theme.customColors.productCard.background,
            border: (theme) => theme.customBorders.borderSolid1,
            boxShadow: (theme) => theme.customShadows.cardShadow,
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
                quantity: 1,
                item: productData,
                totalPrice: price,
              })
            }
          />
        </Card>
      </Link>
    </Grid>
  );
};
