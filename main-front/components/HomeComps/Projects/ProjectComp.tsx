import Image from "next/image";
import React from "react";
import { FaAnglesRight } from "react-icons/fa6";

interface ProjectCompProps {
  title: string;
}

const ProjectComp: React.FC<ProjectCompProps> = ({ title }) => {
  return (
    <div className="md:w-[16.3vw] w-[80vw] md:h-[40vh] h-[40vh] bg-topNavBg rounded-lg overflow-hidden flex-shrink-0 mx-[1vw]">
      <div className="w-full h-[16vh]">
        <Image
          src="/images/project1.png"
          alt="Proje görseli"
          width={400}
          height={300}
          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="ml-[5%] w-[90%] h-[9vh] text-center overflow-hidden border-b-2 flex items-center justify-center">
        <h1 className="line-clamp-2 font-bold font-opensans opacity-70 hover:opacity-100 text-textColor">
          {title}
        </h1>
      </div>

      <div className="ml-[5%] w-[90%] h-[15vh]">
        <div className="h-[6vh] mt-[0.5vh] overflow-hidden">
          <p className="line-clamp-2 font-opensans text-sm text-center opacity-70 hover:opacity-100 text-textColor">
            Üniversitemiz Mühendislik ve Doğa Bilimleri Fakültesi Yazılım
            Mühendisliği Bölümü Öğretim Üyemiz Doç. Dr. Zafer Cömert’in
          </p>
        </div>

        <div className="h-[5vh] mt-[0.5vh] flex justify-center items-center">
          <button className="group bg-homeContBg flex justify-around opacity-70 font-opensans items-center hover:opacity-100 h-full w-[70%] text-textColor px-[1vw] py-[0.5vh] rounded-lg transition-all duration-300">
            Devamı
            <FaAnglesRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectComp;
