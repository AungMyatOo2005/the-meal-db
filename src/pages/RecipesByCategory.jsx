import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Recipes from "./Recipes";
import CategoryBar from "../components/CategoryBar";
import axios from "axios";

const RecipesByCategory = () => {
  const [mealData, setMealData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const resp = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        );
        const respData = await resp.data;
        setMealData(respData.meals);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsError(err.message);
        setIsLoading(false);
      }
    };

    fetchMeals();
  }, [category]);


  return (
    <div className="min-h-[100vh] meal-list-background-image py-16 relative z-[5] ">
      <div className="for-background z-[-1] backdrop-blur-[3px]"></div>
      <CategoryBar category={category} />
      <h1 className="mt-6 w-full text-[32px] text-white font-robotoSlab text-center">
        Yummy foods are here
      </h1>
      <Recipes
        isLoading={isLoading}
        isError={isError}
        mealData={mealData}
        category={category}
        setIsError={setIsError}
      ></Recipes>
    </div>
  );
};

export default RecipesByCategory;
