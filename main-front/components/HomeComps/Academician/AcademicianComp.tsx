import Image from "next/image";
import React from "react";

interface AcademicianCompProps {
  title: string;
  imgUrl: string;
}

const AcademicianComp: React.FC<AcademicianCompProps> = ({ title, imgUrl }) => {
  return (
    <div className="h-[20vw] text-center group hover:cursor-pointer">
      <div className="h-[18vw] relative">
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="object-cover w-[26vw] h-[18vw]"
          sizes="(max-width: 768px) 100vw, 26vw"
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
