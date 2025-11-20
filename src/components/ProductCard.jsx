// import React from 'react';
// import { Link } from 'react-router-dom';

// const ProductCard = ({ id, name, image, categorySlug }) => {
//   return (
//     <div className="group flex flex-col overflow-hidden rounded-lg border border-slate-900 bg-gradient-to-b from-black to-slate-900 shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1 h-full">
//       <Link to={`/products/${categorySlug}/${id}`} className="block">
//         <div className="h-56 overflow-hidden flex items-center justify-center bg-black/40">
//           <img
//             src={image}
//             alt={name}
//             className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
//           />
//         </div>
//         <div className="py-4 px-4">
//           <h3 className="text-xl font-bold text-white text-center truncate group-hover:text-cyan-400 transition-colors duration-300">
//             {name}
//           </h3>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default ProductCard;







import React, { useState } from 'react';
import { useCart } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductCard = ({ id, name, description, price, image, categorySlug, videoPreview }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  
  // --- 1. REMOVED Price Conversion Logic ---
  // const conversionRate = 83.5; // <-- REMOVED
  // const inrPrice = (typeof price === 'number') ? (price * conversionRate) : 0; // <-- REMOVED

  // --- 2. UPDATED INR Formatter ---
  // This formatter now takes the raw price and formats it as INR
  const inrFormatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2, // Show paisa (e.g., ₹12.00)
  });

  const handleIncrease = () => setQuantity((prevQuantity) => prevQuantity + 1);
  const handleDecrease = () => setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    } else if (e.target.value === '') {
      setQuantity(1);
    }
  };
  const handleAddToCart = () => {
    const productToAdd = { id, name, description, price, image, categorySlug, quantity };
    addToCart(productToAdd);
  };

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -5, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 2, 
        repeatDelay: 1
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-full"
    >
      <div className="group flex flex-col overflow-hidden rounded-lg border border-blue-900 bg-gradient-to-b from-black to-blue-900 shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1 h-full">
        
        <Link to={`/products/${categorySlug}/${id}`} className="block">
          <div className="h-48 overflow-hidden">
            
            {isHovered && videoPreview ? (
              <video
                src={videoPreview}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <img
                src={image}
                alt={name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            )}
          </div>
          <h3 className="mt-4 px-4 text-xl font-bold text-white truncate group-hover:text-cyan-400 transition-colors duration-300">
            {name}
          </h3>
        </Link>

        <p className="mt-2 px-4 text-sm text-gray-400 flex-grow">
          {description}
        </p>

        <div className="px-4 pt-2">
          <span className="text-xl font-semibold text-cyan-400">
            {/* --- 3. This now formats the original 'price' prop --- */}
            {inrFormatter.format(price || 0)}
          </span>
        </div>

        <div className="px-4 pt-2 pb-4 flex items-center justify-between gap-4">
          <div className="flex items-center border border-gray-600 rounded">
            <button
              onClick={handleDecrease}
              className="px-3 py-1 text-lg font-bold text-gray-300 hover:text-white hover:bg-gray-700 rounded-l transition-colors"
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              onChange={handleInputChange}
              className="w-12 h-8 text-center bg-gray-700 text-white border-l border-r border-gray-600 focus:outline-none"
              min="1"
            />
            <button
              onClick={handleIncrease}
              className="px-3 py-1 text-lg font-bold text-gray-300 hover:text-white hover:bg-gray-700 rounded-r transition-colors"
            >
              +
            </button>
          </div>

          <motion.button
            onClick={handleAddToCart}
            className="flex-grow rounded-full bg-cyan-600 px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-cyan-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;