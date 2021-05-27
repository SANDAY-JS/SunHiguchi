import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MenuListProvider } from "../StateProvider";

function ProjectItem({ title, language, src, link }) {
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
      className={`text-center mb-5 w-full sm:w-1/2 lg:w-1/3 transition-transform duration-500 transform scale-50 ${
        visible && "scale-100"
      }`}
    >
      <h4 className="text-lg text-[#162447]">{title}</h4>
      <span className="block text-[#162447]">({language})</span>
      <a
        href={link}
        target="_blank"
        className="group cursor-pointer block w-full relative"
      >
        <span className="absolute -top-5 left-3/4 text-[#e43f5a] opacity-0 group-hover:opacity-100">
          Click!
        </span>
        <Image
          src={src}
          width={300}
          height={396}
          loading="eager"
          objectFit={"cover"}
          className="rounded-lg transform duration-500 group-hover:scale-125 w-full"
        />
      </a>
    </div>
  );
}

export default ProjectItem;
