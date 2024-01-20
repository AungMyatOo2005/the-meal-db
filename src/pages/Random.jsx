import axios from "axios";
import { useState, useEffect } from "react";
import FoodList from "../components/FoodList";
import { reload } from "../assets";
import Intersecting from "../hooks/Intersecting";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Random = () => {
  const [mealData, setMealData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [rotation, setRotation] = useState(360);

  const fetchRandomMeals = async () => {
    try {
      const resp = await axios.all(
        Array.from({ length: 8 }, () =>
          axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
        )
      );
      const meals = resp.map((res) => res.data.meals[0]);
      setMealData(meals);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsError(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    return () => fetchRandomMeals();
  }, []);

  useEffect(() => {
    Intersecting();
  });

  const reFetchData = () => {
    setMealData([]);
    if (mealData.length > 0) {
      fetchRandomMeals();
    }
    const reloadAnimation = document.querySelector(".for-reload");
    setIsLoading(true);
    setRotation(rotation + 360);
    reloadAnimation.style.transform = `rotate(${rotation}deg)`;
    reloadAnimation.style.transition = "1s";
  };

  return (
    <div className="min-h-[100vh] meal-list-background-image py-16 relative z-[5]">
      <div className="for-background z-[-1] backdrop-blur-[3px]"></div>
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
        <h1 className="mt-6 w-full  text-[22px] sm:text-[32px] text-white font-robotoSlab text-center">
          Random Meal
        </h1>
      </div>
      {!isLoading && !isError && (
        <FoodList mealData={mealData} isLoading={isLoading} />
      )}
      {isLoading && !isError && <Loading />}
      {!isLoading && isError && <Error errorMessage={isError} />}
    </div>
  );
};

export default Random;
