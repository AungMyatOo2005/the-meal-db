import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { ContextProvider } from "./context/GlobalContext";
import Intersecting from "./hooks/Intersecting";
import Home from "./pages/Home";
import Random from "./pages/Random";
import Favorite from "./pages/Favorite";
import RecipesByCategory from "./pages/RecipesByCategory";
import RecipesByQuery from "./pages/RecipesByQuery";
import RecipeDetails from "./pages/RecipeDetails";

const App = () => {
  Intersecting();
  return (
    <ContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes/:category" element={<RecipesByCategory />} />
          <Route path="/search/:query" element={<RecipesByQuery />} />
          <Route path="/random" element={<Random />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/details/:id" element={<RecipeDetails />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
