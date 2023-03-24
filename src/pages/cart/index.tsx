import React from 'react';
import Head from 'next/head';
import { CartContainer } from '@/containers/cart-container';

const Cart = () => {
  return (
    <>
      <Head>
        <title>Shopping Cart</title>
        <meta name="description" content="Shopping Cart Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <CartContainer />
      </main>
    </>
  );
};

export default Cart;
