/* eslint-disable no-irregular-whitespace */
// import { useState, useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';

// // Component Imports
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Services from './components/Services';
// import Features from './components/Features';
// import Testimonials from './components/Testimonials';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Products from './components/Products';

// // --- CORRECTION ---
// // 1. Define HomePage OUTSIDE of the App component.
// // This prevents it from being re-created on every render.
// const HomePage = () => {
//   return (
//     <>
//       <Hero />
//       <Features />
//       <Services />
//       <Testimonials />
//     </>
//   );
// };

// function App() {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-600 mx-auto mb-4"></div>
//           <h2 className="text-xl font-semibold text-secondary-700">Loading...</h2>
//         </div>
//       </div>
//     );
//   }

//   // The rest of your code is perfectly fine!
//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar />
//       <main>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;



// src/App.jsx (UPDATED)

// import { useState, useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';

// // Firebase imports for authentication
// import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
// import { auth } from './firebase'; // Import your initialized auth service

// // Component Imports
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Services from './components/Services';
// import Features from './components/Features';
// import Testimonials from './components/Testimonials';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Products from './components/Products';

// // You might also want a dedicated page for authentication, or integrate into Navbar
// import AuthPage from './components/AuthPage'; // We will create this!


// // HomePage component remains unchanged
// const HomePage = () => {
//   return (
//     <>
//       <Hero />
//       <Features />
//       <Services />
//       <Testimonials />
//     </>
//   );
// };

// function App() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [user, setUser] = useState(null); // <-- NEW: State to hold user info

//   // Effect for initial loading screen
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   // <-- NEW: Effect for Firebase Auth State
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       console.log("Firebase Auth State Changed: ", currentUser ? currentUser.displayName : "Logged Out");
//     });
//     return () => unsubscribe(); // Cleanup subscription
//   }, []);


//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-600 mx-auto mb-4"></div>
//           <h2 className="text-xl font-semibold text-secondary-700">Loading...</h2>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Pass user and auth functions to Navbar if it needs to show login status/buttons */}
//       <Navbar user={user} auth={auth} /> 
//       <main>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/contact" element={<Contact />} />
//           {/* NEW Route for Authentication Page */}
//           <Route path="/auth" element={<AuthPage user={user} auth={auth} />} /> 
//         </Routes>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;

// Adding water Loader effect 

// import { useState, useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';

// // Firebase imports
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from './firebase';

// // Components
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Services from './components/Services';
// import Features from './components/Features';
// import Testimonials from './components/Testimonials';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Products from './components/Products';
// import AuthPage from './components/AuthPage';
// import WaterLoader from './components/WaterLoader.jsx'; // ✅ new loader
// import CausticBackground from './components/CausticBackground';

// // HomePage component
// const HomePage = () => {
//   return (
//     <>
//       <CausticBackground />    // last added line giving errors
      
//       <Hero />
//       <Features />
//       <Services />
//       <Testimonials />
//     </>
//   );
// };

// function App() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [user, setUser] = useState(null);

//   // Loading animation on first load
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000); // show loader for 2 seconds
//     return () => clearTimeout(timer);
//   }, []);

//   // Firebase authentication state
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       console.log("Firebase Auth State Changed: ", currentUser ? currentUser.displayName : "Logged Out");
//     });
//     return () => unsubscribe();
//   }, []);

//   if (isLoading) {
//     return <WaterLoader />; // ✅ Show custom water loader
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar user={user} auth={auth} />
//       <main>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/auth" element={<AuthPage user={user} auth={auth} />} />
//         </Routes>
//       </main>
//       <Footer />
//     </div>
//   );
// }
// export default App;

//After adding Caustic animations
// import { useState, useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';

// // Firebase imports
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from './firebase';

// // Components
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Services from './components/Services';
// import Features from './components/Features';
// import Testimonials from './components/Testimonials';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Products from './components/Products';
// import AuthPage from './components/AuthPage';
// import WaterLoader from './components/WaterLoader.jsx';
// import CausticBackground from './components/CausticBackground';

// // HomePage component is now simpler
// const HomePage = () => {
//   return (
//     <>
//       {/* CausticBackground is removed from here */}
//       <Hero />
//       <Features />
//       <Services />
//       <Testimonials />
//     </>
//   );
// };

// function App() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [user, setUser] = useState(null);

//   // Loading animation on first load
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   // Firebase authentication state
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       console.log("Firebase Auth State Changed: ", currentUser ? currentUser.displayName : "Logged Out");
//     });
//     return () => unsubscribe();
//   }, []);

//   if (isLoading) {
//     return <WaterLoader />;
//   }

//   return (
//     // 1. Main container now has the dark background color
//     <div className="min-h-screen bg-[#0B1220]">
      
//       {/* 2. CausticBackground is placed here to act as a global background */}
//       <CausticBackground />
      
//       {/* 3. Your content sits on top. Navbar and Footer are outside 'main' for persistence. */}
//       <Navbar user={user} auth={auth} />
//       <main className="relative z-10 bg-transparent"> {/* Make main content transparent */}
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/auth" element={<AuthPage user={user} auth={auth} />} />
//         </Routes>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;





// after ADDing Splash Animation

// import { useState, useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';

// // Firebase imports
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from './firebase';

// // Components & Pages
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Services from './components/Services';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import AuthPage from './components/AuthPage';
// import WaterLoader from './components/WaterLoader.jsx';
// import FluidGradient from './components/FluidGradient.jsx';
// import ProductListPage from './pages/ProductListPage';
// import CartPage from './pages/CartPage'; // 1. Import CartPage
// import CategoryList from './components/CategoryList'; // 2. Import CategoryList

// // HomePage component now includes the category list for navigation
// const HomePage = () => {
//   return (
//     <>      
//       <Hero />
//       <CategoryList /> {/* 3. Added CategoryList to the homepage */}
//       <About />
//       <Services />
//       <Contact />
//     </>
//   );
// };

// function App() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [user, setUser] = useState(null);

//   // Loading animation on first load
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   // Firebase authentication state
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       console.log("Firebase Auth State Changed: ", currentUser ? currentUser.displayName : "Logged Out");
//     });
//     return () => unsubscribe();
//   }, []);

//   if (isLoading) {
//     return <WaterLoader />;
//   }

//   return (
//     <div className="min-h-screen bg-transparent"> 
//       <FluidGradient /> 
      
//       <Navbar user={user} />
//       <main className="relative z-10 bg-transparent">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/auth" element={<AuthPage user={user} />} />
          
//           {/* 4. Corrected and consolidated product routes */}
//           <Route path="/products/:categoryName" element={<ProductListPage />} />
          
//           {/* 5. Added the route for the shopping cart page */}
//           <Route path="/cart" element={<CartPage />} />
//         </Routes>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;




//---------------------------------------------------------------------------------------------------

// affter adding layout.jsx
// import { useState, useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';
// // Firebase imports
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from './firebase';
// // Components & Pages
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Services from './components/Services';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import AuthPage from './components/AuthPage';
// import WaterLoader from './components/WaterLoader.jsx';
// import FluidGradient from './components/FluidGradient.jsx';
// import ProductListPage from './pages/ProductListPage';
// import ProductDetailPage from './pages/ProductDetailPage';
// import Products from './components/Products.jsx';
// import CartPage from './pages/CartPage';
// import CategoryList from './components/CategoryList'; 
// import CausticBackground from './components/CausticBackground';
// import AdminPage from './pages/AdminPage';

// const HomePage = () => {
//  return (
//   <> 
//    <Hero />
//    < About />
//    <Services />
//    <Contact />
//   </>
//  );
// };

// const ProductCategoriesPage = () => {
//  return (
//     <section className="section-padding py-20">
        
//       <div className="container-custom mx-auto px-6">
//        <div className="text-center mb-12">
//          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
//            Our Product Categories
//          </h1>
//         <p className="text-lg text-gray-300 max-w-2xl mx-auto">
//            Select a category to discover our curated selection of high-quality aquatic life and supplies.
//           </p>
//         </div>
//         <CategoryList />
//       </div>
//     </section>
//   );
// };


// function App() {
//  const [isLoading, setIsLoading] = useState(true);
//  const [user, setUser] = useState(null);
//  useEffect(() => {
//   const timer = setTimeout(() => {
//    setIsLoading(false);
//   }, 2000);
//   return () => clearTimeout(timer);
//  }, []);
//  useEffect(() => {
//   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//    setUser(currentUser);
//    console.log("Firebase Auth State Changed: ", currentUser ? currentUser.displayName : "Logged Out");
//   });
//   return () => unsubscribe();
//  }, []);
//  if (isLoading) {
//   return <WaterLoader />;
//  }
//   return (
//     <div className="min-h-screen bg-transparent"> 
//       <FluidGradient /> 
      
//       <Navbar user={user} />
//       <main className="relative z-10 bg-transparent">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/auth" element={<AuthPage user={user} />} />
          
//           <Route path="/products" element={<ProductCategoriesPage />} />
//           <Route path="/products/:categoryName" element={<ProductListPage />} />
//           <Route path="/cart" element={<CartPage />} /> 
//           <Route path="/products/:categoryName/:productId" element={<ProductDetailPage />} />
//           <Route path="/admin" element={<AdminPage />} />

//         </Routes>
//       </main>
//       <Footer />
//     </div>
// );
// }
// export default App;
//------------------------------------------------------------------------------------------------------------





///////////////details
// import { useState, useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';

// // Firebase imports
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from './firebase';

// // Components & Pages
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Services from './components/Services';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import AuthPage from './components/AuthPage';
// import WaterLoader from './components/WaterLoader.jsx';
// import FluidGradient from './components/FluidGradient.jsx';
// import ProductListPage from './pages/ProductListPage';
// import CartPage from './pages/CartPage';
// import CategoryList from './components/CategoryList'; 
// import ProductDetailPage from './pages/ProductDetailPage'; // Import detail page

// // --- Page components (no animations) ---

// const HomePage = () => {
//  return (
//    <> 
//      <Hero />
//   ...    <About />
//      <Services />
//      <Contact />
//    </>
//  );
// };

// const ProductCategoriesPage = () => {
//  return (
//    <section className="section-padding py-20">
//      <div className="container-custom mx-auto px-6">
//        <div className="text-center mb-12">
//          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
//             Our Product Categories
//          </h1>
//          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
//             Select a category to discover our curated selection of high-quality aquatic life and supplies.
//          </p>
//        </div>
//        <CategoryList />
//      </div>
//    </section>
//   );
// };


// function App() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [user, setUser] = useState(null);

//   // ... (useEffect hooks) ...
//   useEffect(() => {
//    const timer = setTimeout(() => {
//     setIsLoading(false);
//    }, 2000);
//    return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//     setUser(currentUser);
//     console.log("Firebase Auth State Changed: ", currentUser ? currentUser.displayName : "Logged Out");
//    });
//    return () => unsubscribe();
//   }, []);

//   if (isLoading) {
//    return <WaterLoader />;
//   }

//   return (
//     <div className="min-h-screen bg-transparent"> 
//       <FluidGradient /> 
//       
//       <Navbar user={user} />
//       <main className="relative z-10 bg-transparent">
// x       <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/auth" element={<AuthPage user={user} />} />
//           
//           <Route path="/products" element={<ProductCategoriesPage />} />
// s         <Route path="/products/:categoryName" element={<ProductListPage />} />
//           <Route path="/cart" element={<CartPage />} /> 
            
//             {/* --- THIS IS THE CORRECTED ROUTE --- */}
//           <Route path="/products/:categoryName/:productId" element={<ProductDetailPage />} />

//         </Routes>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;

//after animation jsx


// import { useState, useEffect } from 'react';
// // 1. Import useLocation for page transition tracking
// import { Routes, Route, useLocation } from 'react-router-dom';
// // 2. Import AnimatePresence for exit animations
// import { AnimatePresence } from 'framer-motion';

// // Firebase imports
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from './firebase';

// // Components & Pages
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Services from './components/Services';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import AuthPage from './components/AuthPage';
// import WaterLoader from './components/WaterLoader.jsx';
// import FluidGradient from './components/FluidGradient.jsx';
// import ProductListPage from './pages/ProductListPage';
// import CartPage from './pages/CartPage';
// import CategoryList from './components/CategoryList'; 
// // 3. Import your new animation wrapper
// import AnimatedPage from './components/AnimatedPage'; 

// // --- 4. Wrap your page components in <AnimatedPage> ---

// const HomePage = () => {
//   return (
//     <AnimatedPage>
//       <> 
//         <Hero />
//         <About />
//         <Services />
//         <Contact />
//       </>
//     </AnimatedPage>
//   );
// };

// const ProductCategoriesPage = () => {
//   return (
//     <AnimatedPage>
//       <section className="section-padding py-20">
//         <div className="container-custom mx-auto px-6">
//           <div className="text-center mb-12">
//             <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
//               Our Product Categories
//             </h1>
//             <p className="text-lg text-gray-300 max-w-2xl mx-auto">
//               Select a category to discover our curated selection of high-quality aquatic life and supplies.
//             </p>
//           </div>
//           <CategoryList />
//         </div>
//       </section>
//     </AnimatedPage>
//   );
// };


// function App() {
//   const location = useLocation(); // 5. Get the current page location
//   const [isLoading, setIsLoading] = useState(true);
//   const [user, setUser] = useState(null);

//   // ... (Your useEffect hooks remain exactly the same) ...
//   useEffect(() => {
//    const timer = setTimeout(() => {
//      setIsLoading(false);
//    }, 2000);
//    return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//      setUser(currentUser);
//      console.log("Firebase Auth State Changed: ", currentUser ? currentUser.displayName : "Logged Out");
//    });
//    return () => unsubscribe();
//   }, []);

//   if (isLoading) {
//     return <WaterLoader />;
//   }

//   return (
//     <div className="min-h-screen bg-transparent"> 
//       <FluidGradient /> 
//       
//       <Navbar user={user} />
//       <main className="relative z-10 bg-transparent">
//         {/* 6. Wrap <Routes> in <AnimatePresence> */}
//         <AnimatePresence mode="wait">
//           <Routes location={location} key={location.pathname}>
//             <Route path="/" element={<HomePage />} />
//             {/* Note: You must also wrap these other page components in <AnimatedPage> */}
//             <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
//             <Route path="/services" element={<AnimatedPage><Services /></AnimatedPage>} />
//             <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
//             <Route path="/auth" element={<AnimatedPage><AuthPage user={user} /></AnimatedPage>} />
//             
//             <Route path="/products" element={<ProductCategoriesPage />} />
//             <Route path="/products/:categoryName" element={<AnimatedPage><ProductListPage /></AnimatedPage>} />
//             <Route path="/cart" element={<AnimatedPage><CartPage /></AnimatedPage>} /> 
//           </Routes>
//         </AnimatePresence>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;


import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// Firebase imports
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';

// Components & Pages
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AuthPage from './components/AuthPage';
import WaterLoader from './components/WaterLoader.jsx';
// FluidGradient is removed from the main return, which is correct.
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Products from './components/Products.jsx';
import CartPage from './pages/CartPage';
import CategoryList from './components/CategoryList'; 
import CausticBackground from './components/CausticBackground';
import AdminPage from './pages/AdminPage';

// ... (HomePage component remains the same) ...
const HomePage = () => {
 return (
  <> 
   <Hero />
   <About />
   <Services />
   <Contact />
  </>
 );
};

// --- THIS COMPONENT IS NOW UPDATED ---
const ProductCategoriesPage = () => {
 return (
    // 1. Replaced the static gradient with 'bg-black' and positioning classes
    <section className="section-padding py-20 relative overflow-hidden min-h-screen bg-gradient-to-b from-black to-blue-900">
      
      {/* 2. The live animation will now be visible on the black background */}
      <CausticBackground />

      {/* 3. Content sits on top (z-10) */}
      <div className="container-custom mx-auto px-6 relative z-10">
       <div className="text-center mb-12">
         <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
           Our Product Categories
         </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
           Select a category to discover our curated selection of high-quality aquatic life and supplies.
          </p>
        </div>
        <CategoryList />
      </div>
    </section>
  );
};


function App() {
 const [isLoading, setIsLoading] = useState(true);
 const [user, setUser] = useState(null);

 // ... (useEffect hooks are correct) ...
 useEffect(() => {
  const timer = setTimeout(() => {
   setIsLoading(false);
  }, 2000);
  return () => clearTimeout(timer);
 }, []);

 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
   setUser(currentUser);
   console.log("Firebase Auth State Changed: ", currentUser ? currentUser.displayName : "Logged Out");
  });
  return () => unsubscribe();
 }, []);

 if (isLoading) {
  return <WaterLoader />;
 }

  return (
    <div className="min-h-screen bg-transparent"> 
      <Navbar user={user} />
      <main className="relative z-10 bg-transparent">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<AuthPage user={user} />} />
          
          <Route path="/products" element={<ProductCategoriesPage />} />
          {/* 4. Removed the stray '.' typo from this line */}
          <Route path="/products/:categoryName" element={<ProductListPage />} />
          <Route path="/cart" element={<CartPage />} /> 
          <Route path="/products/:categoryName/:productId" element={<ProductDetailPage />} />
Here         <Route path="/admin" element={<AdminPage />} />

        </Routes>
      </main>
      <Footer />
    </div>
);
}

export default App;














// import { useState, useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';

// // Firebase imports
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from './firebase';

// // Components & Pages
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Services from './components/Services';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import AuthPage from './components/AuthPage';
// import WaterLoader from './components/WaterLoader.jsx';
// // import FluidGradient from './components/FluidGradient.jsx'; // <-- 1. REMOVED
// import ProductListPage from './pages/ProductListPage';
// import ProductDetailPage from './pages/ProductDetailPage';
// import Products from './components/Products.jsx';
// import CartPage from './pages/CartPage';
// import CategoryList from './components/CategoryList'; 
// import CausticBackground from './components/CausticBackground'; // This should be imported
// import AdminPage from './pages/AdminPage';

// // ... (HomePage component remains the same) ...
// const HomePage = () => {
//  return (
//   <> 
//    <Hero />
//    <About />
//    <Services />
//    <Contact />
//   </>
//  );
// };

// // --- THIS COMPONENT IS NOW UPDATED ---
// const ProductCategoriesPage = () => {
//  return (
//     // 2. Added positioning and height classes
//     <section className="section-padding py-20 min-h-screen bg-gradient-to-b from-black to-blue-900">
      
//       {/* 3. Added the background animation component */}
//       <CausticBackground />

//       {/* 4. Added relative z-10 to make content sit on top */}
//       <div className="container-custom mx-auto px-6 relative z-10">
//        <div className="text-center mb-12">
//          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
//            Our Product Categories
//          </h1>
//         <p className="text-lg text-gray-300 max-w-2xl mx-auto">
//            Select a category to discover our curated selection of high-quality aquatic life and supplies.
//           </p>
//         </div>
//         <CategoryList />
//       </div>
//     </section>
//   );
// };
// // --- END OF UPDATES ---

// function App() {
//  const [isLoading, setIsLoading] = useState(true);
//  const [user, setUser] = useState(null);

//  // ... (useEffect hooks are correct) ...
//  useEffect(() => {
//   const timer = setTimeout(() => {
//    setIsLoading(false);
//   }, 2000);
//   return () => clearTimeout(timer);
//  }, []);

//  useEffect(() => {
//   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//    setUser(currentUser);
//    console.log("Firebase Auth State Changed: ", currentUser ? currentUser.displayName : "Logged Out");
//   });
//   return () => unsubscribe();
//  }, []);

//  if (isLoading) {
//   return <WaterLoader />;
//  }

//   return (
//     <div className="min-h-screen bg-transparent"> 
//       {/* 5. <FluidGradient /> is REMOVED from here */}
//       
//       <Navbar user={user} />
//       <main className="relative z-10 bg-transparent">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/auth" element={<AuthPage user={user} />} />
//           
//           <Route path="/products" element={<ProductCategoriesPage />} />
// .         <Route path="/products/:categoryName" element={<ProductListPage />} />
//           <Route path="/cart" element={<CartPage />} /> 
//           <Route path="/products/:categoryName/:productId" element={<ProductDetailPage />} />
//           <Route path="/admin" element={<AdminPage />} />

//         </Routes>
//       </main>
//       <Footer />
//     </div>
// );
// }

// export default App;