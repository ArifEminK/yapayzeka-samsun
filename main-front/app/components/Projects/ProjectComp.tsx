import Image from "next/image";
import React from "react";

interface ProjectCompProps {
  title: string;
  text: string;
  imgUrl: string;
}

const ProjectComp: React.FC<ProjectCompProps> = ({ title, text, imgUrl }) => {
  return (
    // <div className="md:w-[16.3vw] w-[80vw] md:h-[40vh] h-[40vh] bg-topNavBg rounded-lg overflow-hidden flex-shrink-0 mx-[1vw]">
    //   <div className="w-full h-[16vh]">
    //     <Image
    //       src="/images/project1.png"
    //       alt="Proje görseli"
    //       width={400}
    //       height={300}
    //       className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
    //     />
    //   </div>

    //   <div className="ml-[5%] w-[90%] h-[9vh] text-center overflow-hidden border-b-2 flex items-center justify-center">
    //     <h1 className="line-clamp-2 font-bold font-opensans opacity-70 hover:opacity-100 text-textColor">
    //       {title}
    //     </h1>
    //   </div>

    //   <div className="ml-[5%] w-[90%] h-[15vh]">
    //     <div className="h-[6vh] mt-[0.5vh] overflow-hidden">
    //       <p className="line-clamp-2 font-opensans text-sm text-center opacity-70 hover:opacity-100 text-textColor">
    //         Üniversitemiz Mühendislik ve Doğa Bilimleri Fakültesi Yazılım
    //         Mühendisliği Bölümü Öğretim Üyemiz Doç. Dr. Zafer Cömert’in
    //       </p>
    //     </div>

    //     <div className="h-[5vh] mt-[0.5vh] flex justify-center items-center">
    //       <button className="group bg-homeContBg flex justify-around opacity-70 font-opensans items-center hover:opacity-100 h-full w-[70%] text-textColor px-[1vw] py-[0.5vh] rounded-lg transition-all duration-300">
    //         Devamı
    //         <FaAnglesRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="h-[24vw] w-[26vw] text-center group hover:cursor-pointer">
      <div className="h-[18vw] relative">
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="object-cover w-[26vw] h-[18vw]"
          sizes="(max-width: 768px) 100vw, 26vw"
        />
      </div>
      <div className="h-[6vw] mt-[2vh] text-start">
        <h2
          className="relative inline-block text-[2.5vh] text-textColor font-PTSerif font-bold m-0
before:content-[''] before:absolute before:origin-left before:bottom-0 before:w-0
before:h-[2px] before:bg-underlineColor before:transition-all before:duration-300 before:ease-out
group-hover:before:w-full group-hover:before:left-0"
        >
          {title}
        </h2>
        <p className="text-[1.5vh] text-gray-500">{text}</p>
      </div>
    </div>
  );
};

export default ProjectComp;
