import React, { useContext, useRef } from "react";
import Image from 'next/image';
import { MenuListProvider } from "../provider/StateProvider";
import FadeIn from "../assets/FadeIn";

function About() {
  const { svgList, mySkillsList } = useContext(MenuListProvider);
  const aboutSecRef = useRef();
  const animateElContainer = useRef();

  return (
    <section ref={aboutSecRef}>
      <h2 id="to_about" className="mb-5">
        About me
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-3 w-full mx-auto max-w-3xl">
        <FadeIn className="relative w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60">
          <Image src={'/images/me.jpeg'} layout={'fill'} objectFit={'cover'} objectPosition={'center center'} className="rounded-full contrast-200 brightness-150 delay-75" />
        </FadeIn>
        <FadeIn
          delay={true}
          className={`about__detail relative flex-1 flex flex-col gap-4 mb-8 transition-all duration-500  
            md:px-12 max-w-md md:max-w-none`}
        >
          <p className="max-w-full leading-7 xl:leading-relaxed">
            ご覧頂きありがとうございます。愛知県を中心にWeb開発の受託業務を行なっている樋口賛(ヒグチサン)と申します。
          </p>
          <p className="max-w-full leading-7 xl:leading-relaxed">
            Webアプリ開発を中心に、これまで110件以上の業務に携わって参りました。
          </p>
          <p className="max-w-full leading-7 xl:leading-relaxed font-extrabold">
            2年前にフリーランスエンジニアとして活動開始し、2022年に[DayStarシステム](http://daystar.jp)を創業しました。
          </p>
          <p className="max-w-full leading-7 xl:leading-relaxed font-extrabold">
            実績：ドコモハッカソン優勝(2022年度) | TOEIC 835点(2022年1月) | IELTS 6.5(2023年2月)
          </p>
        </FadeIn>
      </div>
      <div
        className={`entry about__skills md:flex md:flex-col md:items-center md:gap-2`}
      >
        <h3 className="text-[#162447] text-center text-2xl xl:text-3xl">
          My Skills
        </h3>
        <div ref={animateElContainer} className="flex justify-center xl:w-2/3 xl:max-w-screen-lg">
          <ul className="flex flex-wrap justify-center md:justify-start mx-auto">
            {mySkillsList.map((mySkill: string, i: number) => (
              <FadeIn
                key={i}
                className={`group w-1/3 md:w-1/6 md:max-w-lg flex flex-col items-center gap-1 mt-4`}
              >
                <span className="xl:text-xl text-[#162447] z-10 transform group-hover:scale-125">
                  {mySkill}
                </span>
                <div className="text-7xl xl:text-8xl text-mainP transform transition-all group-hover:scale-125 group-hover:rotate-360">
                  {svgList[i]}
                </div>
              </FadeIn>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
