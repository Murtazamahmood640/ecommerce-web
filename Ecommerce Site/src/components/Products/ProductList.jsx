// ProductList.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../ShoppingCart/ShoppingCartContext';
import Header from '../common/Header';
import Hero from '../common/Hero';
import Footer from '../common/Footer';
import ProductCollection from './ProductCollection'; 
import image1 from '../Products/WhatsApp_Image_2023-09-21_at_8.07.40_PM-removebg-preview.png';
import "../common/Header.css";

const ProductList = () => {
  const { cart, addToCart } = useCart();
  const navigate = useNavigate();

  // Define arrays of products for men, women, and featured products here
  const menProducts = [
    { id: 1, name: 'Product 1', image: image1, description: 'This is the description of Product 2.', price: 19.99 }, 
    { id: 2, name: 'Product 2', image: image1,description: 'This is the description of Product 2.', price: 19.99},
    { id: 3, name: 'Product 3', image: image1,description: 'This is the description of Product 2.', price: 19.99 },
    { id: 4, name: 'Product 4', image: image1,description: 'This is the description of Product 2.', price: 19.99 },
    { id: 5, name: 'Product 4', image: image1,description: 'This is the description of Product 2.', price: 19.99 },
    { id: 6, name: 'Product 4', image: image1,description: 'This is the description of Product 2.', price: 19.99 },
    // ...men's clothing products
  ];

  const womenProducts = [
    { id: 1, name: 'Product 1', image: image1, description: 'This is the description of Product 2.', price: 19.99 }, 
    { id: 2, name: 'Product 2', image: image1, description: 'This is the description of Product 2.', price: 19.99},
    { id: 3, name: 'Product 3', image: image1 ,description: 'This is the description of Product 2.', price: 19.99},
    { id: 4, name: 'Product 4', image: image1 ,description: 'This is the description of Product 2.', price: 19.99},
    { id: 5, name: 'Product 4', image: image1 ,description: 'This is the description of Product 2.', price: 19.99},
    { id: 6, name: 'Product 4', image: image1 ,description: 'This is the description of Product 2.', price: 19.99},
    // ...women's clothing products
  ];

  const featuredProducts = [
    { id: 1, name: 'Product 1', image: image1, description: 'This is the description of Product 2.', price: 19.99 }, 
    { id: 2, name: 'Product 2', image: image1,description: 'This is the description of Product 2.', price: 19.99 },
    { id: 3, name: 'Product 3', image: image1,description: 'This is the description of Product 2.', price: 19.99 },
    { id: 4, name: 'Product 4', image: image1,description: 'This is the description of Product 2.', price: 19.99 },
    { id: 5, name: 'Product 4', image: image1 ,description: 'This is the description of Product 2.', price: 19.99},
    { id: 6, name: 'Product 4', image: image1,description: 'This is the description of Product 2.', price: 19.99 },
    // ...featured products
  ];

  const heroContent = {
    title: 'Welcome to Our E-commerce Store',
    description: 'Discover the latest trends in fashion for men, women, and children.',
    image: "src/assets/images/banner1-removebg-preview.png",
  };

  const openPopup = (product) => {
    // Your popup logic
  };

  return (
    <>
      <Header />
      <div className='Container'>
        <Hero {...heroContent} />
        <div className='Heading'>
          <h1>Our Featured Products</h1>
        </div>
        <ProductCollection products={featuredProducts} addToCart={addToCart} />
      </div>

      <div className='Heading'>
        <h1>Men's Clothing</h1>
        <ProductCollection products={menProducts} addToCart={addToCart} />
      </div>

      <div className='Heading'>
        <h1>Women's Clothing</h1>
        <ProductCollection products={womenProducts} addToCart={addToCart} />
      </div>

      <Footer />
    </>
  );
};

export default ProductList;
