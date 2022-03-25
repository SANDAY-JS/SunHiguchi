import React, { useContext, useEffect, useRef, useState } from "react";
import { MenuListProvider } from "../provider/StateProvider";

function About() {
  const {
    svgList,
    mySkillsList,
    showElements,
    elementEffect,
    menuColorDetect,
  } = useContext(MenuListProvider);
  const [visible, setVisible] = useState(false);
  const aboutSecRef = useRef();
  const elRef1 = useRef();
  const elRef2 = useRef();

  useEffect(() => {
    const observeElements = Array.from(document.querySelectorAll(".entry"));
    registerEventListeners();
    showElements([observeElements]);
  }, []);

  const registerEventListeners = () => {
    window.addEventListener("scroll", () =>
      elementEffect(elRef1.current, visible, setVisible)
    );
    window.removeEventListener("scroll", () =>
      elementEffect(elRef1.current, visible, setVisible)
    );
    window.addEventListener("scroll", () =>
      elementEffect(elRef2.current, visible, setVisible)
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

  return (
    <section ref={aboutSecRef}>
      <h2 id="to_about" className="mb-5">
        About me
      </h2>
      <div
        ref={elRef1}
        className={`entry about__detail flex flex-col gap-4 mb-8 transition-all duration-500 relative opacity-0 left-invisible md:px-12 lg:mx-auto lg:max-w-screen-md xl:mx-0 2xl:max-w-screen-lg xl:transform xl:-translate-x-1/2 ${
          visible && "opacity-100 !left-0 xl:!left-1/2"
        } -mt-20 xl:!mt-0`}
      >
        <p className="max-w-full leading-7 xl:leading-relaxed">
          ご覧頂きありがとうございます。大学生エンジニアとしてウェブ開発、ウェブ制作活動を行っています、樋口賛と申します。
        </p>
        <p className="max-w-full leading-7 xl:leading-relaxed">
          ウェブ開発やウェブ制作を始めた様々な業務を受け付けております。
        </p>
        <p className="max-w-full leading-7 xl:leading-relaxed">
          下記に可能な業務内容などを記載しておりますので、ご覧いただけますと幸いです。
        </p>
      </div>
      <div
        ref={elRef2}
        className={`entry about__skills md:flex md:flex-col md:items-center md:gap-2 transition-all duration-500 opacity-0 ${
          visible && "opacity-100"
        } `}
      >
        <h3 className="text-[#162447] text-center text-2xl xl:text-3xl">
          My Skills
        </h3>
        <div className="flex justify-center xl:w-2/3 xl:max-w-screen-lg">
          <ul className="flex flex-wrap justify-center md:justify-start mx-auto">
            {mySkillsList.map((mySkill, i) => (
              <li
                className="group w-1/3 md:w-1/6 md:max-w-lg flex flex-col items-center gap-1 mt-4"
                key={i}
              >
                <span className="xl:text-xl text-[#162447] z-10 transform duration-500 group-hover:scale-125">
                  {mySkill}
                </span>
                <div className="text-7xl xl:text-8xl text-mainP transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-360">
                  {svgList[i]}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
