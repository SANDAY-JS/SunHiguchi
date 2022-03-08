import React, { useContext, useEffect, useRef, useState } from "react";
import { MenuListProvider } from "../provider/StateProvider";

// const PaymentItem: React.FC<PaymentContents> = ({
//   title,
//   matter1,
//   matter2,
//   payment1,
//   payment1Des,
//   payment2,
//   payment2Des,
//   num,
// }: PaymentContents) => {
const PaymentItem = ({
  title,
  matter1,
  matter2,
  payment1,
  payment1Des,
  payment2,
  payment2Des,
  num,
}) => {
  const { elementEffect } = useContext(MenuListProvider);
  const [visible, setVisible] = useState(false);

  const [isPageWide, setIsPageWide] = useState(false);
  const elRef = useRef();

  const checkDeviceWidth = () => {
    const match = window.matchMedia("(max-width: 769px)");
    if (match.matches) return setIsPageWide(false);
    if (!match.matches) {
      setIsPageWide(true);
    }
  };

  useEffect(() => {
    checkDeviceWidth();

    window.addEventListener("resize", checkDeviceWidth);
    window.addEventListener("scroll", () =>
      elementEffect(elRef.current, visible, setVisible)
    );
    return () => {
      window.removeEventListener("resize", checkDeviceWidth);
      window.removeEventListener("scroll", () =>
        elementEffect(elRef.current, visible, setVisible)
      );
    };
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
    <div
      ref={elRef}
      className={`clay card w-full md:w-2/3 2xl:w-full transition-transform transform scale-0 origin-center duration-500
      relative left-0 overflow-hidden ${visible && "!scale-100"}`}
      id={`payment_${title}`}
    >
      <h3 className="text-2xl font-black text-center">{title}</h3>
      <table className="w-full border-none bg-opacity-40">
        <thead className="py-4">
          <tr>
            <th className="w-1/2 border-none text-center underline font-jp p-3 sm:p-4">
              ご依頼内容
            </th>
            <th className="w-1/2 border-collapse text-center underline font-jp p-3 sm:p-4">
              料金
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="w-1/2 border-collapse text-center font-jp p-3 sm:p-4">
              {matter1}
            </td>
            <td className="w-1/2 border-collapse text-center font-jp p-3 sm:p-4">
              {payment1Des ? (
                <details className="cursor-pointer">
                  <summary className="border-none outline-none">
                    ¥{payment1}～
                  </summary>
                  <span className="block text-xs sm:text-base">
                    {payment1Des}
                  </span>
                </details>
              ) : (
                <>
                  ¥{payment1}～
                  <span className="block text-xs sm:text-base">
                    {payment1Des}
                  </span>
                </>
              )}
            </td>
          </tr>
          {matter2 && (
            <tr>
              <td className="w-1/2 border-collapse text-center font-jp p-3 sm:p-4">
                {matter2}
              </td>
              <td className="w-1/2 border-collapse text-center font-jp p-3 sm:p-4">
                {payment2Des ? (
                  <details className="cursor-pointer">
                    <summary className="border-none outline-none">
                      ¥{payment2}～
                    </summary>
                    <span className="block text-xs sm:text-base">
                      {payment2Des}
                    </span>
                  </details>
                ) : (
                  <>
                    ¥{payment2}～
                    <span className="block text-xs sm:text-base">
                      {payment2Des}
                    </span>
                  </>
                )}
              </td>
            </tr>
          )}
          <tr>
            <td className="w-1/2 border-collapse text-center font-jp p-3 sm:p-4">
              その他のご依頼（柔軟に対応致します）
            </td>
            <td className="w-1/2 border-collapse text-center font-jp p-3 sm:p-4">
              要相談
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PaymentItem;
