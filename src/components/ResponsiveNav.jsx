import React from "react";
import { NavLink } from "react-router-dom";

const ResponsiveNav = ({ setIsNavBar }) => {
  return (
    <div className=" fixed z-[-1] top-0 left-0 min-h-screen w-full bg-[#1f1007] nav-animation flex items-center justify-center">
      <nav className="flex items-center flex-col gap-3 font-roboto text-white text-[18px]">
        <NavLink to="/" onClick={() => setIsNavBar(false)}>
          Home
        </NavLink>
        <NavLink to={`/recipes/chicken`} onClick={() => setIsNavBar(false)}>
          Recipes
        </NavLink>
        <NavLink to="/random" onClick={() => setIsNavBar(false)}>
          Random
        </NavLink>
        <NavLink to="/favorite" onClick={() => setIsNavBar(false)}>
          Favorite
        </NavLink>
      </nav>
    </div>
  );
};

export default ResponsiveNav;
