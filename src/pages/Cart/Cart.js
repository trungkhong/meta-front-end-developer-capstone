import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '@/context/CartContext';
import styles from './Cart.module.css';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    navigate('/booking');
  };

  return (
    <div className={styles.cart}>
      <div className="container">
        <div className={styles.wrapper}>
          <h2>Your Cart</h2>

          {cartItems.length === 0 ? (
            <div className={styles.emptyCart}>
              <p>Your cart is empty</p>
              <button className="yellow-btn" onClick={() => navigate('/menu')}>
                Browse Menu
              </button>
            </div>
          ) : (
            <>
              <div className={styles.cartItems}>
                {cartItems.map((item) => (
                  <div key={item.id} className={styles.cartItem}>
                    <img src={item.thumbnailUrl} alt={item.title} />
                    <div className={styles.itemDetails}>
                      <h3>{item.title}</h3>
                      <p>${item.price.toFixed(2)}</p>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                    <button className={styles.removeButton} onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <div className={styles.cartSummary}>
                <div className={styles.total}>
                  <span>Total:</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>

                <div className={styles.actions}>
                  <button className={styles.clearButton} onClick={clearCart}>
                    Clear Cart
                  </button>
                  <button className="yellow-btn" onClick={handleCheckout}>
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
