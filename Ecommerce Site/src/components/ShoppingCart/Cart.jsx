import React from 'react';
import { useCart } from '../ShoppingCart/ShoppingCartContext';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import '../Home.css'; 

const Cart = () => {
  const { cart, removeFromCart, calculateTotalPrice } = useCart();
  const navigate = useNavigate(); 

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty. Add items to your cart before checking out.');
    } else {
      navigate('/checkout');
    }
  };

  return (
    <>
      <Header />
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <ul className="cart-items">
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <div className="cart-item-details">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    <div className="cart-item-info">
                      <h3>{item.name}</h3>
                      <p>Price: ${item.price.toFixed(2)}</p>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(item)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="cart-total">
              <p>Total: ${calculateTotalPrice().toFixed(2)}</p>
            </div>
            <button className="checkout-button" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
