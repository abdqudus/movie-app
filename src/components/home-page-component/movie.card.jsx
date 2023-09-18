import React from "react";

import Poster from "./movie-card-components/Poster";
import AdditionalDetails from "./movie-card-components/additional-details";
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
    >
      <Poster releaseDate={releaseDate} imgPath={imgPath} title={title} />
      <AdditionalDetails
        popularity={popularity}
        voteAverage={voteAverage}
        title={title}
      />
    </div>
  );
};

export default MovieCard;
