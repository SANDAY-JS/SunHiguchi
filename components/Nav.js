import React, { useContext, useEffect, useState } from "react";
import { MenuListProvider } from "../StateProvider";
import { Link } from "react-scroll";

function Nav() {
  const { menuList, menuColor } = useContext(MenuListProvider);
  const [deviceWidth, setDeviceWidth] = useState(true);
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    checkWidth();
    window.addEventListener("resize", checkWidth);
  }, []);

  const checkWidth = () => {
    const match = window.matchMedia("(max-width: 769px)");
    if (match.matches) return setDeviceWidth(true);
    if (!match.matches) {
      setIsMenuActive(true);
      setDeviceWidth(false);
    }
  };

  const MENU_LINES_BASE_CSS = `absolute left-0 transition-all duration-300 h-0.5 w-full ${
    menuColor ? " bg-mainP" : " bg-[#ddd]"
  }`;

  return (
    <header>
      <nav
        className={`fixed left-0 z-50 container duration-300 max-w-full ${
          isMenuActive ? "top-3 2xl:top-6" : "-top-10"
        }`}
      >
        <ul className={`flex justify-evenly items-center flex-wrap h-12`}>
          {menuList.map((menu, i) => (
            <li
              className={`cursor-pointer transition-colors duration-300 font-black md:text-xl lg:text-xl 2xl:text-3xl
                 hover:text-[#673ab7] ${
                   menuColor ? "text-mainP" : "text-[#ddd]"
                 }
               ${(i === 1 || i === 4) && deviceWidth && "hidden"}`}
              key={menu}
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

        {deviceWidth && (
          <ul
            className="fixed top-2 right-2 w-7 h-5 cursor-pointer"
            onClick={() => setIsMenuActive(!isMenuActive)}
          >
            <li
              className={`${MENU_LINES_BASE_CSS} ${
                isMenuActive ? "top-1 opacity-50" : "top-0"
              } `}
            ></li>
            <li
              className={`${MENU_LINES_BASE_CSS} ${
                isMenuActive && "opacity-0"
              } top-1/2 transform -translate-y-1/2`}
            ></li>
            <li
              className={`${MENU_LINES_BASE_CSS} ${
                isMenuActive ? "bottom-1 opacity-50" : "bottom-0"
              }  `}
            ></li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Nav;
