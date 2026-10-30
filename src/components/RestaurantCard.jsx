function RestaurantCard({ restaurant, isFavorite, onToggleFavorite }) {
  return (
    <article className="restaurant-card">
      <h2>{restaurant.name}</h2>
      <p>Cuisine: {restaurant.cuisine}</p>
      <p>Rating: ⭐ {restaurant.rating}</p>
      <p>Price: {restaurant.priceRange}</p>
      <button
        type="button"
        className={isFavorite ? "favorite-button active" : "favorite-button"}
        onClick={() => onToggleFavorite(restaurant.id)}
      >
        {isFavorite ? "Remove favorite" : "Add favorite"}
      </button>
    </article>
  );
}

export default RestaurantCard;
