import React, { useContext } from "react";
import { MenuListProvider } from "../StateProvider";
import ServiceItem from "./ServiceItem";

function Services() {
  const { servicesList } = useContext(MenuListProvider);

  return (
    <section>
      <h2 id="to_supports">Services</h2>
      <p>対応内容</p>
      <div className="flex flex-col items-center">
        {servicesList.map((service, i) => (
          <ServiceItem
            title={service.title}
            src={service.src}
            des={service.des}
            num={i}
            key={i}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
