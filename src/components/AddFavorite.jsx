import React, { useEffect, useState } from "react";
import { heart } from "../assets";
const AddFavorite = ({ id }) => {
  const [lsData, setLsData] = useState([]);

  const isHave = lsData.find((mealId) => mealId === id) ? true : false;

  useEffect(() => {
    const mealIds = JSON.parse(localStorage.getItem("Favorite_Meals")) || [];
    setLsData(mealIds);
  }, []);

  const handleFavorite = () => {
    if (!isHave) {
      const updateLs = [...lsData, id];
      localStorage.setItem("Favorite_Meals", JSON.stringify(updateLs));
      setLsData(updateLs);
    } else {
      const removeLs = lsData.filter((mealId) => mealId !== id);
      localStorage.setItem("Favorite_Meals", JSON.stringify(removeLs));
      setLsData(removeLs);
    }
  };
  return (
    <button
      className={` ${
        isHave && "bg-[orangered]"
      } py-1 px-2 text-white font-roboto rounded-sm flex items-center gap-2 border-2 border-[orangered]`}
      onClick={handleFavorite}
    >
      Add to favorite
      <img src={heart} className="w-[20px]" />
    </button>
  );
};

export default AddFavorite;
