import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {

  const[listOfRestaurants , setlistOfRestaurants] = useState([
    {
          resName: "Meghana Foods",
          cuisine: "Biryani, North Indian, Asian",
          stars:  4.3,
          time: "30 Mins",
        },
        {
          resName: "KFC",
          cuisine: "Burger, Fast Food",
          stars: 3.5,
          time: "26 Mins",
        }
  ])
  // let listOfRestaurants = [
  //   {
  //     resName: "Meghana Foods",
  //     cuisine: "Biryani, North Indian, Asian",
  //     stars:  4.3,
  //     time: "30 Mins",
  //   },
  //   {
  //     resName: "KFC",
  //     cuisine: "Burger, Fast Food",
  //     stars: 3.5,
  //     time: "26 Mins",
  //   },
  // ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Button clicked");

            const filteredList = listOfRestaurants.filter(
              (res) => res.stars > 4
            );
            setlistOfRestaurants(filteredList);

          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
