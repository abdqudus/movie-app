import React from "react";
import Button from "./Button";

const Awards = () => {
  return (
    <div className="hidden sm:flex sm:flex-col sm:items-start lg:flex-row items-end p-4 gap-4  lg:row-bottom-left lg:col-bottom-left">
      <Button
        className="lg:basis-[13%] sm:w-full"
        text="Top rated movie #65"
        type="base"
        width="small"
      />
      <div className="border-[#C7C7C7]  sm:w-full border-[1px] lg:basis-[65%] px-4 py-2 rounded-[5px] ">
        <p className="font-Poppins">Awards 9 nomination</p>
      </div>
    </div>
  );
};

export default Awards;
