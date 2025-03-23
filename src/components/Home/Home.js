import React, { useContext, useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Styles from './Home.module.css';
import { CartContext } from '../cart/CartContext';
import SearchBar from '../search/SearchBar';

const url = 'https://v2.api.noroff.dev/online-shop';

function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        console.log('Fetched products:', json); 
        setProducts(Array.isArray(json.data) ? json.data : []);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setIsLoading(false);
        setIsError(true);
      }
    }

    fetchProducts();
  }, []);

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (isError) {
    return <div>Error loading products</div>;
  }

  return (
    <div>
      <h1>Product</h1>
      <SearchBar products={products} />
      <div className={Styles.productGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Home;