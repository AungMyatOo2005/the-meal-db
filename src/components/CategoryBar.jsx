import React from "react";
import { useNavigate } from "react-router-dom";
import categoryArr from "../constant";

const CategoryBar = ({ category }) => {
  const navigator = useNavigate();
  return (
    <div className="w-full px-5">
      <div className="w-full max-w-[500px] mx-auto flex items-center mt-10 gap-5 overflow-x-scroll px-2 scrollbar-style py-2">
        {categoryArr.map((categories) => (
          <div
            key={categories.idCategory}
            className={` py-1 px-2 rounded-sm cursor-pointer select-none ${
              category === categories.strCategory.toLowerCase()
                ? "bg-[orangered] text-white"
                : "bg-gray-300 text-black"
            }`}
            onClick={() =>
              navigator(`/recipes/${categories.strCategory.toLowerCase()}`)
            }
          >
            {categories.strCategory}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
