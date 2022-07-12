import React, { useContext, useEffect, useRef } from "react";
import { MenuListProvider } from "../provider/StateProvider";
import gsap from "gsap";
import useVisibility from "../assets/useVisibility";

function About() {
  const { svgList, mySkillsList, showElements, menuColorDetect } = useContext(MenuListProvider);
  const [isVisible, currentElement] = useVisibility();
  const aboutSecRef = useRef();
  const animateElContainer = useRef();
  const animateRef = useRef([]);

  const tl = gsap.timeline();

  useEffect(() => {
    if (!animateRef.current || !isVisible) return;
    tl.add('start', .5)
    .to(animateRef.current, .5, {opacity: 1, stagger: .03, ease: 'linear'}, 'start')
  }, [isVisible]);

  useEffect(() => {
    const observeElements = Array.from(document.querySelectorAll(".entry"));
    registerEventListeners();
    showElements([observeElements]);
  }, []);

  const registerEventListeners = () => {
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
        ref={currentElement}
        className={`entry about__detail flex flex-col gap-4 mb-8 transition-all duration-500 relative opacity-0 left-invisible md:px-12 lg:mx-auto lg:max-w-screen-md xl:mx-0 2xl:max-w-screen-lg xl:transform xl:-translate-x-1/2 ${
          isVisible && "opacity-100 !left-0 xl:!left-1/2"
        } -mt-20 xl:!mt-0`}
      >
        <p className="max-w-full leading-7 xl:leading-relaxed">
          ご覧頂きありがとうございます。大学生エンジニアとしてウェブ開発、ウェブ制作活動を行っています、樋口賛と申します。
        </p>
        <p className="max-w-full leading-7 xl:leading-relaxed">
          ホームページ制作やフロントエンド開発など、<span className="underline">これまで100件以上の業務に携わった経験がございます。</span>
        </p>
      </div>
      <div
        className={`entry about__skills md:flex md:flex-col md:items-center md:gap-2`}
      >
        <h3 className="text-[#162447] text-center text-2xl xl:text-3xl">
          My Skills
        </h3>
        <div ref={animateElContainer} className="flex justify-center xl:w-2/3 xl:max-w-screen-lg">
          <ul className="flex flex-wrap justify-center md:justify-start mx-auto">
            {mySkillsList.map((mySkill, i) => (
              <li
                ref={el => {animateRef.current[i] = el}}
                className={`group w-1/3 md:w-1/6 md:max-w-lg flex flex-col items-center gap-1 mt-4 transition-opacity opacity-0`}
                key={i}
              >
                <span className="xl:text-xl text-[#162447] z-10 transform group-hover:scale-125">
                  {mySkill}
                </span>
                <div className="text-7xl xl:text-8xl text-mainP transform transition-all group-hover:scale-125 group-hover:rotate-360">
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
