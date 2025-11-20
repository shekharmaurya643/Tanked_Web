// // src/components/Products.jsx (NEW, SIMPLIFIED VERSION)

// import { featureCategories } from '../Data/featureCategories.js';
// // import CategoryFeatureCard from './CategoryFeatureCard';

// const Products = () => {
//   return (
//     <section id="products" className="section-padding theme-dark-gradient">
//       <div className="container-custom">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl lg:text-5xl font-bold text-white pt-6">Our Product Categories</h2>
//           <p className="text-lg text-secondary-200 mt-4">
//             Select a category to discover our curated selection of high-quality aquatic life and supplies.
//           </p>
//         </div>

//         {/* This grid now only contains navigation cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16 justify-center">
//           {featureCategories.map((feature) => (
//             <CategoryFeatureCard
//               key={feature.id}
//               title={feature.title}
//               description={feature.description}
//               logoUrl={feature.logoUrl}
//               link={feature.link} // Pass the link prop
//               bgColor={feature.bgColor}
//               badgeText={feature.badgeText}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Products;



//neww code 
// src/components/Products.jsx (CORRECTED VERSION)

import { featureCategories } from '../Data/featureCategories.js';
import CategoryFeatureCard from './CategoryFeatureCard';
import Bubbles from './Bubbles.jsx';

const Products = () => {
  return (
    <section className="section-padding py-20 min-h-screen bg-gradient-to-b from-black to-blue-900">
      <Bubbles />
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white"> Our Product Categories </h2>
          <p className="text-lg text-secondary-200 mt-4">
             Select a category to discover our curated selection of high-quality aquatic life and supplies.
          </p>
        </div>

        {/* This grid now only contains navigation cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16 justify-center">
          {featureCategories.map((feature) => (
            <CategoryFeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              logoUrl={feature.logoUrl}
              link={feature.link} // Ensure your featureCategories data has a 'link' property
              bgColor={feature.bgColor}
              badgeText={feature.badgeText}
            />
          ))}
        </div>
      </div>
    </section> 
  );
};

export default Products;