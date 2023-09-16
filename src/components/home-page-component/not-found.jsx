import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[20vh] ">
      <p className="text-[2opx] font-bold font-Poppins">Movie not found </p>
      <p className="text-[2opx] hover:border-b-[2px] hover:border-b-red-500 font-bold cursor-pointer  font-Poppins hover:decoration-underline">
        Back to homepage
      </p>
    </div>
  );
};

export default NotFound;
