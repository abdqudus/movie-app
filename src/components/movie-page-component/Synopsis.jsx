import React from "react";

const Synopsis = ({ overview, runtime, title, genres, releaseDate }) => {
  const releaseYear = releaseDate.substring(0, 4);
  return (
    <div className=" lg:row-cast-and-info lg:col-cast-and-info sm:mt-4 font-Poppins">
      <div className="gap-4 lg:gap-2 lg:flex sm:justify-between">
        <p
          data-testid="movie-title"
          className="text-[#404040] font-Poppins text-[23px] font-bold"
        >
          {title}
        </p>
        <p
          data-testid="movie-release-date"
          className="text-[#404040] font-Poppins text-[23px] font-bold"
        >
          {releaseYear}
        </p>
        <p
          data-testid="movie-runtime"
          className="text-[#404040] font-Poppins text-[23px] font-bold"
        >
          {`${runtime} minutes`}
        </p>

        <p className="flex lg:justify-center lg:items-center md:flex-row">
          {genres.map((genre) => (
            <span
              key={genre.id}
              className="border-[#F4F5F7]  border-[2px] px-2 rounded-full py-1 bg-white text-red-500"
            >
              {genre.name}
            </span>
          ))}
        </p>
      </div>
      <p
        data-testid="movie-overview"
        className="mt-4 text-[20px] text-[#333333]"
      >
        {overview}
      </p>
    </div>
  );
};

export default Synopsis;
