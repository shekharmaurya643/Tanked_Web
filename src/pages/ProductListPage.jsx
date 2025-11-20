// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { productsData } from '../Data/productsData.js';
// import ProductCard from '../components/ProductCard.jsx';

// const ProductListPage = () => {
//   // 1. If categoryName is missing from the URL, default it to 'all'
//   const { categoryName = 'all' } = useParams();

//   // Filter products based on the category
//   const filteredProducts =
//     categoryName.toLowerCase() === 'all'
//       ? productsData
//       : productsData.filter(
//           // Filter by categorySlug instead of category
//           (product) => product.categorySlug && product.categorySlug.toLowerCase() === categoryName.toLowerCase()
//         );

//   return (
//     <div className="container mx-auto py-12 px-4" style={{ paddingTop: '100px', minHeight: '70vh' }}>
//       <h1 className="text-4xl font-bold capitalize mb-8 text-center">
//         {categoryName}
//       </h1>
//       {filteredProducts.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {filteredProducts.map((product) => (
//             <ProductCard 
//               key={product.id} 
//               id={product.id}
//               name={product.name}
//               description={product.description}
//               price={product.price}
//               image={product.image}
//               categorySlug={product.categorySlug}
//             />
//           ))}
//         </div>
//       ) : (
//         <p className="text-center text-gray-400 text-xl">
//           No products found in this category.
//         </p>
//       )}
//     </div>
//   );
// };

// export default ProductListPage;

//HERE AFTER FLOATING CARD
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { getAllProducts, getProductsByCategory } from '../services/dbService';
// import ProductCard from '../components/ProductCard.jsx';
// import FloatingCard from '../components/FloatingCard.jsx';
// import FadeInOnScroll from '../components/FadeInOnScroll.jsx';

// const ProductListPage = () => {
//   const { categoryName = 'all' } = useParams();
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setIsLoading(true);
//       setError(null);
//       try {
//         let fetchedProducts;
//         if (categoryName.toLowerCase() === 'all') {
//           fetchedProducts = await getAllProducts();
//         } else {
//           fetchedProducts = await getProductsByCategory(categoryName.toLowerCase());
//         }
//         setProducts(fetchedProducts);
//       } catch (err) {
//         console.error('Error fetching products:', err);
//         setError('Failed to load products. Please try again later.');
//         setProducts([]);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [categoryName]);

//   if (isLoading) {
//     return (
//       <div className="container mx-auto py-12 px-4 text-white" style={{ paddingTop: '100px', minHeight: '70vh' }}>
//         <div className="flex items-center justify-center">
//           <div className="text-center">
//             <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-400 mx-auto mb-4"></div>
//             <p className="text-gray-400">Loading products...</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="container mx-auto py-12 px-4 text-white" style={{ paddingTop: '100px', minHeight: '70vh' }}>
//         <div className="text-center">
//           <p className="text-red-400 text-xl mb-4">{error}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto py-12 px-4 text-white" style={{ paddingTop: '100px', minHeight: '70vh' }}>
//       <h1 className="text-4xl font-bold capitalize mb-8 text-center">
//         {categoryName.replace(/-/g, ' ')}
//       </h1>
//       {products.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {products.map((product, index) => (
//             <FadeInOnScroll key={product.id} delay={index * 0.05}>
//               <FloatingCard delay={index * 0.15}>
//                 <ProductCard
//                   id={product.id}
//                   name={product.name}
//                   image={product.image}
//                   categorySlug={product.categorySlug}
//                 />
//               </FloatingCard>
//             </FadeInOnScroll>
//           ))}
//         </div>
//       ) : (
//         <p className="text-center text-gray-400 text-xl">
//           No products found in this category.
//         </p>
//       )}
//     </div>
//   );
// };

// export default ProductListPage;


import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { db } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import ProductCard from '../components/ProductCard.jsx';
import FloatingCard from '../components/FloatingCard.jsx';
import FadeInOnScroll from '../components/FadeInOnScroll.jsx';
import CategoryList from '../components/CategoryList.jsx';
import Bubbles from '../components/Bubbles.jsx';

const ProductListPage = () => {
  const { categoryName = 'all' } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const productsCollection = collection(db, 'products');
        let q;
        if (categoryName.toLowerCase() === 'all') {
          q = query(productsCollection);
        } else {
          q = query(productsCollection, where('categorySlug', '==', categoryName.toLowerCase()));
        }
        const querySnapshot = await getDocs(q);
        const fetchedProducts = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        
        setProducts(fetchedProducts);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products. Please try again later.');
        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [categoryName]);

  if (isLoading) {
    return (
      <div className="py-12 px-4 text-white min-h-screen bg-gradient-to-b from-black to-blue-900" style={{ paddingTop: '100px' }}>
        <div className="container mx-auto">
          <div className="flex items-center justify-center pt-20">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-400 mx-auto mb-4"></div>
              <p className="text-gray-400">Loading products...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-12 px-4 text-white min-h-screen bg-gradient-to-b from-black to-blue-900" style={{ paddingTop: '100px' }}>
        <div className="container mx-auto">
          <div className="text-center pt-20">
            <p className="text-red-400 text-xl mb-4">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-12 px-4 text-white min-h-screen bg-gradient-to-b from-gray-900 to-blue-800" style={{ paddingTop: '100px' }}>
      <Bubbles />
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold capitalize mb-8 text-center">
          {categoryName.replace(/-/g, ' ')}
        </h1>
        
        <CategoryList isFilterBar={true} activeCategory={categoryName} />

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
            {products.map((product, index) => (
              <FadeInOnScroll key={product.id} delay={index * 0.05}>
                <FloatingCard delay={index * 0.15}>
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    image={product.image}
                    categorySlug={product.categorySlug}
                    description={product.description}
                    price={product.price}
                    videoPreview={product.videoPreview} // This prop is correct
                  />
                </FloatingCard>
              </FadeInOnScroll>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 text-xl pt-16">
            No products found in this category.
          </p>
        )}
        
        <div className="text-center mt-16">
          <Link to="/products" className="inline-block px-6 py-3 rounded-lg bg-cyan-600 text-white font-semibold shadow-md hover:bg-cyan-700 transition-colors">
            ← View All Categories
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProductListPage;








// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom'; // 1. Added Link import
// import { db } from '../firebase'; // 2. Reverted to direct firebase import
// import { collection, getDocs, query, where } from 'firebase/firestore'; // 2. Reverted to direct firebase import
// import ProductCard from '../components/ProductCard.jsx';
// import FloatingCard from '../components/FloatingCard.jsx';
// import FadeInOnScroll from '../components/FadeInOnScroll.jsx';
// import CategoryList from '../components/CategoryList.jsx'; // 3. Added CategoryList import
// import Bubbles from '../components/Bubbles.jsx';

// const ProductListPage = () => {
//   const { categoryName = 'all' } = useParams();
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setIsLoading(true);
//       setError(null);
//       try {
//         // 4. Using the direct Firestore query we built
//         const productsCollection = collection(db, 'products');
//         let q;
//         if (categoryName.toLowerCase() === 'all') {
//           q = query(productsCollection);
//         } else {
//           q = query(productsCollection, where('categorySlug', '==', categoryName.toLowerCase()));
//         }
//         const querySnapshot = await getDocs(q);
//         const fetchedProducts = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        
//         setProducts(fetchedProducts);
//       } catch (err) {
//         console.error('Error fetching products:', err);
//         setError('Failed to load products. Please try again later.');
//         setProducts([]);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [categoryName]);

//   // 5. Added gradient and theme to loading/error states
//   if (isLoading) {
//     return (
//       <div className="py-12 px-4 text-white min-h-screen bg-gradient-to-b from-black to-blue-900" style={{ paddingTop: '100px' }}>
//         <div className="container mx-auto">
//           <div className="flex items-center justify-center pt-20">
//             <div className="text-center">
//               <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-400 mx-auto mb-4"></div>
//               <p className="text-gray-400">Loading products...</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="py-12 px-4 text-white min-h-screen bg-gradient-to-b from-black to-blue-900" style={{ paddingTop: '100px' }}>
//          <div className="container mx-auto">
//             <div className="text-center pt-20">
//               <p className="text-red-400 text-xl mb-4">{error}</p>
//             </div>
//          </div>
//       </div>
//     );
//   }

//   return (
//     // 6. Added gradient and changed <div> to <section>
//     <section className="py-12 px-4 text-white min-h-screen bg-gradient-to-b from-gray-900 to-blue-800" style={{ paddingTop: '100px' }}>
//       <Bubbles />
//       <div className="container mx-auto">
//         <h1 className="text-4xl font-bold capitalize mb-8 text-center">
//           {categoryName.replace(/-/g, ' ')}
//         </h1>
        
//         {/* 7. Added the CategoryList (filter bar) */}
//         <CategoryList isFilterBar={true} activeCategory={categoryName} />

//         {products.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
//             {products.map((product, index) => (
//               <FadeInOnScroll key={product.id} delay={index * 0.05}>
//                 <FloatingCard delay={index * 0.15}>
//                   <ProductCard
//                     id={product.id}
//                     name={product.name}
//                     image={product.image}
//                     categorySlug={product.categorySlug}
//                     // --- 8. ADDED MISSING PROPS ---
//                     description={product.description}
//                     price={product.price}
//                   />
//                 </FloatingCard>
//               </FadeInOnScroll>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-400 text-xl pt-16">
//             No products found in this category.
//           </p>
//         )}
        
//         {/* 9. Added "Back to Categories" link */}
//         <div className="text-center mt-16">
//           <Link to="/products" className="inline-block px-6 py-3 rounded-lg bg-cyan-600 text-white font-semibold shadow-md hover:bg-cyan-700 transition-colors">
//             ← View All Categories
//           </Link>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ProductListPage;
