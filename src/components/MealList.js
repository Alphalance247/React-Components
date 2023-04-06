import { useMealsListContext } from "../provider/MealsProvider";

const MealsList = function () {
  const { meals } = useMealsListContext();
  return (
    <div>
      <h1>Meals List Using Context API</h1>
      {meals.map((meal, index) => (
        <h2 key={index}>{meal}</h2>
      ))}

      {/* {data ? <p>{data.capital} </p> : <p>No data yet</p>} */}
    </div>
  );
};

export default MealsList;
