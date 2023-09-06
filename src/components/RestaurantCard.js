// RestaurantCard.js
import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    deliveryTime,
  } = resData;
 

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3> {name} </h3>
      <h5> {cuisines.join(", ")}</h5>
      <h5> {avgRating + " stars"}</h5>
      <h5> {deliveryTime}</h5>
    </div>
  );
};

export default RestaurantCard;
