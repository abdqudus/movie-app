import React from "react";
import IMDB from "../../../img/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png";
import Pepper from "../../../img/PngItem_1381056 1.png";
const AdditionalDetails = ({ title, popularity, voteAverage }) => {
  return (
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
  );
};

export default AdditionalDetails;
