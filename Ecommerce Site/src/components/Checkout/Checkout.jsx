import React from 'react';
import { useCart } from '../ShoppingCart/ShoppingCartContext';
import Header from '../common/Header';
import Footer from '../common/Footer';
import '../Home.css'; // Create a CSS file for checkout page styles

const Checkout = () => {
  const { cart, calculateTotalPrice } = useCart();

  return (
    <>
      <Header />
      <div className="checkout-container">
        <h2>Checkout</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <ul className="checkout-items">
              {cart.map((item) => (
                <li key={item.id} className="checkout-item">
                  <div className="checkout-item-details">
                    <img src={item.image} alt={item.name} className="checkout-item-image" />
                    <div className="checkout-item-info">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <p>Price: ${item.price.toFixed(2)}</p>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="checkout-total">
              <p>Total: ${calculateTotalPrice().toFixed(2)}</p>
            </div>
            {/* Add a form for customer information and payment */}
            <form className="checkout-form">
              {/* Add input fields for customer information (e.g., name, address, etc.) */}
              <input type="text" placeholder="Name" className="checkout-input" />
              <input type="text" placeholder="Address" className="checkout-input" />
              <input type="text" placeholder="Email" className="checkout-input" />
              {/* Add payment information (e.g., credit card details) */}
              <input type="text" placeholder="Credit Card Number" className="checkout-input" />
              <input type="text" placeholder="Expiry Date" className="checkout-input" />
              <input type="text" placeholder="CVV" className="checkout-input" />
              <button className="checkout-button">Place Order</button>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
