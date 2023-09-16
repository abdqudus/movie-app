import React from "react";
import PLAY from "../../img/Play.png";
import PLAYSMALL from "../../img/play-button.png";
const Video = ({ imagePath }) => {
  return (
    <div className=" relative bg-[#F4F5F7] h-3/4  mb-4 lg:col-video lg:row-video sm:h-full sm:rounded-[10px]">
      <img
        className="sm:rounded-[10px] w-full h-full object-cover"
        src={`https://image.tmdb.org/t/p/w500${imagePath}`}
        alt=" movie cover"
      />
      <div className="absolute flex flex-col gap-2 justify-center items-center left-1/2  -translate-x-1/2 m-auto top-1/2 -translate-y-1/2">
        <div className="bg-[#c6b6a0] h-[40px] w-[40px] sm:h-[80px] sm:w-[80px]  flex justify-center items-center rounded-full">
          <img
            className="hidden sm:block opacity-80"
            src={PLAY}
            alt="play trailer"
          />
          <img
            className="sm:hidden backdrop-blur opacity-80"
            src={PLAYSMALL}
            alt="play trailer"
          />
        </div>

        <p className="text-white smallest:text-[10px] text-base font-Poppins sm:text-[25px]">
          Watch Trailer
        </p>
      </div>
    </div>
  );
};

export default Video;
