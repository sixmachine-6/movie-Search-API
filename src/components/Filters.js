import { useMovies } from "../context/moviesContext";
import styles from "./Filters.module.css";
function Filters() {
  const { genres, getGenre, selectedGenre, deleteGenre, setFilters } =
    useMovies();
  console.log(genres);
  return (
    <div className={styles.listItems}>
      <i className="bx bx-cut" onClick={() => setFilters(false)}></i>
      <h2 className={styles.filter}>Filters by Genre</h2>
      <ul className={styles.selectedList}>
        {selectedGenre &&
          selectedGenre.map((el) => (
            <li onClick={() => deleteGenre(el)}>{el.name}</li>
          ))}
      </ul>
      <ul className={styles.list}>
        {genres &&
          genres.map((el) => <li onClick={() => getGenre(el)}>{el.name}</li>)}
      </ul>
    </div>
  );
}

export default Filters;
