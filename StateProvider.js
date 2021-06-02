import React, { createContext, useState } from "react";

export const MenuListProvider = createContext();

export default function StateProvider({ children }) {
  const [menuColor, setMenuColor] = useState(false);

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

  const menuList = [
    "About",
    "Projects",
    "Supports",
    "Voice",
    "Payment",
    "Contact",
  ];
  const mySkillsList = [
    "HTML",
    "CSS",
    "Sass",
    "Tailwind.css",
    "JavaScript",
    "React.js",
    "Next.js",
    "Firebase",
    "WordPress",
    "Git",
  ];
  const projectList = [
    {
      title: "Amazon Clone",
      language: "React.js",
      src: "/images/amazon-clone.png",
      link: "https://clone-bc279.web.app/",
    },
    {
      title: "Movie App",
      language: "React.js",
      src: "/images/mcu-movie-checker.jpg",
      link: "https://mcu-movie-checker.vercel.app/",
    },
    {
      title: "Hulu Clone",
      language: "Next.js",
      src: "/images/hulu-clone.jpg",
      link: "https://hulu-clone-gray.vercel.app/",
    },
  ];
  const servicesList = [
    {
      title: "Web制作",
      src: "/images/web-production.jpg",
      des: "ユーザビリティを意識したWebサイトを制作させていただきます。コーディングからCMS導入までお受けしております。ただコードを書くだけでなく、SEO対策や読みやすさを意識したコーディングを致します。スマートフォンサイトの制作もお任せください。",
    },
    {
      title: "Web開発",
      src: "/images/web-development.jpg",
      des: "Web開発も対応させて頂きます。JavaScriptだけでなく、ReactなどのフレームワークやFirebaseなどを利用した案件も受け付けております。",
    },
    {
      title: "WordPress制作",
      src: "/images/wordpress-development.jpg",
      des: "Wordpressの案件も受け付けております。カスタマイズからコーディングのみの案件まで対応致します。テーマを使用した案件も得意としておりますので、ぜひお気軽にご相談ください。",
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
      link: "https://machi-digi.com/",
      des: "いつもとても早くいいものを作って頂いております！ 今後も色々お頼みできればと思っています！",
    },
  ];

  const values = {
    elementEffect,
    menuColorDetect,
    menuColor,
    menuList,
    mySkillsList,
    projectList,
    servicesList,
    voiceList,
  };

  return (
    <>
      <MenuListProvider.Provider value={values}>
        {children}
      </MenuListProvider.Provider>
    </>
  );
}
