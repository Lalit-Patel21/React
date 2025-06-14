import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(MENU_API + resId);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const json = await response.json();
      setResInfo(json?.data?.cards);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return resInfo;
};
export default useRestaurantMenu;
