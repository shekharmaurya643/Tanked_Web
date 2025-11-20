// // // src/components/CategoryCard.jsx

// // import React from 'react';

// // const CategoryCard = ({ name, description, image, href }) => {
// //   return (
// //     // The <a> tag makes the whole card a clickable link
// //     // target="_blank" opens the link in a new tab
// //     <a
// //       href={href}
// //       target="_blank"
// //       rel="noopener noreferrer"
// //       className="group relative block h-64 w-full overflow-hidden rounded-xl text-white shadow-lg transition-transform duration-300 hover:scale-105"
// //     >
// //       {/* Background Image */}
// //       <img
// //         src={image}
// //         alt={`${name} category`}
// //         className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
// //       />

// //       {/* Dark Overlay for text readability */}
// //       <div className="absolute inset-0 bg-black/60"></div>

// //       {/* Text Content */}
// //       <div className="relative flex h-full flex-col justify-end p-6">
// //         <h3 className="text-2xl font-bold">{name}</h3>
// //         <p className="mt-2 text-sm text-white/80">{description}</p>
// //       </div>
// //     </a>
// //   );
// // };

// // export default CategoryCard;

// // here is new code
// import React from 'react';
// import { Link } from 'react-router-dom'; // 1. Import the Link component

// const CategoryCard = ({ name, description, image, href }) => { // href will be passed to 'to'
//   return (
//     // 2. Replace <a> tag with <Link> and href with 'to'
//     <Link
//       to={href} 
//       className="group relative block h-64 w-full overflow-hidden rounded-xl text-white shadow-lg transition-transform duration-300 hover:scale-105"
//     >
//       {/* Background Image */}
//       <img
//         src={image}
//         alt={`${name} category`}
//         className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
//       />

//       {/* Dark Overlay for text readability */}
//       <div className="absolute inset-0 bg-black/60"></div>

//       {/* Text Content */}
//       <div className="relative flex h-full flex-col justify-end p-6">
//         <h3 className="text-2xl font-bold">{name}</h3>
//         <p className="mt-2 text-sm text-white/80">{description}</p>
//       </div>
//     </Link>
//   );
// };

// export default CategoryCard;

import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ link, shortTitle, title, description, badge, bgColor }) => {
  return (
    <Link 
      to={link} 
      // --- These glassmorphism classes are correct ---
      className="group flex flex-col p-6 rounded-xl 
                 bg-white/10 
                 border border-white/20 
                 backdrop-blur-lg 
                 hover:border-cyan-400 
                 transition-all duration-300 shadow-lg 
                 hover:shadow-cyan-500/20 transform hover:-translate-y-1"
    >
      {/* This opacity is also correct */}
      <div className={`w-full h-32 rounded-lg flex items-center justify-center mb-5 ${bgColor} bg-opacity-70`}>
        <h2 className="text-4xl font-bold text-white">
          {shortTitle}
        </h2>
      </div>

      {/* Text Content */}
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        
        {/* --- 1. FIXED TEXT COLOR --- */}
        <p className="text-sm text-gray-300 mb-4">
          {description}
        </p>
      </div>

      {/* Badge */}
      <div className="mt-auto">
        
        {/* --- 2. FIXED TEXT COLOR --- */}
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white/10 text-gray-200 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
          {badge}
        </span>
      </div>
    </Link>
  );
};

export default CategoryCard;







// import React from 'react';
// import { Link } from 'react-router-dom';

// const CategoryCard = ({ link, shortTitle, title, description, badge, bgColor }) => {
//   return (
//     <Link 
//       to={link} 
//       // --- 1. APPLIED GLASSMORPHISM CLASSES ---
//       className="group flex flex-col p-6 rounded-xl 
//                  bg-white/10 
//                  border border-white/20 
//                  backdrop-blur-lg 
//                  hover:border-cyan-400 
//                  transition-all duration-300 shadow-lg 
//                  hover:shadow-cyan-500/20 transform hover:-translate-y-1"
//     >
//       {/* 2. Added opacity to the colored box to help it blend */}
//       <div className={`w-full h-32 rounded-lg flex items-center justify-center mb-5 ${bgColor} bg-opacity-70`}>
//         <h2 className="text-4xl font-bold text-white">
//           {shortTitle}
//         </h2>
//       </div>

//       {/* Text Content */}
//       <div className="flex-grow">
//         <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
//           {title}
//         </h3>
//         {/* 3. Made description text lighter to look better on glass */}
//         <p className="text-sm text-blue-800 mb-4">
//           {description}
//         </p>
//       </div>

//       {/* Badge */}
//       <div className="mt-auto">
//         {/* 4. Updated badge styles to match glass effect */}
//         <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white/10 text-blue-800 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
//           {badge}
//         </span>
//       </div>
//     </Link>
//   );
// };

// export default CategoryCard;