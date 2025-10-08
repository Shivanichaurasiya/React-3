import React, { useState } from 'react'
import { useEffect } from 'react';

const ProductList = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error(`Network error occurred and status ${response.status}`);
                }
                const data = await response.json();
                console.log(data);
                setProduct(data);
            } catch (err) {
                console.log("Error fetching product:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchProduct();
    }, [])
    if(loading){
        return <p>Loading...</p>
    }
    if(error){
        return <p>Error: {error}</p>
    }
    return (
        <>
        
       
        <div>
            {product.map(item => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <img src={item.image} alt=""/>
                    <p>{item.description}</p>
                    <p>Price: ${item.price}</p>
                </div>
            ))}
        </div>
        </>
    )
}

export default ProductList