import React from "react";
import TV from "../../img/tv.png";
import MOVIEPROJECTOR from "../../img/Movie Projector.png";
import TVSHOW from "../../img/TV Show.png";
import UPCOMING from "../../img/Calendar.png";
import LOGOUT from "../../img/Logout.png";
import HOME from "../../img/Home.png";
import { Link } from "react-router-dom";
const SideNav = () => {
  return (
    <>
      <div className="flex mb-12 justify-center items-center gap-4 p-4 ">
        <img alt="websit logo" src={TV} />
        <p className="text-[#333333] hidden lg:block font-bold text-[1.5rem]">
          Movie Box
        </p>
      </div>
      <Link className="w-full" to="/">
        <div className="flex transition cursor-pointer hover:bg-[#f8e7eb] hover:border-r-[3px] border-r-[#BE123C] w-full items-center justify-center p-4 gap-4 text-[#666666] font-semibold ">
          <img alt="home" src={HOME} />
          <p className="hidden lg:block">Home</p>
        </div>
      </Link>
      <div className="flex  transition cursor-pointer items-center hover:bg-[#f8e7eb]  bg-[#f8e7eb] border-r-[3px] border-r-[#BE123C] w-full p-4 justify-center gap-4 text-[#666666] font-semibold ">
        <img alt="movies" src={MOVIEPROJECTOR} />
        <p className="hidden lg:block">Movies</p>
      </div>
      <div className="flex transition cursor-pointer hover:bg-[#f8e7eb] hover:border-r-[3px] border-r-[#BE123C]  items-center w-full justify-center p-4 gap-4 text-[#666666] font-semibold ">
        <img alt="tv series" src={TVSHOW} />
        <p className="hidden lg:block">TV series</p>
      </div>
      <div className="flex  transition cursor-pointer hover:bg-[#f8e7eb] hover:border-r-[3px] border-r-[#BE123C]  items-center w-full justify-center p-4 gap-4 text-[#666666] font-semibold ">
        <img alt="upcoming movies" src={UPCOMING} />
        <p className="hidden lg:block">Upcoming</p>
      </div>
      <div className="hidden lg:block border-[1px] rounded-[10px] border-[#BE123C]">
        <div className="rounded-[10px] w-[170px] h-[210px] bg-[#F8E7EB] p-4">
          <p className="font-semibold">
            Play movie quizes and earn free tickets
          </p>
          <p className="font-semibold text-[#666666] mt-2">
            50k people are playing now
          </p>
          <button className="rounded-[20px] text-[#BE123C] mt-3 bg-[#f0c8d2] px-4 py-2">
            Start playing
          </button>
        </div>
      </div>
      <div className="flex transition cursor-pointer hover:bg-[#f8e7eb] hover:border-r-[3px] border-r-[#BE123C]  w-full items-center justify-center gap-4 p-4 text-[#666666] font-semibold">
        <img alt="log out" src={LOGOUT} />
        <p className="hidden lg:block">Log out</p>
      </div>
    </>
  );
};

export default SideNav;
