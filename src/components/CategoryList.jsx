// import React from 'react';
// import { Link } from 'react-router-dom';

// // Data for your category cards/buttons
// const categories = [
//   { title: 'ALL', value: 'all', description: 'View all items in our store.', tags: ['Browse Everything'] },
//   { title: 'FISHES', value: 'fishes', description: 'Explore our vibrant collection of aquatic life.', tags: ['Saltwater & Freshwater'] },
//   { title: 'FISH FOOD', value: 'fish food', description: 'Premium nutrition for healthy aquatic life.', tags: ['Flakes, Pellets & More'] },
//   { title: 'PLANTS', value: 'plants', description: 'Live and artificial plants for aquascaping.', tags: ['Aquatic Flora'] },
//   { title: 'ACCESSORIES', value: 'accessories', description: 'Essential gear for your aquarium setup.', tags: ['Filters, Lights & Decor'] },
// ];

// // This component can now be a filter bar or the homepage section
// const CategoryList = ({ isFilterBar = false, activeCategory = '' }) => {
//   const colors = ['bg-gray-600', 'bg-blue-500', 'bg-purple-500', 'bg-purple-500', 'bg-purple-500'];

//   // Style for the filter bar buttons
//   if (isFilterBar) {
//     return (
//       <div className="flex justify-center flex-wrap gap-4 mb-12">
//         {categories.map((category) => {
//           const isActive = activeCategory.toLowerCase() === category.value.toLowerCase();
//           return (
//             <Link
//               key={category.value}
//               to={`/products/${category.value}`}
//               className={`px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
//                 isActive ? 'bg-cyan-600 shadow-cyan-500/30 shadow-lg' : 'bg-gray-700 hover:bg-gray-600'
//               }`}
//             >
//               {category.title}
//             </Link>
//           );
//         })}
//       </div>
//     );
//   }

//   // Original style for the homepage cards
//   return (
//     <section className="py-20 px-4">
//       <div className="container mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-4">Our Product Categories</h2>
//         <p className="text-gray-400 mb-12">Select a category to discover our curated selection of high-quality aquatic life and supplies.</p>
//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
//           {categories.map((cat, index) => (
//             <Link key={cat.value} to={`/products/${cat.value}`} className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/30 transition-shadow duration-300 flex flex-col justify-between">
//               <div>
//                 <div className={`w-full h-32 ${colors[index]} rounded-md flex items-center justify-center mb-4`}>
//                   <span className="text-white text-3xl font-bold">{cat.title === 'FISH FOOD' || cat.title === 'PLANTS' || cat.title === 'ACCESSORIES' ? 'ACC' : cat.title}</span>
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
//                 <p className="text-gray-400 text-sm mb-4">{cat.description}</p>
//               </div>
//               <div className="flex flex-wrap gap-2">
//                 {cat.tags.map(tag => (
//                   <span key={tag} className="text-xs bg-gray-700 text-cyan-300 px-3 py-1 rounded-full">{tag}</span>
//                 ))}
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CategoryList;


//After adding layout.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { featureCategories } from '../Data/featureCategories'; // 1. Import the data

// This component now imports its data
const CategoryList = ({ isFilterBar = false, activeCategory = '' }) => {

  // Style for the filter bar buttons
  if (isFilterBar) {
    return (
      <div className="flex justify-center flex-wrap gap-4 mb-12">
        {featureCategories.map((category) => { // 2. Use imported data
          const isActive = activeCategory.toLowerCase() === category.slug.toLowerCase();
          return (
            <Link
              key={category.slug}
              to={`/products/${category.slug}`} // 3. Use 'slug'
              className={`px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
                isActive ? 'bg-cyan-600 shadow-cyan-500/30 shadow-lg' : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              {category.title}
            </Link>
          );
        })}
      </div>
    );
  }

  // Original style for the homepage cards
  // This will now render on your new /products page
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
      {featureCategories.map((cat) => ( // 2. Use imported data
        <Link 
          key={cat.slug} 
          to={`/products/${cat.slug}`} // 3. Use 'slug'
          className="group flex flex-col p-6 rounded-xl bg-gray-800 border border-gray-700 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1"
        >
          {/* Colored Box */}
          <div className={`w-full h-32 rounded-lg flex items-center justify-center mb-5 ${cat.bgColor}`}>
            <h2 className="text-4xl font-bold text-white">
              {cat.shortTitle} {/* 4. Use 'shortTitle' from data */}
            </h2>
          </div>

          {/* Text Content */}
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
              {cat.title}
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              {cat.description}
            </p>
          </div>

          {/* Badge */}
          <div className="mt-auto">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gray-700 text-gray-300 group-hover:bg-blue-500 group-hover:text-white transition-colors">
              {cat.badge} {/* 5. Use 'badge' from data */}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;