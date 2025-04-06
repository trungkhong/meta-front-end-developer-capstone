import { createContext, useState, useEffect, useMemo, useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import { showNotification } from '../utils/notification';

export const CartContext = createContext();

const CART_STORAGE_KEY = 'shopping_cart'; // Use a specific key for our cart

export const CartProvider = ({ children }) => {
  // Initialize state with localStorage data
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);

      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error('Error loading initial cart data:', error);
      return [];
    }
  });

  // Save to localStorage whenever cart changes
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
      showNotification.error('Failed to save cart data');
    }
  }, [cartItems]);

  const addToCart = useCallback((item) => {
    if (!item?.id) {
      console.error('Invalid item:', item);
      showNotification.error('Cannot add invalid item to cart');
      return;
    }

    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((cartItem) => cartItem.id === item.id);

      if (existingItemIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: (updatedItems[existingItemIndex].quantity || 0) + 1,
        };
        showNotification.success(`Added another ${item.title || item.name} to cart`);
        return updatedItems;
      } else {
        const newItem = {
          ...item,
          quantity: 1,
        };
        showNotification.success(`${item.title || item.name} added to cart`);
        return [...prevItems, newItem];
      }
    });
  }, []);

  const removeFromCart = useCallback((itemId) => {
    setCartItems((prevItems) => {
      const newItems = prevItems.filter((item) => item.id !== itemId);
      showNotification.info('Item removed from cart');
      return newItems;
    });
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
    localStorage.removeItem(CART_STORAGE_KEY);
    showNotification.info('Cart cleared');
  }, []);

  const getCartCount = useCallback(() => {
    return cartItems.reduce((count, item) => count + (item.quantity || 0), 0);
  }, [cartItems]);

  const context = useMemo(
    () => ({
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
      getCartCount,
    }),
    [cartItems, addToCart, removeFromCart, clearCart, getCartCount],
  );

  return <CartContext.Provider value={context}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }

  return context;
};
