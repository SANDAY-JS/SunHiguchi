import React, { useContext, useEffect, useRef, useState } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { BiGitMerge } from "react-icons/bi";
import { DiCss3Full, DiSass } from "react-icons/di";
import { SiTailwindcss, SiNextDotJs, SiTypescript } from "react-icons/si";
import { MenuListProvider } from "../StateProvider";
import {
  IoLogoJavascript,
  IoLogoWordpress,
  IoLogoReact,
  IoLogoFirebase,
} from "react-icons/io5";

function About() {
  const { mySkillsList, elementEffect, menuColorDetect } =
    useContext(MenuListProvider);
  const [visible, setVisible] = useState(false);
  const aboutSecRef = useRef();
  const elRef1 = useRef();
  const elRef2 = useRef();

  useEffect(() => {
    registerEventListeners();
  }, []);

  const registerEventListeners = () => {
    window.addEventListener("scroll", () =>
      elementEffect(elRef1.current, visible, setVisible)
    );
    window.addEventListener("scroll", () =>
      elementEffect(elRef2.current, visible, setVisible)
    );
    window.removeEventListener("scroll", () =>
      elementEffect(elRef1.current, visible, setVisible)
    );
    window.removeEventListener("scroll", () =>
      elementEffect(elRef2.current, visible, setVisible)
    );
    window.addEventListener("scroll", () =>
      menuColorDetect(aboutSecRef.current, "about")
    );
    window.removeEventListener("scroll", () =>
      menuColorDetect(aboutSecRef.current, "about")
    );
  };

  const svgStyle =
    "text-7xl xl:text-8xl text-[#e43f5a] transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-360";
  const svgList = [
    <AiFillHtml5 className={svgStyle} />,
    <DiCss3Full className={svgStyle} />,
    <DiSass className={svgStyle} />,
    <SiTailwindcss className={svgStyle} />,
    <IoLogoJavascript className={svgStyle} />,
    <IoLogoReact className={svgStyle} />,
    <SiNextDotJs className={svgStyle} />,
    <SiTypescript className={svgStyle} />,
    <IoLogoFirebase className={svgStyle} />,
    <IoLogoWordpress className={svgStyle} />,
    <BiGitMerge className={svgStyle} />,
  ];

  return (
    <section ref={aboutSecRef}>
      <h2 id="to_about" className="mb-5">
        About me
      </h2>
      <div
        ref={elRef1}
        className={`about__detail flex justify-center mb-8 transition-all duration-500 relative left-invisible md:px-12 lg:mx-auto lg:max-w-screen-md xl:mx-0 2xl:max-w-screen-lg xl:transform xl:-translate-x-1/2 ${
          visible && "!left-0 xl:!left-1/2"
        }`}
      >
        <p className="max-w-full xl:leading-relaxed">
          ご覧頂きありがとうございます。滋賀県、愛知県を拠点に大学生エンジニアとしてWeb開発、Web制作活動を行っています、樋口賛と申します。
          <br />
          <br />
          企業での実務開発経験を活かし、Web開発やWeb制作を始めた様々な業務を受け付けております。
          <br />
          <br />
          下記に可能な業務内容などを記載しておりますので、ご覧いただけますと幸いです。
        </p>
      </div>
      <div
        ref={elRef2}
        className={`about__skills md:flex md:flex-col md:items-center transition-all duration-500 relative -left-invisible ${
          visible && "!left-0"
        } `}
      >
        <h3 className="text-[#162447] text-center text-2xl xl:text-3xl">
          My Skills
        </h3>
        <ul className="flex flex-wrap justify-between mt-4 md:px-6 xl:w-2/3 xl:max-w-screen-lg">
          {mySkillsList.map((mySkill, i) => (
            <li
              className="group w-1/3 md:w-1/5 flex flex-col items-center mt-2"
              key={i}
            >
              <span className="xl:text-xl text-[#162447] z-10 transform duration-500 group-hover:scale-125">
                {mySkill}
              </span>
              {svgList[i]}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;
