import { createContext, useContext } from "react";

export const MovieContext = createContext("hello");

const MovieContextProvider = ({ children, movie }) => {
  return (
    <MovieContext.Provider value={movie}>{children}</MovieContext.Provider>
  );
};
export const useMovieContext = () => useContext(MovieContext);

export default MovieContextProvider;
