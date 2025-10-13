import React from "react";
import { QRCodeCanvas } from 'qrcode.react';
import { useLocation, useNavigate } from "react-router-dom";

const BuyNow = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const product = location.state?.product;

    if(!product) {
        return (
            <div>
            <h2>Invalid Purchase</h2>
            <p>No Product selected for purchase</p>
            </div>
        )
    };
    const upiID = "9452564202@ibl";
    const upiAmount = product.price;
    const upiPayeeName = 'S M';
    const upiURL = `upi://pay?pa=${upiID}&pn=${encodeURIComponent(upiPayeeName)}&am=${upiAmount}&cu=INR`;

    const handlePayment = () => {
    alert(`✅ Payment of ₹${product.price} for "${product.title}" successful via UPI!`);
    navigate('/'); // Redirect to homepage or orders page after "payment"
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🔐 Secure UPI Payment</h2>
      <div style={{
        border: '1px solid #ccc',
        padding: '1rem',
        borderRadius: '8px',
        maxWidth: '400px',
        marginTop: '2rem',
        backgroundColor: '#f0f0f0',
      }}>
        <h3>{product.title}</h3>
        <p><strong>Price:</strong> ₹{product.price}</p>

      <div style={{ margin: '1rem 0' }}>
          <QRCodeCanvas value={upiURL} size={200} />
          <p style={{ fontSize: '0.9rem' }}>📷 Scan this QR with your UPI app</p>
        </div>
        <button
          onClick={handlePayment}
          style={{
            marginTop: '1rem',
            padding: '10px 20px',
            backgroundColor: '#25d366', // WhatsApp green for UPI style
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Pay with UPI
        </button>
      </div>
    </div>
  );
};

export default BuyNow;