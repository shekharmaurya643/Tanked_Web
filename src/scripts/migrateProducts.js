// src/scripts/migrateProducts.js
// Run this script once to migrate your existing products to Firestore
// Usage: Import this file and call migrateProducts() from your browser console or create a one-time admin page

import { batchAddProducts } from '../services/dbService';
import { productsData } from '../Data/productsData';

/**
 * Migrate existing products from productsData.js to Firestore
 * Make sure you're logged in as an admin user before running this
 */
export const migrateProducts = async () => {
  try {
    console.log('Starting product migration...');
    console.log(`Migrating ${productsData.length} products...`);
    
    await batchAddProducts(productsData);
    
    console.log('✅ Product migration completed successfully!');
    alert('Products migrated successfully!');
  } catch (error) {
    console.error('❌ Error migrating products:', error);
    alert('Error migrating products. Check console for details.');
  }
};

// If you want to run this directly in the browser console:
// 1. Import the function: import { migrateProducts } from './scripts/migrateProducts';
// 2. Call it: migrateProducts();

