import axios from "axios";
import { useState, useEffect } from "react";
import { reload } from "../assets";
import Loading from "../components/Loading";
import Error from "../components/Error";
import RecipeDetails from "./RecipeDetails";

const Random = () => {
  const [mealData, setMealData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [rotation, setRotation] = useState(360);
  const fetchRandomMeals = async () => {
    try {
      const resp = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const meals = await resp.data.meals[0];
      setMealData(meals);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsError(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomMeals();
  }, []);

  const reFetchData = () => {
    setMealData([]);
    fetchRandomMeals();
    const reloadAnimation = document.querySelector(".for-reload");
    setIsLoading(true);
    setRotation(rotation + 360);
    reloadAnimation.style.transform = `rotate(${rotation}deg)`;
    reloadAnimation.style.transition = "1s";
  };

  const randomEl = (
    <div
      className="flex flex-col
       items-center"
    >
      <div
        className=" bg-white py-1 px-2 rounded-sm flex items-center justify-center gap-4 cursor-pointer select-none ml-auto mr-4 mt-4"
        onClick={reFetchData}
      >
        <span>Reload</span>
        <img src={reload} className="w-[20px] for-reload" />
      </div>
      <h1 className="mt-6 w-full text-[32px] text-white font-robotoSlab text-center">
        Random Meal
      </h1>
    </div>
  );
  return (
    <div>
      {!isLoading && !isError && (
        <RecipeDetails idMeal={mealData.idMeal} randomEl={randomEl} />
      )}
      {isLoading && !isError && <Loading />}
      {!isLoading && isError && <Error errorMessage={isError} />}
    </div>
  );
};

export default Random;
