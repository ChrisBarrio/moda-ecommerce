import { createContext, useState } from 'react';

export const useCartDetails = createContext();

export default (props) => {
  const [cartProducts, setCartProducts] = useState([]);

  const addCartProducts = (product) => {
    {
      /*solo si esta vacìo*/
    }
    if (cartProducts.length === 0) {
      return setCartProducts([...cartProducts, product]);
    }
    {
      /*aumento cantidad de productos*/
    }
    setCartProducts(
      cartProducts.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + product.quantity };
        } else {
          return item;
        }
      })
    );
  };

  const removeCartProducts = (id) => {
    setCartProducts(cartProducts.filter((item)=> item.id !== id))
  };

  const totalQuantityProduct = cartProducts.reduce((acc, current) => current.quantity + acc, 0)

  return (
    <useCartDetails.Provider
      value={{ addCartProducts, removeCartProducts, cartProducts,totalQuantityProduct }}
    >
      {props.children}
    </useCartDetails.Provider>
  );
};
