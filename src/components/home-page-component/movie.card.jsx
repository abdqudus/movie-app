import React from "react";
import IMDB from "../../img/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png";
import Pepper from "../../img/PngItem_1381056 1.png";
import Like from "../../img/Icon.png";
const MovieCard = ({
  title,
  imgPath,
  popularity,
  voteAverage,
  index,
  releaseDate,
}) => {
  return (
    <div
      data-testid="movie-card"
      className={`mx-auto  ${
        index == 8 ? `lg:col-start-2` : ""
      } flex flex-col justify-center items-center`}
      key={title}
    >
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
      <div>
        <h3 className="text-black text-[1.125rem] font-bold mt-10 mb-3">
          {title}
        </h3>
        <div className="w-[15.625rem] flex justify-between">
          <div className="flex gap-2 items-center justify-between">
            <img alt="imdb logo" src={IMDB} />
            <p>{popularity}</p>
          </div>
          <div className="flex gap-2 items-center justify-between">
            <img alt="pepper logo" src={Pepper} />
            <p>{voteAverage}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
