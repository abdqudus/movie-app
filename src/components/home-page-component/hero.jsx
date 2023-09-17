import { useState } from "react";
import Logo from "../../img/MovieBox.png";
import { BsSearch, BsPlayCircle } from "react-icons/bs";
const Hero = ({ hero, handleSearch }) => {
  const [movie, setMovie] = useState("");
  const popularity = Number(hero.popularity.toFixed(1));
  const voteAverage = Number(hero.vote_average) * 10;
  const backgroundImg = `https://image.tmdb.org/t/p/w500${hero.backdrop_path}`;
  const bgStyle = {
    backgroundImage: `url(${backgroundImg})`,
  };

  return (
    <header
      style={bgStyle}
      className="sm:h-[600px] bg-no-repeat bg-cover h-[25rem] bg-bottom p-8 min-w-[30rem]"
    >
      <nav className=" flex flex-col justify-between sm:flex-row sm:h-[4rem] items-center sm:items-center gap-4 h-[20rem] ">
        <div className="cursor-pointer flex justify-center gap-2 items-center self-start sm:self-center ">
          <span className="w-8 h-8 bg-[#BE123C]"></span>
          <img alt="logo" src={Logo} />
        </div>
        <div className="flex justify-between cursor-default items-center border-b-white border-b w-[17rem]">
          <input
            placeholder="What do you want to watch?"
            type="search"
            onChange={(e) => setMovie(e.target.value)}
            className=" w-4/5 text-white placeholder-white outline-none  bg-transparent b"
          />
          <BsSearch
            onClick={() => handleSearch(movie)}
            className="text-white cursor-pointer"
          />
        </div>
        <h3 className="text-white cursor-pointer  hover:underline">Sign in </h3>
      </nav>
      <div className="w-[25rem] mt-3 hidden sm:block">
        <h1 className="text-white text-[3.5em] mb-2">{hero.original_title}</h1>
        <div className="flex  items-center">
          <div className="w-8 h-6 bg-[#e6b91e] mr-2 inline-block "> </div>
          <p className="inline text-white mr-12">{`${popularity} / 100`}</p>
          <div className="h-5 w-5 bg-[#f93208] text-white inline-block mr-2"></div>
          <p className="inline text-white">{voteAverage}</p>
        </div>
        <p className="text-white leading-6">{hero.overview}</p>
        <div className="flex cursor-pointer  gap-4 items-center w-[10rem] mt-4">
          <BsPlayCircle className="text-white w-6 h-6" />
          <h3 className="text-white hover:underline">Watch Trailer</h3>
        </div>
      </div>
    </header>
  );
};
export default Hero;
