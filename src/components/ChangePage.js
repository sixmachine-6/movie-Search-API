import { useMovies } from "../context/moviesContext";
import styles from "./ChangePage.module.css";
function ChangePage() {
  const { page, setPage } = useMovies();
  return (
    <div className={styles.page}>
      <button
        className={styles.button}
        disabled={page === 0}
        onClick={() => setPage(page - 1)}
      >
        &larr;
      </button>
      <p>{page}/ 10</p>
      <button
        className={styles.button}
        disabled={page === 10}
        onClick={() => setPage(page + 1)}
      >
        &rarr;
      </button>
    </div>
  );
}

export default ChangePage;
