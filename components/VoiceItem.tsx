import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuListProvider } from "../StateProvider";

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
    <div
      ref={elRef}
      className={`flex flex-col justify-start items-center gap-3
      border-solid border-mainP border-2 lg:border-4 w-full sm:w-1/4 md:w-2/5 lg:w-1/4 transition-opacity duration-500 opacity-0 ${
        visible && "opacity-100"
      }`}
    >
      <Image
        src={src}
        width={500}
        height={500}
        layout="intrinsic"
        objectFit="cover"
        className="max-w-sm"
      />
      <h3 className="text-mainB text-center text-xl sm:text-2xl font-extrabold">
        <Link href={link}>
          <a className="underline">{name}</a>
        </Link>
        <span className="text-xl font-light">様</span>
      </h3>
      <p className="p-4 text-xl">{des}</p>
    </div>
  );
}

export default VoiceItem;
