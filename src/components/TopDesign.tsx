import React, { useContext } from "react";
import WaveTop from "./WaveTop";
import { IoMdArrowRoundDown } from "react-icons/io";
import { FiArrowUpCircle } from "react-icons/fi";
import { MenuListProvider } from "../provider/StateProvider";
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
        <h1
          className={`text-3xl md:text-4xl lg:text-5xl 2xl:text-8xl ${topTextStyles}`}
        >
          San Higuchi
        </h1>
        <p
          className={`absolute top-1/2 mt-5 lg:mt-7 2xl:mt-16 font-sans text-sm md:text-base lg:text-xl xl:text-xl 2xl:text-3xl ${topTextStyles}`}
        >
          Front-end developer
        </p>

        <WaveTop />

        <div className="absolute transform -translate-x-1/2 left-1/2 bottom-5 2xl:bottom-8 cursor-pointer">
          <Link
            to="to_about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <IoMdArrowRoundDown className="text-4xl 2xl:text-6xl fill-svgColor animate-bounce" />
          </Link>
        </div>

        <Link to="top" spy={true} smooth={true} duration={500}>
          <FiArrowUpCircle
            className={`fixed bottom-5 xl:bottom-8 xl:right-8 right-2 text-mainB fill-[#fafafa] cursor-pointer text-4xl md:text-5xl 2xl:text-6xl transition-opacity duration-500 z-40 ${
              !menuColor && "opacity-0"
            }`}
          />
        </Link>
      </div>
    </>
  );
}

export default TopDesign;
