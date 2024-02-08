import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/GlobalContext";
import Intersecting from "../hooks/Intersecting";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MealCard = ({ id, setIsError }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { isDarkMode } = useAppContext();
  const navigator = useNavigate();
  const fetchMeals = async () => {
    try {
      const resp = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const respData = resp.data;
      setData(respData.meals[0]);
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching meals:", err.message);
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    return () => fetchMeals();
  }, [id]);

  useEffect(() => {
    Intersecting();
  });

  return (
    <>
      {!isLoading && (
        <div
          className={`hide-card ${
            isDarkMode ? "bg-[#0f0f0f] text-white" : "bg-[#c4c4c4] text-black"
          } border-2 border-white rounded-md hover:-translate-y-1 hover:scale-105 transition-all w-full max-w-[360px] justify-self-center`}
          onClick={() => navigator(`/details/${id}`)}
        >
          <img
            src={data.strMealThumb}
            className="w-full object-contain rounded-t-md"
            alt={data.strMeal}
            loading="lazy"
          />
          <div className="px-4 py-3 ">
            <h1 className="text-[22px] font-roboto tracking-[1.2px]">
              {data?.strMeal?.length > 10
                ? `${data.strMeal.slice(0, 10)}...`
                : data?.strMeal}
            </h1>
            <p className="font-roboto text-[12px] tracking-[1px]">
              Traditional <i className="underline">{data.strArea}</i> Food
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default MealCard;
