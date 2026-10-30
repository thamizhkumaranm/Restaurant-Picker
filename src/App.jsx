import { useState } from "react";
import SearchBar from "./components/SearchBar";
import CuisineFilter from "./components/CuisineFilter";
import restaurants from "./data/restaurants";
import FavoritesList from "./components/FavoritesList";
import RestaurantCard from "./components/RestaurantCard";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [favoriteIds, setFavoriteIds] = useState([]);
  function toggleFavorite(id) {
    setFavoriteIds((currentIds) =>
      currentIds.includes(id)
        ? currentIds.filter((favoriteId) => favoriteId !== id)
        : [...currentIds, id],
    );
  }
  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesSearch = restaurant.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    
    

    const matchesCuisine =
      selectedCuisine === "All" || restaurant.cuisine === selectedCuisine;

    return matchesSearch && matchesCuisine;
  });
  const favoriteRestaurants = restaurants.filter((restaurant) =>
    favoriteIds.includes(restaurant.id),
  );
  return (
    <main>
      <h1>Restaurant Picker</h1>
      <p>Find a restaurant for your next meal.</p>

      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <CuisineFilter
        selectedCuisine={selectedCuisine}
        onCuisineChange={setSelectedCuisine}
      />
      <section className="restaurant-list">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              isFavorite={favoriteIds.includes(restaurant.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))
        ) : (
          <p className="empty-message">
            No restaurants match your search and cuisine.
          </p>
        )}
      </section>
      <FavoritesList
        favorites={favoriteRestaurants}
        onRemoveFavorite={toggleFavorite}
      />
    </main>
  );
}

export default App;
