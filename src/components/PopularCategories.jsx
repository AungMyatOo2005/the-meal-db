import React, { useEffect } from "react";
import { pork, beef, salmon, chicken, wave } from "../assets";
import { useAppContext } from "../context/GlobalContext";
import Intersecting from "../hooks/Intersecting";
import { useNavigate } from "react-router-dom";

const category = [
  { name: "chicken", src: chicken, id: 1 },
  { name: "salmon", src: salmon, id: 2 },
  { name: "pork", src: pork, id: 3 },
  { name: "beef", src: beef, id: 4 },
];

const PopularCategories = () => {
  const navigator = useNavigate();

  const { isDarkMode } = useAppContext();

  const getBackgroundColor = (categoryName) => {
    switch (categoryName) {
      case "chicken":
        return "rgb(219, 188, 86,0.5)";
      case "salmon":
        return "rgb(79, 200, 224,0.5)";
      case "pork":
        return "rgb(255, 133, 243,0.5)";
      case "beef":
        return "rgb(111, 252, 125,0.5)";
    }
  };

  useEffect(() => {
    Intersecting();
  });
  return (
    <div
      className={`w-full ${
        isDarkMode ? "bg-[#0f0f0f]" : "bg-[#c4c4c4]"
      } py-12 transition-all`}
    >
      <h1
        className={`w-full  text-center font-robotoSlab ${
          isDarkMode ? "text-white" : "text-black"
        } text-[26px] font-semibold tracking-[1.2px]`}
      >
        Recipes by popular category
      </h1>
      <p className="w-full text-center mt-2 text-gray-500 hide">
        You can choice recipes by categories
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 px-6 sm:px-16 md:px-32 gap-8 mt-10">
        {category.map((category) => (
          <div
            key={category.id}
            style={{ backgroundImage: `url(${wave})` }}
            className={` w-full bg-center bg-cover rounded-[5px] relative z-[1] flex items-center justify-center flex-col hover:translate-x-1 hover:-translate-y-2 transition-all cursor-pointer hide-card ${
              isDarkMode
                ? "shadow-[5px_5px_8px_3px_rgb(225,225,225,0.3)]"
                : "shadow-[2px_2px_10px_3px_rgb(0,0,0,0.3)]"
            }`}
            onClick={() => navigator(`/search/${category.name}`)}
          >
            <div
              className="absolute top-0 left-0 w-[100%] h-[100%] z-[-5] rounded-[5px]"
              style={{ backgroundColor: getBackgroundColor(category.name) }}
            ></div>
            <div className="p-[10px] w-full">
              <img
                src={category.src}
                className="w-[100%] max-h-[120px] h-[120px] object-contain"
              />
            </div>
            <h4 className=" uppercase pb-10 font-roboto">{category.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
