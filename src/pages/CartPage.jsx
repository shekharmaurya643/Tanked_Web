/* eslint-disable no-irregular-whitespace */
// import React from 'react';
// import { useCart } from '../context/CartContext.jsx';
// import { Link } from 'react-router-dom';

// const CartPage = () => {
//   const { cartItems, removeFromCart, updateQuantity } = useCart();

//   const handleQuantityChange = (id, newQuantity) => {
//     const quantityNum = parseInt(newQuantity, 10);
//     // Only update if the quantity is a non-negative number
//     if (!isNaN(quantityNum) && quantityNum >= 0) {
//       updateQuantity(id, quantityNum);
//     }
//   };
  
//   const getTotalPrice = () => {
//     return cartItems.reduce((total, item) => total + (item.price || 0) * (item.quantity || 0), 0).toFixed(2);
//   };

//   return (
//     <div className="container mx-auto py-12 px-4" style={{ paddingTop: '100px', minHeight: '70vh' }}>
//       <h1 className="text-4xl font-bold mb-8 text-center">Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <div className="text-center">
//           <p className="text-white-400 text-xl mb-4">Your cart is empty.</p>
//           <Link to="/products/all" className="text-cyan-400 hover:text-cyan-300 text-lg">
//             Start Shopping &rarr;
//           </Link>
//         </div>
//       ) : (
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Cart Items */}
//           <div className="lg:w-2/3">
//             <div className="space-y-4">
//               {cartItems.map((item) => (
//                 <div key={item.id} className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow">
//                   <div className="flex items-center gap-4 w-1/2">
//                     <img src={item.image} alt={item.name} className="w-20 h-20 rounded-md object-cover" />
//                     <div>
//                       <h3 className="text-lg font-semibold">{item.name}</h3>
//                       <p className="text-gray-400">${(item.price || 0).toFixed(2)}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <div className="flex items-center border border-gray-600 rounded">
//                       <button
//                         onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
//                         className="px-3 py-1 text-lg font-bold"
//                       >
//                         -
//                       </button>
//                       <input
//                         type="number"
//                         value={item.quantity}
//                         onChange={(e) => handleQuantityChange(item.id, e.target.value)}
//                         className="w-12 text-center bg-gray-700 text-white"
//                         min="0"
//                       />
//                       <button
//                         onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
//                         className="px-3 py-1 text-lg font-bold"
//                       >
//                         +
//                       </button>
//                     </div>
//                     <button
//                       onClick={() => removeFromCart(item.id)}
//                       className="text-red-500 hover:text-red-400 text-sm"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
          
//           {/* Order Summary */}
//           <div className="lg:w-1/3">
//             <div className="bg-gray-800 p-6 rounded-lg shadow">
//               <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
//               <div className="flex justify-between mb-2">
//                 <span className="text-gray-400">Subtotal</span>
//                 <span>${getTotalPrice()}</span>
//               </div>
//               <div className="flex justify-between mb-2">
//                 <span className="text-gray-400">Shipping</span>
//                 <span>FREE</span>
//               </div>
//               <div className="border-t border-gray-600 my-4"></div>
//               <div className="flex justify-between text-xl font-bold mb-6">
//                 <span>Total</span>
//                 <span>${getTotalPrice()}</span>
//               </div>
//               <button className="w-full bg-cyan-600 text-white py-3 rounded-md hover:bg-cyan-700 transition-colors">
//                 Proceed to Checkout
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // This is the line that was missing
// export default CartPage;


// import React from 'react';
// import { useCart } from '../context/CartContext.jsx';
// import { Link } from 'react-router-dom';

// const CartPage = () => {
//   const { cartItems, removeFromCart, updateQuantity } = useCart();

//   const handleQuantityChange = (id, newQuantity) => {
//     const quantityNum = parseInt(newQuantity, 10);
//     // Only update if the quantity is a non-negative number
//     if (!isNaN(quantityNum) && quantityNum >= 0) {
//       updateQuantity(id, quantityNum);
//     }
//   };

//   // --- INR Conversion and Formatting ---
//   const conversionRate = 83.5; // Example: 1 USD = 83.5 INR (Update as needed)
//   const inrFormatter = new Intl.NumberFormat('en-IN', {
//     style: 'currency',
//     currency: 'INR',
//     minimumFractionDigits: 0, // No paisa
//   });

//   const getTotalInrPrice = () => {
//     const total = cartItems.reduce((total, item) => total + (item.price || 0) * (item.quantity || 0), 0);
//     return inrFormatter.format(total * conversionRate);
//   };

//   const getItemInrPrice = (price) => {
//     return inrFormatter.format((price || 0) * conversionRate);
//   };
//   // --- End INR Conversion ---

//   return (
//     <div className="container mx-auto py-12 px-4 text-white" style={{ paddingTop: '100px', minHeight: '70vh' }}>
//       <h1 className="text-4xl font-bold mb-8 text-center text-white">Your Cart</h1>

//       {cartItems.length === 0 ? (
//         <div className="text-center">
//           <p className="text-gray-300 text-xl mb-4">Your cart is empty.</p>
//           <Link to="/products/all" className="text-cyan-400 hover:text-cyan-300 text-lg">
//             Start Shopping &rarr;
//           </Link>
//         </div>
//       ) : (
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Cart Items List */}
//           <div className="lg:w-2/3">
//             <div className="space-y-4">
//               {cartItems.map((item) => (
//                 <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between bg-gray-800 p-4 rounded-lg shadow gap-4">
//                   {/* Item Details */}
//                   <div className="flex items-center gap-4 w-full sm:w-1/2">
//                     <img src={item.image} alt={item.name} className="w-20 h-20 rounded-md object-cover flex-shrink-0" />
//                     <div className="flex-grow">
//                       <h3 className="text-lg font-semibold text-white">{item.name}</h3>
//                       <p className="text-cyan-400">{getItemInrPrice(item.price)}</p>
//                     </div>
//                   </div>

//                   {/* Quantity and Remove */}
//                   <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
//                     <div className="flex items-center border border-gray-600 rounded">
//                       <button
//                         onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
//                         className="px-3 py-1 text-lg font-bold text-gray-300 hover:text-white hover:bg-gray-700 rounded-l transition-colors"
//                       >
//                         -
//                       </button>
//                       <input
//                         type="number"
//                         value={item.quantity}
//                         onChange={(e) => handleQuantityChange(item.id, e.target.value)}
//                         className="w-12 h-8 text-center bg-gray-700 text-white border-l border-r border-gray-600 focus:outline-none"
//                         min="0"
//                       />
//                       <button
//                         onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
//                         className="px-3 py-1 text-lg font-bold text-gray-300 hover:text-white hover:bg-gray-700 rounded-r transition-colors"
//                       >
//                         +
//                       </button>
//                     </div>
//                     <button
//                       onClick={() => removeFromCart(item.id)}
//                       className="text-red-500 hover:text-red-400 text-sm font-medium"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Order Summary */}
//           <div className="lg:w-1/3">
//             <div className="bg-gray-800 p-6 rounded-lg shadow sticky top-24"> {/* Added sticky for longer carts */}
//               <h2 className="text-2xl font-semibold mb-4 text-white">Order Summary</h2>
//               <div className="flex justify-between mb-2">
//                 <span className="text-gray-400">Subtotal</span>
//                 <span className="text-white">{getTotalInrPrice()}</span>
//               </div>
//               <div className="flex justify-between mb-2">
//                 <span className="text-gray-400">Shipping</span>
//                 <span className="text-white">FREE</span>
//               </div>
//               <div className="border-t border-gray-600 my-4"></div>
//               <div className="flex justify-between text-xl font-bold mb-6">
//                 <span className="text-white">Total</span>
//                 <span className="text-white">{getTotalInrPrice()}</span>
//               </div>
//               <button className="w-full bg-cyan-600 text-white py-3 rounded-md hover:bg-cyan-700 transition-colors duration-300 transform hover:scale-105">
//                 Proceed to Checkout
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;

//after removing conversion functions

import React, { useState } from 'react';
import { useCart } from '../context/CartContext.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { createOrder, clearUserCart } from '../services/dbService';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [checkoutForm, setCheckoutForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: ''
  });

  const handleQuantityChange = (id, newQuantity) => {
    const quantityNum = parseInt(newQuantity, 10);
    if (!isNaN(quantityNum)) {
      const clamped = Math.max(1, quantityNum);
      updateQuantity(id, clamped);
    }
  };
  
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price || 0) * (item.quantity || 0), 0).toFixed(2);
  };

  const handleCheckout = async () => {
    const user = auth.currentUser;
    if (!user) {
      // Redirect to login if not authenticated
      navigate('/auth');
      return;
    }

    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    // Basic validation
    if (!checkoutForm.name || !checkoutForm.email || !checkoutForm.phone || !checkoutForm.address) {
      alert('Please fill in all required fields');
      return;
    }

    setIsProcessing(true);
    try {
      const totalNum = parseFloat(getTotalPrice());
      const orderData = {
        items: cartItems,
        total: totalNum,
        currency: 'INR',
        shippingFee: 0,
        taxAmount: 0,
        shipping: {
          name: checkoutForm.name,
          email: checkoutForm.email,
          phone: checkoutForm.phone,
          address: checkoutForm.address,
          city: checkoutForm.city,
          zipCode: checkoutForm.zipCode
        },
        paymentStatus: 'unpaid',
        paymentMethod: 'cod',
        user: {
          uid: user.uid,
          email: user.email || '',
          displayName: user.displayName || '',
          phoneNumber: user.phoneNumber || ''
        },
        status: 'pending'
      };

      const orderId = await createOrder(user.uid, orderData);
      
      // Clear cart after successful order
      await clearUserCart(user.uid);
      clearCart();
      
      alert(`Order placed successfully! Order ID: ${orderId}`);
      navigate('/');
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Failed to place order. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCheckoutForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="py-12 px-4 min-h-screen bg-gradient-to-b from-black to-blue-900" style={{ paddingTop: '100px' }}>
    <div className="container mx-auto py-12 px-4" style={{ paddingTop: '100px', minHeight: '70vh' }}>
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-300 text-xl mb-4">Your cart is empty.</p>
          <Link to="/products" className="text-cyan-400 hover:text-cyan-300 text-lg">
            Start Shopping &rarr;
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow">
                  <div className="flex items-center gap-4 w-1/2">
                    <img src={item.image} alt={item.name} className="w-20 h-20 rounded-md object-cover" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                      <p className="text-cyan-400">₹{(item.price || 0).toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-gray-600 rounded">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="px-3 py-1 text-lg font-bold text-gray-300 hover:text-white"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                        className="w-12 text-center bg-gray-700 text-white"
                        min="1"
                      />
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="px-3 py-1 text-lg font-bold text-gray-300 hover:text-white"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-400 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Order Summary & Checkout */}
          <div className="lg:w-1/3">
            <div className="bg-gray-800 p-6 rounded-lg shadow sticky top-24">
              <h2 className="text-2xl font-semibold mb-4 text-white">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Subtotal</span>
                <span className="text-white">₹{getTotalPrice()}</span>
              </div>
              <div className="border-t border-gray-600 my-4"></div>
              <div className="flex justify-between text-xl font-bold mb-6">
                <span className="text-white">Total</span>
                <span className="text-white">₹{getTotalPrice()}</span>
              </div>

              {/* Checkout Form */}
              <div className="space-y-4 mb-6">
                <h3 className="text-lg font-semibold text-white">Shipping Information</h3>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={checkoutForm.name}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={checkoutForm.email}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={checkoutForm.phone}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address *"
                  value={checkoutForm.address}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={checkoutForm.city}
                    onChange={handleInputChange}
                    className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="Zip Code"
                    value={checkoutForm.zipCode}
                    onChange={handleInputChange}
                    className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isProcessing}
                className="w-full bg-cyan-600 text-white py-3 rounded-md hover:bg-cyan-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? 'Processing...' : 'Proceed to Checkout'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </section>
  );
};

export default CartPage;