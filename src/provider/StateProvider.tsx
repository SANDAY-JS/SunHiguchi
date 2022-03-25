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

  // useEffect(() => {
  //   console.log("in effect");
  //   elementObserver.current = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         entry.target.classList.toggle("show", entry.isIntersecting);
  //         // stop observing elements already shown
  //         if (entry.isIntersecting) this.unobserve(entry.target);
  //       });
  //     },
  //     {
  //       threshold: 1,
  //     }
  //   );

  //   imageObserver.current = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         console.log("loading the image>>>", entry.target);
  //         // stop observing elements already shown
  //         if (entry.isIntersecting) this.unobserve(entry.target);
  //       });
  //     },
  //     {
  //       rootMargin: "250px",
  //     }
  //   );
  // }, []); // do this only once, on mount

  const showElements = (els) => {
    if (!elementObserver.current) return;
    els.forEach((el) => elementObserver.current.observe(el));
  };

  const elementEffect = (el, visible, setVisible) => {
    if (visible) return;
    let el_height = el.offsetHeight;
    let offsetY = el.getBoundingClientRect().top;
    let screenHeight = window.outerHeight;
    let el_position = offsetY - screenHeight + 300;

    return addClassToEl(el_height, screenHeight, el_position, setVisible);
  };

  const addClassToEl = (el_height, screenHeight, el_position, setVisible) => {
    if (-screenHeight <= el_position + el_height && el_position < 0) {
      return setVisible(true);
    }
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
    "Projects",
    "Voice",
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
      title: "Web開発",
      src: "/images/web-development.webp",
      des: "Web上のシステム開発を承っております。IT企業でのアジャイル開発経験がございます。ReactやNext.js, TypeScriptなどフロントエンドの業務範囲を専門としております。一部Firebase等を用いたバックエンドの業務も対応可能です。",
    },
    {
      title: "アニメーション制作",
      src: "/images/animation.webp",
      des: "アニメーション制作も承っております。アニメーションのチーム開発経験を活かし、gsapやanime.jsなどを利用した様々なアニメーションをご希望通りに作成いたします。営業利益の増大に繋がる動画広告も作成いたします。",
    },
    {
      title: "WordPress開発",
      src: "/images/wordpress.webp",
      des: "Wordpressの案件も受け付けております。デザインのカスタマイズから開発の案件まで対応致します。私自身WordPressサイトを運営しておりますので、ぜひお気軽にご相談ください。",
    },
    {
      title: "Web制作",
      src: "/images/web-production.webp",
      des: "ユーザビリティを意識したWebサイトを制作させていただきます。コーディングからCMS導入までお受けしております。ただコードを書くだけでなく、SEO対策や読みやすさを意識したコーディングを致します。スマートフォンサイトの制作もお任せください。",
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
      des: "すごくレスポンスが早く、しっかりと出来ることと出来ないことを言ってくれるので大変助かっています。",
    },
    {
      name: "株式会社JampRock",
      src: "/images/client.jpg",
      link: "https://www.jamp-rock.com/",
      des: "いつもとても早くいいものを作って頂いております！ 今後も色々お頼みできればと思っています！",
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
