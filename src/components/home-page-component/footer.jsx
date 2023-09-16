import React from "react";
import Social from "../../img/Social.png";
const Footer = () => {
  return (
    <footer className="flex items-center justify-center mt-5 mb-8">
      <div className="w-[492px] h-[145.43px] pb-6">
        <div className="w-[240px] h-[27.43px] m-auto">
          <img src={Social} alt="social-media-icons" />
        </div>
        <div className="w-[492px] sm:h-[23px] sm:flex items-center justify-between my-6">
          <p className="text-[#111827] text=[1.125rem] font-bold text-center mt-6">
            Conditions of Use
          </p>
          <p className="text-[#111827] text=[1.125rem] font-bold text-center mt-4">
            Privacy & Policy
          </p>
          <p className="text-[#111827] text=[1.125rem] font-bold text-center mt-4">
            Press Room
          </p>
        </div>
        <div className="w-[366px] h-[23px] flex justify-center items-center mx-auto mt-16 pb-8 ">
          <p className="text-[#6B7280] font-semibold text-[1.125rem] text-center">
            &copy; 2021 MovieBox by Adriana Eka Prayudha
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
