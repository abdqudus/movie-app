import React from "react";
import Button from "../movie-page-component/Button";

const WatchOptions = ({ voteAverage, voteCount }) => {
  
  return (
    <div className="hidden sm:mt-4 lg:row-more-btn sm:flex sm:flex-col sm:gap-2 p-2 pb-4 lg:flex-col  justify-between items-center lg:col-more-btn  ">
      <div className="flex gap-2 items-center p-2 justify-end w-[300px]">
        <span>⭐</span>
        <span>{voteAverage} |</span>
        <span>{voteCount}</span>
      </div>
      <Button text="See Showtimes" type="base" />
      <Button text="More watch options" />
    </div>
  );
};

export default WatchOptions;
