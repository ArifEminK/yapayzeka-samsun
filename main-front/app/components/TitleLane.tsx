import React from "react";

interface TitleLaneProps {
  title: string;
  bg: string;
}

const TitleLane: React.FC<TitleLaneProps> = ({ title, bg }) => {
  return (
    <div
      className={`opacity-80 bg-cover bg-fixed bg-center md:h-[24vh] h-[12vh] flex justify-center items-center w-full bg-${bg}`}
    >
      <h1
        className="text-white font-sans text-[6vw] sm:text-[4.2vw] font-bold z-[2] text-center"
        style={{
          textShadow: "1px 1px 3px rgba(0,0,0,0.9)",
        }}
      >
        {title}
      </h1>
    </div>
  );
};

export default TitleLane;
