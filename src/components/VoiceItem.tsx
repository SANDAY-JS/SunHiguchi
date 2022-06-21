import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuListProvider } from "../provider/StateProvider";

function VoiceItem({ name, link, src, des }) {
  const { elementEffect } = useContext(MenuListProvider);
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
    <div ref={elRef} className={`flex flex-col items-center justify-between gap-3 bg-[#fff] rounded-lg px-8 pt-4 pb-2 w-full max-w-xl lg:flex-1 lg:w-1/4 transition-opacity duration-500 opacity-0 ${visible && "opacity-100"}`}>
      <p className="text-xl text-center">"{des}"</p>

      <div className="flex justify-center items-center gap-1">
        <Image src={src} width={66} height={66} layout="intrinsic" objectFit="cover" className="max-w-sm rounded-full w-6 h-6"/>
        <h3 className="text-mainB text-center text-md sm:text-lg md:text-xl font-extrabold">
          <Link href={link}><a className="underline whitespace-nowrap">{name}様</a></Link>
        </h3>
      </div>
    </div>
  );
}

export default VoiceItem;
