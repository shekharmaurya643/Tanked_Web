// // src/components/WaterLoader.jsx
// const WaterLoader = () => {
//   return (
//     <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-cyan-600">
//       {/* Water Ripple Circles */}
//       <div className="relative w-32 h-32">
//         <div className="absolute inset-0 bg-blue-400 rounded-full opacity-75 animate-ping"></div>
//         <div className="absolute inset-4 bg-blue-600 rounded-full opacity-75 animate-bounce"></div>
//         <div className="absolute inset-8 bg-cyan-400 rounded-full animate-pulse"></div>
//       </div>
//       <p className="text-white mt-40 text-lg font-semibold">Loading...</p>
//     </div>
//   );
// };

// export default WaterLoader;


// import "./WaterLoader.css";

// const WaterLoader = () => {
//   return (
//     <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-cyan-600 relative overflow-hidden">
      
//       {/* Water Droplets Effect */}
//       <div className="droplets-container"></div>
      
//       {/* Loading Text */}
//       <p className="floating-text text-white text-2xl font-bold z-10 relative">
//         Loading...
//       </p>

//       {/* Waves */}
//       <div className="wave wave1"></div>
//       <div className="wave wave2"></div>
//       <div className="wave wave3"></div>
//       <div className="wave wave4"></div>
      
//     </div>
//   );
// };

// export default WaterLoader;


import React, { useEffect, useState } from 'react';
import "./WaterLoader.css";

const WaterLoader = ({ onLoaded }) => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Simulate a loading process
    const timer = setTimeout(() => {
      setShowLoader(false);
      if (onLoaded) {
        onLoaded(); // Callback to parent when loading is complete
      }
    }, 4000); // Loader displays for 4 seconds

    return () => clearTimeout(timer);
  }, [onLoaded]);

  if (!showLoader) {
    return null; // Don't render the loader once loading is complete
  }

  return (
    <div className="water-loader-container">
      
      {/* Water Droplets Effect */}
      {/* We'll use CSS to generate multiple droplets from this single div */}
      <div className="droplets-effect"></div> 
      
      {/* Loading Text */}
      <p className="loading-text">
        Loading...
      </p>

      {/* Waves at the bottom */}
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div>
      
    </div>
  );
};

export default WaterLoader;