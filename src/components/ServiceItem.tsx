import React, { useContext, useRef } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { MenuListProvider } from "../provider/StateProvider";
import FadeIn from "../assets/FadeIn";

function ServiceItem({ title, src, des, anim, num }) {
  const { servicesList } = useContext(MenuListProvider);
  const animParentRef = useRef();

  return (
    <div
      className={`flex flex-col md:flex-row justify-between items-center flex-wrap gap-5 md:gap-0 xl:w-full relative`}
    >
      <FadeIn
        className={`relative w-full md:w-1/2 h-full flex flex-wrap justify-center md:justify-start ${
          num % 2 !== 0 && "md:order-1 md:justify-end"
        }`}
      >
        <h4 className={`absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 overflow-hidden
            z-10 text-3xl lg:text-5xl font-serif font-black text-center whitespace-nowrap text-[#ddd]`}>
          {!anim
            ? title
            : title
                .replace(/\s/g, `\u00A0`)
                .split("")
                .map((letter, i) => (
                  <span ref={animParentRef} className="inline-block" id="letter" key={i}>
                    {letter}
                  </span>
                ))}
        </h4>
        <Image
          width={700}
          height={360}
          objectFit="cover"
          src={src}
          className="w-full h-full rounded-lg"
        />
      </FadeIn>

      <FadeIn className="flex flex-col items-center gap-4 lg:gap-8 w-full max-w-lg h-full md:w-1/2 px-5">
        <p className={`max-w-md leading-normal text-center font-serif font-bold`}>{des}</p>
        <Link
          to={`payment_${servicesList[num].title}`}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="group cursor-pointer bg-gradient-to-r from-[#653ea9] to-[#f1abfb] md:mt-6 font-extrabold transition-colors duration-500 hover:bg-gradient-to-bl">
          <span
            className={`flex justify-center items-center duration-300 w-max h-full z-10 px-3 py-2 text-xl xl:text-2xl 2xl:text-3xl text-[#ddd] italic
              group-hover:text-[transparent] group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#ffe224] group-hover:to-[#ddd]`}>
            料金を確認する
          </span>
        </Link>
      </FadeIn>
    </div>
  );
}

export default ServiceItem;
