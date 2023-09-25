import React from "react";
import "../Home.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img
            src="src/assets\images\pngtree-e-letter-logo-ecommerce-shop-store-design-png-image_4381099-removebg-preview.png"
            alt="Logo"
            className="Foot-logo"
          />
        </div>
        <div className="footer-dec">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit, molestias incidunt. Amet, libero sed accusantium porro
          consequuntur cumque, veniam iure, aperiam nihil quibusdam
          necessitatibus tempora? Autem totam vel illo pariatur.
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <ul>
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>Facebook
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>Instagram
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>Twitter
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>Whatsapp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Your Website Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
