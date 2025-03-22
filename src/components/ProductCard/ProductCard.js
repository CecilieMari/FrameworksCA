import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

function ProductCard({ product, addToCart }) {
  return (
    <div className={styles.productCard}>
      {product.image && (
        <img src={product.image.url} alt={product.image.alt || product.title} className={styles.productImage} />
      )}
      <div className={styles.productDetails}>
        <h2>{product.title}</h2>
        <p>Price: ${product.price}</p>
        <div className={styles.buttonGroup}>
          <Link to={`/product/${product.id}`}>
            <button className={styles.viewButton}>View Product</button>
          </Link>
        <button onClick={() => addToCart(product)} className={styles.addToCartButton}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;