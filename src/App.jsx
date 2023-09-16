import { Routes, Route } from "react-router-dom";
import Home from "./Routes/home.jsx";
import Movie from "./Routes/movie.jsx";
export default function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index exact element={<Home />} />
        <Route path="movies/:id" element={<Movie />} />
      </Route>
    </Routes>
  );
}
