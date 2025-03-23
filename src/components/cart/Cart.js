import React, { useContext } from 'react';
import { CartContext } from './CartContext'; 
import styles from './Cart.module.css'; 
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cart, removeFromCart, setCart } = useContext(CartContext); // Hent setCart fra CartContext
  const navigate = useNavigate();

  const checkout = () => {
    setCart([]); // Tøm handlekurven
    navigate('/checkout'); // Naviger til "Checkout"-siden
  };

  return (
    <div className={styles.cart}>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <div className={styles.cartList}>
            {cart.map((product, index) => (
              <div key={index} className={styles.cartItem}>
                <img
                  src={product.image.url}
                  alt={product.image.alt || product.title}
                  className={styles.cartImage}
                />
                <div className={styles.cartDetails}>
                  <h2 className={styles.cartTitle}>{product.title}</h2>
                  <p className={styles.cartPrice}>Price: ${product.price}</p>
                  <button
                    onClick={() => removeFromCart(index)}
                    className={styles.removeButton}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <p className={styles.cartTotal}>
            Total: ${cart.reduce((total, product) => total + product.price, 0)}
          </p>
          <button onClick={checkout} className={styles.checkoutButton}>
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;