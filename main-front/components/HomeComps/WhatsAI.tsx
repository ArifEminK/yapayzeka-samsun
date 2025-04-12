import React from "react";
import QuestionComp from "./QuestionComp";

const WhatsAI = () => {
  return (
    <section className="ai-section relative  z-30 mt-[4vh] py-[4vh] min-h-screen flex flex-col items-center justify-center border-b border-gray-300 transition-all duration-300 ease-in-out  ">
      <div className=" top-0 absolute text-center  bg-opacity-50 bg-topNavBg w-full  text-white text-[4.5rem] font-bold z-[2] [text-shadow:2px_2px_4px_rgba(0,0,0,0.7)]">
        YAPAY ZEKA NEDİR?
      </div>

      <div className="flex  items-center gap-[4vw] max-w-[90vw] mx-auto px-[4vh] ">
        <QuestionComp
          title="Yapay Zeka Ne Anlama Geliyor?"
          text="Hepimiz muhtemelen 'yapay zeka' veya 'AI' kelimelerini duymuşuzdur. Peki bu aslında ne anlama geliyor?"
          videoUrl="/videos/video1.mp4"
        />
        <QuestionComp
          title="Yapay Zekanın Türleri"
          text="Makine Öğrenmesi, Üretken Yapay Zeka... Yapay Zeka ile birlikte birçok terim kullanılıyor. Fark nedir?"
          videoUrl="/videos/video2.mp4"
        />
        <QuestionComp
          title="Yapay Zeka Nasıl Öğrenir?"
          text="Bir yapay zekanın bir şey öğrendiğini duyduğumuzda bu ne anlama gelir?"
          videoUrl="/videos/video3.mp4"
        />

      </div>
    </section>
    
  );
};

export default WhatsAI;
