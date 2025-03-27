import React, { createContext, useState, useContext } from 'react';


const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? {...item, quantity: item.quantity + 1} 
          : item
      ));
    } else {
      setCart([...cart, {...product, quantity: 1}]);
    }
    setIsCartOpen(true);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item => 
        item.id === productId 
          ? {...item, quantity: newQuantity} 
          : item
      ));
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cart, 
      addToCart, 
      removeFromCart, 
      updateQuantity,
      calculateTotal, 
      cartItemCount,
      isCartOpen,
      setIsCartOpen,

    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartContext;