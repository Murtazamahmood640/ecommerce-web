// import React, { createContext, useContext, useState } from 'react';

// const ShoppingCartContext = createContext();

// const ShoppingCartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart((prevCart) => [...prevCart, product]);
//   };

//   const removeFromCart = (productId) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
//   };

//   const calculateTotalPrice = () => {
//     return cart.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   return (
//     <ShoppingCartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         removeFromCart,
//         calculateTotalPrice,
//       }}
//     >
//       {children}
//     </ShoppingCartContext.Provider>
//   );
// };

// const useCart = () => {
//   const context = useContext(ShoppingCartContext);
//   if (context === undefined) {
//     throw new Error('useCart must be used within a ShoppingCartProvider');
//   }
//   return context;
// };

// export { ShoppingCartProvider, useCart };
