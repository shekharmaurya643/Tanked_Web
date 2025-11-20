// src/pages/AdminPage.jsx
// Admin page to migrate products to Firestore
// Add this route to your App.jsx: <Route path="/admin" element={<AdminPage />} />

import React, { useState } from 'react';
import { batchAddProducts, getAllProducts } from '../services/dbService';
import { productsData } from '../Data/productsData';
import { auth } from '../firebase';

const AdminPage = () => {
  const [isMigrating, setIsMigrating] = useState(false);
  const [migrationStatus, setMigrationStatus] = useState('');
  const [error, setError] = useState('');
  const [checkStatus, setCheckStatus] = useState('');
  const [sampleProducts, setSampleProducts] = useState([]);

  const handleMigrateProducts = async () => {
    const user = auth.currentUser;
    
    if (!user) {
      alert('Please log in first to migrate products.');
      return;
    }

    setIsMigrating(true);
    setError('');
    setMigrationStatus('Starting migration...');

    try {
      console.log('Starting product migration...');
      console.log(`Migrating ${productsData.length} products...`);
      setMigrationStatus(`Migrating ${productsData.length} products...`);
      
      await batchAddProducts(productsData);
      
      setMigrationStatus(`✅ Successfully migrated ${productsData.length} products to Firestore!`);
      console.log('✅ Product migration completed successfully!');
    } catch (err) {
      console.error('❌ Error migrating products:', err);
      setError(`Error: ${err.message}`);
      setMigrationStatus('❌ Migration failed. Check console for details.');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleCheckProducts = async () => {
    try {
      setCheckStatus('Checking Firestore for products...');
      const products = await getAllProducts();
      setSampleProducts(products.slice(0, 5));
      setCheckStatus(`Found ${products.length} products in Firestore.`);
    } catch (err) {
      console.error('Error checking products:', err);
      setCheckStatus(`Error checking products: ${err.message}`);
    }
  };

  return (
    <div className="container mx-auto py-12 px-4 text-white" style={{ paddingTop: '120px', minHeight: '80vh' }}>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Admin Panel</h1>
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Product Migration</h2>
          <p className="text-gray-300 mb-6">
            This will migrate all {productsData.length} products from your local data file to Firestore database.
            Make sure you have Firestore set up before running this migration.
          </p>

          {/* Project ID display to avoid wrong project confusion */}
          <div className="mb-4 text-sm text-gray-400">
            Project ID in use: <span className="text-cyan-400 font-mono">{import.meta.env.VITE_FIREBASE_PROJECT_ID || 'N/A'}</span>
          </div>

          {migrationStatus && (
            <div className={`mb-4 p-4 rounded ${migrationStatus.includes('✅') ? 'bg-green-900 text-green-200' : migrationStatus.includes('❌') ? 'bg-red-900 text-red-200' : 'bg-blue-900 text-blue-200'}`}>
              {migrationStatus}
            </div>
          )}

          {error && (
            <div className="mb-4 p-4 rounded bg-red-900 text-red-200">
              {error}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleMigrateProducts}
              disabled={isMigrating}
              className="flex-1 bg-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-cyan-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isMigrating ? 'Migrating Products...' : 'Migrate Products to Firestore'}
            </button>

            <button
              onClick={handleCheckProducts}
              className="flex-1 bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
            >
              Check Firestore Products
            </button>
          </div>

          {/* Check status and sample list */}
          {checkStatus && (
            <div className="mt-4 p-4 rounded bg-gray-700 text-gray-100">
              {checkStatus}
              {sampleProducts.length > 0 && (
                <ul className="mt-3 list-disc list-inside space-y-1 text-sm">
                  {sampleProducts.map(p => (
                    <li key={p.id}>
                      <span className="text-cyan-300">{p.name}</span> <span className="text-gray-400">(id: {p.id})</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          <div className="mt-6 p-4 bg-gray-700 rounded">
            <h3 className="font-semibold mb-2">Migration Info:</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Total products to migrate: {productsData.length}</li>
              <li>• Products will be added to 'products' collection</li>
              <li>• Each product will get a unique Firestore document ID</li>
              <li>• Make sure you're logged in before migrating</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

