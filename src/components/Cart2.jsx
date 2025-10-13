import React from "react";
import { useCart } from "./Cart";

export default function Cart2(){
    const {cartItems = [] } = useCart();

    if(cartItems.length === 0){
        return <h2>🛒 Your cart is empty</h2>
    }
    return(
        <div>
            <h2>🛒 Your Cart</h2>
            {cartItems.map((item, index)=>(
                <div key={index} style={{
                    display:'flex',
                    alignItems:'center',
                    borderBottom:'1px solid #ddd'
                }}>
                    <img src={item.image}
                    alt={item.title}
                    style={{width:'80px',marginRight:'1rem'}}
                    />

                    <div>
                        <h4>{item.title}</h4>
                        <p>${item.price}</p>
                </div>
                </div>

            ))}
        </div>
    );

}