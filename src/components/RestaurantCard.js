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
    <div className="res-card m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-300" >
      <img
        className="res-logo rounded-e-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-3 text-lg"> {name} </h3>
      <h5> {cuisines.join(", ")}</h5>
      <h5> {avgRating + " stars"}</h5>
      <h5> {deliveryTime}</h5>
    </div>
  );
};

export default RestaurantCard;
