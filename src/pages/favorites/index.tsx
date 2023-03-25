import React from 'react';
import Head from 'next/head';
import { FavoritesContainer } from '@/containers/favorites-container';

const Favorites = () => {
  return (
    <>
      <Head>
        <title>Favorites</title>
        <meta name="description" content="Favorites Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <FavoritesContainer />
    </>
  );
};

export default Favorites;
