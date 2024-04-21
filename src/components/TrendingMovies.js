import { useMovies } from "../context/moviesContext";
import TrendingMoviesList from "./TrendingMoviesList";
import styles from "./TrendingMoviesList.module.css";
function TrendingMovies() {
  const { movies } = useMovies();
  // console.log(movies);
  //   console.log("aman");
  return (
    <>
      <h2 className={styles.heading}>Trending Movies</h2>
      <ul className={styles.movieList}>
        {movies.map((el) => (
          <TrendingMoviesList movie={el} />
        ))}
      </ul>
    </>
  );
}

export default TrendingMovies;
