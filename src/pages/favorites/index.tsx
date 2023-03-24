import React from 'react';
import Head from 'next/head';
import { ProductListContainer } from '@/containers/product-list-container';

const Favorites = () => {
  return (
    <>
      <Head>
        <title>Favorites</title>
        <meta name="description" content="Favorites Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <ProductListContainer />
      </main>
    </>
  );
};

export default Favorites;
