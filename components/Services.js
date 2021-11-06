import React, { useContext } from "react";
import { MenuListProvider } from "../StateProvider";
import ServiceItem from "./ServiceItem";

function Services() {
  const { servicesList } = useContext(MenuListProvider);

  return (
    <section>
      <h2 id="to_services">Services</h2>
      <p>対応内容</p>
      <div className="flex flex-col items-center xl:max-w-screen-xl xl:mx-auto gap-8 lg:gap-10 xl:gap-12">
        {servicesList.map((service, i) => (
          <ServiceItem
            title={service.title}
            src={service.src}
            des={service.des}
            anim={i === 1 && true}
            num={i}
            key={i}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
