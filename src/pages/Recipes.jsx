import React, { useEffect } from "react";
import FoodList from "../components/FoodList";
import Intersecting from "../hooks/Intersecting";
import Loading from "../components/Loading";
import Error from "../components/Error";

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
