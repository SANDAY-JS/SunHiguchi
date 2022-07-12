import gsap from "gsap";
import React, { useContext, useEffect } from "react";
import useVisibility from "../assets/useVisibility";
import { MenuListProvider } from "../provider/StateProvider";
import ServiceItem from "./ServiceItem";

function Services() {
  const { servicesList } = useContext(MenuListProvider);
  const [isVisible, currentElement] = useVisibility(-400,100,true);

  const tl = gsap.timeline({})

  useEffect(() =>{
    if(!isVisible) {
      tl.to('body', {background: '#eee'})
      return;
    };
    tl.to('body', {background: 'linear-gradient(to right, #2C5364, #203A43, #0F2027)'})
  }, [isVisible])

  return (
    <section ref={currentElement}>
      <h2 id="to_services">Services</h2>
      <p className="text-[#ddd]">対応内容</p>
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
