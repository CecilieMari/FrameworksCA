import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './singleProduct.module.css';
import { CartContext } from '../cart/CartContext';

const url = 'https://v2.api.noroff.dev/online-shop';

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { addToCart } = React.useContext(CartContext);

  useEffect(() => {
    async function getProduct() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(`${url}/${id}`);
        const json = await response.json();
        console.log('Fetched product:', json);
        setProduct(json.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setIsLoading(false);
        setIsError(true);
      }
    }

    getProduct();
  }, [id]);

  if (isLoading) {
    return <div>Loading product...</div>;
  }

  if (isError) {
    return <div>Error loading product</div>;
  }

  if (!product) {
    return <div>No product found</div>;
  }

  return (
    <div className={styles.singleProduct}>

      
      <div className={styles.productDetails}>
      {product.image && (
        <img src={product.image.url} alt={product.image.alt || product.title} className={styles.productImage} />
      )}
      <div className={styles.productInfo}>
        <h2 className={styles.productTitle}>{product.title}</h2>
      <p className={styles.productDescription}>{product.description}</p>
      <p className={styles.productPrice}>Price: ${product.price}</p>
      <p className={styles.productDiscount}> New price: ${product.discountedPrice}</p> 
      
      <button
        onClick={() => addToCart(product)} 
        className={styles.addToCartButton}
      >
        Add to Cart
      </button> 
        </div>
        </div>
      {/* Reviews */}
      <div className={styles.reviews}>
        <h3>Reviews</h3>
        {product.reviews && product.reviews.length > 0 ? (
          product.reviews.map((review) => (
            <div key={review.id} className={styles.review}>
              <p><strong>{review.username}</strong> ({review.rating}/5)</p>
              <p>{review.description}</p>
            </div>
          ))
        ) : (
          <p className={styles.review}>No reviews for this product.</p>
        )}
      </div>
      </div>
  );
}

export default SingleProduct;