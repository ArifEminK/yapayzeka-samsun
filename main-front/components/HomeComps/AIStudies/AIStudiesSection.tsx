import TitleLane from "@/components/TitleLane";
import React from "react";
import QuestionComp from "../InfoAI/QuestionComp";
import data from "@/public/yapay_zeka.json";
import Link from "next/link";

const AIStudiesSection = () => {
  return (
    <div className="ai-section relative mt-[4vh] flex flex-col items-center justify-center transition-all duration-300 ease-in-out">
      <section id="projects" className="w-full h-auto">
        <TitleLane bg="bg1" title="Yapay Zeka Çalışmalarımız" />
        <Link
          href={"projects"}
          className="flex flex-col md:flex-row my-[4vh] gap-[4vh] max-w-[90vw] mx-auto px-[2vh]"
        >
          <QuestionComp
            title={data["Projeler"].Sorular[1]}
            text={data["Projeler"].Cevaplar[1]}
            imgUrl="/img/whatsai/medic-ai.png"
          />
          <QuestionComp
            title={data["Projeler"].Sorular[2]}
            text={data["Projeler"].Cevaplar[2]}
            imgUrl="/img/whatsai/space-ai.png"
          />
          <QuestionComp
            title={data["Projeler"].Sorular[3]}
            text={data["Projeler"].Cevaplar[3]}
            imgUrl="/img/whatsai/geo-ai.png"
          />
        </Link>
        <Link
          href={"projects"}
          className="flex flex-col md:flex-row my-[4vh] gap-[4vh] max-w-[90vw] mx-auto px-[2vh]"
        >
          <QuestionComp
            title={data["Projeler"].Sorular[4]}
            text={data["Projeler"].Cevaplar[4]}
            imgUrl="/img/whatsai/economy-ai.png"
          />
          <QuestionComp
            title={data["Projeler"].Sorular[5]}
            text={data["Projeler"].Cevaplar[5]}
            imgUrl="/img/whatsai/engineering-ai.png"
          />
        </Link>
      </section>
    </div>
  );
};

export default AIStudiesSection;
