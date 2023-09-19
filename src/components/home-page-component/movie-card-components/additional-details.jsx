import React from "react";
import IMDB from "../../../img/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png";
import Pepper from "../../../img/PngItem_1381056 1.png";
import { useMovieContext } from "../../../contexts/movie-context";
const AdditionalDetails = () => {
  const {
    original_title: title,
    popularity,
    vote_average: voteAverage,
  } = useMovieContext();

  return (
    <div>
      <h3 className="text-black text-[1.125rem] font-bold mt-10 mb-3">
        {title}
      </h3>
      <div className="w-[15.625rem] flex justify-between">
        <div className="flex gap-2 items-center justify-between">
          <img alt="imdb logo" src={IMDB} />
          <p>{Number(popularity).toFixed(1)}</p>
        </div>
        <div className="flex gap-2 items-center justify-between">
          <img alt="pepper logo" src={Pepper} />
          <p>{Number(voteAverage) * 10}</p>
        </div>
      </div>
    </div>
  );
};

export default AdditionalDetails;
