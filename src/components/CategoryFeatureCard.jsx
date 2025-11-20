// // src/components/CategoryFeatureCard.jsx (NEW VERSION)

// import React from 'react';
// import { Link } from 'react-router-dom'; // Make sure you have react-router-dom installed

// const CategoryFeatureCard = ({ title, description, logoUrl, link, bgColor, badgeText }) => {
//   return (
//     // Reverted to a Link for navigation
//     <Link 
//       to={link} 
//       className="group flex flex-col items-center p-6 rounded-lg text-center 
//                  bg-white/5 border border-white/10 backdrop-blur-md 
//                  shadow-lg hover:shadow-xl transition-all duration-300 
//                  hover:scale-105 hover:border-cyan-400"
//     >
//       <div className={`w-32 h-32 flex items-center justify-center rounded-lg overflow-hidden border border-white/20 mb-4 transition-all duration-300 group-hover:shadow-lg ${bgColor}`}>
//         <img src={logoUrl} alt={`${title} logo`} className="w-full h-full object-contain" />
//       </div>

//       <h3 className="text-xl md:text-2xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-cyan-300">
//         {title}
//       </h3>

//       <p className="text-sm text-blue-100 mb-3">
//         {description}
//       </p>

//       {badgeText && (
//         <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white/10 text-cyan-200 border border-cyan-400/30">
//           {badgeText}
//         </span>
//       )}
//     </Link>
//   );
// };

// export default CategoryFeatureCard;

import React from 'react';
import { Link } from 'react-router-dom'; // 1. Make sure Link is imported

const CategoryFeatureCard = ({ title, description, logoUrl, link, bgColor, badgeText }) => {
  return (
    // 2. Replace the <a> tag with <Link> and use the 'to' prop instead of 'href'
    <Link 
      to={link} 
      className="group flex flex-col items-center p-6 rounded-lg text-center 
                 bg-white/5 border border-white/10 backdrop-blur-md 
                 shadow-lg hover:shadow-xl transition-all duration-300 
                 hover:scale-105 hover:border-cyan-400"
    >
      <div className={`w-32 h-32 flex items-center justify-center rounded-lg overflow-hidden border border-white/20 mb-4 transition-all duration-300 group-hover:shadow-lg ${bgColor}`}>
        <img src={logoUrl} alt={`${title} logo`} className="w-full h-full object-contain" />
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-cyan-300">
        {title}
      </h3>

      <p className="text-sm text-blue-100 mb-3">
        {description}
      </p>

      {badgeText && (
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white/10 text-cyan-200 border border-cyan-400/30">
          {badgeText}
        </span>
      )}
    </Link>
  );
};

export default CategoryFeatureCard;