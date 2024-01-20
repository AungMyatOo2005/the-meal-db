import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Intersecting from "../hooks/Intersecting";
import Recipes from "../components/Recipes";
import { back } from "../assets";

const RecipesByQuery = () => {
  const [mealData, setMealData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { query } = useParams();
  const navigator = useNavigate();
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const resp = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
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
  }, [query]);

  useEffect(() => {
    Intersecting();
  });
  return (
    <div className="min-h-[100vh] meal-list-background-image py-16 relative z-[5] ">
      <button className=" ml-4 mt-4" onClick={() => navigator(-1)}>
        <img src={back} className="w-[40px] z-[20]" />
      </button>
      <div className="for-background z-[-1] backdrop-blur-[3px]"></div>
      <h1 className="mt-4 w-full  text-[22px] sm:text-[32px] text-white font-robotoSlab text-center">
        Yummy foods are here
      </h1>
      <Recipes
        isLoading={isLoading}
        isError={isError}
        mealData={mealData}
        category={query}
        setIsError={setIsError}
      ></Recipes>
    </div>
  );
};

export default RecipesByQuery;
