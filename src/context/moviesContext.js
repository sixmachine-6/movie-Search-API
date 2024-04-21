import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

function MovieContextProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState(false);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState([]);
  useEffect(function () {
    async function fetchCategories() {
      const res = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=db8c7e5700b0d3d0c01a7a451b8244a1&language=en-US`
      );
      const data = await res.json();
      console.log(data.genres);
      setGenres(data.genres);
    }
    fetchCategories();
  }, []);
  function getGenre(genre) {
    // console.log(genre);
    setSelectedGenre((selectedGenre) => [...selectedGenre, genre]);
    setGenres((genres) => genres.filter((el) => el.id !== genre.id));
  }
  function deleteGenre(genre) {
    // console.log(genre);
    setSelectedGenre((selectedGenre) =>
      selectedGenre.filter((el) => el.id !== genre.id)
    );
    setGenres((genres) => [...genres, genre]);
  }
  // console.log(selectedGenre);
  async function fetchMoviesByQuery(query) {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=db8c7e5700b0d3d0c01a7a451b8244a1&language=en`
    );
    const data = await res.json();
    setMovies(data.results);
  }
  useEffect(
    function () {
      async function fetchMoviesByGenres() {
        const genreID = selectedGenre.map((el) => el.id).join(",");
        const res = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=db8c7e5700b0d3d0c01a7a451b8244a1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreID}&with_original_language=en`
        );
        const data = await res.json();
        setMovies(data.results);
      }
      fetchMoviesByGenres();
    },
    [selectedGenre]
  );
  useEffect(
    function () {
      async function fetchTrendingMovies() {
        try {
          const res = await fetch(
            `https://api.themoviedb.org/3/trending/all/day?api_key=db8c7e5700b0d3d0c01a7a451b8244a1&page=${page}`
          );
          const data = await res.json();
          setMovies(data.results);
          console.log(data.results);
        } catch (err) {
          console.log(err.message);
        }
      }
      fetchTrendingMovies();
    },
    [page]
  );
  async function getMovie(id) {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=db8c7e5700b0d3d0c01a7a451b8244a1`
    );
    const data = await res.json();
    setMovie(data);
  }
  return (
    <MovieContext.Provider
      value={{
        movies,
        page,
        setPage,
        getMovie,
        movie,
        filters,
        setFilters,
        genres,
        getGenre,
        selectedGenre,
        deleteGenre,
        fetchMoviesByQuery,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

function useMovies() {
  const context = useContext(MovieContext);
  return context;
}

export { MovieContextProvider, useMovies };
