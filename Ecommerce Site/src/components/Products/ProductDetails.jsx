// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useCart } from '../ShoppingCart/ShoppingCartContext';

// const ProductDetails = ({ product }) => {
//   const { addToCart } = useCart();
//   const navigate = useNavigate();

//   const handleAddToCart = (product) => {
//     addToCart(product);
//     navigate('/cart');
    
//     // Show a confirmation alert
//     const confirmation = window.confirm('Item added to cart. Do you want to view your cart?');

//     // If the user clicks "OK" in the confirmation dialog, navigate to the cart
//     if (confirmation) {
//       navigate('/cart');
//     }
//   };
  
//   return (
//     <div>
      
//       {/* ... */}
//       <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
//     </div>
//   );
// };

// export default ProductDetails;
