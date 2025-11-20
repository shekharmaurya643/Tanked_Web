// src/services/dbService.js
// Database service for Firestore operations

// import { 
//   collection, 
//   doc, 
//   getDoc, 
//   getDocs, 
//   setDoc, 
//   addDoc, 
//   updateDoc, 
//   deleteDoc, 
//   query, 
//   where, 
//   orderBy,
//   serverTimestamp,
//   onSnapshot 
// } from 'firebase/firestore';
// import { db } from '../firebase';

// // ==================== PRODUCTS ====================

// /**
//  * Get all products from Firestore
//  * @returns {Promise<Array>} Array of products
//  */
// export const getAllProducts = async () => {
//   try {
//     const productsRef = collection(db, 'products');
//     const snapshot = await getDocs(productsRef);
//     const products = snapshot.docs.map(doc => ({
//       id: doc.id,
//       ...doc.data()
//     }));
//     return products;
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     throw error;
//   }
// };

// /**
//  * Get products by category
//  * @param {string} categorySlug - Category slug to filter by
//  * @returns {Promise<Array>} Array of products in the category
//  */
// export const getProductsByCategory = async (categorySlug) => {
//   try {
//     const productsRef = collection(db, 'products');
//     const q = query(productsRef, where('categorySlug', '==', categorySlug));
//     const snapshot = await getDocs(q);
//     const products = snapshot.docs.map(doc => ({
//       id: doc.id,
//       ...doc.data()
//     }));
//     return products;
//   } catch (error) {
//     console.error('Error fetching products by category:', error);
//     throw error;
//   }
// };

// /**
//  * Get a single product by ID
//  * @param {string} productId - Product ID
//  * @returns {Promise<Object|null>} Product object or null if not found
//  */
// export const getProductById = async (productId) => {
//   try {
//     const productRef = doc(db, 'products', productId);
//     const productSnap = await getDoc(productRef);
    
//     if (productSnap.exists()) {
//       return { id: productSnap.id, ...productSnap.data() };
//     } else {
//       console.log('No such product found!');
//       return null;
//     }
//   } catch (error) {
//     console.error('Error fetching product:', error);
//     throw error;
//   }
// };

// /**
//  * Add a new product (Admin function)
//  * @param {Object} productData - Product data object
//  * @returns {Promise<string>} Document ID of the created product
//  */
// export const addProduct = async (productData) => {
//   try {
//     const productsRef = collection(db, 'products');
//     const docRef = await addDoc(productsRef, {
//       ...productData,
//       createdAt: serverTimestamp(),
//       updatedAt: serverTimestamp()
//     });
//     return docRef.id;
//   } catch (error) {
//     console.error('Error adding product:', error);
//     throw error;
//   }
// };

// /**
//  * Update an existing product (Admin function)
//  * @param {string} productId - Product ID
//  * @param {Object} productData - Updated product data
//  */
// export const updateProduct = async (productId, productData) => {
//   try {
//     const productRef = doc(db, 'products', productId);
//     await updateDoc(productRef, {
//       ...productData,
//       updatedAt: serverTimestamp()
//     });
//   } catch (error) {
//     console.error('Error updating product:', error);
//     throw error;
//   }
// };

// /**
//  * Delete a product (Admin function)
//  * @param {string} productId - Product ID
//  */
// export const deleteProduct = async (productId) => {
//   try {
//     const productRef = doc(db, 'products', productId);
//     await deleteDoc(productRef);
//   } catch (error) {
//     console.error('Error deleting product:', error);
//     throw error;
//   }
// };

// /**
//  * Batch upload products (for initial setup)
//  * @param {Array} products - Array of product objects
//  */
// export const batchAddProducts = async (products) => {
//   try {
//     // Remove 'id' field from products as Firestore will generate its own IDs
//     const productsWithoutId = products.map(({ id, ...product }) => product);
//     const promises = productsWithoutId.map(product => addProduct(product));
//     await Promise.all(promises);
//     console.log(`Successfully added ${products.length} products`);
//   } catch (error) {
//     console.error('Error batch adding products:', error);
//     throw error;
//   }
// };

// // ==================== CART ====================

// /**
//  * Get user's cart from Firestore
//  * @param {string} userId - User ID
//  * @returns {Promise<Array>} Array of cart items
//  */
// export const getUserCart = async (userId) => {
//   try {
//     const cartRef = doc(db, 'carts', userId);
//     const cartSnap = await getDoc(cartRef);
    
//     if (cartSnap.exists()) {
//       return cartSnap.data().items || [];
//     } else {
//       return [];
//     }
//   } catch (error) {
//     console.error('Error fetching user cart:', error);
//     throw error;
//   }
// };

// /**
//  * Save user's cart to Firestore
//  * @param {string} userId - User ID
//  * @param {Array} cartItems - Array of cart items
//  */
// export const saveUserCart = async (userId, cartItems) => {
//   try {
//     const cartRef = doc(db, 'carts', userId);
//     await setDoc(cartRef, {
//       items: cartItems,
//       updatedAt: serverTimestamp()
//     }, { merge: true });
//   } catch (error) {
//     console.error('Error saving user cart:', error);
//     throw error;
//   }
// };

// /**
//  * Clear user's cart
//  * @param {string} userId - User ID
//  */
// export const clearUserCart = async (userId) => {
//   try {
//     const cartRef = doc(db, 'carts', userId);
//     await setDoc(cartRef, {
//       items: [],
//       updatedAt: serverTimestamp()
//     });
//   } catch (error) {
//     console.error('Error clearing user cart:', error);
//     throw error;
//   }
// };

// /**
//  * Subscribe to real-time cart updates
//  * @param {string} userId - User ID
//  * @param {Function} callback - Callback function to handle updates
//  * @returns {Function} Unsubscribe function
//  */
// export const subscribeToCart = (userId, callback) => {
//   const cartRef = doc(db, 'carts', userId);
//   return onSnapshot(cartRef, (snapshot) => {
//     if (snapshot.exists()) {
//       callback(snapshot.data().items || []);
//     } else {
//       // Emit null when no server cart exists yet to avoid wiping local cart
//       callback(null);
//     }
//   });
// };

// // ==================== ORDERS ====================

// /**
//  * Create a new order
//  * @param {string} userId - User ID
//  * @param {Object} orderData - Order data (items, total, shipping address, etc.)
//  * @returns {Promise<string>} Order ID
//  */
// export const createOrder = async (userId, orderData) => {
//   try {
//     const ordersRef = collection(db, 'orders');

//     const items = Array.isArray(orderData.items) ? orderData.items : [];
//     const orderItems = items.map(it => ({
//       id: it.id,
//       name: it.name,
//       image: it.image,
//       categorySlug: it.categorySlug,
//       unitPrice: Number(it.price) || 0,
//       quantity: Number(it.quantity) || 1,
//       lineTotal: ((Number(it.price) || 0) * (Number(it.quantity) || 1))
//     }));

//     const subtotal = orderItems.reduce((sum, i) => sum + i.lineTotal, 0);
//     const shippingFee = Number(orderData.shippingFee) || 0;
//     const taxAmount = Number(orderData.taxAmount) || 0;
//     const grandTotal = Number(orderData.total) || (subtotal + shippingFee + taxAmount);
//     const currency = orderData.currency || 'INR';

//     // Basic user snapshot if provided
//     const userSnapshot = orderData.user || null; // { uid, email, displayName, phoneNumber }

//     // Normalize shipping address
//     const shipping = orderData.shipping || {};
//     const shippingAddress = {
//       name: shipping.name || '',
//       email: shipping.email || '',
//       phone: shipping.phone || '',
//       address: shipping.address || '',
//       city: shipping.city || '',
//       zipCode: shipping.zipCode || ''
//     };

//     // Simple order number: yyyymmdd-hhmmss-rand4
//     const now = new Date();
//     const pad = (n) => String(n).padStart(2, '0');
//     const orderNumber = `${now.getFullYear()}${pad(now.getMonth()+1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}-${Math.floor(Math.random()*9000+1000)}`;

//     const payload = {
//       userId,
//       orderNumber,
//       currency,
//       items: orderItems,
//       amounts: {
//         subtotal,
//         shippingFee,
//         taxAmount,
//         grandTotal
//       },
//       shipping: shippingAddress,
//       status: orderData.status || 'pending',
//       payment: {
//         status: orderData.paymentStatus || 'unpaid',
//         method: orderData.paymentMethod || 'unknown',
//         transactionId: orderData.transactionId || null
//       },
//       user: userSnapshot,
//       notes: orderData.notes || null,
//       createdAt: serverTimestamp(),
//       updatedAt: serverTimestamp()
//     };

//     const orderDoc = await addDoc(ordersRef, payload);
//     return orderDoc.id;
//   } catch (error) {
//     console.error('Error creating order:', error);
//     throw error;
//   }
// };

// /**
//  * Get user's orders
//  * @param {string} userId - User ID
//  * @returns {Promise<Array>} Array of orders
//  */
// export const getUserOrders = async (userId) => {
//   try {
//     const ordersRef = collection(db, 'orders');
//     const q = query(
//       ordersRef, 
//       where('userId', '==', userId),
//       orderBy('createdAt', 'desc')
//     );
//     const snapshot = await getDocs(q);
//     const orders = snapshot.docs.map(doc => ({
//       id: doc.id,
//       ...doc.data()
//     }));
//     return orders;
//   } catch (error) {
//     console.error('Error fetching user orders:', error);
//     throw error;
//   }
// };

// /**
//  * Get a single order by ID
//  * @param {string} orderId - Order ID
//  * @returns {Promise<Object|null>} Order object or null
//  */
// export const getOrderById = async (orderId) => {
//   try {
//     const orderRef = doc(db, 'orders', orderId);
//     const orderSnap = await getDoc(orderRef);
    
//     if (orderSnap.exists()) {
//       return { id: orderSnap.id, ...orderSnap.data() };
//     } else {
//       return null;
//     }
//   } catch (error) {
//     console.error('Error fetching order:', error);
//     throw error;
//   }
// };

// /**
//  * Update order status (Admin function)
//  * @param {string} orderId - Order ID
//  * @param {string} status - New status (pending, processing, shipped, delivered, cancelled)
//  */
// export const updateOrderStatus = async (orderId, status) => {
//   try {
//     const orderRef = doc(db, 'orders', orderId);
//     await updateDoc(orderRef, {
//       status,
//       updatedAt: serverTimestamp()
//     });
//   } catch (error) {
//     console.error('Error updating order status:', error);
//     throw error;
//   }
// };

// // ==================== USERS ====================

// /**
//  * Get user profile data
//  * @param {string} userId - User ID
//  * @returns {Promise<Object|null>} User profile or null
//  */
// export const getUserProfile = async (userId) => {
//   try {
//     const userRef = doc(db, 'users', userId);
//     const userSnap = await getDoc(userRef);
    
//     if (userSnap.exists()) {
//       return { id: userSnap.id, ...userSnap.data() };
//     } else {
//       return null;
//     }
//   } catch (error) {
//     console.error('Error fetching user profile:', error);
//     throw error;
//   }
// };

// /**
//  * Create or update user profile
//  * @param {string} userId - User ID
//  * @param {Object} userData - User profile data
//  */
// export const saveUserProfile = async (userId, userData) => {
//   try {
//     const userRef = doc(db, 'users', userId);
//     await setDoc(userRef, {
//       ...userData,
//       updatedAt: serverTimestamp()
//     }, { merge: true });
//   } catch (error) {
//     console.error('Error saving user profile:', error);
//     throw error;
//   }
// };



import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  setDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy,
  serverTimestamp,
  onSnapshot 
} from 'firebase/firestore';
import { db } from '../firebase';

// ==================== PRODUCTS ====================

/**
 * Get all products from Firestore
 * @returns {Promise<Array>} Array of products
 */
export const getAllProducts = async () => {
  try {
    const productsRef = collection(db, 'products');
    const snapshot = await getDocs(productsRef);
    const products = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

/**
 * Get products by category
 * @param {string} categorySlug - Category slug to filter by
 * @returns {Promise<Array>} Array of products in the category
 */
export const getProductsByCategory = async (categorySlug) => {
  try {
    const productsRef = collection(db, 'products');
    const q = query(productsRef, where('categorySlug', '==', categorySlug));
    const snapshot = await getDocs(q);
    const products = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return products;
  } catch (error) {
    console.error('Error fetching products by category:', error);
    throw error;
  }
};

/**
 * Get a single product by ID
 * @param {string} productId - Product ID
 * @returns {Promise<Object|null>} Product object or null if not found
 */
export const getProductById = async (productId) => {
  try {
    const productRef = doc(db, 'products', productId);
    const productSnap = await getDoc(productRef);
    
    if (productSnap.exists()) {
      return { id: productSnap.id, ...productSnap.data() };
    } else {
      console.log('No such product found!');
      return null;
    }
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

/**
 * Add a new product (Admin function)
 * @param {Object} productData - Product data object
 * @returns {Promise<string>} Document ID of the created product
 */
export const addProduct = async (productData) => {
  try {
    const productsRef = collection(db, 'products');
    const docRef = await addDoc(productsRef, {
      ...productData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};

/**
 * Update an existing product (Admin function)
 * @param {string} productId - Product ID
 * @param {Object} productData - Updated product data
 */
export const updateProduct = async (productId, productData) => {
  try {
    const productRef = doc(db, 'products', productId);
    await updateDoc(productRef, {
      ...productData,
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};

/**
 * Delete a product (Admin function)
 * @param {string} productId - Product ID
 */
export const deleteProduct = async (productId) => {
  try {
    const productRef = doc(db, 'products', productId);
    await deleteDoc(productRef);
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};

/**
 * Batch upload products (for initial setup)
 * @param {Array} products - Array of product objects
 */
// --- CORRECTION 1: This function now uses setDoc and the product's own ID ---
export const batchAddProducts = async (products) => {
  console.log("Starting batch upload...");
  try {
    const promises = products.map(async (product) => {
      // Use the product's 'id' as the document ID
      const docRef = doc(db, 'products', product.id.toString());
      
      // Use setDoc to create or overwrite the document with that specific ID
      await setDoc(docRef, {
        ...product, // Spread all product data
        createdAt: serverTimestamp(), // Add a timestamp
      });
    });

    await Promise.all(promises);
    console.log(`Successfully added/updated ${products.length} products`);

  } catch (error) {
    console.error('Error batch adding products:', error);
    throw error;
  }
};

// ==================== CART ====================

/**
 * Get user's cart from Firestore
 * @param {string} userId - User ID
 * @returns {Promise<Array>} Array of cart items
 */
export const getUserCart = async (userId) => {
  try {
    const cartRef = doc(db, 'carts', userId);
    const cartSnap = await getDoc(cartRef);
    
    if (cartSnap.exists()) {
      return cartSnap.data().items || [];
    } else {
      return [];
    }
  } catch (error) {
    console.error('Error fetching user cart:', error);
    throw error;
  }
};

/**
 * Save user's cart to Firestore
 * @param {string} userId - User ID
 * @param {Array} cartItems - Array of cart items
 */
export const saveUserCart = async (userId, cartItems) => {
  try {
    const cartRef = doc(db, 'carts', userId);
    await setDoc(cartRef, {
      items: cartItems,
      updatedAt: serverTimestamp()
    }, { merge: true });
  } catch (error) {
    console.error('Error saving user cart:', error);
    throw error;
  }
};

/**
 * Clear user's cart
 * @param {string} userId - User ID
 */
export const clearUserCart = async (userId) => {
  try {
    const cartRef = doc(db, 'carts', userId);
    await setDoc(cartRef, {
      items: [],
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error clearing user cart:', error);
    throw error;
  }
};

/**
 * Subscribe to real-time cart updates
 * @param {string} userId - User ID
 * @param {Function} callback - Callback function to handle updates
 * @returns {Function} Unsubscribe function
 */
export const subscribeToCart = (userId, callback) => {
  const cartRef = doc(db, 'carts', userId);
  return onSnapshot(cartRef, (snapshot) => {
    if (snapshot.exists()) {
      callback(snapshot.data().items || []);
    } else {
      // Emit null when no server cart exists yet to avoid wiping local cart
      callback(null);
    }
  });
};

// ==================== ORDERS ====================

/**
 * Create a new order
 * @param {string} userId - User ID
 * @param {Object} orderData - Order data (items, total, shipping address, etc.)
 * @returns {Promise<string>} Order ID
 */
export const createOrder = async (userId, orderData) => {
  try {
    const ordersRef = collection(db, 'orders');

    const items = Array.isArray(orderData.items) ? orderData.items : [];
    const orderItems = items.map(it => ({
      id: it.id,
      name: it.name,
      image: it.image,
      categorySlug: it.categorySlug,
      unitPrice: Number(it.price) || 0,
      quantity: Number(it.quantity) || 1,
      lineTotal: ((Number(it.price) || 0) * (Number(it.quantity) || 1))
    }));

    const subtotal = orderItems.reduce((sum, i) => sum + i.lineTotal, 0);
    const shippingFee = Number(orderData.shippingFee) || 0;
    const taxAmount = Number(orderData.taxAmount) || 0;
    
    // --- CORRECTION 2: Always recalculate grandTotal on the server ---
    // Do NOT trust orderData.total from the client.
    const grandTotal = subtotal + shippingFee + taxAmount;
    const currency = orderData.currency || 'INR';

    // Basic user snapshot if provided
    const userSnapshot = orderData.user || null; // { uid, email, displayName, phoneNumber }

    // Normalize shipping address
    const shipping = orderData.shipping || {};
    const shippingAddress = {
      name: shipping.name || '',
      email: shipping.email || '',
      phone: shipping.phone || '',
      address: shipping.address || '',
      city: shipping.city || '',
      zipCode: shipping.zipCode || ''
    };

    // Simple order number: yyyymmdd-hhmmss-rand4
    const now = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    const orderNumber = `${now.getFullYear()}${pad(now.getMonth()+1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}-${Math.floor(Math.random()*9000+1000)}`;

    const payload = {
      userId,
      orderNumber,
      currency,
      items: orderItems,
      amounts: {
        subtotal,
        shippingFee,
        taxAmount,
        grandTotal // Uses the secure, recalculated total
      },
      shipping: shippingAddress,
      status: orderData.status || 'pending',
      payment: {
        status: orderData.paymentStatus || 'unpaid',
        method: orderData.paymentMethod || 'unknown',
        transactionId: orderData.transactionId || null
      },
      user: userSnapshot,
      notes: orderData.notes || null,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };

    const orderDoc = await addDoc(ordersRef, payload);
    return orderDoc.id;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

/**
 * Get user's orders
 * @param {string} userId - User ID
 * @returns {Promise<Array>} Array of orders
 */
export const getUserOrders = async (userId) => {
  try {
    const ordersRef = collection(db, 'orders');
    const q = query(
      ordersRef, 
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    );
    const snapshot = await getDocs(q);
    const orders = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return orders;
  } catch (error) {
    console.error('Error fetching user orders:', error);
    throw error;
  }
};

/**
 * Get a single order by ID
 * @param {string} orderId - Order ID
 * @returns {Promise<Object|null>} Order object or null
 */
export const getOrderById = async (orderId) => {
  try {
    const orderRef = doc(db, 'orders', orderId);
    const orderSnap = await getDoc(orderRef);
    
    if (orderSnap.exists()) {
      return { id: orderSnap.id, ...orderSnap.data() };
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching order:', error);
    throw error;
  }
};

/**
 * Update order status (Admin function)
 * @param {string} orderId - Order ID
 * @param {string} status - New status (pending, processing, shipped, delivered, cancelled)
 */
export const updateOrderStatus = async (orderId, status) => {
  try {
    const orderRef = doc(db, 'orders', orderId);
    await updateDoc(orderRef, {
      status,
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error updating order status:', error);
    throw error;
  }
};

// ==================== USERS ====================

/**
 * Get user profile data
 * @param {string} userId - User ID
 * @returns {Promise<Object|null>} User profile or null
 */
export const getUserProfile = async (userId) => {
  try {
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      return { id: userSnap.id, ...userSnap.data() };
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};
/**
 * Create or update user profile
 * @param {string} userId - User ID
 * @param {Object} userData - User profile data
 */
export const saveUserProfile = async (userId, userData) => {
  try {
    const userRef = doc(db, 'users', userId);
    await setDoc(userRef, {
      ...userData,
      updatedAt: serverTimestamp()
    }, { merge: true });
  } catch (error) {
    console.error('Error saving user profile:', error);
    throw error;
  }
};
