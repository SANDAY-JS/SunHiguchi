import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { MenuListProvider } from "../provider/StateProvider";
import gsap, { Elastic } from "gsap";

function ServiceItem({ title, src, des, anim, num }) {
  const { elementEffect, servicesList } = useContext(MenuListProvider);
  const [visible, setVisible] = useState(false);
  const elRef = useRef();
  const animParentRef = useRef();

  const tl = gsap.timeline({});
  const letterAnimEasing = Elastic.easeOut.config(1.2, 0.7);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      elementEffect(elRef.current, visible, setVisible)
    );
    return () =>
      window.removeEventListener("scroll", () =>
        elementEffect(elRef.current, visible, setVisible)
      );
  }, []);

  useEffect(() => {
    if (!elRef.current || !animParentRef.current) return;
    const q = gsap.utils.selector(elRef);

    tl.set(q("#letter"), { y: "1.2em" })
      .addLabel("text-start", "+=.5")
      .to(
        q("#letter"),
        { y: 0, stagger: 0.07, ease: letterAnimEasing },
        "text-start"
      );
  }, [visible]);

  return (
    <div
      ref={elRef}
      className={`flex flex-col md:flex-row justify-between items-center flex-wrap gap-5 md:gap-0 xl:w-full
      transition-all duration-500 opacity-0 relative  ${
        num % 2 === 0 ? "-left-invisible" : "left-invisible"
      } ${visible && "!left-0 opacity-100"}`}
    >
      <div
        className={`relative w-full md:w-1/2 h-full flex flex-wrap justify-center md:justify-start ${
          num % 2 !== 0 && "md:order-1 md:justify-end"
        }`}
      >
        <h4
          className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 overflow-hidden
         z-10 text-3xl lg:text-5xl text-[#ddd] font-extrabold text-center whitespace-nowrap"
        >
          {!anim
            ? title
            : title
                .replace(/\s/g, `\u00A0`)
                .split("")
                .map((letter, i) => (
                  <span
                    ref={animParentRef}
                    className="inline-block"
                    id="letter"
                    key={i}
                  >
                    {letter}
                  </span>
                ))}
        </h4>
        <Image
          width={700}
          height={360}
          objectFit="cover"
          src={src}
          className="w-full h-full rounded-2xl"
        />
      </div>

      <div className="flex flex-col items-center gap-4 lg:gap-8 w-full max-w-lg h-full md:w-1/2 px-5">
        <p className="max-w-md leading-normal">{des}</p>
        <Link
          to={`payment_${servicesList[num].title}`}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="group cursor-pointer bg-[#ddd] md:mt-6 font-jp transition-colors duration-300 hover:bg-mainB"
        >
          <span
            className="transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0
               flex justify-center items-center duration-300 w-max h-full z-10 px-2
               border-2 border-solid border-mainB lg:text-lg xl:text-xl 2xl:text-2xl text-[#162447] group-hover:text-[#ddd]"
          >
            料金を確認する
          </span>
        </Link>
      </div>
    </div>
  );
}

export default ServiceItem;
