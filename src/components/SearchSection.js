import React, { useState, useCallback } from 'react';
import { FiSearch, FiAlertCircle } from 'react-icons/fi';
import { validateSearchQuery, sanitizeInput } from '../utils/validation';
import './SearchSection.css';

const SearchSection = ({ onSearch, onFilterChange }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchError, setSearchError] = useState('');

  const filters = [
    { id: 'all', label: 'all' },
    { id: 'rto', label: 'RTO Related' },
    { id: 'identity', label: 'Identity Document' },
    { id: 'business', label: 'Business' },
    { id: 'close', label: 'Close Filters' }
  ];

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    setSearchError('');
    
    const sanitizedQuery = sanitizeInput(searchQuery);
    const validation = validateSearchQuery(sanitizedQuery);
    
    if (!validation.isValid) {
      setSearchError(validation.message);
      return;
    }
    
    if (onSearch) {
      onSearch(sanitizedQuery);
    }
  }, [searchQuery, onSearch]);

  const handleInputChange = useCallback((e) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    // Clear error when user starts typing
    if (searchError) {
      setSearchError('');
    }
  }, [searchError]);

  const handleFilterClick = useCallback((filterId) => {
    if (filterId === 'close') {
      setActiveFilter('all');
      if (onFilterChange) {
        onFilterChange('all');
      }
    } else {
      setActiveFilter(filterId);
      if (onFilterChange) {
        onFilterChange(filterId);
      }
    }
  }, [onFilterChange]);

  return (
    <section className="search-section">
      <div className="container">
        <form className="search-form" onSubmit={handleSearch}>
          <div className="search-input-container">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={handleInputChange}
              className={`search-input ${searchError ? 'error' : ''}`}
              aria-label="Search for services"
              aria-describedby={searchError ? 'search-error' : undefined}
            />
          </div>
          <button type="submit" className="btn btn-primary search-btn">
            Search
          </button>
        </form>
        
        {searchError && (
          <div className="search-error" id="search-error" role="alert">
            <FiAlertCircle className="error-icon" />
            <span>{searchError}</span>
          </div>
        )}
        
        <div className="filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`btn btn-outline filter-btn ${
                activeFilter === filter.id ? 'active' : ''
              }`}
              onClick={() => handleFilterClick(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
