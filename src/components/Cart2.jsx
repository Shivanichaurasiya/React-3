import React from "react";
import { useCart } from "./Cart";
import { useNavigate } from "react-router-dom";

export default function Cart2(){
    const navigate =useNavigate()
    const {cartItems ,removeFromCart ,updateCartItemQuantity= []} = useCart();


    const handleBuyNow =(product)=>{
        navigate('/buy',{state:{product}})
    }
    

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
                        <p>Price: ${item.price}</p>


                                    {/* Quantity Controls */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <button
                onClick={() =>
                  updateCartItemQuantity(item.id, item.quantity - 1)
                }
                disabled={item.quantity <= 1}
                style={{
                  backgroundColor: "#2196f3",
                  color: "#fff",
                  border: "none",
                  padding: "6px 10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                -
              </button>

              <span style={{ fontWeight: "bold" }}>{item.quantity}</span>

              <button
                onClick={() =>
                  updateCartItemQuantity(item.id, item.quantity + 1)
                }
                style={{
                  backgroundColor: "#2196f3",
                  color: "#fff",
                  border: "none",
                  padding: "6px 10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                +
              </button>
            </div>

            {/* Total Price */}
            <p style={{ marginTop: "5px" }}>
              <b>Total:</b> ${(item.price * item.quantity).toFixed(2)}
            </p>





                        <button onClick={()=>handleBuyNow(item)} 
                        style={{
                  backgroundColor: '#4caf50',
                  color: '#fff',
                  border: 'none',
                  padding: '8px 12px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
                            >Buy Now</button>
                        <button onClick={()=>removeFromCart(item.id)}
                        style={{
                  backgroundColor: '#ff9800',
                  color: '#fff',
                  border: 'none',
                  padding: '8px 12px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
                            
                            >Romove</button>
                </div>
                </div>

            ))}
        </div>
    );

}