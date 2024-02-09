import FoodList from "./FoodList";
import Loading from "./Loading";
import Error from "./Error";

const Recipes = ({ isLoading, isError, mealData, category }) => {
  return (
    <>
      {!isLoading && !isError && (
        <FoodList mealData={mealData} category={category} />
      )}
      {isLoading && !isError && <Loading />}
      {!isLoading && isError && <Error errorMessage={isError} />}
    </>
  );
};

export default Recipes;
