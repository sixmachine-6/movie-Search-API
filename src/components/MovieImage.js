import { useParams } from "react-router-dom";
import { useMovies } from "../context/moviesContext";
import { useEffect } from "react";
import styles from "./MovieDetail.module.css";
function MovieImage() {
  const { getMovie, movie } = useMovies();

  const { id } = useParams();
  useEffect(function () {
    getMovie(id);
  });
  return (
    <img
      className={styles.img}
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      alt="movie"
    />
  );
}

export default MovieImage;
