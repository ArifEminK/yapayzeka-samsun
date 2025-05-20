import Image from "next/image";
import React from "react";

interface AcademicianCompProps {
  title: string;
  imgUrl: string;
}

const AcademicianComp: React.FC<AcademicianCompProps> = ({ title, imgUrl }) => {
  return (
    <div className="h-[20vw] w-full group hover:cursor-pointer">
      <div className="h-[18vw] relative">
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="object-contain w-[26vw] h-[18vw]"
          sizes="(max-width: 768px) 100vw, 26vw"
        />
      </div>
      <div className="h-[2vw] mt-[2vh]">
        <h2
          className="relative text-textColor text-[3vh] font-PTSerif font-bold m-0 items-start text-start
 group-hover:before:scale-x-100 before:transition-transform inline-block before:duration-300 before:ease-out before:origin-left before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-underlineColor"
        >
          {title}
        </h2>

      </div>
    </div>
  );
};

export default AcademicianComp;
