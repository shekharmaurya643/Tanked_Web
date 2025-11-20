// // src/firebase.js

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// // This log is crucial for debugging
// console.log("Firebase config API Key:", import.meta.env.VITE_FIREBASE_API_KEY);

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
//   measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
// };

// let auth;

// try {
//   const app = initializeApp(firebaseConfig);
//   auth = getAuth(app);
//   console.log("✅ Firebase Initialized Successfully");
// } catch (error) {
//   console.error("❌ Firebase Initialization Error:", error);
// }

// // Export the auth service
// export { auth };


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // 1. Make sure this import is here

console.log("Firebase config API Key:", import.meta.env.VITE_FIREBASE_API_KEY);

const firebaseConfig = {
 apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
 authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
 projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
 storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
 messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
 appId: import.meta.env.VITE_FIREBASE_APP_ID,
 measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

let app;
let auth;
let db; // 2. Define db

try {
 app = initializeApp(firebaseConfig);
 auth = getAuth(app);
 db = getFirestore(app); // 3. Initialize db
 console.log("✅ Firebase Initialized Successfully");
} catch (error) {
 console.error("❌ Firebase Initialization Error:", error);
}

// 4. Export both auth and db
export { auth, db };