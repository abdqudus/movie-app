import React from "react";
import MovieContextProvider from "../../contexts/movie-context";

const MovieCard = ({ movie, additionalDetails, poster, index }) => {
  return (
    <MovieContextProvider movie={movie}>
      <div
        data-testid="movie-card"
        className={`mx-auto  ${
          index == 8 ? `lg:col-start-2` : ""
        } flex flex-col justify-center items-center`}
      >
        {poster}
        {additionalDetails}
      </div>
    </MovieContextProvider>
  );
};

export default MovieCard;
