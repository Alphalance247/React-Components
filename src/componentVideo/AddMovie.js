import React from "react";
import { useMovieContext } from "./MovieListContext";

const AddMovie = function () {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [movies, setMovies] = useMovieContext();
  console.log(setMovies);

  const addMovie = (e) => {
    e.preventDefault();
    setMovies([{ name: name }]);
    // setMovies((nextMovies) => [...nextMovies, { name: name, price: price }]);
  };

  return (
    <div>
      <form onSubmit={addMovie}>
        <input
          type="text"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          value={price}
          name="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default AddMovie;
