import React from "react";
import VIDEO from "../../img/Rectangle 29.png";
const OtherMovies = () => {
  return (
    <div className="hidden lg:row-bottom-right lg:flex p-8 gap-1 pb-0 box-border text-white lg:col-bottom-right w-[360px]">
      <img
        alt="similar movies"
        className="w-1/3 object-cover rounded-l-[5px]"
        src={VIDEO}
      />
      <img alt="similar movies" className="w-1/3 object-cover" src={VIDEO} />
      <img
        alt="similar movies"
        className="w-1/3 object-cover rounded-r-[5px]"
        src={VIDEO}
      />
    </div>
  );
};

export default OtherMovies;
