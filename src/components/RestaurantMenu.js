import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);
  if (!resInfo) return <Shimmer />; // If there's no data, show the Shimmer component

  const {
    name,
    cuisines,
    costForTwoMessage,
    totalRatingsString,
    cloudinaryImageId,
  } = resInfo?.cards?.[0]?.card?.card?.info;

  const itemCards =
    resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.itemCards;

  const categories =
    resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log("this is from Menu",categories);

  if (!itemCards) return <Shimmer />; // If there's no itemCards data, show the Shimmer component

  return (
    <div className="menu border border-black border-solid rounded-lg p-6 m-6 shadow-lg">
      <div className="content-center flex flex-col items-center mb-4">
        <div className="flex items-center space-x-4">
          {" "}
          {/* 1. Used flex to align side by side */}
          <h1 className="font-bold text-4xl">{name}</h1>
          <img
            className="w-20 h-20 object-contain"
            alt="Logo"
            src={CDN_URL + cloudinaryImageId}
          />{" "}
          {/* 2. Adjusted width */}
        </div>
        <p className="text-lg mb-2">
          <span className="font-semibold">Cuisines:</span>{" "}
          {cuisines?.join(", ")}
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold">{costForTwoMessage}</span>
        </p>
        <p className="text-lg mb-4 bg-green-100 p-2 rounded">
          <span className="font-semibold">Ratings:</span> {totalRatingsString}
        </p>
      </div>
      <h2 className="font-bold text-3xl flex justify-center p-5 border-t border-gray-300 mt-4 mb-6">
        Menu
      </h2>
      {/**Categories accordian */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
// ""
