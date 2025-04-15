import React from "react";
import QuestionComp from "./QuestionComp";
import data from "@/public/yapay_zeka.json";

const WhatsAI = () => {
  return (
    <section className="ai-section relative h-auto z-30 mt-[4vh] py-[4vh] flex flex-col items-center justify-center border-b border-gray-300 transition-all duration-300 ease-in-out">
      
      {/* Başlık */}
      <div className="top-0 text-center bg-opacity-50 bg-topNavBg w-full text-white text-[8vw] sm:text-[4.5rem] font-bold z-[2] [text-shadow:2px_2px_4px_rgba(0,0,0,0.7)]">
        YAPAY ZEKA NEDİR?
      </div>

      {/* Soru Componentleri */}
      <div className="flex flex-col md:flex-row mt-[4vh] items-center gap-[4vh] max-w-[90vw] mx-auto px-[2vh]">
        <QuestionComp
          title={data["Yapay Zeka Info"].Sorular[1]}
          text={data["Yapay Zeka Info"].Cevaplar[1]}
          videoUrl="/videos/video1.mp4"
        />
        <QuestionComp
          title={data["Yapay Zeka Info"].Sorular[2]}
          text={data["Yapay Zeka Info"].Cevaplar[2]}
          videoUrl="/videos/video2.mp4"
        />
        <QuestionComp
          title={data["Yapay Zeka Info"].Sorular[3]}
          text={data["Yapay Zeka Info"].Cevaplar[3]}
          videoUrl="/videos/video3.mp4"
        />
      </div>
    </section>
  );
};

export default WhatsAI;
