import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import styles from './Nav.module.css';

function Nav() {
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
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;