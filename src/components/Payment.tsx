import React from "react";
import PaymentItem from "./PaymentItem";

function Payment() {
  return (
    <section className="relative bg-web-person bg-left md:bg-center bg-no-repeat overflow-x-hidden pb-6 xl:mx-auto xl:max-w-screen-lg">
      <h2 id="to_payment">Payment</h2>
      <p>料金</p>
      <div className="flex flex-col items-center gap-5 2xl:max-w-screen-xl 2xl:mx-auto z-10">
        <PaymentItem
          title={"Web開発"}
          matter1={"フロントエンド開発"}
          payment1={"39,000"}
          payment1Des={""}
          matter2={null}
          payment2={null}
          payment2Des={null}
          num={true}
        />
        <PaymentItem
          title={"アニメーション制作"}
          matter1={"動画制作"}
          payment1={"29,000"}
          payment1Des={"＊～30秒の場合。長さによって料金が前後いたします。"}
          matter2={"サイト内のアニメーション再現"}
          payment2={"19,000"}
          payment2Des={""}
          num={false}
        />
        <PaymentItem
          title={"WordPress関連"}
          matter1={"デザイン, フロントエンド開発"}
          payment1={"39,000"}
          payment1Des={""}
          matter2={null}
          payment2={null}
          payment2Des={null}
          num={true}
        />
        <PaymentItem
          title={"Web制作"}
          matter1={"Webページ / LP制作"}
          payment1={"69,000"}
          payment1Des={
            "（通常料金：¥59,000 + レスポンシブ化：¥10,000）＊参考サイト・デザインをご提示ください"
          }
          matter2={null}
          payment2={null}
          payment2Des={null}
          num={false}
        />
      </div>
    </section>
  );
}

export default Payment;
