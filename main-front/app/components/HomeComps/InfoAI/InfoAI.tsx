import React from "react";
import data from "@/public/yapay_zeka.json";

const InfoAI = () => {
  return (
    <div id="info-ai" className="flex flex-col mt-[16vh] md:flex-row text-textColor opacity-70 ">
      
      {/* Sol Taraf */}
      <div className="text-center w-full md:w-[50vw] h-auto md:h-[70vh] text-[4vw] sm:text-lg leading-[1.8] p-4 md:p-10 font-serif flex-1 shadow-lg transition-all duration-300 ease-in-out">
        <h1 className="font-opensans text-[6vw] sm:text-2xl font-bold mb-4">
          {data["Yapay Zeka Info"].Sorular[4]}
        </h1>
        <p className="font-opensans mb-6 text-justify">
          {data["Yapay Zeka Info"].Cevaplar[4]}
        </p>
      </div>

      {/* Sağ Taraf */}
      <div className="text-center w-full md:w-[50vw] h-auto md:h-[70vh]   text-[4vw] sm:text-lg leading-[1.8] p-4 md:p-10 font-serif flex-1 shadow-lg transition-all duration-300 ease-in-out">
        <h1 className="font-opensans text-[6vw] sm:text-2xl font-bold mb-4">
          {data["Yapay Zeka Info"].Sorular[5]}
        </h1>
        <p className="font-opensans mb-6 text-justify">
          {data["Yapay Zeka Info"].Cevaplar[5]}
        </p>

        <ul className="my-6 pl-4 md:pl-7 list-none text-left font-opensans">
          {data["Yapay Zeka Info"].Araçlar.map((arac, index) => (
            <li
              key={index}
              className="mb-2 relative pl-6 before:content-['•'] before:text-textColor before:font-bold before:absolute before:left-0"
            >
              {arac}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfoAI;
