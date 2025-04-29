import Image from "next/image";
import React from "react";

interface AcademicianProps {
  name: string;
  img_path: string;
}

const Academician: React.FC<AcademicianProps> = ({ name, img_path }) => {
  return (
    <section id="academician" className="relative h-[50vh] w-full bg-topNavBg text-black rounded-lg overflow-hidden group">
      <Image
        src={img_path}
        fill
        alt="Akademisyen görseli"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute bottom-0 w-full h-[7vh] bg-white py-[1.6vh] px-[1.6vw] z-10 opacity-80 md:opacity-50 group-hover:opacity-80">
        <p className="line-clamp-1 font-opensans font-semibold text-[4vw] md:text-[2.3vh] text-black drop-shadow-md tracking-wide">
          {name}
        </p>
      </div>
    </section>
  );
};

export default Academician;
