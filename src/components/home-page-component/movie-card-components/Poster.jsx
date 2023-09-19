import React from "react";
import Like from "../../../img/Icon.png";
import { useMovieContext } from "../../../contexts/movie-context";
const Poster = () => {
  const movie = useMovieContext();
  const {
    original_title: title,
    poster_path: imgPath,
    release_date: releaseDate,
  } = movie;
  return (
    <div className="w-[15.625rem] h-[23.125rem] relative">
      <img
        alt={`${title} poster`}
        data-testid="movie-poster"
        className="w-full h-full object-cover mb-4"
        src={`https://image.tmdb.org/t/p/w500${imgPath}`}
      />
      <div className="w-7 bg-[#6B7280] flex justify-center items-center rounded-full h-7 absolute top-3 right-4">
        <img alt="like" src={Like} />
      </div>
      <p className=" inline-block text-[#9CA3AF] font-bold text-[.75rem] mb-8">
        USA
      </p>
      <span
        data-testid="movie-release-date"
        className="text-[#9CA3AF] font-bold text-[.75rem] ml-2"
      >
        {releaseDate.substring(0, 4)}
      </span>
    </div>
  );
};

export default Poster;
