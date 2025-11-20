// import { useState, useEffect } from 'react'
// import heroBackground from '../assets/hero-background.jpg'
// import Bubbles from './Bubbles';

// const Hero = () => {
//   const [currentText, setCurrentText] = useState(0)
//   const [isLoaded, setIsLoaded] = useState(false)
//   const texts = [
//     "Custom Aquariums",
//     "Fish Keeping Supplies",
//     "Aquatic Design",
//     "Expert Consultation"
//   ]

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentText((prev) => (prev + 1) % texts.length)
//     }, 3000)
    
//     // Set loaded state for initial animations
//     setIsLoaded(true)
    
//     return () => clearInterval(interval)
//   }, [texts.length])

//   return (
//     <section id="home" className="relative overflow-hidden min-h-screen flex items-center justify-center pt-24 pb-20 " >
//       {/* Background Image */}
        
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-2000 ease-out "
//         style={{ backgroundImage: `url(${heroBackground})` }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-cyan-900/70 to-teal-900/80 transition-opacity duration-1500 ease-out"></div>
//       </div>
      
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce-gentle transition-all duration-2000 ease-out"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce-gentle transition-all duration-2000 ease-out" style={{ animationDelay: '1s' }}></div>
//         <div className="absolute top-40 left-40 w-60 h-60 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce-gentle transition-all duration-2000 ease-out" style={{ animationDelay: '2s' }}></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 container-custom text-center px-4">
//         <div className="max-w-4xl mx-auto">
//           {/* Badge */}
          

//           {/* Main Heading */}
//           <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl transition-all duration-1200 ease-out transform ${
//             isLoaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95 '
//           }`} style={{ transitionDelay: '200ms' }}>
//             We Create
//             <span className="block h-[82px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 transition-all duration-1000 ease-out">
//               {texts[currentText]}
//             </span>
//             for Your Space.
//           </h1>

//           {/* Subtitle */}
//           <p className={`text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg transition-all duration-1200 ease-out transform ${
//             isLoaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
//           }`} style={{ transitionDelay: '400ms' }}>
//             Transform your space with stunning custom aquariums and premium fish keeping supplies. 
//             We specialize in creating beautiful aquatic environments that bring life and tranquility to your home or business.
//           </p>

//           {/* CTA Buttons */}
//           <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1200 ease-out transform ${
//             isLoaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
//           }`} style={{ transitionDelay: '600ms' }}>
//             <button className="btn-primary text-lg px-8 py-4 transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl transform">
//               Design My Aquarium
//             </button>
//             <button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-xl">
//               View Products
//             </button>
//           </div>

//           {/* Stats */}
//           <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 transition-all duration-1200 ease-out transform ${
//             isLoaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
//           }`} style={{ transitionDelay: '800ms' }}>
//             {[
//               { number: '500+', label: 'Aquariums Built' },
//               { number: '1000+', label: 'Happy Customers' },
//               { number: '10+', label: 'Years Experience' },
//               { number: '24/7', label: 'Support' }
//             ].map((stat, index) => (
//               <div key={index} className="text-center transition-all duration-700 ease-out hover:scale-110 transform">
//                 <div className="text-3xl md:text-4xl font-bold text-cyan-300 mb-2 drop-shadow-lg transition-all duration-500 ease-out">
//                   {stat.number}
//                 </div>
//                 <div className="text-blue-100 font-medium drop-shadow-md transition-all duration-500 ease-out">
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out ${
//         isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//       }`} style={{ transitionDelay: '1000ms' }}>
//         <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center animate-bounce">
//           <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
//         </div>
//       </div>

//       {/* Custom CSS for smooth transitions */}
//       {/* <style jsx>{`
//         .duration-1200 {
//           transition-duration: 1200ms;
//         }
        
//         .duration-2000 {
//           transition-duration: 2000ms;
//         }
        
//         .ease-out {
//           transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
//         }
        
//         .animate-bounce-gentle {
//           animation: bounce-gentle 6s ease-in-out infinite;
//         }
        
//         @keyframes bounce-gentle {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//         }
//       `}</style> */}
//     </section>
//   )
// }

// export default Hero




import { useState, useEffect } from 'react';
import heroBackground from '../assets/hero-background.jpg';
import Bubbles from './Bubbles';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const texts = [
    "Custom Aquariums",
    "Fish Keeping Supplies",
    "Aquatic Design",
    "Expert Consultation"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    
    setIsLoaded(true);
    
    return () => clearInterval(interval);
  }, [texts.length]); // Added dependency

  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center justify-center pt-24 pb-20">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-2000 ease-out"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-cyan-900/70 to-teal-900/80 transition-opacity duration-1500 ease-out"></div>
      </div>
      
      {/* Animated background elements */}
      <Bubbles /> {/* Your bubbles animation */}
      <div className="absolute inset-0 overflow-hidden -z-10"> {/* Added -z-10 to put behind bubbles */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce-gentle"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-40 left-40 w-60 h-60 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce-gentle" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4">
        <div className="max-w-4xl mx-auto">

          {/* Main Heading */}
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl transition-all duration-1200 ease-out transform ${
            isLoaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95 '
          }`} style={{ transitionDelay: '200ms' }}>
            We Create
            <span className="block h-[82px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 transition-all duration-1000 ease-out">
              {texts[currentText]}
            </span>
            for Your Space.
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg transition-all duration-1200 ease-out transform ${
            isLoaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
          }`} style={{ transitionDelay: '400ms' }}>
            Transform your space with stunning custom aquariums and premium fish keeping supplies. 
            We specialize in creating beautiful aquatic environments that bring life and tranquility to your home or business.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1200 ease-out transform ${
            isLoaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
          }`} style={{ transitionDelay: '600ms' }}>
            
            {/* This link scrolls down to the <section id="contact"> */}
            <a 
              href="#contact" 
              className="btn-primary text-lg px-8 py-4 transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl transform"
            >
              Design My Aquarium
            </a>
            
            {/* This link navigates to your Products page */}
            <Link 
              to="/products" 
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-xl"
            >
              View Products
            </Link>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 transition-all duration-1200 ease-out transform ${
            isLoaded ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
          }`} style={{ transitionDelay: '800ms' }}>
            {[
              { number: '500+', label: 'Aquariums Built' },
              { number: '1000+', label: 'Happy Customers' },
              { number: '10+', label: 'Years Experience' },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <div key={index} className="text-center transition-all duration-700 ease-out hover:scale-110 transform">
                <div className="text-3xl md:text-4xl font-bold text-cyan-300 mb-2 drop-shadow-lg transition-all duration-500 ease-out">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium drop-shadow-md transition-all duration-500 ease-out">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`} style={{ transitionDelay: '1000ms' }}>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center animate-bounce">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero