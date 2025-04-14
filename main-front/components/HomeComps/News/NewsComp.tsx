import Image from "next/image";
import React from "react";
import { FaAnglesRight } from "react-icons/fa6";

const NewsComp = () => {
  return (
    <div className="w-[16.3vw] h-[40vh] bg-topNavBg rounded-lg overflow-hidden flex-shrink-0 mx-[1vw]">
      <div className="w-full h-[16vh]">
        <Image
          src="/images/news1.png"
          alt="Proje görseli"
          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="ml-[5%] w-[90%] h-[9vh] text-center py-[1vh] overflow-hidden border-b-2">
        <h1 className="font-bold font-opensans opacity-70 hover:opacity-100 text-white">
          Yapay zeka ile beynin &quot;Dijital ikizi&quot; yapıldı
        </h1>
      </div>

      <div className="ml-[5%] w-[90%] h-[15vh]">
        <div className="h-[6vh] mt-[0.5vh] overflow-hidden">
          <p className="line-clamp-2 font-opensans text-sm text-center opacity-70 hover:opacity-100 text-white">
            Bilim insanları, yapay zekayla fare beyninin &quot;Dijital ikizi&quot;
            oluşturdu. Model, nöron tepkilerini tahmin ederek deneyleri
            hızlandırıyor. Hedef, insan beyninin sanal kopyasını oluşturmak.
          </p>
        </div>

        <div className="h-[5vh] mt-[0.5vh] flex justify-center items-center">
          <button className="group bg-homeContBg flex justify-around opacity-70 items-center hover:opacity-100 h-full w-[70%] text-white px-[1vw] py-[0.5vh] rounded-lg transition-all duration-300">
            Devamı
            <FaAnglesRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsComp;
