import React from "react";
import QuestionComp from "./QuestionComp"; 
import Link from "next/link";
import TitleLane from "@/app/components/TitleLane";
import { useTranslations } from "next-intl";

const WhatsAI = ({ locale }: { locale: string }) => {
  const t = useTranslations('WhatsAI');

  return (
    <div className="ai-section relative mt-[4vh] flex flex-col items-center justify-center transition-all duration-300 ease-in-out">
      <section id="whats-ai" className="w-full h-auto">
        <TitleLane title={t('Titles.1')} bg="bg1" />
        <div className="flex flex-col md:flex-row my-[4vh] gap-[4vh] max-w-[90vw] mx-auto px-[2vh]">
          <Link href="/whatsai#means" className="block w-full md:w-1/3">
            <QuestionComp
              title={t('Questions.1')}
              text={t('Answers.1')}
              videoUrl="/videos/video1.mp4"
              locale={locale}
            />
          </Link>
          <Link href="/whatsai#types" className="block w-full md:w-1/3">
            <QuestionComp
              title={t('Questions.2')}
              text={t('Answers.2')}
              videoUrl="/videos/video2.mp4"
              locale={locale}
            />
          </Link>
          <Link href="/whatsai#learning" className="block w-full md:w-1/3">
            <QuestionComp
              title={t('Questions.3')}
              text={t('Answers.3')}
              videoUrl="/videos/yapayzekaogrenmesi.mp4"
              locale={locale}
            />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row my-[4vh] gap-[4vh] max-w-[90vw] mx-auto px-[2vh]">
          <Link
            href={"/whatsai#turing"}
            className="block w-full md:w-1/2"          >
            <QuestionComp
              title={t('Questions.6')}
              text={t('Answers.6')}
              videoUrl="/videos/ai-safety.mp4"
              locale={locale}
            />
          </Link>
          <Link
            href={"/whatsai#future"}
            className="block w-full md:w-1/2"          >
            <QuestionComp
              title={t('Questions.7')}
              text={t('Answers.7')}
              videoUrl="/videos/video3.mp4"
              locale={locale}
            />
          </Link>
        </div>
      </section>
      <section id="ai-safety" className="w-full h-auto">
        <TitleLane title={t('Titles.2')} bg="bg2" />
        <Link
          href={`/whatsai#safety`}
          className="flex flex-col md:flex-row my-[4vh] gap-[4vh] max-w-[90vw] mx-auto px-[2vh]"
        >
          <QuestionComp
            title={t('Questions.8')}
            text={t('Answers.8')}
            imgUrl="/img/whatsai/ai-quest1.png"
            locale={locale}
          />
          <QuestionComp
            title={t('Questions.9')}
            text={t('Answers.9')}
            imgUrl="/img/whatsai/ai-quest2.png"
            locale={locale}
          />
          <QuestionComp
            title={t('Questions.10')}
            text={t('Answers.10')}
            imgUrl="/img/whatsai/ai-quest3.png"
            locale={locale}
          />
        </Link>
        <Link
          href={"/whatsai"}
          className="flex flex-col md:flex-row my-[4vh] gap-[4vh] max-w-[90vw] mx-auto px-[2vh]"
        >
          <QuestionComp
            title={t('Questions.11')}
            text={t('Answers.11')}
            videoUrl="/videos/ai-quest4.mp4"
            locale={locale}
          />
          <QuestionComp
            title={t('Questions.12')}
            text={t('Answers.12')}
            videoUrl="/videos/society.mp4"
            locale={locale}
          />
        </Link>
      </section>
      <section id="ai-using" className="w-full h-auto">
        <TitleLane title={t('Titles.3')} bg="bg3" />
        <Link
          href={"/whatsai#tools"}
          className="flex flex-col md:flex-row my-[4vh] gap-[4vh] max-w-[90vw] mx-auto px-[2vh]"
        >
          <QuestionComp
            title={t('Questions.13')}
            text={t('Answers.13')}
            imgUrl="/img/whatsai/ai-using1.png"
            locale={locale}
          />
          <QuestionComp
            title={t('Questions.14')}
            text={t('Answers.14')}
            imgUrl="/img/whatsai/ai-using2.png"
            locale={locale}
          />
          <QuestionComp
            title={t('Questions.15')}
            text={t('Answers.15')}
            imgUrl="/img/whatsai/ai-using3.png"
            locale={locale}
          />
        </Link>
        <Link
          href={"/whatsai#tools"}
          className="flex flex-col md:flex-row my-[4vh] gap-[4vh] max-w-[90vw] mx-auto px-[2vh]"
        >
          <QuestionComp
            title={t('Questions.16')}
            text={t('Answers.16')}
            videoUrl="/videos/ai-using4.mp4"
            locale={locale}
          />
          <QuestionComp
            title={t('Questions.17')}
            text={t('Answers.17')}
            videoUrl="/videos/ai-using5.mp4"
            locale={locale}
          />
        </Link>
      </section>
      <section id="ai-history" className="w-full h-auto">
        <TitleLane title={t('Titles.4')} bg="bg4" />
        <Link
          href={"/whatsai#history"}
          className="flex flex-row items-center justify-center my-[4vh] gap-[4vh] max-w-[90vw] mx-auto px-[2vh]"
        >
          <div className="md:w-[30vw]">
            <QuestionComp
              title={t('Questions.18')}
              text={t('Answers.18')}
              imgUrl="/img/whatsai/ai-history.png"
              locale={locale}
            />
          </div>
        </Link>
      </section>
    </div>
  );
};

export default WhatsAI;
