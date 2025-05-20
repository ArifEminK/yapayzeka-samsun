import TitleLane from "@/app/components/TitleLane";
import React from "react";
import QuestionComp from "../InfoAI/QuestionComp"; 
import Link from "next/link";
import { useTranslations } from "next-intl";

const AIStudiesSection = ({ locale }: { locale: string }) => {
  const t = useTranslations('AIStudies');
  return (
    <div id="projects" className="ai-section relative mt-[4vh] flex flex-col items-center justify-center transition-all duration-300 ease-in-out">
      <section className="w-full h-auto">
        <TitleLane bg="bg1" title={t('Title')} />
        <Link
          href={"projects"}
          className="flex flex-col md:flex-row my-[4vh] gap-[4vh] max-w-[90vw] mx-auto px-[2vh]"
        >
          <QuestionComp
            title={t('Questions.1')}
            text={t('Answers.1')}
            imgUrl="/img/whatsai/medic-ai.png"
            locale={locale}
          />
          <QuestionComp
            title={t('Questions.2')}
            text={t('Answers.2')}
            imgUrl="/img/whatsai/space-ai.png"
            locale={locale}
          />
          <QuestionComp
            title={t('Questions.3')}
            text={t('Answers.3')}
            imgUrl="/img/whatsai/geo-ai.png"
            locale={locale}
          />
        </Link>
        <div className="flex flex-col md:flex-row my-[4vh] gap-[4vh] max-w-[90vw] mx-auto px-[2vh]">
          <Link href={"economy"}>
            <QuestionComp
              title={t('Questions.4')}
              text={t('Answers.4')}
              imgUrl="/img/whatsai/economy-ai.png"
              locale={locale}
            />
          </Link>
          <Link href={"engineering"}>
            <QuestionComp
              title={t('Questions.5')}
              text={t('Answers.5')}
              imgUrl="/img/whatsai/engineering-ai.png"
              locale={locale}
            />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AIStudiesSection;
