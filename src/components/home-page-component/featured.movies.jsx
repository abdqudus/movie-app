import React, { useState } from "react";

import More from "../../img/more.png";
import MovieCard from "./movie.card";
import { Link } from "react-router-dom";
const FeaturedMovies = ({ movies }) => {
  const [numberOfMovies, setNumberOfMovies] = useState(10);
  const handleNoOfMovies = () => {
    if (numberOfMovies == 10) {
      setNumberOfMovies(20);
    } else {
      setNumberOfMovies(10);
    }
  };
  return (
    <section className="mt-12  p-8 max-w-[1200px] mx-auto">
      <div className="h-16 mb-12 sm:flex justify-between items-center">
        <h3 className="text-[2.25rem] text-black text-center sm:text-left font-dm-sans font-medium">
          Featured Movies
        </h3>
        <div className=" gap-2 justify-center items-center hidden sm:flex">
          <p
            onClick={handleNoOfMovies}
            className="text-[#BE123C] text-[1.5rem] hover:underline cursor-pointer "
          >
            {numberOfMovies == 10 ? "See More" : "See Less"}
          </p>
          <img
            alt={numberOfMovies == 10 ? "See More movies" : "See Less movies"}
            className="w-3"
            src={More}
          />
        </div>
      </div>
      <div className="grid grid-cols-grid-cols gap-x:2 sm:gap-x-4 gap-y-16 ">
        {movies
          .filter(
            (m, i) =>
              i !== 9 &&
              i <= numberOfMovies &&
              (m.backdrop_path || m.poster_path)

            // I filter out the one whose index is 9 cos i used it for the cover photo already.
            // I filtered whatever is not within a numeric range cos of show more and show less functionality
            // I also filtered whatever doesn't have any picture within it
          )
          .map((movie, i) => {
            const popularity = Number(movie.popularity.toFixed(1));
            const voteAverage = Number(movie.vote_average) * 10;
            return (
              <Link key={movie.id} to={`movies/${movie.id}`}>
                <MovieCard
                  imgPath={movie.backdrop_path || movie.poster_path}
                  title={movie.original_title}
                  voteAverage={voteAverage}
                  popularity={popularity}
                  index={i}
                  releaseDate={movie.release_date}
                />
              </Link>
            );
          })}
      </div>
      <div className=" gap-2 flex  justify-center items-center sm:hidden mt-4">
        <p
          onClick={handleNoOfMovies}
          className="text-[#BE123C] text-[1.5rem] hover:underline cursor-pointer "
        >
          {numberOfMovies == 10 ? "See More" : "See Less"}
        </p>
        <img
          alt={numberOfMovies == 10 ? "See More movies" : "See Less movies"}
          className="w-3"
          src={More}
        />
      </div>
    </section>
  );
};

export default FeaturedMovies;
