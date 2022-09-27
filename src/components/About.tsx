import React, { useContext, useEffect, useRef } from "react";
import Image from 'next/image';
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
      <div className="flex flex-col md:flex-row items-center gap-3 w-full mx-auto max-w-3xl">
        <div className="relative w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60">
          <Image src={'/images/me.jpeg'} layout={'fill'} objectFit={'cover'} objectPosition={'center center'} className="rounded-full contrast-200 brightness-150" />
        </div>
        <div
          ref={currentElement}
          className={`about__detail relative flex-1 flex flex-col gap-4 mb-8 transition-all duration-500 opacity-0 
            md:px-12 max-w-md md:max-w-none
          ${isVisible && "opacity-100"}`}
        >
          <p className="max-w-full leading-7 xl:leading-relaxed">
            ご覧頂きありがとうございます。愛知県を中心にエンジニアとして活動している樋口賛(ヒグチサン)と申します。
          </p>
          <p className="max-w-full leading-7 xl:leading-relaxed">
            ホームページ制作やシステム開発など、<span className="font-bold">これまで110件以上の業務に携わって参りました。</span>
          </p>
          <p className="max-w-full leading-7 xl:leading-relaxed font-extrabold">
            ドコモハッカソン優勝(2022年度)。
          </p>
          <p className="max-w-full leading-7 xl:leading-relaxed font-extrabold">
            TOEIC 835点。
          </p>
        </div>
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
