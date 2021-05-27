import React, { useContext } from "react";
import VoiceItem from "./VoiceItem";
import { MenuListProvider } from "../StateProvider";

function Voice() {
  const { voiceList } = useContext(MenuListProvider);

  return (
    <section>
      <h2 id="to_voice">Voice</h2>
      <p>クライアント様の声</p>
      <div className="flex flex-wrap justify-evenly">
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
