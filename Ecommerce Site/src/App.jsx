import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProductList from './components/Products/ProductList';
// import ProductDetails from './components/Products/ProductDetails'; // Correct the import path
import Cart from './components/ShoppingCart/Cart';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Header from './components/common/Header'; // Include the Header component
import { ShoppingCartProvider } from './components/ShoppingCart/ShoppingCartContext'; // Make sure this import is correct
import { Contact } from './components/common/Contact';

function App() {
  return (
    <ShoppingCartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          {/* <Route path="/products/:id" element={<ProductDetails />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ShoppingCartProvider>
  );
}

export default App;
