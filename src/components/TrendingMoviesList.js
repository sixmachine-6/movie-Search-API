import { Link } from "react-router-dom";
import styles from "./TrendingMoviesList.module.css";

function TrendingMoviesList({ movie }) {
  //   console.log(movie);
  const { title, poster_path, backdrop_path, id, name } = movie;
  //   console.log(poster_path);
  return (
    <Link to={`${id}`}>
      <li className={styles.movie} key={id}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://image.tmdb.org/t/p/w500${backdrop_path}`
          }
          alt={title}
        />
        <h2>{title ? title : name}</h2>
        {/* <p>{overview}</p> */}
      </li>
    </Link>
  );
}

export default TrendingMoviesList;
