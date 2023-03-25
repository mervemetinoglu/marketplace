import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { IProduct } from '@/models/products.model';
import { fetchProduct } from '@/services/products.service';
import { ProductContainer } from '@/containers/product-container';

export interface IProductDetailProps {
  productData: IProduct;
}

const ProductDetail = (props: IProductDetailProps) => {
  const { productData } = props;

  return (
    <>
      <Head>
        <title>Product Detail</title>
        <meta name="description" content="Product Detail Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ProductContainer productData={productData} />
    </>
  );
};

export default ProductDetail;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const id = params?.id;
  let productData;

  try {
    productData = await fetchProduct(Number(id));
  } catch (error: unknown) {
    console.log(error);
  }

  // If there is no productData, return 404
  if (!productData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      productData,
    },
  };
};
