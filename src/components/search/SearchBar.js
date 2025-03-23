import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styles from './SearchBar'; // Import the CSS module

function SearchBar({ products }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query.length > 0) {
      const filteredSuggestions = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [query, products]);

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={styles.searchInput}
      />
      {suggestions.length > 0 && (
        <ul className={styles.suggestionsList}>
          {suggestions.map((suggestion) => (
            <li key={suggestion.id} className={styles.suggestionItem}>
              <Link to={`/product/${suggestion.id}`} className={styles.suggestionLink}>
                {suggestion.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar