import { useMovies } from "../context/moviesContext";
import styles from "./Navbar.module.css";
function Navbar() {
  const { setFilters } = useMovies();
  return (
    <nav className={styles.nav}>
      <h1>Movie Zone</h1>
      <i onClick={() => setFilters(true)}>
        <i className="bx bx-menu"></i>
      </i>
    </nav>
  );
}

export default Navbar;
