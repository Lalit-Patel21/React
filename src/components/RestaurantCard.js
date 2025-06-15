import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    cloudinaryImageId,
    costForTwo,
    avgRatingString,
    locality,
    areaName,
  } = resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} starts</h4>
      <h4>{costForTwo}</h4>
      <h4>{locality}</h4>
      <h4>{areaName} </h4>
    </div>
  );
};
export default RestaurantCard;
