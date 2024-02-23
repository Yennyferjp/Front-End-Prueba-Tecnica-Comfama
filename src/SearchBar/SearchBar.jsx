import React, { useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className={styles.searchBarContainer}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          className={styles.searchInput}
          placeholder="Search anime..."
        />
        <button type="submit" className={styles.searchButton}>Buscar</button>
      </form>
    </div>
  );
}

export default SearchBar;
