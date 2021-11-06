import React, { useContext, useEffect, useRef, useState } from "react";
import WaveSvg from "../public/images/wave_bottom.svg";
import { AiFillFacebook } from "react-icons/ai";
import { FaGithubSquare, FaTwitterSquare } from "react-icons/fa";
import ContactForm from "./ContactForm";
import { MenuListProvider } from "../StateProvider";

function Contact() {
  const { menuColorDetect } = useContext(MenuListProvider);
  const [message, setMessage] = useState("");
  const contactSecRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () =>
      menuColorDetect(contactSecRef.current, "contact")
    );
    window.removeEventListener("scroll", () =>
      menuColorDetect(contactSecRef.current, "contact")
    );
  }, []);

  const SNS_STYLES = "text-4xl lg:text-5xl";

  return (
    <section
      ref={contactSecRef}
      className="relative pt-20 lg:pt-40 bg-gradient-to-br from-[#162447] to-[#673ab7] pb-10"
    >
      <WaveSvg className="absolute top-0 left-0 fill-[#eee] w-full pointer-events-none" />
      <h2 id="to_contact" className="text-[#eee]">
        Contact
      </h2>
      <p className="text-[#eee] my-5">お問い合わせ</p>
      <p className="text-mainP">{message}</p>

      <div className="flex flex-col lg:grid lg:grid-flow-col lg:grid-cols-5 lg:gap-4 lg:max-w-xl items-center w-full md:w-2/3 xl:w-1/3 md:mx-auto z-10">
        <ul className="w-full lg:w-auto lg:h-full lg:col-span-1 flex lg:flex-col justify-around items-center mb-5 lg:mb-0 py-2 lg:px-2 rounded-lg bg-[#fff]">
          <li>
            <a href="https://github.com/SANDAY-JS" target="_blank">
              <FaGithubSquare className={`fill-black ${SNS_STYLES}`} />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100008797329230"
              target="_blank"
            >
              <AiFillFacebook className={`fill-[#2727b1] ${SNS_STYLES}`} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/SunHiguchi" target="_blank">
              <FaTwitterSquare className={`fill-[#177cdb] ${SNS_STYLES}`} />
            </a>
          </li>
        </ul>

        <ContactForm setMessage={setMessage} />
      </div>
    </section>
  );
}

export default Contact;
