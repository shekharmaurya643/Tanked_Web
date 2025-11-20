// // src/components/AuthPage.jsx

// import React from 'react';
// import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// import { auth } from '../firebase';
// import Bubbles from './Bubbles';
// const AuthPage = ({ user }) => {
//   // Function to handle Google Sign-In
//   const signInWithGoogle = async () => {
//     const provider = new GoogleAuthProvider();
//     try {
//       const result = await signInWithPopup(auth, provider);
//       console.log("Successfully signed in with user:", result.user);
//     } catch (error) {
//       console.error("Error signing in with Google: ", error);
//     }
//   };

//   // Function to handle Sign-Out
//   const handleSignOut = async () => {
//     try {
//       await signOut(auth);
//       console.log("User signed out successfully.");
//     } catch (error) {
//       console.error("Error signing out: ", error);
//     }
//   };

//   return (
//     <section className="relatiive overflow-hidden section-padding theme-dark-gradient min-h-[calc(100vh-80px)] flex items-center justify-center">
//       <Bubbles />
//       <div className="container-custom">
//         <div className="flex flex-col items-center justify-center text-white text-center">
//           <h2 className="text-4xl lg:text-5xl font-bold mb-8">Authentication</h2>
          
//           {user ? (
//             // If user is logged in, show their info and a logout button
//             <div className="text-center p-8 bg-white/5 border border-white/10 backdrop-blur-md rounded-lg shadow-xl max-w-md w-full">
//               <img 
//                 src={user.photoURL} 
//                 alt={user.displayName} 
//                 className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-cyan-400 object-cover" 
//               />
//               <h3 className="text-2xl font-semibold mb-2">Welcome, {user.displayName}!</h3>
//               <p className="text-blue-100 mb-6">{user.email}</p>
//               <button
//                 onClick={handleSignOut}
//                 className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors duration-300 transform hover:scale-105"
//               >
//                 Sign Out
//               </button>
//             </div>
//           ) : (
//             // If user is not logged in, show the GoogleLogin button
//             <div className="text-center p-8 bg-white/5 border border-white/10 backdrop-blur-md rounded-lg shadow-xl max-w-md w-full">
//               <h3 className="text-2xl font-semibold mb-6">Sign In to Continue</h3>
//               <button
//                 onClick={signInWithGoogle}
//                 className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg flex items-center justify-center gap-3 transition-transform duration-300 hover:scale-105"
//               >
//                 <svg className="w-6 h-6" viewBox="0 0 48 48">
//                   <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path>
//                   <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"></path>
//                   <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.222 0-9.521-3.108-11.127-7.481l-6.571 4.819C9.656 39.663 16.318 44 24 44z"></path>
//                   <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C43.021 36.233 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"></path>
//                 </svg>
//                 Sign in with Google
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AuthPage;




// import React from 'react';
// import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// import { auth, db } from '../firebase'; // Import db
// import { doc, setDoc, serverTimestamp } from 'firebase/firestore'; // Import firestore functions
// import Bubbles from './Bubbles';
// import { useNavigate } from 'react-router-dom';

// const AuthPage = ({ user }) => {
//   const navigate = useNavigate();

//   const signInWithGoogle = async () => {
//     const provider = new GoogleAuthProvider();
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;
//       console.log("Successfully signed in with user:", user);

//       // --- Add user to 'users' collection in Firestore ---
//       const userRef = doc(db, 'users', user.uid);
//       await setDoc(userRef, {
//         uid: user.uid,
//         displayName: user.displayName,
//         email: user.email,
//         photoURL: user.photoURL,
//         lastLogin: serverTimestamp(), // Record the login time
//       }, { merge: true }); // 'merge: true' creates the doc or updates it
//       // --- End of Firestore logic ---

//       navigate('/'); // Redirect to home
//     } catch (error) {
//       console.error("Error signing in with Google: ", error);
//     }
//   };

//   const handleSignOut = async () => {
//     try {
//       await signOut(auth);
//       console.log("User signed out successfully.");
//       navigate('/'); // Redirect to home
//     } catch (error) {
//       console.error("Error signing out: ", error);
//     }
//   };

//   return (
//     <section className="relative overflow-hidden section-padding theme-dark-gradient min-h-[calc(100vh-80px)] flex items-center justify-center">
//       <Bubbles />
//       <div className="container-custom">
//         <div className="flex flex-col items-center justify-center text-white text-center">
//           <h2 className="text-4xl lg:text-5xl font-bold mb-8">Authentication</h2>
          
//           {user ? (
//             // If user is logged in
//             <div className="text-center p-8 bg-white/5 border border-white/10 backdrop-blur-md rounded-lg shadow-xl max-w-md w-full">
//               {user.photoURL ? (
//                 <img 
//                   src={user.photoURL} 
//                   alt={user.displayName} 
//                   className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-cyan-400 object-cover" 
//                 />
//               ) : (
//                 <div className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-cyan-400 bg-gray-700 flex items-center justify-center">
//                   <span className="text-5xl font-bold text-white">
//                     {user.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}
//                   </span>
//                 </div>
//               )}
//               <h3 className="text-2xl font-semibold mb-2">Welcome, {user.displayName}!</h3>
//               <p className="text-blue-100 mb-6">{user.email}</p>
//               <button
//                 onClick={handleSignOut}
//                 className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors duration-300 transform hover:scale-105"
//               >
//                 Sign Out
//               </button>
//             </div>
//           ) : (
//             // If user is not logged in
//             <div className="text-center p-8 bg-white/5 border border-white/10 backdrop-blur-md rounded-lg shadow-xl max-w-md w-full">
//               <h3 className="text-2xl font-semibold mb-6">Sign In to Continue</h3>
//               <button
//                 onClick={signInWithGoogle}
//                 // --- THIS IS THE FIX ---
//                 // Added 'mx-auto' to center the button
//                 className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg flex items-center justify-center gap-3 transition-transform duration-300 hover:scale-105 mx-auto"
//               >
//                 <svg className="w-6 h-6" viewBox="0 0 48 48">
//                   <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path>
//                   <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"></path>
//                   <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.222 0-9.521-3.108-11.127-7.481l-6.571 4.819C9.656 39.663 16.318 44 24 44z"></path>
//                   <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C43.021 36.233 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"></path>
//                 </svg>
//                 Sign in with Google
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AuthPage;






import React, { useState } from 'react';
import { 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { auth, db } from '../firebase'; // Import db
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'; // Import firestore functions
import Bubbles from './Bubbles';
import { useNavigate } from 'react-router-dom';

const AuthPage = ({ user }) => {
  const navigate = useNavigate();
  
  // State for the form
  const [isSigningUp, setIsSigningUp] = useState(false); // Toggles between Sign In / Sign Up
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // To display errors

  // Function to save user data to Firestore
  const updateUserInFirestore = async (user) => {
    const userRef = doc(db, 'users', user.uid);
    await setDoc(userRef, {
      uid: user.uid,
      displayName: user.displayName || email.split('@')[0], // Use email prefix if no display name
      email: user.email,
      photoURL: user.photoURL,
      lastLogin: serverTimestamp(),
    }, { merge: true }); // 'merge: true' creates the doc or updates it
  };

  // Function to handle Google Sign-In
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      await updateUserInFirestore(result.user); // Save/update user in DB
      navigate('/'); // Redirect to home
    } catch (error) {
      console.error("Error signing in with Google: ", error);
      setError(error.message);
    }
  };

  // Function for Email/Password Sign Up & Sign In
  const handleEmailAuth = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      if (isSigningUp) {
        // --- Sign Up ---
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateUserInFirestore(userCredential.user); // Save new user to DB
      } else {
        // --- Sign In ---
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        // User data will be updated by the onAuthStateChanged listener in App.jsx
      }
      navigate('/'); // Redirect to home on success
    } catch (error) {
      console.error("Error with email auth: ", error);
      if (error.code === 'auth/wrong-password') {
        setError('Incorrect password. Please try again.');
      } else if (error.code === 'auth/user-not-found') {
        setError('No account found with this email. Please sign up.');
      } else if (error.code === 'auth/email-already-in-use') {
        setError('This email is already in use. Please sign in.');
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  // Function to handle Sign-Out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <section className="relative overflow-hidden section-padding theme-dark-gradient min-h-[calc(100vh-80px)] flex items-center justify-center">
      <Bubbles />
      <div className="container-custom">
        <div className="flex flex-col items-center justify-center text-white text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">Authentication</h2>
          
          {user ? (
            // --- User is LOGGED IN ---
            <div className="text-center p-8 bg-white/5 border border-white/10 backdrop-blur-md rounded-lg shadow-xl max-w-md w-full">
              {user.photoURL ? (
                <img 
                  src={user.photoURL} 
                  alt={user.displayName} 
                  className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-cyan-400 object-cover" 
                />
              ) : (
                <div className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-cyan-400 bg-gray-700 flex items-center justify-center">
                  <span className="text-5xl font-bold text-white">
                    {user.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-semibold mb-2">Welcome, {user.displayName}!</h3>
              <p className="text-blue-100 mb-6">{user.email}</p>
              <button
                onClick={handleSignOut}
                className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors duration-300 transform hover:scale-105"
              >
                Sign Out
              </button>
            </div>

          ) : (
            // --- User is LOGGED OUT ---
            <div className="text-center p-8 bg-white/5 border border-white/10 backdrop-blur-md rounded-lg shadow-xl max-w-md w-full">
              <h3 className="text-2xl font-semibold mb-6">
                {isSigningUp ? 'Create an Account' : 'Sign In to Continue'}
              </h3>
              
              {/* Google Sign In Button */}
              <button
                onClick={signInWithGoogle}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg flex items-center justify-center gap-3 transition-transform duration-300 hover:scale-105 mx-auto"
              >
                <svg className="w-6 h-6" viewBox="0 0 48 48">
                  <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path>
                  <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"></path>
                  <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.222 0-9.521-3.108-11.127-7.481l-6.571 4.819C9.656 39.663 16.318 44 24 44z"></path>
                  <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C43.021 36.233 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"></path>
                </svg>
                Sign in with Google
              </button>

              {/* Divider */}
              <div className="my-6 flex items-center justify-center">
                <div className="flex-grow border-t border-gray-600"></div>
                <span className="px-4 text-gray-400">OR</span>
                <div className="flex-grow border-t border-gray-600"></div>
              </div>

              {/* Email/Password Form */}
              <form onSubmit={handleEmailAuth} className="space-y-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
                <input
                  type="password"
                  placeholder="Password (6+ characters)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
                
                {error && (
                  <p className="text-red-400 text-sm">{error}</p>
                )}

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors duration-300 transform hover:scale-105"
                >
                  {isSigningUp ? 'Sign Up' : 'Sign In'}
                </button>
              </form>
              
              {/* Toggle Button */}
              <div className="mt-6">
                <button 
                  onClick={() => setIsSigningUp(!isSigningUp)}
                  className="text-cyan-400 hover:underline"
                >
                  {isSigningUp 
                    ? 'Already have an account? Sign In'
                    : "Don't have an account? Sign Up"
                  }
                </button>
              </div>

            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AuthPage;