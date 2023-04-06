import { useMovieContext } from "./MovieListContext";

const MovieCounter = () => {
  const [movies] = useMovieContext();

  return <h1>Number of movie is {movies.length} </h1>;
};

export default MovieCounter;
