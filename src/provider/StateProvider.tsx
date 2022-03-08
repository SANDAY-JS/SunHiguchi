import React, { createContext, useState } from "react";
export const MenuListProvider = createContext(null);

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
    "Services",
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
    "Node.js",
    "TypeScript",
    "Firebase",
    "WordPress",
    "Git",
  ];
  const projectList = [
    {
      title: "Amazon Clone",
      language: "React.js",
      src: "/images/amazon-clone.webp",
      link: "https://clone-bc279.web.app/",
    },
    {
      title: "MCU Shows Order Check",
      language: "Next.js / TypeScript",
      src: "/images/mcu-recommendation.webp",
      link: "https://mcu-order-check.vercel.app/",
    },
    {
      title: "Hulu Clone",
      language: "Next.js",
      src: "/images/hulu-clone.webp",
      link: "https://hulu-clone-gray.vercel.app/",
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