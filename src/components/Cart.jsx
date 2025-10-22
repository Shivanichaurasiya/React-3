

import React, { useContext, useState, createContext, useEffect } from "react";
import { jsx } from "react/jsx-runtime";


const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(() => {

        const storedCart = localStorage.getItem('cartItems')

        return storedCart ? JSON.parse(storedCart) : []

    }
        
        )

        useEffect(() => {
            localStorage.setItem('cartItems', JSON.stringify(cartItems))
        }, [cartItems])

    const addToCart = (product) => {
        const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      // If item already in cart, increase quantity
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }
      else {
      // Else add new item
      setCartItems(prevItems => [...prevItems, { ...product, quantity: 1 }]);
    }
    }


    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId))
    }
    const updateCartItemQuantity = (id, newQuantity) => {
  setCartItems((prevItems) =>
    prevItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    )
  );
};




    return (

        <CartContext.Provider value={{cartItems, addToCart, removeFromCart , updateCartItemQuantity}}>
            {children}
        </CartContext.Provider>

    )
}

export const useCart = () => {
    const context = useContext(CartContext);

    if(!context) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context;
}



