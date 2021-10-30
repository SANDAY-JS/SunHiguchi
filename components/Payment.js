import React from "react";
import PaymentItem from "./PaymentItem";

function Payment() {
  return (
    <section className="relative bg-web-person bg-left md:bg-center bg-no-repeat overflow-x-hidden">
      <h2 id="to_payment">Payment</h2>
      <p>料金</p>
      <div className="flex flex-col items-center z-10">
        <PaymentItem
          title={"Web開発"}
          matter1={"フロントエンド開発"}
          payment1={"39,000"}
          payment1Des={""}
          num={true}
        />
        <PaymentItem
          title={"アニメーション制作"}
          matter1={"動画制作"}
          payment1={"29,000"}
          payment1Des={"＊～30秒の場合。長さによって料金が前後いたします。"}
          matter2={"サイト内のアニメーション再現"}
          payment2={"19, 000"}
          payment2Des={""}
          num={false}
        />
        <PaymentItem
          title={"WordPress関連"}
          matter1={"デザイン, フロントエンド開発"}
          payment1={"39, 000"}
          payment1Des={""}
          num={true}
        />
        <PaymentItem
          title={"Web制作"}
          matter1={"Webページ / LP制作"}
          payment1={"69, 000"}
          payment1Des={
            "（通常料金：¥59,000 + レスポンシブ化：¥10,000）＊参考サイト・デザインをご提示ください"
          }
          num={false}
        />
      </div>
    </section>
  );
}

export default Payment;
