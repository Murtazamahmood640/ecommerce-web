import React from "react";
import Header from "./common/Header";
import Hero from "./common/Hero";
// import Collection from './Products/Collection';
// import ProductDetails from './Products/ProductDetails';
import image1 from "../assets/images/WhatsApp_Image_2023-09-21_at_8.07.40_PM-removebg-preview.png";
// import "./common/Header.css";
import Footer from "./common/Footer";
import ProductCollection from "./Products/ProductCollection";
const Home = () => {
  // Define your products array here
  const products = [
    {
      id: 1,
      name: "Product 1",
      image: image1,
      description: "This is the description of Product 2.",
      price: 19.99,
    },
    {
      id: 2,
      name: "Product 2",
      image: image1,
      description: "This is the description of Product 2.",
      price: 19.99,
    },
    {
      id: 3,
      name: "Product 3",
      image: image1,
      description: "This is the description of Product 2.",
      price: 19.99,
    },
    {
      id: 4,
      name: "Product 4",
      image: image1,
      description: "This is the description of Product 2.",
      price: 19.99,
    },
    {
      id: 5,
      name: "Product 4",
      image: image1,
      description: "This is the description of Product 2.",
      price: 19.99,
    },
    {
      id: 6,
      name: "Product 4",
      image: image1,
      description: "This is the description of Product 2.",
      price: 19.99,
    },
  ];

  const heroContent = {
    title: "Welcome to Our E-commerce Store",
    description:
      "Discover the latest trends in fashion for men, women, and children.",
    image: "src/assets/images/banner1-removebg-preview.png",
  };

  return (
    <>
      <Header />
      <div className="Container">
        <Hero {...heroContent} />
        <div className="Heading">
          <h1>About Us</h1>
          <p>
            Welcome to E-Shop - Your Personal Style Companion!
            At here, we're on a mission to redefine the way
            you experience fashion. We believe that your style should be a
            reflection of your unique personality, and we're here to help you
            express yourself with confidence through clothing. *Our Journey*
            Established in 2021, It has
            evolved into a go-to destination for fashion enthusiasts,
            trendsetters, and anyone looking to upgrade their wardrobe. Our
            journey began with a vision to make fashion accessible, inspiring,
            and fun.
          </p>
        </div>
        <div className="Heading">
          <h1>Our Featured Products</h1>
        </div>
        <ProductCollection products={products} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
