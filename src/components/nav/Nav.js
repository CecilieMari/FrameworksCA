import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import styles from './Nav.module.css';
import { CartContext } from '../cart/CartContext';


function Nav() {

const { cart } = useContext(CartContext); 

  return (
    <nav className={styles.nav}>
      <div className={styles.navLeft}>
        <span className={styles.navName}>My Shop</span>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/form">Contact Us</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} /> Cart
              {cart.length > 0 && <span className={styles.cartCount}>{cart.length}</span>}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;