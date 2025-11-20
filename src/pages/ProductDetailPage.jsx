// // src/pages/ProductDetailPage.jsx
// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { db } from '../firebase';
// import { doc, getDoc } from 'firebase/firestore';
// import { useCart } from '../context/CartContext';
// import AnimatedPage from '../components/AnimatedPage'; // For smooth transitions

// // --- INR Formatting (copy from ProductCard if needed) ---
// const conversionRate = 83.5;
// const inrFormatter = new Intl.NumberFormat('en-IN', {
//   style: 'currency',
//   currency: 'INR',
//   minimumFractionDigits: 0,
// });
// // --- End INR Formatting ---

// const ProductDetailPage = () => {
//   const { productId } = useParams(); // Get productId from the URL
//   const { addToCart } = useCart();
//   const [product, setProduct] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [quantity, setQuantity] = useState(1); // Local quantity state

//   useEffect(() => {
//     const fetchProduct = async () => {
//       setIsLoading(true);
//       if (!productId) {
//         setIsLoading(false);
//         return; // Exit if no productId
//       }
//       // Create a reference to the specific product document in Firestore
//       const productRef = doc(db, 'products', productId);
//       const productSnap = await getDoc(productRef);

//       if (productSnap.exists()) {
//         setProduct({ ...productSnap.data(), id: productSnap.id });
//       } else {
//         console.log("No such product found!");
//         setProduct(null); // Set to null if not found
//       }
//       setIsLoading(false);
//     };

//     fetchProduct();
//   }, [productId]); // Re-run effect if productId changes

//   // --- Quantity Handlers (copy from ProductCard) ---
//   const handleIncrease = () => setQuantity((prev) => prev + 1);
//   const handleDecrease = () => setQuantity((prev) => Math.max(1, prev - 1));
//   const handleInputChange = (e) => {
//     const value = parseInt(e.target.value, 10);
//     if (!isNaN(value) && value > 0) setQuantity(value);
//     else if (e.target.value === '') setQuantity(1);
//   };
//   // --- End Quantity Handlers ---

//   const handleAddToCart = () => {
//     if (product) {
//       addToCart({ ...product, quantity: quantity });
//       // Optionally show a confirmation message
//     }
//   };

//   const getInrPrice = (price) => {
//     const numPrice = typeof price === 'number' ? price : 0;
//     return inrFormatter.format(numPrice * conversionRate);
//   };

//   if (isLoading) {
//     return <div className="text-center py-40 text-white text-xl">Loading Product...</div>;
//   }

//   if (!product) {
//     return (
      
//         <div className="text-center py-40 text-white">
//           <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
//           <Link to="/products/all" className="text-cyan-400 hover:underline">
//             ← Back to Products
//           </Link>
//         </div>
     
//     );
//   }

//   return (
    
//       <div className="container mx-auto py-12 px-4 text-white" style={{ paddingTop: '120px', minHeight: '80vh' }}>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
//           {/* Left Side: Image */}
//           <div className="rounded-lg overflow-hidden shadow-xl aspect-square">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Right Side: Details */}
//           <div className="space-y-6">
//             <h1 className="text-4xl lg:text-5xl font-bold">{product.name}</h1>
//             <p className="text-gray-300 text-lg leading-relaxed">{product.description}</p>
//             <div className="text-3xl font-bold text-cyan-400">
//               {getInrPrice(product.price)}
//             </div>

//             {/* Quantity Selector and Add to Cart */}
//             <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
//               <div className="flex items-center border border-gray-600 rounded h-12"> {/* Fixed height */}
//                 <button
//                   onClick={handleDecrease}
//                   className="px-4 h-full text-xl font-bold text-gray-300 hover:text-white hover:bg-gray-700 rounded-l transition-colors"
//                 >
//                   -
//                 </button>
//                 <input
//                   type="number"
//                   value={quantity}
//                   onChange={handleInputChange}
//                   className="w-16 h-full text-center bg-gray-700 text-white border-l border-r border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//                   min="1"
//                 />
//                 <button
//                   onClick={handleIncrease}
//                   className="px-4 h-full text-xl font-bold text-gray-300 hover:text-white hover:bg-gray-700 rounded-r transition-colors"
//                 >
//                   +
//                 </button>
//               </div>
//               <button
//                 onClick={handleAddToCart}
//                 className="flex-grow rounded-lg bg-cyan-600 px-8 py-3 text-lg font-bold text-white transition-colors hover:bg-cyan-700 h-12" // Fixed height
//               >
//                 Add to Cart
//               </button>
//             </div>

//             {/* Back Link */}
//             <div className="pt-6">
//               <Link to={`/products/${product.categorySlug || 'all'}`} className="text-gray-400 hover:text-cyan-400 transition-colors">
//                 ← Back to {product.categorySlug ? product.categorySlug.replace(/-/g, ' ') : 'Products'}
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
   
//   );
// };

// export default ProductDetailPage;



// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { getProductById } from '../services/dbService';
// import { useCart } from '../context/CartContext';

// // --- INR Formatting ---
// const conversionRate = 83.5;
// const inrFormatter = new Intl.NumberFormat('en-IN', {
//   style: 'currency',
//   currency: 'INR',
//   minimumFractionDigits: 0,
// });
// // --- End INR Formatting ---

// const ProductDetailPage = () => {
//   const { productId } = useParams();
//   const { addToCart } = useCart();
//   const [product, setProduct] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       setIsLoading(true);

//       if (!productId) {
//         console.error("No Product ID in URL");
//         setProduct(null);
//         setIsLoading(false);
//         return;
//       }
      
//       try {
//         const fetchedProduct = await getProductById(productId);
//         setProduct(fetchedProduct);
//       } catch (error) {
//         console.error("Error fetching product:", error);
//         setProduct(null);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [productId]);

//   const handleAddToCart = () => {
//     if (product) {
//       addToCart({ ...product, quantity: 1 });
//     }
//   };

//   const getInrPrice = (price) => {
//     const numPrice = typeof price === 'number' ? price : 0;
//     return inrFormatter.format(numPrice * conversionRate);
//   };

//   if (isLoading) {
//     return <div className="text-center py-40 text-white text-xl">Loading Product...</div>;
//   }

//   if (!product) {
//     return (
//       <div className="text-center py-40 text-white">
//         <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
//         <Link to="/products/all" className="text-cyan-400 hover:underline">
//           ← Back to Products
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto py-12 px-4 text-white" style={{ paddingTop: '120px', minHeight: '80vh' }}>
//       <div className="max-w-6xl mx-auto">
//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          
//           {/* LEFT SIDE: Price and Add to Cart */}
//           <div className="space-y-8 order-2 lg:order-1">
//             <div>
//               <h1 className="text-4xl lg:text-5xl font-bold mb-4">{product.name}</h1>
//               <div className="text-4xl font-bold text-cyan-400 mb-6">
//                 {getInrPrice(product.price)}
//               </div>
//             </div>

//             {/* Add to Cart Button */}
//             <button
//               onClick={handleAddToCart}
//               className="w-full bg-cyan-600 text-white py-4 px-8 rounded-lg text-lg font-bold transition-colors hover:bg-cyan-700 transform hover:scale-105 transition-transform"
//             >
//               Add to Cart
//             </button>

//             {/* Back Link */}
//             <div className="pt-4">
//               <Link 
//                 to={`/products/${product.categorySlug || 'all'}`} 
//                 className="text-gray-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-2"
//               >
//                 <span>←</span>
//                 <span>Back to {product.categorySlug ? product.categorySlug.replace(/-/g, ' ') : 'Products'}</span>
//               </Link>
//             </div>
//           </div>

//           {/* RIGHT SIDE: Image */}
//           <div className="order-1 lg:order-2">
//             <div className="rounded-lg overflow-hidden shadow-2xl bg-gray-800">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-auto object-cover"
//               />
//             </div>
//           </div>
//         </div>

//         {/* BELOW IMAGE: Detailed Description */}
//         <div className="mt-12 border-t border-gray-700 pt-8">
//           <h2 className="text-3xl font-bold mb-6">Product Description</h2>
//           <div className="prose prose-invert max-w-none">
//             <p className="text-gray-300 text-lg leading-relaxed mb-4">
//               {product.description || 'No description available for this product.'}
//             </p>
            
//             {/* Additional Product Details */}
//             <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="bg-gray-800 p-4 rounded-lg">
//                 <h3 className="font-semibold text-cyan-400 mb-2">Category</h3>
//                 <p className="text-gray-300 capitalize">{product.categorySlug?.replace(/-/g, ' ') || 'Uncategorized'}</p>
//               </div>
//               <div className="bg-gray-800 p-4 rounded-lg">
//                 <h3 className="font-semibold text-cyan-400 mb-2">Price</h3>
//                 <p className="text-gray-300">{getInrPrice(product.price)}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailPage;




import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useCart } from '../context/CartContext';

// --- INR Formatting ---
// 1. REMOVED the conversionRate
const inrFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 2, // 2. Changed to 2 to show paisa (e.g., ₹40.00)
});
// --- End INR Formatting ---

const ProductDetailPage = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeAsset, setActiveAsset] = useState(null); 
  const [allAssets, setAllAssets] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      if (!productId) {
        console.error("No Product ID in URL");
        setProduct(null);
        setIsLoading(false);
        return;
      }
      try {
        const productRef = doc(db, 'products', productId);
        const productSnap = await getDoc(productRef);
        if (productSnap.exists()) {
          const fetchedProduct = { ...productSnap.data(), id: productSnap.id };
          setProduct(fetchedProduct);
          const mainImage = { type: 'image', src: fetchedProduct.image };
          const galleryAssets = fetchedProduct.assets || []; 
          const combinedAssets = [mainImage, ...galleryAssets];
          setAllAssets(combinedAssets);
          setActiveAsset(combinedAssets[0]);
        } else {
          setProduct(null);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => Math.max(1, prev - 1));
  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) setQuantity(value);
    else if (e.target.value === '') setQuantity(1);
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity: quantity }); 
    }
  };

  // --- 3. THIS IS THE FIX ---
  // Removed the 'numPrice * conversionRate' multiplication
  const getInrPrice = (price) => {
    const numPrice = typeof price === 'number' ? price : 0;
    return inrFormatter.format(numPrice); // Now it formats the correct price
  };

  if (isLoading) {
    return <div className="text-center py-40 text-white text-xl min-h-screen bg-gradient-to-b from-black to-blue-900" style={{ paddingTop: '120px' }}>Loading Product...</div>;
  }

  if (!product) {
    return (
      <div className="text-center py-40 text-white min-h-screen bg-gradient-to-b from-black to-blue-900" style={{ paddingTop: '120px' }}>
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <Link to="/products/all" className="text-cyan-400 hover:underline">
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 text-white min-h-screen bg-gradient-to-b from-black to-blue-900" style={{ paddingTop: '120px' }}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          
          {/* LEFT SIDE: Gallery Catalogue */}
          <div className="order-1 lg:order-2 space-y-4">
            <div className="rounded-lg overflow-hidden shadow-2xl aspect-square bg-gray-900 flex items-center justify-center">
              {activeAsset && activeAsset.type === 'video' ? (
                <video
                  key={activeAsset.src}
                  src={activeAsset.src}
                  className="w-full h-full object-cover"
                  controls autoPlay muted loop
                />
              ) : (
                <img
                  src={activeAsset ? activeAsset.src : ''}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            {allAssets.length > 1 && (
              <div className="flex gap-4 overflow-x-auto p-2">
                {allAssets.map((asset, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveAsset(asset)}
                    className={`w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border-2 transition-all ${
                      activeAsset.src === asset.src 
                      ? 'border-cyan-400 scale-105' 
                      : 'border-gray-700 hover:border-gray-500'
                    }`}
                  >
                    {asset.type === 'video' ? (
                      <div className="w-full h-full bg-gray-700 flex items-center justify-center relative">
                        <svg className="w-8 h-8 text-white z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                      </div>
                    ) : (
                      <img
                        src={asset.src}
                        alt={`${product.name} thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* RIGHT SIDE: Details, Price, and Add to Cart */}
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{product.name}</h1>
              <div className="text-4xl font-bold text-cyan-400 mb-6">
                {getInrPrice(product.price)}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <div className="flex items-center border border-gray-600 rounded h-14">
                <button
                  onClick={handleDecrease}
                  className="px-5 h-full text-2xl font-bold text-gray-300 hover:text-white hover:bg-gray-700 rounded-l transition-colors"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={handleInputChange}
                  className="w-16 h-full text-center bg-gray-700 text-white text-lg border-l border-r border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  min="1"
                />
                <button
                  onClick={handleIncrease}
                  className="px-5 h-full text-2xl font-bold text-gray-300 hover:text-white hover:bg-gray-700 rounded-r transition-colors"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-grow rounded-lg bg-cyan-600 px-8 py-3 text-lg font-bold text-white transition-colors hover:bg-cyan-700 h-14"
              >
                Add to Cart
              </button>
            </div>

            {/* Back Link */}
            <div className="pt-4">
              <Link 
                to={`/products/${product.categorySlug || 'all'}`} 
                className="text-gray-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-2"
              >
                <span>←</span>
                <span>Back to {product.categorySlug ? product.categorySlug.replace(/-/g, ' ') : 'Products'}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* BELOW: Detailed Description */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          <h2 className="text-3xl font-bold mb-6">Product Description</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              {product.description || 'No description available for this product.'}
            </p>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold text-cyan-400 mb-2">Category</h3>
                <p className="text-gray-300 capitalize">{product.categorySlug?.replace(/-/g, ' ') || 'Uncategorized'}</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold text-cyan-400 mb-2">Price</h3>
                <p className="text-gray-300">{getInrPrice(product.price)}</p>
              </div>
            </div>
          </div> 
        </div> 

      </div>
    </div>
  );
};

export default ProductDetailPage;