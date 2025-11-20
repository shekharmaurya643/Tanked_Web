// // import { useState, useEffect } from 'react';
// // import tankedLogo from '../assets/TANKED LOGO.png';
// // import { Link } from 'react-router-dom';

// // const Navbar = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [isScrolled, setIsScrolled] = useState(false);
// //   const [isLoaded, setIsLoaded] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => setIsScrolled(window.scrollY > 10);
// //     setIsLoaded(true);
// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   const navItems = [
// //     { name: 'Home', href: '/' },
// //     { name: 'About', href: '/about' },
// //     { name: 'Services', href: '/services' },
// //     { name: 'Products', href: '/products' },
// //     { name: 'Contact', href: '/contact' },
// //   ];

// //   return (
// //     <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'backdrop-blur-xl bg-black/40 border-b border-white/10 shadow-lg' : 'bg-transparent'}`}>
// //       <div className="container-custom">
// //         <div className="flex items-center justify-between h-lg lg:h-20">
// //           <div className="flex-shrink-0">
// //             <Link to="/" className="flex items-center group">
// //               <div className={`w-12 h-12 rounded-lg overflow-hidden shadow-lg transition-all duration-700 transform ${isLoaded ? 'scale-100 opacity-100' : 'scale-75 opacity-0'} group-hover:scale-110`}>
// //                 <img src={tankedLogo} alt="Tanked Logo" className="w-full h-full object-cover" />
// //               </div>
// //             </Link>
// //           </div>

// //           {/* Desktop Navigation */}
// //           <div className="hidden lg:flex items-center space-x-8">
// //             {navItems.map((item, index) => {
// //               // Conditionally render the link
// //               const linkClasses = `font-medium transition-all duration-500 transform hover:scale-110 ${isScrolled ? 'text-white hover:text-blue-300' : 'text-white hover:text-blue-300 drop-shadow-lg'} ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`;
// //                linkStyle = { transitionDelay: `${index * 100}ms` };

// //               if (item.name === 'Products') {
// //                 // Render a standard <a> tag for the Products page to open in a new tab
// //                 return (
// //                   <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className={linkClasses} style={linkStyle}>
// //                     {item.name}
// //                   </a>
// //                 );
// //               } else {
// //                 // Render a <Link> component for all other pages for same-page navigation
// //                 return (
// //                   <Link key={item.name} to={item.href} className={linkClasses} style={linkStyle}>
// //                     {item.name}
// //                   </Link>
// //                 );
// //               }
// //             })}
// //           </div>

// //           <div className="hidden lg:block">
// //             <button claName={`px-6 py-3 rounded-lg font-semibold transition-all duration-500 transform hover:scale-105 ${isScrolled ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600/90 hover:bg-blue-700 text-white backdrop-blur-sm border border-blue-400/30'} ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
// //               Get Quote
// //             </button>
// //           </div>

// //           <div className="lg:hidden">
// //             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`p-2 rounded-lg transition-all duration-300 ${isScrolled ? 'text-white hover:text-blue-300 hover:bg-white/10' : 'text-white hover:text-blue-300 hover:bg-white/10 drop-shadow-lg'} ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '700ms' }}>
// //               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                 {isMenuOpen ? ( <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> ) : ( <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /> )}
// //               </svg>
// //             </button>
// //           </div>
// //         </div>

// //         {/* Mobile Navigation Dropdown */}
// //         {isMenuOpen && (
// //           <div className="lg:hidden backdrop-blur-xl bg-black/60 border-t border-white/10">
// //             <div className="px-2 pt-2 pb-3 space-y-1">
// //               {navItems.map((item, index) => {
// //                 const mobileLinkClasses = "block px-3 py-2 text-white hover:text-blue-300 hover:bg-white/10 rounded-md font-medium transition-all";
// //                 const mobileLinkStyle = { transitionDelay: `${index * 50}ms` };

// //                 if (item.name === 'Products') {
// //                   return (
// //                     <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className={mobileLinkClasses} style={mobileLinkStyle} onClick={() => setIsMenuOpen(false)}>
// //                       {item.name}
// //                     </a>
// //                   );
// //                 } else {
// //                   return (
// //                     <Link key={item.name} to={item.href} className={mobileLinkClasses} style={mobileLinkStyle} onClick={() => setIsMenuOpen(false)}>
// //                       {item.name}
// //                     </Link>
// //                   );
// //                 }
// //               })}
// //               <div className="pt-2 pb-4">
// //                 <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all">Get Quote</button>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;


// //new code 
// import { useState, useEffect } from 'react';
// import tankedLogo from '../assets/TANKED LOGO.png';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     setIsLoaded(true);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '/about' },
//     { name: 'Services', href: '/services' },
//     { name: 'Products', href: '/products' },
//     { name: 'Contact', href: '/contact' },
//   ];

//   return (
//     <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'backdrop-blur-xl bg-black/40 border-b border-white/10 shadow-lg' : 'bg-transparent'}`}>
//       <div className="container-custom">
//         <div className="flex items-center justify-between h-lg lg:h-20">
//           <div className="flex-shrink-0">
//             <Link to="/" className="flex items-center group">
//               <div className={`w-12 h-12 rounded-lg overflow-hidden shadow-lg transition-all duration-700 transform ${isLoaded ? 'scale-100 opacity-100' : 'scale-75 opacity-0'} group-hover:scale-110`}>
//                 <img src={tankedLogo} alt="Tanked Logo" className="w-full h-full object-cover" />
//               </div>
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-8">
//             {navItems.map((item, index) => {
//               const linkClasses = `font-medium transition-all duration-500 transform hover:scale-110 ${isScrolled ? 'text-white hover:text-blue-300' : 'text-white hover:text-blue-300 drop-shadow-lg'} ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`;
              
//               // This is the corrected line
//               const linkStyle = { transitionDelay: `${index * 100}ms` };

//               if (item.name === 'Products') {
//                 return (
//                   <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className={linkClasses} style={linkStyle}>
//                     {item.name}
//                   </a>
//                 );
//               } else {
//                 return (
//                   <Link key={item.name} to={item.href} className={linkClasses} style={linkStyle}>
//                     {item.name}
//                   </Link>
//                 );
//               }
//             })}
//           </div>

//           <div className="hidden lg:block">
//             <button className={`px-6 py-3 rounded-lg font-semibold transition-all duration-500 transform hover:scale-105 ${isScrolled ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600/90 hover:bg-blue-700 text-white backdrop-blur-sm border border-blue-400/30'} ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
//               Get Quote
//             </button>
//           </div>

//           <div className="lg:hidden">
//             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`p-2 rounded-lg transition-all duration-300 ${isScrolled ? 'text-white hover:text-blue-300 hover:bg-white/10' : 'text-white hover:text-blue-300 hover:bg-white/10 drop-shadow-lg'} ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '700ms' }}>
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 {isMenuOpen ? ( <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> ) : ( <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /> )}
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation Dropdown */}
//         {isMenuOpen && (
//           <div className="lg:hidden backdrop-blur-xl bg-black/60 border-t border-white/10">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {navItems.map((item, index) => {
//                 const mobileLinkClasses = "block px-3 py-2 text-white hover:text-blue-300 hover:bg-white/10 rounded-md font-medium transition-all";
//                 const mobileLinkStyle = { transitionDelay: `${index * 50}ms` };

//                 if (item.name === 'Products') {
//                   return (
//                     <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className={mobileLinkClasses} style={mobileLinkStyle} onClick={() => setIsMenuOpen(false)}>
//                       {item.name}
//                     </a>
//                   );
//                 } else {
//                   return (
//                     <Link key={item.name} to={item.href} className={mobileLinkClasses} style={mobileLinkStyle} onClick={() => setIsMenuOpen(false)}>
//                       {item.name}
//                     </Link>
//                   );
//                 }
//               })}
//               <div className="pt-2 pb-4">
//                 <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all">Get Quote</button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

//new code after authentication 
// import { useState, useEffect } from 'react';
// import tankedLogo from '../assets/TANKED LOGO.png';
// import { Link, useLocation } from 'react-router-dom'; // Import useLocation
// import { signOut } from "firebase/auth"; // Import signOut from Firebase
// import { auth } from '../firebase'; // Import your auth instance

// const Navbar = ({ user }) => { // Receive the user prop from App.jsx
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const location = useLocation(); // Hook to get the current page URL

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     setIsLoaded(true);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '/about' },
//     { name: 'Services', href: '/services' },
//     { name: 'Products', href: '/products' },
//     { name: 'Contact', href: '/contact' },
//   ];

//   const handleSignOut = async () => {
//     try {
//       await signOut(auth);
//       console.log("User signed out successfully.");
//     } catch (error) {
//       console.error("Error signing out: ", error);
//     }
//   };

//   return (
//     <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'backdrop-blur-xl bg-black/40 border-b border-white/10 shadow-lg' : 'bg-transparent'}`}>
//       <div className="container-custom">
//         <div className="flex items-center justify-between h-lg lg:h-20">
//           <div className="flex-shrink-0">
//             <Link to="/" className="flex items-center group">
//               <div className={`w-12 h-12 rounded-lg overflow-hidden shadow-lg transition-all duration-700 transform ${isLoaded ? 'scale-100 opacity-100' : 'scale-75 opacity-0'} group-hover:scale-110`}>
//                 <img src={tankedLogo} alt="Tanked Logo" className="w-full h-full object-cover" />
//               </div>
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-8">
//             {navItems.map((item, index) => {
//               const isActive = location.pathname === item.href;
//               const linkClasses = `font-medium transition-all duration-500 transform hover:scale-110 ${isScrolled ? 'text-white hover:text-blue-300' : 'text-white hover:text-blue-300 drop-shadow-lg'} ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} ${isActive ? 'text-cyan-400' : ''}`;
//               const linkStyle = { transitionDelay: `${index * 100}ms` };

//               if (item.name === 'Products') {
//                 return (
//                   <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className={linkClasses} style={linkStyle}>
//                     {item.name}
//                   </a>
//                 );
//               } else {
//                 return (
//                   <Link key={item.name} to={item.href} className={linkClasses} style={linkStyle}>
//                     {item.name}
//                   </Link>
//                 );
//               }
//             })}
//           </div>

//           {/* Desktop Auth Section */}
//           <div className="hidden lg:block">
//             {user ? (
//               // If user is logged in, show profile and logout
//               <div className="flex items-center gap-4">
//                 <img src={user.photoURL} alt={user.displayName} className="w-10 h-10 rounded-full border-2 border-cyan-400" />
//                 <button 
//                   onClick={handleSignOut}
//                   className="px-6 py-3 rounded-lg font-semibold bg-red-600 hover:bg-red-700 text-white transition-all duration-300 transform hover:scale-105"
//                 >
//                   Logout
//                 </button>
//               </div>
//             ) : (
//               // If user is logged out, show Login button
//               <Link
//                 to="/auth"
//                 className={`px-6 py-3 rounded-lg font-semibold transition-all duration-500 transform hover:scale-105 ${isScrolled ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600/90 hover:bg-blue-700 text-white backdrop-blur-sm border border-blue-400/30'} ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
//                 style={{ transitionDelay: '600ms' }}
//               >
//                 Login
//               </Link>
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="lg:hidden">
//             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`p-2 rounded-lg transition-all duration-300 ${isScrolled ? 'text-white hover:text-blue-300 hover:bg-white/10' : 'text-white hover:text-blue-300 hover:bg-white/10 drop-shadow-lg'} ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '700ms' }}>
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 {isMenuOpen ? ( <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> ) : ( <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /> )}
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation Dropdown */}
//         {isMenuOpen && (
//           <div className="lg:hidden backdrop-blur-xl bg-black/60 border-t border-white/10">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {navItems.map((item, index) => {
//                 const mobileLinkClasses = "block px-3 py-2 text-white hover:text-blue-300 hover:bg-white/10 rounded-md font-medium transition-all";
//                 const mobileLinkStyle = { transitionDelay: `${index * 50}ms` };

//                 if (item.name === 'Products') {
//                   return <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className={mobileLinkClasses} style={mobileLinkStyle} onClick={() => setIsMenuOpen(false)}>{item.name}</a>;
//                 } else {
//                   return <Link key={item.name} to={item.href} className={mobileLinkClasses} style={mobileLinkStyle} onClick={() => setIsMenuOpen(false)}>{item.name}</Link>;
//                 }
//               })}
//               <div className="pt-2 pb-4">
//                 {user ? (
//                   <button onClick={handleSignOut} className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all">Logout</button>
//                 ) : (
//                   <Link to="/auth" onClick={() => setIsMenuOpen(false)} className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all">Login</Link>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

//new code after adding cart options
// import { useState, useEffect } from 'react';
// import tankedLogo from '../assets/TANKED LOGO.png';
// import { Link, useLocation } from 'react-router-dom';
// import { signOut } from "firebase/auth";
// import { auth } from '../firebase';
// import { useCart } from '../context/CartContext'; // 1. Import the useCart hook

// const Navbar = ({ user }) => {
//   const { cartItems } = useCart(); // 2. Get cart items from the context
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     setIsLoaded(true);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // 3. Calculate total items in the cart
//   const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

//   const navItems = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '/about' },
//     { name: 'Services', href: '/services' },
//     { name: 'Products', href: '/products' },
//     { name: 'Contact', href: '/contact' },
//   ];

//   const handleSignOut = async () => {
//     try {
//       await signOut(auth);
//       console.log("User signed out successfully.");
//     } catch (error) {
//       console.error("Error signing out: ", error);
//     }
//   };

//   return (
//     <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'backdrop-blur-xl bg-black/40 border-b border-white/10 shadow-lg' : 'bg-transparent'}`}>
//       <div className="container-custom">
//         <div className="flex items-center justify-between h-lg lg:h-20">
//           <div className="flex-shrink-0">
//             <Link to="/" className="flex items-center group">
//               <div className={`w-12 h-12 rounded-lg overflow-hidden shadow-lg transition-all duration-700 transform ${isLoaded ? 'scale-100 opacity-100' : 'scale-75 opacity-0'} group-hover:scale-110`}>
//                 <img src={tankedLogo} alt="Tanked Logo" className="w-full h-full object-cover" />
//               </div>
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-8">
//             {navItems.map((item, index) => {
//               const isActive = location.pathname.startsWith(item.href) && item.href !== '/' || location.pathname === item.href;
//               const linkClasses = `font-medium transition-all duration-500 transform hover:scale-110 ${isScrolled ? 'text-white hover:text-blue-300' : 'text-white hover:text-blue-300 drop-shadow-lg'} ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} ${isActive ? 'text-cyan-400' : ''}`;
//               const linkStyle = { transitionDelay: `${index * 100}ms` };
//               return (
//                 <Link key={item.name} to={item.href} className={linkClasses} style={linkStyle}>
//                   {item.name}
//                 </Link>
//               );
//             })}
//           </div>

//           {/* Desktop Auth & Cart Section */}
//           <div className="hidden lg:flex items-center gap-6">
//             {/* 4. Desktop Cart Icon */}
//             <Link to="/cart" className="relative text-white hover:text-cyan-300 transition-colors">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//               </svg>
//               {totalItems > 0 && (
//                   <span className="absolute -top-2 -right-3 bg-cyan-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//                       {totalItems}
//                   </span>
//               )}
//             </Link>

//             {user ? (
//               <div className="flex items-center gap-4">
//                 <img src={user.photoURL} alt={user.displayName} className="w-10 h-10 rounded-full border-2 border-cyan-400" />
//                 <button 
//                   onClick={handleSignOut}
//                   className="px-6 py-3 rounded-lg font-semibold bg-red-600 hover:bg-red-700 text-white transition-all duration-300 transform hover:scale-105"
//                 >
//                   Logout
//                 </button>
//               </div>
//             ) : (
//               <Link
//                 to="/auth"
//                 className={`px-6 py-3 rounded-lg font-semibold transition-all duration-500 transform hover:scale-105 ${isScrolled ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600/90 hover:bg-blue-700 text-white backdrop-blur-sm border border-blue-400/30'} ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
//                 style={{ transitionDelay: '600ms' }}
//               >
//                 Login
//               </Link>
//             )}
//           </div>

//           {/* Mobile Menu Button & Cart */}
//           <div className="lg:hidden flex items-center gap-4">
//             {/* 5. Mobile Cart Icon */}
//             <Link to="/cart" className="relative text-white hover:text-cyan-300 transition-colors p-2">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//               </svg>
//               {totalItems > 0 && (
//                   <span className="absolute -top-1 -right-1 bg-cyan-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//                       {totalItems}
//                   </span>
//               )}
//             </Link>
//             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`p-2 rounded-lg transition-all duration-300 ${isScrolled ? 'text-white hover:text-blue-300 hover:bg-white/10' : 'text-white hover:text-blue-300 hover:bg-white/10 drop-shadow-lg'} ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '700ms' }}>
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 {isMenuOpen ? ( <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> ) : ( <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /> )}
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation Dropdown */}
//         {isMenuOpen && (
//           <div className="lg:hidden backdrop-blur-xl bg-black/60 border-t border-white/10">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {navItems.map((item, index) => {
//                 const mobileLinkClasses = "block px-3 py-2 text-white hover:text-blue-300 hover:bg-white/10 rounded-md font-medium transition-all";
//                 const mobileLinkStyle = { transitionDelay: `${index * 50}ms` };
//                 return <Link key={item.name} to={item.href} className={mobileLinkClasses} style={mobileLinkStyle} onClick={() => setIsMenuOpen(false)}>{item.name}</Link>;
//               })}
//               <div className="pt-2 pb-4">
//                 {user ? (
//                   <button onClick={() => { handleSignOut(); setIsMenuOpen(false); }} className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all">Logout</button>
//                 ) : (
//                   <Link to="/auth" onClick={() => setIsMenuOpen(false)} className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all">Login</Link>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import { useState, useEffect } from 'react';
// import tankedLogo from '../assets/TANKED LOGO.png';
// import { Link, NavLink } from 'react-router-dom';
// import { signOut } from "firebase/auth";
// import { auth } from '../firebase';
// import { useCart } from '../context/CartContext.jsx';

// const Navbar = ({ user }) => {
//   const { cartItems } = useCart();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     setIsLoaded(true);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

//   const navItems = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '/about' },
//     { name: 'Services', href: '/services' },
//     { name: 'Products', href: '/products' },
//     { name: 'Contact', href: '/contact' },
//   ];

//   const handleSignOut = async () => { /* ... (no change) ... */ };

//   // 1. --- THIS FUNCTION IS CHANGED ---
//   // We added padding (px-4 py-2) and rounding (rounded-lg) to all links.
//   const getNavLinkClasses = ({ isActive }) => {
//     // Base styles for all links (padding, rounding, font, animations)
//     const baseClasses = `font-medium transition-all duration-300 rounded-lg px-4 py-2 transform ${isScrolled ? 'text-white' : 'text-white drop-shadow-lg'} ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`;
    
//     if (isActive) {
//       // Active link: solid "box" background
//       return `${baseClasses} bg-cyan-600 text-white font-semibold shadow-lg`;
//     } else {
//       // Inactive link: transparent, with a hover effect
//       return `${baseClasses} hover:bg-white/10 hover:scale-110`;
//     }
//   };

//   // 2. --- THIS FUNCTION IS UPDATED ---
//   // We'll make the mobile active link a solid box too.
//   const getMobileNavLinkClasses = ({ isActive }) => {
//     const baseClasses = "block px-3 py-2 text-white hover:text-blue-300 hover:bg-white/10 rounded-md font-medium transition-all";
    
//     // Use a solid background for the active mobile link
//     return `${baseClasses} ${isActive ? 'bg-cyan-600 font-semibold' : ''}`;
//   };


//   return (
//     <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'backdrop-blur-xl bg-black/40 border-b border-white/10 shadow-lg' : 'bg-transparent'}`}>
//       <div className="container-custom">
//         <div className="flex items-center justify-between h-lg lg:h-20">
//           
//           {/* --- Logo (no change) --- */}
//           <div className="flex-shrink-0">
//             {/* ... (logo code) ... */}
//           </div>

//           {/* 3. --- DESKTOP NAVIGATION --- */}
//           {/* We decreased the spacing a bit to fit the new boxes */}
//           <div className="hidden lg:flex items-center space-x-4">
//             {navItems.map((item, index) => {
//               const linkStyle = { transitionDelay: `${index * 100}ms` };
//               return (
//                 <NavLink 
//                   key={item.name} 
//                   to={item.href}
//                     end={item.href === '/'} 
//                   className={getNavLinkClasses} // Use our new function
//                   style={linkStyle}
//                 >
//                   {item.name}
//                 </NavLink>
//               );
//             })}
//           </div>

//           {/* --- Desktop Auth & Cart (no change) --- */}
//           <div className="hidden lg:flex items-center gap-6">
//             {/* ... (cart & login buttons) ... */}
//           </div>

//           {/* --- Mobile Menu Button & Cart (no change) --- */}
//           <div className="lg:hidden flex items-center gap-4">
//             {/* ... (mobile cart & menu toggle) ... */}
//           </div>
//         </div>

//         {/* 4. --- MOBILE NAVIGATION --- */}
//         {isMenuOpen && (
//           <div className="lg:hidden backdrop-blur-xl bg-black/60 border-t border-white/10">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {navItems.map((item, index) => {
//                 const mobileLinkStyle = { transitionDelay: `${index * 50}ms` };
//            return (
//                   <NavLink 
//                     key={item.name} 
//                     to={item.href}
//                     end={item.href === '/'}
//                     className={getMobileNavLinkClasses} // Use our new mobile function
//                     style={mobileLinkStyle} 
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     {item.name}
//                   </NavLink>
//                 );
//               })}
//               <div className="pt-2 pb-4">
//                 {/* ... (mobile login/logout buttons) ... */}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useEffect } from 'react';
import tankedLogo from '../assets/TANKED LOGO.png';
import { Link, NavLink } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../firebase';
import { useCart } from '../context/CartContext.jsx';

const Navbar = ({ user }) => {
  const { cartItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    setIsLoaded(true);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalItems = cartItems.reduce((acc, item) => acc + (item.quantity || 0), 0);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully.");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const getNavLinkClasses = ({ isActive }) => {
    const baseClasses = `font-medium transition-all duration-300 rounded-lg px-4 py-2 transform ${isScrolled ? 'text-white' : 'text-white drop-shadow-lg'} ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`;
    
    if (isActive) {
      return `${baseClasses} bg-cyan-600 text-white font-semibold shadow-lg`;
    } else {
      return `${baseClasses} hover:bg-white/10 hover:scale-110`;
    }
  };

  const getMobileNavLinkClasses = ({ isActive }) => {
    const baseClasses = "block px-3 py-2 text-white hover:text-blue-300 hover:bg-white/10 rounded-md font-medium transition-all";
    return `${baseClasses} ${isActive ? 'bg-cyan-600 font-semibold' : ''}`;
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'backdrop-blur-xl bg-black/40 border-b border-white/10 shadow-lg' : 'bg-transparent'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-lg lg:h-20">
          
          {/* --- Logo --- */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center group">
              <div className={`w-12 h-12 rounded-lg overflow-hidden shadow-lg transition-all duration-700 transform ${isLoaded ? 'scale-100 opacity-100' : 'scale-75 opacity-0'} group-hover:scale-110`}>
                <img src={tankedLogo} alt="Tanked Logo" className="w-full h-full object-cover" />
              </div>
            </Link>
          </div>

          {/* --- Desktop Navigation --- */}
          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item, index) => {
              const linkStyle = { transitionDelay: `${index * 100}ms` };
              return (
                <NavLink 
                  key={item.name} 
                  to={item.href}
                  end={item.href === '/'} 
                  className={getNavLinkClasses}
                  style={linkStyle}
                >
                  {item.name}
                </NavLink>
              );
            })}
          </div>

          {/* --- Desktop Auth & Cart --- */}
          <div className="hidden lg:flex items-center gap-6">
            <Link to="/cart" className="relative text-white hover:text-cyan-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-3 bg-cyan-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {user ? (
              <div className="flex items-center gap-4">
                <img src={user.photoURL} alt={user.displayName} className="w-10 h-10 rounded-full border-2 border-cyan-400" />
                <button 
                  onClick={handleSignOut}
                  className="px-6 py-3 rounded-lg font-semibold bg-red-600 hover:bg-red-700 text-white transition-all duration-300 transform hover:scale-105"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-500 transform hover:scale-105 ${isScrolled ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600/90 hover:bg-blue-700 text-white backdrop-blur-sm border border-blue-400/30'} ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ transitionDelay: '600ms' }}
              >
                Login
              </Link>
            )}
          </div>

          {/* --- Mobile Menu Button & Cart --- */}
          <div className="lg:hidden flex items-center gap-4">
            <Link to="/cart" className="relative text-white hover:text-cyan-300 transition-colors p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-cyan-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`p-2 rounded-lg transition-all duration-300 ${isScrolled ? 'text-white hover:text-blue-300 hover:bg-white/10' : 'text-white hover:text-blue-300 hover:bg-white/10 drop-shadow-lg'} ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '700ms' }}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? ( <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> ) : ( <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /> )}
              </svg>
            </button>
          </div>
        </div>

        {/* --- Mobile Navigation Dropdown --- */}
        {isMenuOpen && (
          <div className="lg:hidden backdrop-blur-xl bg-black/60 border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => {
                const mobileLinkStyle = { transitionDelay: `${index * 50}ms` };
                return (
                  <NavLink 
                    key={item.name} 
                    to={item.href}
                    end={item.href === '/'}
                    className={getMobileNavLinkClasses}
                    style={mobileLinkStyle} 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                );
              })}
              <div className="pt-2 pb-4">
                {/* --- Mobile Auth --- */}
                {user ? (
                  <button onClick={() => { handleSignOut(); setIsMenuOpen(false); }} className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all">Logout</button>
                ) : (
                  <Link to="/auth" onClick={() => setIsMenuOpen(false)} className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all">Login</Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;