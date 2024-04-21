import { useEffect, useState } from "react";
import { useMovies } from "../context/moviesContext";
import styles from "./Search.module.css";

function Search() {
  const [query, setQuery] = useState("");
  const { fetchMoviesByQuery } = useMovies();
  useEffect(
    function () {
      if (!query) return;
      fetchMoviesByQuery(query);
    },
    [query]
  );
  return (
    <div className={styles.inputBox}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search for Movies"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default Search;
