function CuisineFilter({ selectedCuisine, onCuisineChange }) {
  return (
    <div className="cuisine-filter">
      <label htmlFor="cuisine">Filter by cuisine</label>

      <select
        id="cuisine"
        value={selectedCuisine}
        onChange={(event) => onCuisineChange(event.target.value)}
      >
        <option value="All">All cuisines</option>
        <option value="Indian">Indian</option>
        <option value="Italian">Italian</option>
        <option value="Chinese">Chinese</option>
        <option value="Fast Food">Fast Food</option>
        <option value="Vegetarian">Vegetarian</option>
      </select>
    </div>
  );
}

export default CuisineFilter;
