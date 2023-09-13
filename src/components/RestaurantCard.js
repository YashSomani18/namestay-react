// RestaurantCard.js
import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } = resData;

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="res-card m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-300">
      <img
        className="res-logo rounded-e-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-3 text-lg"> {name} </h3>
      <h5> {cuisines.join(", ")}</h5>
      <h5> {avgRating + " stars"}</h5>
      <h5> {resData.sla.deliveryTime + " minutes"} </h5>
      <h5>{costForTwo} </h5>
      <h5> User: {loggedInUser}</h5>
    </div>
  );
};

export const isOpen = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="m-2 p-2 bg-black text-white rounded-lg absolute text-sm">
          Is Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
