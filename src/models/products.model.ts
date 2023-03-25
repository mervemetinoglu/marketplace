export interface IProduct {
  id: number;
  title: string;
  price: number;
  stock: number;
  brand: string;
  rating: number;
  images: string[];
  category: string;
  thumbnail: string;
  description: string;
  discountPercentage: number;
}

export interface IProductsResponse {
  skip: number;
  total: number;
  limit: number;
  products: IProduct[];
}

export interface IProducts {
  item: IProduct;
  quantity: number;
  totalPrice: number;
}
