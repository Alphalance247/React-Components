import { useMovieContext } from "./MovieListContext";
import Movie from "./Movie";

const MovieList = function () {
  const [movies] = useMovieContext();
  return (
    <div>
      {movies.map((movie) => (
        <Movie name={movie.name} price={movie.price} key={movie.id} />
      ))}
    </div>
  );
};
export default MovieList;
