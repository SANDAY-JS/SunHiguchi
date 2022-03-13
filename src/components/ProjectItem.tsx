import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MenuListProvider } from "../provider/StateProvider";
import { BiLinkExternal } from "react-icons/bi";

function ProjectItem({ title, languages, src, link, description, index }) {
  const { elementEffect, languageElements } = useContext(MenuListProvider);
  const [visible, setVisible] = useState(false);
  const elRef = useRef();

  const isEvenNumber = index % 2 !== 0;

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
      className={`w-full max-w-full overflow-hidden transform transition-all duration-1000 translate-y-100 opacity-0 ${
        visible && "opacity-100 translate-y-0"
      }`}
    >
      <div
        className={`relative flex flex-wrap justify-between w-full overflow-hidden ${
          isEvenNumber && "md:flex-row-reverse"
        }`}
      >
        {/* ----------------- Descriptopn Section ------------- */}
        <div
          className={`flex flex-col justify-evenly gap-4 pt-2 text-[#162447] text-lg md:text-2xl order-1 md:order-none md:w-1/2 ${
            isEvenNumber && "md:items-end"
          }`}
        >
          <h3 className="text-3xl md:text-4xl italic text-mainP">{title}</h3>
          <p
            className={`md:max-w-lg leading-8 ${
              isEvenNumber && "md:text-right"
            }`}
          >
            {description}
          </p>
          <div className="flex flex-wrap gap-3">
            {languages.map((language) => language)}
          </div>
          {/* buttons */}
          <div
            className={`flex flex-wrap gap-2 md:gap-4 ${
              isEvenNumber && "md:justify-end"
            }`}
          >
            <a
              href={link.project}
              target="_blank"
              className="group flex items-center px-3 py-2 italic text-[#eee] bg-mainB hover:bg-mainP"
            >
              <span className="transform transition-all duration-500 group-hover:-translate-x-2">
                View It Here
              </span>
              <BiLinkExternal className="opacity-0 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2" />
            </a>
            <a
              href={link.github}
              target="_blank"
              className="group flex items-center px-3 py-2 italic text-[#eee] bg-mainB hover:bg-mainP"
            >
              <span className="transform transition-all duration-500 group-hover:-translate-x-2">
                View Github Repo
              </span>
              <BiLinkExternal className="opacity-0 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2" />
            </a>
          </div>
        </div>

        {/* ----------------- Image Section ------------- */}
        <div className="transform duration-500 md:w-1/2">
          <Image
            src={src}
            width={3086}
            height={1844}
            loading="lazy"
            objectFit={"contain"}
            placeholder={"blur"}
            blurDataURL={src}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
