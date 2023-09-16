import React from "react";

const Button = ({ text, type, width }) => {
  const style =
    type == "base" ? `bg-[#BE123C] text-white` : "bg-[#C4C4C4] text-[#333333]";
  const length = width ? `w-[250px] ` : `w-[300px] text-[20px]`;

  return (
    <button
      className={` ${style}  px-4 py-2 ${length}  rounded-[5px] border-[#BE123C] font-Poppins`}
    >
      {text}
    </button>
  );
};

export default Button;
