import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartStorage = localStorage.getItem("cartProducts");
    cartStorage !== null && setCartItems(JSON.parse(cartStorage));
  }, []);

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const cartUniqueIds = new Set();
    cartItems.forEach((cartProduct) => cartUniqueIds.add(cartProduct.id));
    if (!cartUniqueIds.has(product.id)) {
      setCartItems((prevState) => [...prevState, product]);
      toast.success("Producto agregado al carrito.");
    } else {
      toast.warning("El producto que quieres agregar ya existe en el carrito.");
    }
  };

  const removeFromCart = (productId) => {
    const newCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(newCart);
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const element in cartItems) {
      if (cartItems[element] > 0) {
        let itemInfo = cartItems.find(
          (product) => product.id === Number(element)
        );
        totalAmount += itemInfo.new_price * cartItems[element];
      }
    }
    return totalAmount;
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, getTotalCartAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
