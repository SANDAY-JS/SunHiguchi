import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { MenuListProvider } from "../StateProvider";

function ServiceItem({ title, src, des, num }) {
  const { elementEffect, servicesList } = useContext(MenuListProvider);
  const [visible, setVisible] = useState(false);
  const elRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () =>
      elementEffect(elRef.current, visible, setVisible)
    );
    return () =>
      window.removeEventListener("scroll", () =>
        elementEffect(elRef.current, visible, setVisible)
      );
  }, []);

  return (
    <div
      ref={elRef}
      className={`flex flex-col sm:flex-row justify-between items-center flex-wrap mb-10 
      transition-all duration-500 relative  ${
        num === 1 ? "left-invisible" : "-left-invisible"
      } ${visible && "!left-0"}`}
    >
      <div
        className={`relative w-full sm:w-1/2 flex flex-wrap justify-center mb-5 ${
          num === 1 && "sm:order-1"
        }`}
      >
        <h4
          className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2
         z-10 text-3xl lg:text-4xl text-[#e43f5a] font-extrabold text-center whitespace-nowrap"
        >
          {title}
        </h4>
        <Image
          width={540}
          height={360}
          objectFit="cover"
          src={src}
          className="w-full rounded-2xl"
        />
      </div>

      <div className="flex flex-col items-center w-full max-w-lg h-full sm:w-1/2 px-5">
        <p className="max-w-md">{des}</p>
        <Link
          to={`payment_${servicesList[num].title}`}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="group relative w-32 h-8 cursor-pointer bg-mainP mt-4 font-jp"
        >
          <span
            className="absolute -top-2 -left-2 group-hover:top-0 group-hover:left-0 z-10
               flex justify-center items-center translate-all duration-300 w-full h-full
               border-2 border-solid border-mainB text-[#162447] "
          >
            料金を確認する
          </span>
        </Link>
      </div>
    </div>
  );
}

export default ServiceItem;
