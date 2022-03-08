import React, { useContext } from "react";
import VoiceItem from "./VoiceItem";
import { MenuListProvider } from "../provider/StateProvider";

function Voice() {
  const { voiceList } = useContext(MenuListProvider);

  return (
    <section>
      <h2 id="to_voice">Voice</h2>
      <p>クライアント様の声</p>
      <div className="flex flex-wrap gap-5 justify-between md:justify-around lg:justify-between w-full xl:max-w-screen-xl xl:mx-auto">
        {voiceList.map((voice) => (
          <VoiceItem
            name={voice.name}
            link={voice.link}
            src={voice.src}
            des={voice.des}
            key={voice.name}
          />
        ))}
      </div>
    </section>
  );
}

export default Voice;
