import React from "react";
import MealCard from "./MealCard";

const FoodList = ({ mealData, category, setIsError }) => {
  return (
    <>
      {mealData ? (
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 px-6 sm:px-10 md:px-16 gap-6 sm:gap-10 md:gap-16 pt-10">
          {mealData.map((data, index) => (
            <MealCard
              key={`${data.idMeal}_${index}`}
              id={data.idMeal}
              setIsError={setIsError}
            />
          ))}
        </div>
      ) : (
        <h1 className="w-full text-center text-red-600 text-[16px] mt-32 sm:text-[22px] md:text-[32px] font-robotoSlab">
          {category} is not fount in the data base!
        </h1>
      )}
    </>
  );
};

export default FoodList;
