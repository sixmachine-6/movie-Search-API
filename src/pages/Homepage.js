import Filters from "../components/Filters";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import TrendingMovies from "../components/TrendingMovies";
import ChangePage from "../components/ChangePage";
import { useMovies } from "../context/moviesContext";
export default function Homepage() {
  const { filters } = useMovies();
  return (
    <>
      <Navbar />
      {filters && <Filters />}
      <Search />
      <TrendingMovies />
      <ChangePage />
    </>
  );
}
