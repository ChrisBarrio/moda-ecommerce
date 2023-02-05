import React from 'react';

import Header from '@/components/header/Header';

import MainProducts from '@/components/products/MainProducts';

import CartDetailsProvider  from '@/context/useCartDetails';

function App() {
  return (
    <>
      <CartDetailsProvider>
        <Header />
        <MainProducts />
      </CartDetailsProvider>
    </>
  );
}

export default App;
