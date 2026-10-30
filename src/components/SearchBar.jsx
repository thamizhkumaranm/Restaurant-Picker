function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar">
      <label htmlFor="restaurant-search">Search restaurants</label>

      <input
        id="restaurant-search"
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
