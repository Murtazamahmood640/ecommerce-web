// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useCart } from '../ShoppingCart/ShoppingCartContext';
// import "../common/Header.css";


// const Collection = ({ products }) => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const { addToCart } = useCart();
//   const navigate = useNavigate();

//   const openPopup = (product) => {
//     setSelectedProduct(product);
//     setIsPopupOpen(true);
//     setQuantity(1);
//   };

//   const calculatePrice = () => {
//     if (selectedProduct) {
//       return selectedProduct.price * quantity;
//     }
//     return 0;
//   };

//   const handleAddToCart = () => {
//     setSelectedProduct(product);
//     if (addToCart && selectedProduct) {
//       addToCart({ ...selectedProduct, quantity: parseInt(quantity, 10) });
//       setIsPopupOpen(false);
//       navigate('/cart');
//     } else {
//       console.error('addToCart function is not available');
//     }
//   };

//   return (
//     <div className="product-collection">
//       {products.map((product) => (
//         <div key={product.id} className="product-item">
//           <img src={product.image} alt={product.name} className="product-image" />
//           <h3 className="product-name">{product.name}</h3>
//           <button
//             className="view-details-button"
//             onClick={() => openPopup(product)}
//           >
//             View Details
//           </button>
//         </div>
//       ))}

//       <div className={`product-popup-overlay ${isPopupOpen ? 'show' : ''}`}>
//         <div className="popup-content">
        
//           {selectedProduct && (
//             <>
//               <div className="img-div">
//                 <img
//                   src={selectedProduct.image}
//                   alt={selectedProduct.name}
//                   className="popup-image"
//                 />
//               </div>
//               <div className="content-div">
//                 <h3 className="popup-name">{selectedProduct.name}</h3>
//                 <p className="popup-description">{selectedProduct.description}</p>
//                 <div className="quantity-section">
//                   <label htmlFor="quantity">Quantity:</label>
//                   <input
//                     type="number"
//                     id="quantity"
//                     name="quantity"
//                     value={quantity}
//                     onChange={(e) => setQuantity(e.target.value)}
//                   />
//                 </div>
//                 <p className="popup-price">
//                   Total Price: ${calculatePrice()}
//                 </p>
//                 <button
//                   className="add-to-cart-button"
//                   onClick={handleAddToCart}
//                 >
//                   Add to Cart
//                 </button>
//                 <button className="close-popup-button" onClick={() => setIsPopupOpen(false)}>
//             Close
//           </button>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Collection;
