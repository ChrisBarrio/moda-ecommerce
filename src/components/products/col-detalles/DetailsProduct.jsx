import React, { useState, useContext } from 'react';
import { useCartDetails } from '@/context/useCartDetails';

import CartIcon from '@/components/icons/CartIcon';

const DetailsProduct = ({ objectProduct }) => {
  const [count, setCount] = useState(1);
  const { addCartProducts, cartProducts } = useContext(useCartDetails);

  const handleAddToCart = () => {
    addCartProducts({
      id: objectProduct.id,
      img: objectProduct.imagesThumbnail[0],
      title: objectProduct.title,
      subtitle: objectProduct.subtitle,
      price: objectProduct.price,
      discountPrice: (
        objectProduct.price *
        (1 - objectProduct.discount)
      ).toFixed(2),
      quantity: count || 1,
    });
    setCount(1);
  };

  return (
    <section className="grid gap-3 px-4 md:gap-y-8">
      <p className="text-sm font-bold uppercase tracking-wide text-orange-400">
        {objectProduct.subtitle}
      </p>
      <h2 className="text-2xl font-bold md:text-5xl">{objectProduct.title}</h2>
      <p className="tracking-wide text-gray-400">{objectProduct.description}</p>
      <div className="flex items-center justify-between">
        <p>
          <span className="p-1 text-2xl font-bold">
            {' '}
            ${(objectProduct.price * (1 - objectProduct.discount)).toFixed(2)}
          </span>
        </p>
        <div className="flex justify-between">
          <span className="rounded-lg bg-orange-100 p-1 text-sm font-bold text-orange-400">
            {' '}
            {objectProduct.discount * 100}%
          </span>
          <p className="ml-20 mr-3 p-1 text-gray-400 line-through">
            ${objectProduct.price.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="mx-auto grid w-11/12 gap-4 md:flex md:justify-between">
        <div className="flex items-center justify-around gap-8 rounded-lg bg-gray-100 py-1 text-xl font-bold md:w-6/12">
          <button
            className="text-orange-400 active:bg-slate-400"
            onClick={() => setCount(count - 1)}
            disabled={count === 0 && true}
          >
            -
          </button>
          <span>{count}</span>
          <button
            className="text-orange-400 active:bg-slate-400"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
        <button
          onClick={handleAddToCart}
          className="group mb-3 flex justify-center gap-3 rounded-lg bg-orange-400 py-2 font-bold text-white hover:bg-orange-500 md:my-auto md:w-6/12"
        >
          <CartIcon className="group-hover:translate-y-1" fill="#ffffff" />
          Add to cart
        </button>
      </div>
    </section>
  );
};

export default DetailsProduct;
