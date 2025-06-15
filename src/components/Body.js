import { useState, useEffect } from "react";
import useRestaurant from "../utils/useRestaurant";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const listOfRestaurants = useRestaurant();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Ensure filtered restaurants update only when listOfRestaurants changes
  useEffect(() => {
    setFilteredRestaurants(listOfRestaurants);
  }, [listOfRestaurants]);

  // Debouncing for search input (reduces unnecessary renders)
  const [debouncedSearchText, setDebouncedSearchText] = useState(searchText);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, 300); // Delay to prevent excessive filtering

    return () => clearTimeout(timer);
  }, [searchText]);

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus)
    return (
      <>
        <h1>Looks like you are offline!!</h1>
        <h2>please check your internet connection!!</h2>
      </>
    );
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filteredResults = listOfRestaurants.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(debouncedSearchText.toLowerCase())
              );
              setFilteredRestaurants(filteredResults);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            setFilteredRestaurants(
              listOfRestaurants.filter((res) => res.info.avgRating > 4.5)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
