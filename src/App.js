import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { MovieContextProvider } from "./context/moviesContext";
import MovieDetails from "./pages/MovieDetails";

export default function App() {
  return (
    <MovieContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </MovieContextProvider>
  );
}
