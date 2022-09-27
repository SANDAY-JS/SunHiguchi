import React from "react";
import PaymentItem from "./PaymentItem";

function Payment() {
  return (
    <section className="relative bg-web-person bg-left md:bg-center bg-no-repeat overflow-x-hidden pb-6 xl:mx-auto xl:max-w-screen-lg">
      <h2 id="to_payment">Payment</h2>
      <p>料金</p>
      <div className="flex flex-col md:flex-row justify-center items-center flex-wrap gap-5 2xl:max-w-screen-xl 2xl:mx-auto z-10">
        <PaymentItem
          title={"ホームページ制作"}
          matter1={"Webページ / LP制作"}
          payment1={"100,000"}
          matter2={null}
          payment2={null}
          index={0}
        />
        <PaymentItem
          title={"Webシステム開発"}
          matter1={"フロントエンド開発"}
          payment1={"39,000"}
          matter2={null}
          payment2={null}
          index={1}
        />
        <PaymentItem
          title={"アニメーション制作"}
          matter1={"サイト内アニメーション"}
          payment1={"20,000"}
          matter2={null}
          payment2={null}
          index={2}
        />
        <PaymentItem
          title={"WordPress開発"}
          matter1={"デザインの変更・修正"}
          payment1={"49,000"}
          matter2={"機能の追加(システム開発)"}
          payment2={"39,000"}
          index={3}
        />
      </div>
    </section>
  );
}

export default Payment;
