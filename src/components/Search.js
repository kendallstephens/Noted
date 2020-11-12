import React from 'react';

const Search = ({handleSearch}) => {
  return (
    <div className="filter">
      <input
        onChange = {e => handleSearch(e.target.value)}
        id="search-bar"
        type="text"
        placeholder="Search Notes"
      />
    </div>
  );
}

export default Search;
