import logo from "./logo.svg";
import "./App.css";
import MealsProvider from "./provider/MealsProvider";
import MealsList from "./components/MealList";
import Counter from "./components/Counter";
import { useReducer } from "react";
import PopDrrillong from "./components/PopDrillong";

const reducer = (state, action) => {
  if (action.type === "ride") return { money: state.money + 10 };
  if (action.type === "fuel") return { money: state.money - 50 };
};

function App() {
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>Wallet: {state.money}</h1>

      <div>
        <button onClick={() => dispatch({ type: "ride" })}>
          A new customer
        </button>

        <button onClick={() => dispatch({ type: "fuel" })}>
          Refill the tank
        </button>
        <PopDrrillong msg="This is pop drilling example" />
      </div>
      {/* <MealsProvider>
        <MealsList />
        <Counter />
      </MealsProvider> */}

      {/* ////////////////THE REDUCE STATE ///////////////// */}
    </div>
  );
}

export default App;

{
  /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
}
