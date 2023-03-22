import { apiInstance, ApiResponse } from '@/app/axios';
import { IProduct, IProductsResponse } from '@/models/products.model';

export const fetchProducts = async () => {
  const response = await apiInstance.get<ApiResponse<IProductsResponse>>(
    'products'
  );
  return response;
};

export const fetchProduct = async (id: number) => {
  const response = await apiInstance.get<ApiResponse<IProduct>>(
    `products/${id}`
  );
  return response;
};
