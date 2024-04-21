import styles from "./MovieDetail.module.css";
import { useMovies } from "../context/moviesContext";
function MovieDetail() {
  const { movie } = useMovies();
  const {
    genres,
    overview,
    production_companies,
    production_countries,
    runtime,
    tagline,
    title,
    budget,
    revenue,
  } = movie;
  return (
    <div className={styles.movieDetail}>
      <ul className={styles.genres}>
        {genres && genres.map((el) => <li key={el.id}>{el.name}</li>)}
      </ul>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.tagline}>"{tagline}"</p>
      <ul className={styles.com}>
        {production_companies &&
          production_companies.map((el) => (
            <li>
              <img
                src={`https://image.tmdb.org/t/p/w500/${el.logo_path}`}
                alt="logo"
              />
              <h2>{el.name}</h2>
            </li>
          ))}
      </ul>
      <ul>
        <li>
          <h2>{runtime}</h2>
          <h3>Runtime</h3>
        </li>
        <li>
          <h2>{budget}</h2>
          <h3>budget</h3>
        </li>
        <li>
          <h2>{revenue}</h2>
          <h3>revenue</h3>
        </li>
      </ul>
      <p>{overview}</p>
    </div>
  );
}

export default MovieDetail;
