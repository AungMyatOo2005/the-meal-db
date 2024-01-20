import React, { useEffect, useState } from "react";
import FoodList from "../components/FoodList";
import MealCard from "../components/MealCard";
import { useNavigate } from "react-router-dom";

const Favorite = () => {
  const [lsData, setLsData] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    const mealIds = JSON.parse(localStorage.getItem("Favorite_Meals")) || [];
    setLsData(mealIds);
  }, []);
  return (
    <div className="min-h-[100vh] meal-list-background-image py-16 relative z-[5] ">
      <div className="for-background z-[-1] backdrop-blur-[3px]"></div>
      {!!lsData.length ? (
        <div>
          <h1 className="mt-6 w-full text-[22px] sm:text-[32px] text-white font-robotoSlab text-center">
            Yummy foods are here
          </h1>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 px-6 sm:px-10 md:px-16 gap-6 sm:gap-10 md:gap-16 pt-10">
            {lsData.map((id) => (
              <MealCard key={id} id={id} />
            ))}
          </div>
        </div>
      ) : (
        <h1 className="text-white font-robotoSlab text-[24px] text-center pt-32">
          Nothing favorite meals
        </h1>
      )}
    </div>
  );
};

export default Favorite;
