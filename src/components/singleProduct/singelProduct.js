import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './singleProduct.module.css';

const url = 'https://v2.api.noroff.dev/online-shop';

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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
      <h2 className={styles.productTitle}>{product.title}</h2>
      {product.image && (
        <img src={product.image.url} alt={product.image.alt || product.title} className={styles.productImage} />
      )}
      <p className={styles.productDescription}>{product.description}</p>
      <p className={styles.productPrice}>Price: ${product.price}</p>
    </div>
  );
}

export default SingleProduct;