import React, {useState } from 'react';
import './FilterPanel.css';

const FilterPanel = () => {
  // TODO: Implement state for filters
  const [filters, setFilters] = useState({
    period: 'All',
    category: 'All',
    search: ''
  })
  
  // TODO: Implement handlers for filter changes
  const handleFilterChange = (e) => {
    const {name, value } = e.target
    setFilters(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="filter-panel">
      <h2>Filter Events</h2>
      
      <div className="filter-group">
        <label htmlFor="period">Time Period:</label>
        <select
          id="period"
          name="period"
          value={filters.period}
          onChange={handleFilterChange}
          >
            <option value="All">All</option>
            <option value="Past">Past</option>
            <option value="Present">Present</option>
            <option value="Future">Future</option>
          </select>
      </div>
      
      <div className="filter-group">
        <label htmlFor="category">Category:</label>
        <select
        id="category"
        name="category"
        value={filters.category}
        onChange={handleFilterChange}
        >
          <option value="All">All</option>
          <option value="historical">Historical</option>
          <option value="cultural">Cultural</option>
          <option value="technological">Technological</option>
          <option value="fictional">Fictional</option>
        </select>
      </div>
      
      <div className="filter-group">
        <label htmlFor="search">Search:</label>
        <input
        type="text"
        id="search"
        name="search"
        value={filters.search}
        onChange={handleFilterChange}
        placeholder='Search events...'
        />
      </div>
    </div>
  );
};

export default FilterPanel;