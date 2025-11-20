// // src/Data/featureCategories.js (NEW VERSION)

// export const featureCategories = [
//   {
//     id: 'feat-all',
//     title: 'ALL',
//     slug: 'all',
//     description: 'View all items in our store.',
//     logoUrl: 'https://placehold.co/100x100/5A6C8C/FFFFFF?text=ALL', 
//     categoryName: 'All',
//     link: '/products/all', // <-- ADD THIS
//     bgColor: 'bg-[#5A6C8C]',
//     badgeText: 'Browse Everything',
//   },
//   {
//     id: 'feat-fishes',
//     title: 'FISHES',
//     slug: 'fishes',
//     description: 'Explore our vibrant collection of aquatic life.',
//     logoUrl: 'https://placehold.co/100x100/3498DB/FFFFFF?text=FISHES',
//     categoryName: 'Fishes',
//     link: '/products/fishes', // <-- ADD THIS
//     bgColor: 'bg-[#3498DB]',
//     badgeText: 'Saltwater & Freshwater', 
//   },
// // --- Fish Food Card ---
//   {
//     id: 'feat-accessories',
//     title: 'FISH FOOD',
//     slug: 'fish food',
//     description: 'Premium nutrition for healthy aquatic life.',
//     logoUrl: 'https://placehold.co/100x100/8E44AD/FFFFFF?text=ACC',
//     categoryName: 'Aquarium Accessories',
//     link: '/products/aquarium-accessories', // <-- ADD THIS (use a URL-friendly name)
//     bgColor: 'bg-[#8E44AD]',
//     badgeText: 'Flakes, Pellets & More',
//   },
//    // --- Plants Card ---
//   {
//     id: 'feat-accessories',
//     title: 'PLANTS',
//     slug: 'plants',
//     description: 'Live and artificial plants for aquascaping.',
//     logoUrl: 'https://placehold.co/100x100/8E44AD/FFFFFF?text=ACC',
//     categoryName: 'Aquarium Accessories',
//     link: '/products/aquarium-accessories', // <-- ADD THIS (use a URL-friendly name)
//     bgColor: 'bg-[#8E44AD]',
//     badgeText: 'Aquatic Flora',
//   },
//   // ...and so on for your other categories...
//   {
//     id: 'feat-accessories',
//     title: 'ACCESSORIES',
//     slug: 'accessories',
//     description: 'Essential gear for your aquarium setup.',
//     logoUrl: 'https://placehold.co/100x100/8E44AD/FFFFFF?text=ACC',
//     categoryName: 'Aquarium Accessories',
//     link: '/products/aquarium-accessories', // <-- ADD THIS (use a URL-friendly name)
//     bgColor: 'bg-[#8E44AD]',
//     badgeText: 'Filters, Lights & Decor',
//   },
// ];

//afteradding layout
// This data is based on your CategoryList.jsx and screenshot




// export const featureCategories = [
//   {
//     id: 'all',
//     slug: 'all', // URL-friendly version of 'value'
//     title: 'ALL',
//     shortTitle: 'ALL', // For the colored box
//     description: 'View all items in our store.',
//     badge: 'Browse Everything', // Was 'tags'
//     bgColor: 'bg-gray-600'
//   },
//   {
//     id: 'fishes',
//     slug: 'fishes',
//     title: 'FISHES',
//     shortTitle: 'FISHES',
//     description: 'Explore our vibrant collection of aquatic life.',
//     badge: 'Saltwater & Freshwater ',
//     bgColor: 'bg-blue-500'
//   },
//   {
//     id: 'fish-food',
//     slug: 'fish-food', // Changed from 'fish food' to be URL-safe
//     title: 'FISH FOOD',
//     shortTitle: 'ACC', // From your component logic
//     description: 'Premium nutrition for healthy aquatic life.',
//     badge: 'Flakes, Pellets & More',
//     bgColor: 'bg-purple-500'
//   },
//   {
//     id: 'plants',
//     slug: 'plants',
//     title: 'PLANTS',
//     shortTitle: 'ACC', // From your component logic
//     description: 'Live and artificial plants for aquascaping.',
//     badge: 'Aquatic Flora',
//     bgColor: 'bg-purple-500'
//   },
//   {
//     id: 'accessories',
//     slug: 'accessories',
//     title: 'ACCESSORIES',
//     shortTitle: 'ACC', // From your component logic
//     description: 'Essential gear for your aquarium setup.',
//     badge: 'Filters, Lights & Decor',
//     bgColor: 'bg-purple-500'
//   },

//   {
//     id: 'shrimps',
//     slug: 'shrimp',
//     title: 'Shrimp',
//     shortTitle: 'shrimp',
//     description: 'Explore our vibrant collection of aquatic life.',
//     badge: 'Saltwater & Freshwater ',
//     bgColor: 'bg-blue-500'
//   },

//   {
//   id: 'sands',
//   slug: 'Sand & Substrates',
//   title: 'Sand & Substrates',
//   shortTitle: 'SANDS',
//   description: 'Natural sands and substrates for aquariums and terrariums.',
//   badge: 'Aquascaping Base',
//   bgColor: 'bg-yellow-700' // Sandy color
//  },

// ];



// after adding new categories
export const featureCategories = [
  {
    id: 'all',
    slug: 'all',
    title: 'ALL',
    shortTitle: 'ALL',
    description: 'View all items in our store.',
    badge: 'Browse Everything',
    bgColor: 'bg-gray-600'
  },
  {
    id: 'fishes',
    slug: 'fishes',
    title: 'FISHES',
    shortTitle: 'FISHES',
    description: 'Explore our vibrant collection of aquatic life.',
    badge: 'Freshwater & Marine',
    bgColor: 'bg-blue-500'
  },
  {
    id: 'plants',
    slug: 'plants',
    title: 'PLANTS',
    shortTitle: 'PLANTS',
    description: 'Live aquatic plants to beautify your tank.',
    badge: 'Aquascaping Flora',
    bgColor: 'bg-green-600'
  },
  {
    id: 'shrimp',
    slug: 'shrimp',
    title: 'SHRIMP',
    shortTitle: 'SHRIMP',
    description: 'A variety of colorful freshwater shrimp.',
    badge: 'Clean-up Crew',
    bgColor: 'bg-red-500'
  },
  {
    id: 'snails',
    slug: 'snails',
    title: 'SNAILS',
    shortTitle: 'SNAILS',
    description: 'Helpful snails for algae and pest control.',
    badge: 'Clean-up Crew',
    bgColor: 'bg-indigo-500'
  },
  {
    id: 'fish-food',
    slug: 'fish-food',
    title: 'FISH FOOD',
    shortTitle: 'FOOD',
    description: 'Premium nutrition for healthy aquatic life.',
    badge: 'Flakes, Pellets & More',
    bgColor: 'bg-purple-500'
  },
  {
    id: 'turtle-food',
    slug: 'turtle-food',
    title: 'TURTLE FOOD',
    shortTitle: 'FOOD',
    description: 'Specialty food for your aquatic turtles.',
    badge: 'Pellets & Sticks',
    bgColor: 'bg-purple-600'
  },
  {
    id: 'sand-and-substrates',
    slug: 'sand-and-substrates',
    title: 'SUBSTRATES & DECOR',
    shortTitle: 'SANDS',
    description: 'Natural sands and soils for your aquarium.',
    badge: 'Aquascaping Base',
    bgColor: 'bg-yellow-700'
  },
  // {
  //   id: 'decor',
  //   slug: 'decor',
  //   title: 'DECOR',
  //   shortTitle: 'DECOR',
  //   description: 'Rocks, wood, and floating decor for your tank.',
  //   badge: 'Hardscape',
  //   bgColor: 'bg-gray-400'
  // },
  {
    id: 'accessories',
    slug: 'accessories',
    title: 'ACCESSORIES',
    shortTitle: 'GEAR',
    description: 'Essential gear for your aquarium setup.',
    badge: 'Filters, Lights & Kits',
    bgColor: 'bg-teal-500'
  },
];