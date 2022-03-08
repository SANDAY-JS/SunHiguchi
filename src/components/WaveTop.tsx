import React from "react";

const WaveTop = () => {
  return (
    <svg
      viewBox="0 0 500 140"
      preserveAspectRatio="xMinYMin meet"
      className="absolute bottom-0 left-0"
    >
      <path
        d="M0,100 C100,0 200,250 500,70 V200 L00,200 Z"
        // style="stroke: none; fill: #eee"
        className="stroke-0 fill-[#eee]"
      ></path>
    </svg>
  );
};

export default WaveTop;
