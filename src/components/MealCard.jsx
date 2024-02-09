import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/GlobalContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MealCard = ({ id }) => {
  const [data, setData] = useState({});
  const { isDarkMode } = useAppContext();
  const navigator = useNavigate();
  const fetchMeals = async () => {
    try {
      const resp = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const respData = resp.data;
      setData(respData.meals[0]);
    } catch (err) {
      console.error("Error fetching meals:", err.message);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, [id]);

  return (
    <div
      className={` ${
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
  );
};

export default MealCard;
