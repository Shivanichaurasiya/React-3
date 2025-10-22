
import React, { useState, useEffect } from 'react';
import {useNavigate, useNavigation} from "react-router-dom";
import { useCart } from './Cart';

const ProductList = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate=useNavigate();
  const {cartItems =[], addToCart}=useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error(`Network error occurred with status ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        console.log("Error fetching product:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  // ✅ Define the button handlers
  const handleAddToCart = (item) => {
    addToCart(item);
    navigate('/cart2');

   
  };

  const handleBuyNow = (product) => {
    navigate("/buy",{state:{product}})
    
  };

  // ✅ Loading and error handling
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1 style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>🛍️ Product List</h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '1rem',
          padding: '20px'
        }}
      >
        {product.map((item) => (
          <div
            key={item.id}
            style={{
              border: '1px solid #ccc',
              padding: '1rem',
              borderRadius: '8px',
              backgroundColor: '#fafafa',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <h2 style={{ fontSize: '16px', height: '50px', overflow: 'hidden' }}>{item.title}</h2>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: '100%', height: '200px', objectFit: 'contain' }}
              />
              <p style={{ fontSize: '14px', height: '80px', overflow: 'hidden', color: '#555' }}>
                {item.description}
              </p>
              <p><strong>Price:</strong> ${item.price}</p>
            </div>

            {/* ✅ Buttons section (inside the product card) */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
              <button
                onClick={() => handleAddToCart(item)}
                style={{
                  backgroundColor: '#ff9800',
                  color: '#fff',
                  border: 'none',
                  padding: '8px 12px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                🛒 Add to Cart
              </button>

              <button
                onClick={() => handleBuyNow(item)}
                style={{
                  backgroundColor: '#4caf50',
                  color: '#fff',
                  border: 'none',
                  padding: '8px 12px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                💳 Buy Now
              </button>
              {/* <button onClick={()=>removeFromCart(item.id)}></button> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
