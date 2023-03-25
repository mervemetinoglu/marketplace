import React from 'react';
import { Stack } from '@mui/material';
import { Product } from '@/components/product-detail';
import { IProduct } from '@/models/products.model';
import { useCart } from '@/hooks/useCart';
import { useRouter } from 'next/router';

import { useFavorites } from '@/hooks/useFavorites';
import { useCounterButton } from '@/hooks/useCounterButton';

export interface IProductContainerProps {
  productData: IProduct;
}

export const ProductContainer = (props: IProductContainerProps) => {
  const { productData } = props;
  const router = useRouter();
  const { quantity, incrementQuantity, decrementQuantity } = useCounterButton();
  const { addProductToCart } = useCart();
  const { addFavoriteProduct, isFavoriteProduct, removeFavoriteProduct } =
    useFavorites();

  const handleAddToCart = async () => {
    addProductToCart({
      quantity,
      item: productData,
      totalPrice: productData.price * quantity,
    });
    await router.push('/cart');
  };

  return (
    <Stack
      sx={{
        my: {
          xs: 3,
          md: 5,
        },
      }}
    >
      <Product
        quantity={quantity}
        productItem={productData}
        onAddToCart={handleAddToCart}
        onIncrement={incrementQuantity}
        onDecrement={decrementQuantity}
        isFavorite={isFavoriteProduct(productData.id)}
        onAddToFavorite={() => addFavoriteProduct(productData)}
        onRemoveFromFavorites={() => removeFavoriteProduct(productData.id)}
      />
    </Stack>
  );
};
