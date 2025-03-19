import React from "react";
import styles from "../Footer/Footer.module.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.footerName}>My Shop</p>
        <p className={styles.footerText}>Your online store for perfume, headphones, bags and hairdryers!</p>
      </div>
      <div className={styles.footerIcons}>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
          <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
          <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
        </a>
      </div>
      <ul className={styles.footerList}>
        <li className={styles.footerItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.footerItem}>
          <Link to="/products">Products</Link>
        </li>
        <li className={styles.footerItem}>
          <Link to="/form">Contact Us</Link>
        </li>
        <li className={styles.footerItem}>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;