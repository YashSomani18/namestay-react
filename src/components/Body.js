import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();

      const restaurantsData =
        data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      console.log(restaurantsData);
      setListOfRestaurants(restaurantsData || []);
      setFilterRestaurant(restaurantsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (useOnlineStatus === false) {
    return (
      <div>
        <h1>Looks Like you are not connected to your internet connection</h1>
      </div>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body py-4 mx-2">
      <div className="filter flex items-center space-x-4">
        <div className="search flex items-center space-x-2">
          <input
            type="text"
            className="p-2 border border-black rounded-md"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2  bg-green-200 hover:bg-green-300 rounded-xl transition"
            onClick={() => {
              console.log(searchText);
              let newList = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });

              console.log(newList);
              setFilterRestaurant(newList);
            }}
          >
            Search
          </button>
        </div>
        <div className="">
          <button
            className="px-4 py-2 bg-blue-200 hover:bg-blue-300 rounded-xl transition"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.2
              );
              console.log("Button Clicked");
              setFilterRestaurant(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
