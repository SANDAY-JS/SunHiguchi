import React, { useContext, useEffect, useState } from "react";
import { MenuListProvider } from "../provider/StateProvider";
import { Link } from "react-scroll";

function Nav() {
  const { menuList, menuColor } = useContext(MenuListProvider);
  const [isPageWide, setIsPageWide] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    checkWidth();
    window.addEventListener("resize", checkWidth);
    // return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const checkWidth = () => {
    const match = window.matchMedia("(max-width: 769px)");
    if (match.matches) return setIsPageWide(false);
    if (!match.matches) {
      setIsMenuActive(true);
      setIsPageWide(true);
    }
  };

  const handleMenuActive = () => {
    return setIsMenuActive(false);
  };

  const MENU_LINES_BASE_CSS = `absolute left-0 transition-all duration-300 h-1 w-full ${
    menuColor ? " bg-mainB" : " bg-[#ddd]"
  } ${isMenuActive && "bg-[#ddd]"}`;

  return (
    <header>
      <nav
        className={`fixed left-0 z-50 container duration-300 max-w-full xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:max-w-screen-xl xl:justify-between ${
          isMenuActive ? "top-3 2xl:top-6" : "-top-10"
        }`}
      >
        {isPageWide ? (
          <ul className={`flex justify-evenly items-center flex-wrap h-12`}>
            {menuList.map((menu) => (
              <li
                key={menu}
                className={`cursor-pointer transition-colors duration-300 font-black md:text-xl lg:text-xl 2xl:text-3xl
                 hover:text-[#673ab7] ${
                   menuColor
                     ? "text-[#162447] hover:text-[#ddd]"
                     : "text-[#ddd]"
                 }`}
              >
                <Link
                  to={`to_${menu.toLowerCase()}`}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          // mobile menu
          <ul
            className={`fixed w-full h-full py-8 bg-[#402f81e3] flex flex-col items-center justify-around 
            transition-all duration-500 ${
              isMenuActive ? "top-0" : "-top-invisible "
            }`}
          >
            {menuList.map((menu) => (
              <li key={menu} className={`text-[#ddd] font-black text-xl`}>
                <Link
                  to={`to_${menu.toLowerCase()}`}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <a onClick={handleMenuActive}>{menu}</a>
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* Toggle Button */}
        {!isPageWide && (
          <ul
            className="fixed top-5 right-5 w-8 h-6 cursor-pointer"
            onClick={() => setIsMenuActive(!isMenuActive)}
          >
            <li
              className={`${MENU_LINES_BASE_CSS} ${
                isMenuActive ? "rotate-405 top-2 mt-0.5" : "top-0"
              } `}
            ></li>
            <li
              className={`${MENU_LINES_BASE_CSS} ${
                isMenuActive && "opacity-0"
              } top-1/2 transform -translate-y-1/2`}
            ></li>
            <li
              className={`${MENU_LINES_BASE_CSS} ${
                isMenuActive ? "-rotate-405 bottom-2 mb-0.5" : "bottom-0"
              }  `}
            ></li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Nav;
