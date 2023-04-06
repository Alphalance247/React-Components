import React from "react";

const MovieProvider = React.createContext();

const allMovies = [
  {
    name: "Harry potter",
    price: "$10",
    id: "237634",
  },
  {
    name: "Game of thrones",
    price: "$30",
    id: "23398684",
  },
  {
    name: "Prison Break",
    price: "$15",
    id: "23384",
  },
  {
    name: "Walking dead",
    price: "$100",
    id: "993636",
  },
];

const MoviesListContext = ({ children }) => {
  const [movies, setMovies] = React.useState(allMovies);

  return (
    <div>
      <MovieProvider.Provider value={[movies, setMovies]}>
        {children}
      </MovieProvider.Provider>
    </div>
  );
};

export const useMovieContext = () => React.useContext(MovieProvider);

export default MoviesListContext;
