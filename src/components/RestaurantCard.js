// RestaurantCard.js
import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = ({ resData }) => {
  const { resName, cuisine, stars, time } = resData;
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" alt="res-logo" src={CDN_URL}></img>
      <h3> {resName} </h3>
      <h5> {cuisine}</h5>
      <h5> {stars + " stars"}</h5>
      <h5> {time}</h5>
    </div>
  );
};

export default RestaurantCard;
