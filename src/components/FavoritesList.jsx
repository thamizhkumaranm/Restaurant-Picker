function FavoritesList({ favorites, onRemoveFavorite }) {
  return (
    <aside className="favorites">
      <h2>Favorites ({favorites.length})</h2>

      {favorites.length === 0 ? (
        <p>No favorite restaurants yet.</p>
      ) : (
        <ul>
          {favorites.map((restaurant) => (
            <li key={restaurant.id}>
              <span>{restaurant.name}</span>

              <button
                type="button"
                onClick={() => onRemoveFavorite(restaurant.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}

export default FavoritesList;
