import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data , showItems ,setShowIndex}) => {
  //   console.log(data);

  const handleClick = () =>{
    setShowIndex();
  }
 
  return (
    <div>
      <div className="text-center mx-auto my-4 bg-gray-50 w-6/12 shadow-lg p-4">
        {/**Header */}
        <div className="flex justify-between cursor-pointer"
            onClick={handleClick}
        >
          <span className="text-lg font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
          
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
