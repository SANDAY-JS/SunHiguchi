import React from "react";
import PaymentItem from "./PaymentItem";

function Payment() {
  return (
    <section className="relative bg-web-person bg-left md:bg-center bg-no-repeat overflow-x-hidden">
      <h2 id="to_payment">Payment</h2>
      <p>料金</p>
      <div className="flex flex-col items-center z-10">
        <PaymentItem
          title={"Web制作"}
          matter1={"Web制作一式（レスポンシブ化込み）"}
          payment1={"39, 000"}
          payment1Des={"（通常料金：¥9,000 + レスポンシブ化：¥3,000）"}
          matter2={"ヘッダー、フッターのみ"}
          payment2={"19, 000"}
          payment2Des={"（ヘッダー：¥10,000 + フッター：¥9,000）"}
          num={false}
        />
        <PaymentItem
          title={"Web開発"}
          matter1={"JavaScript案件(React可能)"}
          matter2={"Firebase案件"}
          payment1={"19,900"}
          payment1Des={""}
          payment2={"19,900"}
          payment2Des={""}
          num={true}
        />
        <PaymentItem
          title={"WordPress制作"}
          matter1={
            "サイト構築一式（WordPressインストールからコーディングまで）"
          }
          payment1={"39, 000"}
          payment1Des={""}
          matter2={"一部コーディングのみ"}
          payment2={"19,000"}
          payment2Des={""}
          num={false}
        />
      </div>
    </section>
  );
}

export default Payment;
