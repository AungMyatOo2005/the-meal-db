import React, { useEffect } from "react";
import FoodList from "./FoodList";
import Intersecting from "../hooks/Intersecting";
import Loading from "./Loading";
import Error from "./Error";

const Recipes = ({ isLoading, isError, mealData, category, setIsError }) => {
  useEffect(() => {
    Intersecting();
  });

  return (
    <>
      {!isLoading && !isError && (
        <FoodList
          mealData={mealData}
          isLoading={isLoading}
          category={category}
          setIsError={setIsError}
        />
      )}
      {isLoading && !isError && <Loading />}
      {!isLoading && isError && <Error errorMessage={isError} />}
    </>
  );
};

export default Recipes;
