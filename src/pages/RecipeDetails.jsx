import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { back, home, youtube } from "../assets";
import AddFavorite from "../components/AddFavorite";

const RecipeDetails = () => {
  const [ingredients, setIngredients] = useState([]);
  const location = useLocation();
  const navigator = useNavigate();
  const data = location.state;

  useEffect(() => {
    const getIngredients = () => {
      const newIngredient = [];
      for (let i = 1; i <= 20; i++) {
        const ingredientName = data[`strIngredient${i}`];
        const ingredientMeasure = data[`strMeasure${i}`];

        if (ingredientName && ingredientMeasure) {
          newIngredient.push(`${ingredientName} / ${ingredientMeasure}`);
        } else {
          break;
        }
      }
      setIngredients(newIngredient);
    };
    getIngredients();
  }, [data]);

  return (
    <div className="home-background-img z-[5] relative py-20 min-h-screen px-6">
      <div className="flex items-center justify-between">
        <button
          className="hover:-translate-y-1 transition-all"
          onClick={() => navigator(-1)}
        >
          <img src={back} className="w-[40px] z-[20]" alt="Back" />
        </button>
        <AddFavorite id={data.idMeal} />
      </div>
      <div className="for-background z-[-1] backdrop-blur-[3px]"></div>

      <div className="w-full sm:px-10 md:px-16 pt-16 gap-x-5 gap-y-12 grid grid-cols-1 sm:grid-cols-2 items-center">
        <div className="w-full max-w-[300px] bg-white p-2 rounded-md justify-self-center h-fit">
          <img
            src={data.strMealThumb}
            className="w-full rounded-md"
            alt="Meal"
          />
        </div>
        <div className="w-full">
          <h1 className="text-white font-robotoSlab text-[24px] md:text-[28px] underline">
            {data.strMeal}
          </h1>
          <h4 className="text-white text-[16px] sm:text-[18px] md:text-[22px] mt-4 bg-[orangered] w-fit py-1 px-2 rounded-sm">
            Traditional <i className="underline">{data.strArea}</i> food
          </h4>
          <h4 className="text-white text-[16px] sm:text-[18px] md:text-[22px] mt-1">
            Main Category ({data.strCategory})
          </h4>
          <div className="mt-10">
            <h5 className="text-[20px] font-roboto text-white mb-3 underline">
              Ingredient / Measure
            </h5>
            <ul className=" text-black flex flex-col gap-1 font-roboto max-h-[200px] overflow-y-auto scrollbar-style py-3 px-3 bg-white rounded-[5px] tracking-[1.2px]">
              {ingredients.map((ingredient, index) => (
                <li
                  key={`${ingredient}_${index}`}
                  className=" list-disc list-inside"
                >
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-5 border-t border-white mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="w-full">
          <h5 className="text-[20px] font-roboto text-white mb-3 underline">
            Meal Instructions
          </h5>
          <p className="w-full h-[200px] overflow-y-auto scrollbar-style text-black py-2 rounded-[5px] bg-white font-roboto px-3 text-justify">
            {data.strInstructions}
          </p>
        </div>
        <div className="flex flex-col">
          <h5 className="text-[20px] font-roboto text-white mb-3 underline">
            Meal Source
          </h5>
          <div className="text-white flex items-center gap-2 font-roboto">
            Check Home Page:
            <a href={data.strSource} target="_blank">
              <button className=" py-1 px-2 rounded-sm font-roboto outline-none cursor-pointer bg-[orangered] text-white flex items-center gap-2">
                Check Source <img className="w-[20px]" src={home} />
              </button>
            </a>
          </div>
          <div className="mt-5 text-white font-roboto flex items-center gap-2">
            Watch on youtube:
            <a href={data.strYoutube} target="_blank">
              <button className=" py-1 px-2 rounded-sm font-roboto outline-none cursor-pointer bg-[orangered] text-white flex items-center gap-2">
                Youtube <img className="w-[20px]" src={youtube} />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
