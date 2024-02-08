import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { ContextProvider } from "./context/GlobalContext";
import Home from "./pages/Home";
import Random from "./pages/Random";
import Favorite from "./pages/Favorite";
import RecipesByCategory from "./pages/RecipesByCategory";
import RecipesByQuery from "./pages/RecipesByQuery";
import RecipeDetails from "./pages/RecipeDetails";

const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes/:category" element={<RecipesByCategory />} />
          <Route path="/search/:query" element={<RecipesByQuery />} />
          <Route path="/random" element={<Random />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/details/:id" element={<RecipeDetails />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
};

export default App;
