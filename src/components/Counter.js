import { useMealsListContext } from "../provider/MealsProvider";

const Counter = function () {
  const { meals, data } = useMealsListContext();
  return (
    <div>
      <p>Number of meals today: {meals.length}</p>
      {data ? <p>{data.capital}</p> : <p>not available</p>}
    </div>
  );
};

export default Counter;
