import React, { useEffect, useState } from "react";
import loupe from "../assets/loupe.png";
import PopularCategories from "../components/PopularCategories";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigator = useNavigate();

  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    inputValue && navigator(`/search/${inputValue}`);
    setInputValue("");
  };

  return (
    <div className=" home-background-img z-[5] relative">
      <div className="for-background z-[-1]"></div>
      <div className=" w-full min-h-[100vh] flex px-4 ss:px-12 sm:px-20 items-center">
        <div className="max-w-[80%] sm:max-w-[70%] md:max-w-[60%] py-5 z-[10]">
          <div>
            <h1 className="text-white font-robotoSlab text-[24px] xs:text-[32px] ss:text-[42px] sm:text-[52px] font-semibold tracking-[2px] sm:leading-[60px]">
              It is even better then <br className="md:block hidden" /> an
              expensive cookery book
            </h1>
            <p className="text-white font-roboto tracking-[1px] mt-2">
              Learn how to make your favorite restaurant's dishes
            </p>
          </div>

          <div className="w-fit mt-10 flex border-2 border-white rounded-full gap-2 text-[16px]">
            <input
              className="bg-transparent px-4 placeholder:text-white text-white outline-none tracking-[1px] w-[200px]"
              placeholder="I want to make..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              className="bg-white h-[30px] w-[30px] ss:h-[50px] ss:w-[50px] flex items-center justify-center rounded-r-full border-none outline-none"
              onClick={handleSearch}
            >
              <img src={loupe} className="w-[12px] ss:w-[20px]" />
            </button>
          </div>
        </div>
      </div>
      <PopularCategories />
    </div>
  );
};

export default Home;
