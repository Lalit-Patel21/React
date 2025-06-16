import { useState, useEffect } from "react";
import useRestaurant from "../utils/useRestaurant";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const listOfRestaurants = useRestaurant();
  console.log(listOfRestaurants);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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
      <div className="search-filter flex">
        <div className="flex m-4 p-4">
          <input
            type="text"
            className=" m-2 p-2 border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="m-2 p-2 bg-green-400 rounded-lg"
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

        <div className="flex m-4 p-4 items-center">
          <button
            className="px-4 py-2  bg-gray-200"
            onClick={() => {
              setFilteredRestaurants(
                listOfRestaurants.filter((res) => res.info.avgRating > 4.5)
              );
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
