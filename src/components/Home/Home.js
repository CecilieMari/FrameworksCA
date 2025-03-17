import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const url = 'https://v2.api.noroff.dev/online-shop';

function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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
      <h1>Home</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;