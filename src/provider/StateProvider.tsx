import React, { createContext, useEffect, useRef, useState } from "react";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { BiGitMerge } from "react-icons/bi";
import { DiCss3Full, DiSass } from "react-icons/di";
import {
  SiSolidity,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import {
  IoLogoJavascript,
  IoLogoWordpress,
  IoLogoReact,
  IoLogoFirebase,
} from "react-icons/io5";

export const MenuListProvider = createContext(null);

export default function StateProvider({ children }) {
  const [menuColor, setMenuColor] = useState(false);

  const elementObserver = useRef(null);
  const imageObserver = useRef(null);

  const showElements = (els) => {
    if (!elementObserver.current) return;
    els.forEach((el) => elementObserver.current.observe(el));
  };

  const elementEffect = (el, visible, setVisible, effectSeveralTimes) => {
    if (visible && !effectSeveralTimes) return;
    let el_height = el.offsetHeight;
    let offsetY = el.getBoundingClientRect().top;
    let screenHeight = window.outerHeight;
    let el_position = offsetY - screenHeight + 300;

    return addEffectToEl(el_height, screenHeight, el_position, setVisible, effectSeveralTimes);
  };

  const addEffectToEl = (el_height, screenHeight, el_position, setVisible, effectSeveralTimes) => {
    if(!effectSeveralTimes) {
      if (-screenHeight >= el_position + el_height || el_position >= 0) return;
      return setVisible(true);
    }

    if(-screenHeight <= el_position + (el_height-500) && el_position < 0 && el_position > -1700){
      return setVisible(true);
    }
    return setVisible(false)
  };

  const menuColorDetect = (el, type) => {
    let el_height = el.offsetHeight;
    let offsetY = el.getBoundingClientRect().top;
    let screenHeight = window.outerHeight;
    let el_position = offsetY - screenHeight + 500;
    if (el_position < -1000 || (type === "contact" && el_position > 500))
      return;

    return handleMenuColor(
      type,
      el_height,
      screenHeight,
      el_position,
      setMenuColor
    );
  };

  const handleMenuColor = (
    type,
    el_height,
    screenHeight,
    el_position,
    setMenuColor
  ) => {
    if (-screenHeight <= el_position + el_height && el_position < 0) {
      if (type === "about") return setMenuColor(true);
      if (type === "contact") return setMenuColor(false);
    }
    if (type === "about") return setMenuColor(false);
    if (type === "contact") return setMenuColor(true);
  };

  const languageElements = {
    html: <AiFillHtml5 />,
    css: <DiCss3Full />,
    javascript: <IoLogoJavascript />,
    react: <IoLogoReact />,
    next: <SiNextdotjs />,
    node: <SiNodedotjs />,
    typescript: <SiTypescript />,
    solidity: <SiSolidity />,
    scss: <DiSass />,
    tailwindcss: <SiTailwindcss />,
    firebase: <IoLogoFirebase />,
    wordpress: <IoLogoWordpress />,
    git: <BiGitMerge />,
    github: <AiFillGithub />,
  };
  const svgList = [
    languageElements.html,
    languageElements.css,
    languageElements.javascript,
    languageElements.react,
    languageElements.next,
    languageElements.node,
    languageElements.typescript,
    languageElements.solidity,
    languageElements.scss,
    languageElements.tailwindcss,
    languageElements.firebase,
    languageElements.wordpress,
    languageElements.git,
    languageElements.github,
  ];
  const menuList = [
    "About",
    "Voice",
    "Projects",
    "Services",
    "Payment",
    "Contact",
  ];
  const mySkillsList = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Solidity",
    "Sass",
    "Tailwind.css",
    "Firebase",
    "WordPress",
    "Git",
    "Github",
  ];
  const projectList = [
    {
      title: "Amazon Clone",
      languages: [
        languageElements.react,
        languageElements.firebase,
        languageElements.css,
      ],
      src: "/images/amazon-clone.png",
      link: {
        project: "https://clone-bc279.web.app/",
        github: "https://github.com/SANDAY-JS/amazon-clone",
      },
      description:
        "Amazonのように商品の購入ができるサイト。サインインや購入履歴の確認、選択した商品の会計まで可能です。",
    },
    {
      title: "MCU Shows Order Check",
      languages: [
        languageElements.next,
        languageElements.typescript,
        languageElements.scss,
      ],
      src: "/images/mcu-order-check.png",
      link: {
        project: "https://mcu-order-check.vercel.app/",
        github: "https://github.com/SANDAY-JS/mcu-order-check",
      },
      description:
        "マーベル作品の並べ替え＆フィルター＆検索がワンクリックでできるサイト。",
    },
    {
      title: "Hulu Clone",
      languages: [languageElements.next, languageElements.tailwindcss],
      src: "/images/hulu-clone.png",
      link: {
        project: "https://hulu-clone-gray.vercel.app/",
        github: "https://github.com/SANDAY-JS/hulu-clone",
      },
      description:
        "最新上映作品をジャンル別に確認できるサイト。Huluのデザインをもとに設計し、ページ内のUI向上に務めました。",
    },
  ];
  const servicesList = [
    {
      title: "ホームページ制作",
      src: "/images/web-production.webp",
      des: "安価かつスピーディーにWebサイトを制作させていただきます。SEO対策やユーザビリティを意識したWebサイト制作を意識します。",
    },
    {
      title: "Webシステム開発",
      src: "/images/web-development.webp",
      des: "IT企業でのアジャイル開発経験がございます。React,Next.js,TypeScriptなどフロントエンドを専門としております。",
    },
    {
      title: "アニメーション制作",
      src: "/images/animation.webp",
      des: "Web技術を生かしたアニメーションの実務開発経験を活かし、gsapやanime.jsなどを利用した様々なアニメーションをご希望通りに作成いたします。営業利益の増大に繋がる動画広告も作成いたします。",
    },
    {
      title: "WordPress開発",
      src: "/images/wordpress.webp",
      des: "ワードプレスを利用したブログサイトの開発を致します。デザインのカスタマイズから機能追加の案件まで対応致します。",
    },
  ];
  const voiceList = [
    {
      name: "マチデジ",
      src: "/images/machi-degi.jpg",
      link: "https://machi-digi.com/",
      des: "レスポンスが早くて、確実に仕事をこなして頂けるので、とても助かっています。",
    },
    {
      name: "株式会社Metamon",
      src: "/images/client.jpg",
      link: "http://www.metamon.co.jp/",
      des: "すごくレスポンスが早く、しっかりと出来ることを言ってくれるので大変助かっています。",
    },
    {
      name: "株式会社JampRock",
      src: "/images/client.jpg",
      link: "https://www.jamp-rock.com/",
      des: "いつもとても早くいいものを作って頂いております。今後も色々お頼みできればと思っています。",
    },
  ];

  const values = {
    showElements,
    elementEffect,
    menuColorDetect,
    svgList,
    menuList,
    menuColor,
    voiceList,
    projectList,
    servicesList,
    mySkillsList,
  };

  return (
    <>
      <MenuListProvider.Provider value={values}>
        {children}
      </MenuListProvider.Provider>
    </>
  );
}
