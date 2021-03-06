import React, { createContext, useRef, useState } from "react";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { BiGitMerge } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { DiCss3Full, DiSass } from "react-icons/di";
import { IoLogoJavascript, IoLogoWordpress, IoLogoReact, IoLogoFirebase } from "react-icons/io5";
import { SiSolidity, SiNextdotjs, SiNodedotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

export const MenuListProvider = createContext(null);

export default function StateProvider({ children }) {
  const [menuColor, setMenuColor] = useState(false);

  const elementObserver = useRef(null);

  const showElements = (els) => {
    if (!elementObserver.current) return;
    els.forEach((el) => elementObserver.current.observe(el));
  };

  const menuColorDetect = (el, type) => {
    let el_height = el.offsetHeight;
    let offsetY = el.getBoundingClientRect().top;
    let screenHeight = window.outerHeight;
    let el_position = offsetY - screenHeight + 500;
    if (el_position < -1000 || (type === "contact" && el_position > 500)) return;

    return handleMenuColor( type, el_height, screenHeight, el_position, setMenuColor );
  };

  const handleMenuColor = ( type, el_height, screenHeight, el_position, setMenuColor ) => {
    if (-screenHeight <= el_position + el_height && el_position < 0) {
      if (type === "about") return setMenuColor(true);
      if (type === "service") return setMenuColor(false);
      if (type === "contact") return setMenuColor(false);
    }
    if (type === "about") return setMenuColor(false);
    if (type === "service") return setMenuColor(true);
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
    sql: <GrMysql />,
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
      title: "Reddit Clone",
      languages: [
        languageElements.next,
        languageElements.typescript,
        languageElements.tailwindcss,
        languageElements.sql,
      ],
      src: "/images/reddit-clone.png",
      link: {
        project: "https://reddit-ver2.vercel.app/",
        github: "https://github.com/SANDAY-JS/reddit-like-app",
      },
      description:
        "Reddit???????????????????????????????????????????????????????????????SNS????????????",
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
        "?????????????????????????????????????????????????????????????????????????????????????????????????????????",
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
        "??????????????????????????????????????????????????????????????????Hulu??????????????????????????????????????????????????????UI???????????????????????????",
    },
  ];
  const servicesList = [
    {
      title: "????????????????????????",
      src: "/images/web-production.webp",
      des: "?????????????????????????????????Web????????????????????????????????????????????????SEO?????????????????????????????????????????????Web????????????????????????????????????",
    },
    {
      title: "Web??????????????????",
      src: "/images/web-development.webp",
      des: "IT????????????????????????????????????????????????????????????React,Next.js,TypeScript????????????????????????????????????????????????????????????",
    },
    {
      title: "???????????????????????????",
      src: "/images/animation.webp",
      des: "Web??????????????????????????????????????????????????????????????????????????????gsap???anime.js????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
    },
    {
      title: "WordPress??????",
      src: "/images/wordpress.webp",
      des: "?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
    },
  ];
  const voiceList = [
    {
      name: "????????????",
      src: "/images/machi-degi.jpg",
      link: "https://machi-digi.com/",
      des: "???????????????????????????????????????????????????????????????????????????????????????????????????????????????",
    },
    {
      name: "????????????Metamon",
      src: "/images/client.jpg",
      link: "http://www.metamon.co.jp/",
      des: "???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
    },
    {
      name: "????????????JampRock",
      src: "/images/client.jpg",
      link: "https://www.jamp-rock.com/",
      des: "????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
    },
  ];

  const values = {
    showElements,
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
