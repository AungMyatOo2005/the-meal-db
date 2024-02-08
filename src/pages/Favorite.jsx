import React, { useEffect, useState } from "react";
import MealCard from "../components/MealCard";

const Favorite = () => {
  const [lsData, setLsData] = useState([]);

  useEffect(() => {
    const mealIds = JSON.parse(localStorage.getItem("Favorite_Meals")) || [];
    setLsData(mealIds);
  }, []);
  return (
    <div className="min-h-[100vh] meal-list-background-image py-16 relative z-[5] ">
      <div className="for-background z-[-1] backdrop-blur-[3px]"></div>
      {!!lsData.length ? (
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 px-6 sm:px-10 md:px-16 gap-6 sm:gap-10 md:gap-16 pt-10">
          {lsData.map((id) => (
            <MealCard key={id} id={id} />
          ))}
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
