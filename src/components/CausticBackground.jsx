// // // src/components/CausticBackground.jsx
// // import React, { useRef, useEffect } from 'react';
// // import * as THREE from 'three'; // Import Three.js
// // // Import our GLSL shader code
// // import vertexShader from './shaders/causticVertex.glsl';
// // import fragmentShader from './shaders/causticFragment.glsl';

// // const CausticBackground = () => {
// //   const mountRef = useRef(null);
// //   const mousePosition = useRef({ x: 0, y: 0 }); // Mouse position relative to canvas center

// //   useEffect(() => {
// //     // === 1. Scene Setup ===
// //     const scene = new THREE.Scene();
// //     const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10); // 2D camera
// //     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // Alpha for transparency

// //     // Set initial size
// //     const setSize = () => {
// //       renderer.setSize(window.innerWidth, window.innerHeight);
// //       renderer.setPixelRatio(window.devicePixelRatio);
// //     };
// //     setSize(); // Initial size set

// //     mountRef.current.appendChild(renderer.domElement);

// //     // === 2. Create Plane & Shader Material ===
// //     const geometry = new THREE.PlaneGeometry(2, 2); // Full-screen plane
// //     const material = new THREE.ShaderMaterial({
// //       vertexShader: vertexShader,
// //       fragmentShader: fragmentShader,
// //       uniforms: {
// //         u_time: { value: 0.0 },
// //         u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
// //         u_mouse: { value: new THREE.Vector2(0.0, 0.0) }, // Mouse position uniform
// //         u_opacity: { value: 0.8 }, // Adjust overall opacity
// //         u_lightColor: { value: new THREE.Color(0.2, 0.6, 0.8) }, // A light blue
// //         u_darkColor: { value: new THREE.Color(0.0, 0.1, 0.2) }  // A darker blue
// //       },
// //       transparent: true,
// //       blending: THREE.AdditiveBlending // Blending for brighter effects
// //     });
// //     const plane = new THREE.Mesh(geometry, material);
// //     scene.add(plane);
// //     camera.position.z = 1; // Position camera for 2D plane

// //     // === 3. Event Listeners ===
// //     const onMouseMove = (event) => {
// //       // Normalize mouse coordinates to -1 to 1, relative to center
// //       mousePosition.current.x = (event.clientX / window.innerWidth) * 2 - 1;
// //       mousePosition.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
// //       material.uniforms.u_mouse.value.set(mousePosition.current.x, mousePosition.current.y);
// //     };

// //     const onWindowResize = () => {
// //       setSize();
// //       material.uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
// //     };

// //     window.addEventListener('mousemove', onMouseMove);
// //     window.addEventListener('resize', onWindowResize);

// //     // === 4. Animation Loop ===
// //     const clock = new THREE.Clock();
// //     let animationFrameId;

// //     const animate = () => {
// //       animationFrameId = requestAnimationFrame(animate);
// //       material.uniforms.u_time.value = clock.getElapsedTime();
// //       renderer.render(scene, camera);
// //     };

// //     animate();

// //     // === 5. Cleanup ===
// //     return () => {
// //       cancelAnimationFrame(animationFrameId);
// //       window.removeEventListener('mousemove', onMouseMove);
// //       window.removeEventListener('resize', onWindowResize);
// //       if (mountRef.current) {
// //         mountRef.current.removeChild(renderer.domElement);
// //       }
// //       geometry.dispose();
// //       material.dispose();
// //       renderer.dispose();
// //     };
// //   }, []); // Empty dependency array means this runs once on mount

// //   return (
// //     <div
// //       ref={mountRef}
// //       style={{
// //         position: 'fixed',
// //         top: 0,
// //         left: 0,
// //         width: '100vw',
// //         height: '100vh',
// //         zIndex: -1, // Position behind content
// //         pointerEvents: 'none', // Allow clicks to pass through
// //         overflow: 'hidden', // Just in case
// //         background: 'transparent' // Main background will be handled by App.jsx or parent
// //       }}
// //     />
// //   );
// // };

// // export default CausticBackground;

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

// import SplashCursor from './components/SplashCursor'; // NEW: Import SplashCursor

// // HomePage component
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
//     <div className="min-h-screen bg-[#0B1220]"> {/* Main background color */}
      
//       {/* NEW: SplashCursor is placed here to be active across the whole app */}
//       <SplashCursor />
      
//       {/* CausticBackground is now completely removed as per your request */}
      
//       <Navbar user={user} auth={auth} />
//       <main className="relative z-10 bg-transparent"> {/* Content container, ensure it's transparent */}
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


import React, { useRef, useEffect } from 'react';

const CausticBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let frame = 0;

    const noise = () => {
      const data = new Array(width * height * 4);
      for (let i = 0; i < data.length; i += 4) {
        data[i] = data[i + 1] = data[i + 2] = Math.random() * 255;
        data[i + 3] = 255; // Alpha
      }
      return data;
    };

    const draw = () => {
      frame++;
      const time = frame * 0.01;

      // Ensure canvas matches viewport size
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;

      const imgData = ctx.createImageData(width, height);
      const data = imgData.data;

      // Simple caustic pattern (adjust multipliers for different effects)
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const index = (x + y * width) * 4;
          const value = Math.cos(x * 0.02 + time) + Math.sin(y * 0.03 + time) + Math.cos((x + y) * 0.015 + time);
          const brightness = (value + 3) / 6 * 15 + 10; // Adjust base brightness and contrast

          // Watery blue colors
          data[index] = brightness * 0.5; // Red
          data[index + 1] = brightness * 0.8; // Green
          data[index + 2] = brightness * 1.2; // Blue
          data[index + 3] = 255; // Alpha
        }
      }

      ctx.putImageData(imgData, 0, 0);
      requestAnimationFrame(draw);
    };

    let animationFrameId = requestAnimationFrame(draw);

    const handleResize = () => {
        // Debounce or throttle resize event if needed for performance
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: -1, // Ensure it's behind content
        opacity: 0.3 // Adjust opacity as needed
      }} 
    />
  );
};

export default CausticBackground;