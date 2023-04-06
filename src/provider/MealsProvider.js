import React from "react";

const MealsContext = React.createContext();

const todaysMeal = ["Baked Beans", "Baked Sweet Potatoes", "Baked Potaoes"];

const MealsProvider = ({ children }) => {
  const [meals, setMealList] = React.useState(todaysMeal);
  // const [data, setData] = React.useState(null);

  // const fecthData = async function () {
  //   const res = await fetch(`https://restcountries.com/v3.1/name/nigeria`);
  //   const [data] = await res.json();
  //   if (!data) console.log(`${data.status}`);
  //   setData(data);
  // };
  // fecthData();

  return (
    <div>
      <MealsContext.Provider value={{ meals }}>
        {children}
        {/* <button onClick={fecthData}>fecthData</button> */}
      </MealsContext.Provider>
    </div>
  );
};

export const useMealsListContext = () => React.useContext(MealsContext);

export default MealsProvider;
