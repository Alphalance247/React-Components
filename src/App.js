import logo from "./logo.svg";
import "./App.css";
import MealsProvider from "./provider/MealsProvider";
import MealsList from "./components/MealList";
import Counter from "./components/Counter";
import { useReducer } from "react";
import PopDrrillong from "./components/PopDrillong";
import MovieList from "./componentVideo/MovieList";
import MovieCounter from "./componentVideo/MovieCounter";
import MoviesListContext from "./componentVideo/MovieListContext";
import AddMovie from "./componentVideo/AddMovie";
import AboutMe from "./REACT-NAVIGATION/AboutMe";
import Homepage from "./REACT-NAVIGATION/HomePage";
import { Routes, Route, Link } from "react-router-dom";
import CurrentMessage from "./CONDITIONAL RENDERING/CurrentMessage";
import LogInOutButton from "./Conditionalcomponent/LogInOutButton";
import asset from "./assets/alpha.JPG";
import Video from "./react-video-song/Video";

const reducer = (state, action) => {
  if (action.type === "ride") return { money: state.money + 10 };
  if (action.type === "fuel") return { money: state.money - 50 };
};

const days = new Date().getDay();
// USE REDUCER
function App() {
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);

  ////////////// CONDITIONAL STATE USING THE IF ELSE STATEMENT////////
  const time = new Date();
  const day = time.toLocaleDateString("en-us", { weekday: "long" });
  const morning = time.getHours() >= 6 && time.getHours() <= 19;
  let message;

  if (day.toLowerCase() === "monday") message = `Happy ${day}`;
  if (day.toLowerCase() === "tuesday") message = `Happy ${day}`;
  if (day.toLowerCase() === "wednesday") message = `Happy ${day}`;
  if (day.toLowerCase() === "thursday") message = `Happy ${day}`;
  if (day.toLowerCase() === "friday") message = `Happy ${day}`;
  else message = "Stay calm and keep having fun";

  const randomImgUrl = `https://picsum.photos/400/265`;

  return (
    <div className="App">
      <Video />
      <h1>{message}</h1>
      <h1>{morning ? "have you had your breakfast" : ""}</h1>
      <h1>displaying three different images</h1>
      <img height={200} src={asset} alt="alpha image" />
      <img height={200} src={require("./assets/alpha.JPG")} alt="alpha image" />
      <img height={200} src={randomImgUrl} alt="alpha image" />
      {/* <MoviesListContext>
        <MovieList />
        <AddMovie />
        <MovieCounter />
      </MoviesListContext> */}

      {/* <h1>Wallet: {state.money}</h1> */}

      {/* <div>
        <button onClick={() => dispatch({ type: "ride" })}>
          A new customer
        </button>

        <button onClick={() => dispatch({ type: "fuel" })}>
          Refill the tank
        </button>
      </div> */}

      {/* PopDrrillng */}
      {/* <PopDrrillong msg="This is pop drilling example" /> */}

      {/* /*Context API*/}

      {/* <MealsProvider>
        <MealsList />
        <Counter />
      </MealsProvider> */}

      {/* ////////////////UNderstanding the react router NAVIGATION ///////////////// */}
      <nav className="nav">
        <Link to="/" className="nav-item">
          HomePage
        </Link>

        <Link to="/about-me" className="nav-item">
          AboutMe
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>

      {/* <CurrentMessage msg={days} /> */}
      <LogInOutButton isLoggedIn={false} />
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
