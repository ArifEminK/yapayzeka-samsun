import Image from "next/image";
import React from "react";

interface AcademicianProps {
  name: string;
  img_path: string;
}

const Academician: React.FC<AcademicianProps> = ({ name, img_path }) => {
  return (
    <div className="relative h-[50vh] ml-[4vh] bg-topNavBg text-black rounded-lg overflow-hidden group">
      <Image
        src={img_path}
        alt="Akademisyen görseli"
        className="absolute bottom-[7vh] left-0 w-full object-cover transform transition-transform duration-300 group-hover:scale-105 block"
      />
      <div className="absolute bottom-0 w-full h-[7vh] bg-white py-[1.6vh] px-[1.6vw] z-10 opacity-50 group-hover:opacity-80">
        <p className="line-clamp-1 font-opensans font-semibold text-[2.3vh] text-black drop-shadow-md tracking-wide">
          {name}
        </p>
      </div>
    </div>
  );
};

export default Academician;
