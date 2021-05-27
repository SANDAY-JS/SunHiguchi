import React, { useContext, useEffect, useState } from "react";
import WaveSvg from "../public/images/wave_top.svg";
import { IoMdArrowRoundDown } from "react-icons/io";
import { FiArrowUpCircle } from "react-icons/fi";
import { MenuListProvider } from "../StateProvider";
import { Link } from "react-scroll";

function TopDesign() {
  const { menuColor } = useContext(MenuListProvider);
  const topTextStyles = "text-[#eee] font-black";

  return (
    <>
      <div
        className="relative bg-gradient-to-br from-[#162447] to-[#673ab7]
    flex flex-col justify-center items-center w-full h-screen"
        id="top"
      >
        <h1 className={`text-3xl ${topTextStyles}`}>Sun Higuchi</h1>
        <p
          className={`absolute top-1/2 mt-5 font-sans text-sm ${topTextStyles}`}
        >
          Front-end developer
        </p>

        <WaveSvg className="absolute bottom-0 left-0" />

        <div className="absolute transform -translate-x-1/2 left-1/2 bottom-5 cursor-pointer">
          <Link
            to="to_about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <IoMdArrowRoundDown className="text-4xl fill-svgColor animate-bounce" />
          </Link>
        </div>

        <Link to="top" spy={true} smooth={true} duration={500}>
          <FiArrowUpCircle
            className={`fixed bottom-5 right-2 text-mainB fill-[#fafafa] cursor-pointer text-4xl transition-opacity duration-500 z-40 ${
              !menuColor && "opacity-0"
            }`}
          />
        </Link>
      </div>
    </>
  );
}

export default TopDesign;
