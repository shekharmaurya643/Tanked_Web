// src/context/CartContext.jsx

import React, { createContext, useContext, useReducer, useEffect, useState, useRef } from 'react';
import { auth } from '../firebase';
import { getUserCart, saveUserCart, subscribeToCart } from '../services/dbService';

const CartContext = createContext();

const normalizeQuantity = (q) => {
  const n = Number(q);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : 1;
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CART': {
      const items = Array.isArray(action.payload) ? action.payload : [];
      return items.map(item => ({
        ...item,
        quantity: normalizeQuantity(item.quantity)
      }));
    }
    case 'ADD_TO_CART': {
      const incoming = { ...action.payload, quantity: normalizeQuantity(action.payload.quantity) };
      const existingItemIndex = state.findIndex(
        (item) => item.id === incoming.id
      );
      if (existingItemIndex > -1) {
        const updatedCart = [...state];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: normalizeQuantity(updatedCart[existingItemIndex].quantity + incoming.quantity)
        };
        return updatedCart;
      } else {
        return [...state, incoming];
      }
    }
    case 'REMOVE_FROM_CART': {
      return state.filter((item) => item.id !== action.payload.id);
    }
    case 'UPDATE_QUANTITY': {
      const clamped = normalizeQuantity(action.payload.quantity);
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: clamped }
          : item
      );
    }
    case 'CLEAR_CART': {
      return [];
    }
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, []);
  const [isLoading, setIsLoading] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);
  const [hasSavedOnce, setHasSavedOnce] = useState(false);

  // Refs to coordinate snapshot handling
  const syncingRef = useRef(false);
  const lastLocalChangeAtRef = useRef(0);
  useEffect(() => { syncingRef.current = isSyncing; }, [isSyncing]);

  // Load cart from Firestore when user logs in
  useEffect(() => {
    let unsubscribeCart = null;

    const unsubscribeAuth = auth.onAuthStateChanged(async (user) => {
      if (unsubscribeCart) {
        unsubscribeCart();
        unsubscribeCart = null;
      }

      setHasSavedOnce(false);

      if (user) {
        setIsLoading(true);
        try {
          const userCart = await getUserCart(user.uid);
          if (Array.isArray(userCart) && userCart.length > 0) {
            dispatch({ type: 'SET_CART', payload: userCart });
          }
          
          // Subscribe to server cart updates
          unsubscribeCart = subscribeToCart(user.uid, (updatedCart) => {
            if (updatedCart === null) return; // no server cart yet
            const delta = Date.now() - lastLocalChangeAtRef.current;
            if (delta < 1200) return;          // ignore shortly after a local change

            if (Array.isArray(updatedCart) && updatedCart.length === 0 && !hasSavedOnce) {
              return; // ignore initial empty snapshot
            }
            dispatch({ type: 'SET_CART', payload: updatedCart });
          });
          
          setIsLoading(false);
        } catch (error) {
          console.error('Error loading cart:', error);
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    });

    return () => {
      unsubscribeAuth();
      if (unsubscribeCart) unsubscribeCart();
    };
  }, [hasSavedOnce]);

  // Save cart to Firestore whenever it changes (for logged-in users)
  useEffect(() => {
    const user = auth.currentUser;
    if (user && !isLoading && !isSyncing) {
      const saveCart = async () => {
        setIsSyncing(true);
        try {
          await saveUserCart(user.uid, cartItems);
          setHasSavedOnce(true);
        } catch (error) {
          console.error('Error saving cart:', error);
        } finally {
          setIsSyncing(false);
        }
      };

      const timeoutId = setTimeout(saveCart, 200);
      return () => clearTimeout(timeoutId);
    }
  }, [cartItems, isLoading]);

  const addToCart = (product) => {
    const normalized = { ...product, quantity: normalizeQuantity(product.quantity) };
    // Compute next cart state synchronously
    const existingIndex = cartItems.findIndex(i => i.id === normalized.id);
    let nextCart;
    if (existingIndex > -1) {
      nextCart = cartItems.map((i, idx) => idx === existingIndex
        ? { ...i, quantity: normalizeQuantity(i.quantity + normalized.quantity) }
        : i
      );
    } else {
      nextCart = [...cartItems, normalized];
    }

    lastLocalChangeAtRef.current = Date.now();
    dispatch({ type: 'SET_CART', payload: nextCart });

    const user = auth.currentUser;
    if (user) {
      (async () => {
        try {
          setIsSyncing(true);
          await saveUserCart(user.uid, nextCart);
          setHasSavedOnce(true);
        } catch (e) {
          console.error('Error optimistic-saving cart:', e);
        } finally {
          setIsSyncing(false);
        }
      })();
    }
  };

  const removeFromCart = (id) => {
    lastLocalChangeAtRef.current = Date.now();
    const nextCart = cartItems.filter(item => item.id !== id);
    dispatch({ type: 'SET_CART', payload: nextCart });

    const user = auth.currentUser;
    if (user) {
      (async () => {
        try {
          setIsSyncing(true);
          await saveUserCart(user.uid, nextCart);
          setHasSavedOnce(true);
        } catch (e) {
          console.error('Error optimistic-saving cart removal:', e);
        } finally {
          setIsSyncing(false);
        }
      })();
    }
  };

  const updateQuantity = (id, quantity) => {
    lastLocalChangeAtRef.current = Date.now();
    const clamped = normalizeQuantity(quantity);
    const nextCart = cartItems.map(item => item.id === id ? { ...item, quantity: clamped } : item);
    dispatch({ type: 'SET_CART', payload: nextCart });

    const user = auth.currentUser;
    if (user) {
      (async () => {
        try {
          setIsSyncing(true);
          await saveUserCart(user.uid, nextCart);
          setHasSavedOnce(true);
        } catch (e) {
          console.error('Error optimistic-saving cart quantity:', e);
        } finally {
          setIsSyncing(false);
        }
      })();
    }
  };

  const clearCart = () => {
    lastLocalChangeAtRef.current = Date.now();
    dispatch({ type: 'CLEAR_CART' });
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    isLoading,
    isSyncing
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  return useContext(CartContext);
};