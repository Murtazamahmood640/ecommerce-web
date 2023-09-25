import React from "react";
import { Link } from "react-router-dom";
import "../Home.css";

const Header = () => {
  return (
    <header className="navbar">
      <div className="Navbar-left">
      <img
        src="src\assets\images\pngtree-e-letter-logo-ecommerce-shop-store-design-png-image_4381099-removebg-preview.png"
        alt="Logo"
        className="Logoweb"
      />
      </div>
      <div className="Navbar-center">
      <nav>
        
        <Link to="/" className="link">Home</Link>


          <Link to="/products" className="link">Products</Link>
  


          <Link to="/login" className="link">Login</Link>
          <Link to="/cart" className="link">Cart</Link>
          <Link to="/contact" className="link">Contact</Link>
  

      </nav>
      </div>
      <div className="Navbar-right">
        <img src="" alt="Facebook"/>
        <img src="" alt="Insta"/>
        <img src="" alt="Twitter"/>
      </div>
    </header>
  );
};

export default Header;
