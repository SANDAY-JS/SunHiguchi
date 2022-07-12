import React, { useContext, useEffect, useRef, useState } from "react";
import useVisibility from "../assets/useVisibility";

function PaymentItem({title,matter1,matter2,payment1,payment2,index}) {
  const [isVisible, currentElement] = useVisibility();
  const [isPageWide, setIsPageWide] = useState(false);

  const colors = ['from-[#50C9C3] to-[#96DEDA] text-mainB', 'from-[#EB3349] to-[#F45C43] text-[#ddd]', 'from-[#4b6cb7] to-[#182848] text-[#ddd]', 'from-[#EDDE5D] to-[#EDDE5D] text-mainB']

  const checkDeviceWidth = () => {
    const match = window.matchMedia("(max-width: 769px)");
    if (match.matches) return setIsPageWide(false);
    setIsPageWide(true);
  };

  useEffect(() => {
    checkDeviceWidth();

    window.addEventListener("resize", checkDeviceWidth);
    return () => {window.removeEventListener("resize", checkDeviceWidth)};
  }, []);

  useEffect(() => {
    // PCの場合、detailsタグをopenに
    if (!isPageWide) return;

    const detailsTag = document.querySelectorAll("details");
    if (isPageWide) {
      detailsTag.forEach((el) => el.setAttribute("open", ""));
    }
  }, [isPageWide]);

  return (
    <div ref={currentElement} id={`payment_${title}`}
      className={`bg-gradient-to-br ${colors[index]} rounded-md py-4 w-full md:w-[45%] 2xl:w-full transition-opacity transform opacity-0 origin-center duration-500
      relative left-0 overflow-hidden !font-serif ${isVisible && "!opacity-100"}`}>
      <h3 className="text-2xl font-black text-center">{title}</h3>
      <table className="w-full border-none bg-opacity-40 mx-2 md:mx-4 lg:mx-6">
        <thead className="py-4">
          <tr>
            <th className="w-1/2 border-none underline p-3 text-left sm:py-4">
              ご依頼内容
            </th>
            <th className="w-1/2 border-collapse underline p-3 text-left sm:py-4">
              料金
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="w-1/2 border-collapse p-3 sm:py-0">
              {matter1}
            </td>
            <td className="w-1/2 border-collapse text-xl md:text-2xl font-black p-3 sm:py-0">
              ¥{payment1}～
            </td>
          </tr>
          {matter2 && (
            <tr className="mt-3">
              <td className="w-1/2 border-collapse p-3 sm:py-0">
                {matter2}
              </td>
              <td className="w-1/2 border-collapse text-xl md:text-2xl font-black p-3 sm:py-0">
                ¥{payment2}～
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PaymentItem;
