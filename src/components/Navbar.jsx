import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { food, sun, moon, menu, close } from "../assets";
import { useAppContext } from "../context/GlobalContext";
import ResponsiveNav from "./ResponsiveNav";

const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useAppContext();
  const [isNavBar, setIsNavBar] = useState(false);
  return (
    <div className="fixed top-0 left-0 z-[30] px-4 sm:px-8 py-2 flex w-full items-center justify-between bg-[#0000003f] backdrop-blur-[8px]">
      <div className="flex items-center gap-3">
        <img src={food} className="w-[26px] sm:w-[40px]" />
        <h1 className="text-white text-[20px]  sm:text-[26px] md:text-[32px] font-robotoSlab">
          Food Hub
        </h1>
      </div>
      <nav className="text-white items-center gap-5 font-roboto relative hidden ss:flex">
        <NavLink to="/">Home</NavLink>
        <NavLink to={`/recipes/chicken`}>Recipes</NavLink>
        <NavLink to="/random">Random</NavLink>
        <NavLink to="/favorite">Favorite</NavLink>
        <div className="nav-bottom-bar"></div>
      </nav>
      <div className="flex items-center gap-5">
        <button
          className="cursor-pointer"
          onClick={() => setIsDarkMode((pre) => !pre)}
        >
          <img src={isDarkMode ? sun : moon} className="w-[24px] ss:w-[30px]" />
        </button>
        <button
          className="cursor-pointer block ss:hidden"
          onClick={() => setIsNavBar((pre) => !pre)}
        >
          <img src={isNavBar ? close : menu} className="w-[24px] ss:w-[30px]" />
        </button>
      </div>
      {isNavBar && (
        <div className=" ss:hidden block absolute">
          <ResponsiveNav setIsNavBar={setIsNavBar} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
