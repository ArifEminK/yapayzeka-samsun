import React from "react";

interface AcademicianCompProps {
  title: string;
  imgUrl: string;
}

const AcademicianComp: React.FC<AcademicianCompProps> = ({ title, imgUrl }) => {
  return (
    <div className="h-[20vw] text-center group hover:cursor-pointer">
      <div className="h-[18vw] ">
        <img
          src={imgUrl}
          alt={title}
          className="w-[26vw] border-2 border-black h-[18vw] object-contain"
        />
      </div>
      <div className="h-[2vw] mt-[2vh] text-start">
        <h2
          className="relative inline-block text-[3vh] font-PTSerif font-bold m-0 text-gray-900
  before:content-[''] before:absolute before:left-1/2 before:bottom-0 before:w-0
  before:h-[2px] before:bg-defBg before:transition-all before:duration-300 before:ease-out
  group-hover:before:w-full group-hover:before:left-0"
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

export default AcademicianComp;
