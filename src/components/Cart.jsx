import React, { useState, useContext, createContext } from 'react'

const CartContext = createContext();
//  2.create a provider component
export const CartProvider =({children}) =>{
    const [cartItems,setCartItem] = useState([]);

    const addToCart = (product)=>{
        setCartItem(prevItems => [...prevItems, product]);
    };

    const removeFromCart =(productId) => {
        setCartItem((prevItems) => prevItems.filter(item => item.id !== productId))
    };

    return(
        <CartContext.Provider  value={{cartItems, addToCart, removeFromCart}}>
            {children}

        </CartContext.Provider>
    )
};

//  3.create a custom hook to use the cart context

export const useCart =() => {
    const context = useContext(CartContext);
    if(!context){
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;

};

// const Cart = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Cart;
