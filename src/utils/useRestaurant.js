import { useEffect, useState } from "react";
import { RESTAURANT_API } from "./constants";

const useRestaurant = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    let isMounted = true; // Prevents state update on unmounted components

    const fetchData = async () => {
      try {
        const response = await fetch(RESTAURANT_API);
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);

        const json = await response.json();

        const restaurants =
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || [];

        if (isMounted) setListOfRestaurants(restaurants);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {
      isMounted = false; // Cleanup function to prevent memory leaks
    };
  }, []);

  return listOfRestaurants;
};

export default useRestaurant;
