import { apiInstance } from '@/app/axios';
import { IProduct, IProductsResponse } from '@/models/products.model';

export const fetchProducts = async ({
  skip = 0,
  limit = 20,
}: {
  skip: number;
  limit: number;
}) => {
  const { data } = await apiInstance.get<IProductsResponse>('products', {
    params: {
      skip,
      limit,
    },
  });
  return data;
};

export const fetchProduct = async (id: number) => {
  const { data } = await apiInstance.get<IProduct>(`products/${id}`);
  return data;
};
