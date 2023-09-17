import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[20vh] ">
      <p className="text-[20px] font-bold font-Poppins my-[4rem]">
        Movie not found{" "}
      </p>
      <p className="text-[20px] hover:border-b-[2px] hover:border-b-red-500 font-bold cursor-pointer mb-[2rem] font-Poppins hover:decoration-underline">
        Try searching for another movie
      </p>
    </div>
  );
};

export default NotFound;
