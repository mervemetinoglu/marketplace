import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { IProductsResponse } from '@/models/products.model';
import { fetchProducts } from '@/services/products.service';
import { ProductListContainer } from '@/containers/product-list-container';

export interface IHomeProps {
  data: IProductsResponse;
}

export default function Home(props: IHomeProps) {
  const { data: initialData } = props;

  return (
    <>
      <Head>
        <title>Shoop</title>
        <meta name="description" content="Products Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ProductListContainer initialData={initialData} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  let data;

  try {
    data = await fetchProducts({
      skip: 0,
      limit: 20,
    });
  } catch (error: unknown) {
    console.log(error);
  }

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};
