import React from "react";
import QuestionComp from "./QuestionComp";
import data from "@/public/yapay_zeka.json";
import Link from "next/link";
import TitleLane from "@/components/TitleLane";

const WhatsAI = () => {
  return (
    <div className="ai-section relative mt-[4vh] flex flex-col items-center justify-center transition-all duration-300 ease-in-out">
      <section id="whats-ai" className="w-full h-auto">
        <TitleLane title="Yapay Zeka Nedir?" bg="bg1" />
        <Link
          href={"/whatsai"}
          className="flex flex-col md:flex-row my-[4vh] gap-[4vh] max-w-[90vw] mx-auto px-[2vh]"
        >
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
            videoUrl="/videos/yapayzekaogrenmesi.mp4"
          />
        </Link>
        <Link
          href={"/whatsai"}
          className="flex flex-col md:flex-row my-[4vh] gap-[4vh] max-w-[90vw] mx-auto px-[2vh]"
        >
          <QuestionComp
            title={data["Yapay Zeka Info"].Sorular[6]}
            text={data["Yapay Zeka Info"].Cevaplar[6]}
            videoUrl="/videos/ai-safety.mp4"
          />
          <QuestionComp
            title={data["Yapay Zeka Info"].Sorular[7]}
            text={data["Yapay Zeka Info"].Cevaplar[7]}
            videoUrl="/videos/video3.mp4"
          />
        </Link>
      </section>
      <section id="ai-safety" className="w-full h-auto">
        <TitleLane title="Yapay Zeka Güvenli Mi?" bg="bg2" />
        <Link
          href={`/whatsai`}
          className="flex flex-col md:flex-row my-[4vh] gap-[4vh] max-w-[90vw] mx-auto px-[2vh]"
        >
          <QuestionComp
            title={data["Yapay Zeka Info"].Sorular[8]}
            text={data["Yapay Zeka Info"].Cevaplar[8]}
            imgUrl="/img/background/ai-quest1.png"
          />
          <QuestionComp
            title={data["Yapay Zeka Info"].Sorular[9]}
            text={data["Yapay Zeka Info"].Cevaplar[9]}
            imgUrl="/img/background/ai-quest2.png"
          />
          <QuestionComp
            title={data["Yapay Zeka Info"].Sorular[10]}
            text={data["Yapay Zeka Info"].Cevaplar[10]}
            imgUrl="/img/background/ai-quest3.png"
          />
        </Link>
        <Link
          href={"/whatsai"}
          className="flex flex-col md:flex-row my-[4vh] gap-[4vh] max-w-[90vw] mx-auto px-[2vh]"
        >
          <QuestionComp
            title={data["Yapay Zeka Info"].Sorular[11]}
            text={data["Yapay Zeka Info"].Cevaplar[11]}
            videoUrl="/videos/ai-quest4.mp4"
          />
          <QuestionComp
            title={data["Yapay Zeka Info"].Sorular[12]}
            text={data["Yapay Zeka Info"].Cevaplar[12]}
            imgUrl="/img/background/ai-quest5.png"
          />
        </Link>
      </section>
      <section id="ai-using" className="w-full h-auto">
        <TitleLane title="Yapay Zeka Nasıl Kullanılıyor?" bg="bg3" />
        <Link
          href={"/whatsai"}
          className="flex flex-col md:flex-row my-[4vh] gap-[4vh] max-w-[90vw] mx-auto px-[2vh]"
        >
          <QuestionComp
            title={data["Yapay Zeka Info"].Sorular[13]}
            text={data["Yapay Zeka Info"].Cevaplar[13]}
            imgUrl="/img/background/ai-using1.png"
          />
          <QuestionComp
            title={data["Yapay Zeka Info"].Sorular[14]}
            text={data["Yapay Zeka Info"].Cevaplar[14]}
            imgUrl="/img/background/ai-using2.png"
          />
          <QuestionComp
            title={data["Yapay Zeka Info"].Sorular[15]}
            text={data["Yapay Zeka Info"].Cevaplar[15]}
            imgUrl="/img/background/ai-using3.png"
          />
        </Link>
        <Link
          href={"/whatsai"}
          className="flex flex-col md:flex-row my-[4vh] gap-[4vh] max-w-[90vw] mx-auto px-[2vh]"
        >
          <QuestionComp
            title={data["Yapay Zeka Info"].Sorular[16]}
            text={data["Yapay Zeka Info"].Cevaplar[16]}
            videoUrl="/videos/ai-using4.mp4"
          />
          <QuestionComp
            title={data["Yapay Zeka Info"].Sorular[17]}
            text={data["Yapay Zeka Info"].Cevaplar[17]}
            videoUrl="/videos/ai-using5.mp4"
          />
        </Link>
      </section>

      <TitleLane title="Yapay Zekanın Tarihçesi" bg="bg4" />
      <Link
        id="ai-history"
        href={"/whatsai"}
        className="flex flex-col md:flex-row my-[4vh] gap-[4vh] max-w-[90vw] mx-auto px-[2vh]"
      >
        <div className="w-[30vw]">
          <QuestionComp
            title={data["Yapay Zeka Info"].Sorular[18]}
            text={data["Yapay Zeka Info"].Cevaplar[18]}
            imgUrl="/img/background/ai-history.png"
          />
        </div>
      </Link>
    </div>
  );
};

export default WhatsAI;
