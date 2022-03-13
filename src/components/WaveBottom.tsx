import React from "react";

const WaveBottom = () => {
  return (
    <svg
      viewBox="0 0 500 145"
      width="100%"
      height="100%"
      preserveAspectRatio="xMinYMin meet"
      className="absolute top-0 left-0 fill-[#eee] w-full pointer-events-none"
    >
      <path
        d="M0,40 C100,120 200,-50 500,60 V0 L00,0 Z"
        style={{ stroke: "none" }}
      ></path>
    </svg>
  );
};

export default WaveBottom;
