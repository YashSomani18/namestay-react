import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) return <Shimmer />; // If there's no data, show the Shimmer component

  const { name, cuisines, costForTwoMessage, totalRatingsString } =
    resInfo?.cards?.[0]?.card?.card?.info;

  const itemCards =
    resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.itemCards;

  if (!itemCards) return <Shimmer />; // If there's no itemCards data, show the Shimmer component

  return (
    <div className="menu border border-black border-solid rounded-lg p-6 m-6 shadow-lg">
      <h1 className="font-bold text-4xl flex justify-center mb-4">{name}</h1>
      <p className="text-lg mb-2">
        <span className="font-semibold">Cuisines:</span> {cuisines?.join(", ")} 
      </p>
      <p className="text-lg mb-2">
        <span className="font-semibold">{costForTwoMessage}</span>
      </p>
      <p className="text-lg mb-4 bg-green-100 p-2 rounded">
        <span className="font-semibold">Ratings:</span> {totalRatingsString}
      </p>
      <h2 className="font-bold text-3xl flex justify-center p-5 border-t border-gray-300 mt-4 mb-6">Menu</h2>
      <ul className="bg-gray-100 p-4 rounded-lg">
        {itemCards.map((item) => (
          <li
            key={item.card.info.id}
            className="my-2 p-2 hover:bg-gray-200 rounded transition duration-200 ease-in-out"
          >
            <span className="font-semibold">{item.card.info.name}</span> - Rs{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
