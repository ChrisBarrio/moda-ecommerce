import React, { useContext } from 'react';
import { useCartDetails } from '@/context/useCartDetails';

import DeleteIcon from '@/components/icons/DeleteIcon';

function CardDetails() {
  const { removeCartProducts, cartProducts } = useContext(useCartDetails);

  return (
    <section className="absolute top-24 left-0 z-[5] grid w-full gap-4 rounded-xl bg-slate-50 shadow-lg md:left-full md:max-w-lg md:-translate-x-full ">
      <div className="flex items-center justify-between">
        <h4 className="ml-3 mt-3 font-bold">Cart</h4>
        <p className="ml-3 mt-3 mr-3">Total: $0.00</p>
      </div>
      <hr />
      {cartProducts.length === 0 && (
        <p className="py-8 text-center">Your cart is empty</p>
      )}
      {cartProducts.map((product) => (
        <article
          key={product.id}
          className="m-1 flex items-center justify-around"
        >
          <img
            className="w-16"
            src={product.img}
            alt="imagen del producto en carrito"
          />
          <div className="mx-auto text-center tracking-wide text-gray-400">
            <h5>{product.title}</h5>
            <p>
              <span className="px-2">
                ${product.discountPrice} x {product.quantity}{' '}
              </span>
              <span className="font-bold text-black">
                {' '}
                ${(product.discountPrice * product.quantity).toFixed(2)}
              </span>
            </p>
          </div>
          <button onClick={() => removeCartProducts(product.id)}>
            <DeleteIcon className="mr-4 hover:scale-125" />
          </button>
        </article>
      ))}
      <div className=" flex justify-center p-1 text-white">
        {cartProducts.length !== 0 && (
          <button className="m-2 w-full rounded-lg bg-orange-400 py-3">
            Checkout
          </button>
        )}
      </div>
    </section>
  );
}

export default CardDetails;
