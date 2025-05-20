"use client";
import TitleLane from "@/app/components/TitleLane";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import ContentSection from "@/app/components/ContentSection";
import { useTranslations } from "next-intl";
const Page = () => { 
  const useT = useTranslations('Content');
  return (
    <div className=" w-full mx-auto shadow-lg overflow-hidden">
      <div className="md:mt-[16vh] mt-[12vh] w-full md:h-[84vh] h-[88vh]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/beyin2.mp4" type="video/mp4" />
        </video>

        <div className="absolute bottom-[10vh] left-[2vw] z-[2] text-white text-[8vw] sm:text-[4.5rem] font-bold [text-shadow:2px_2px_4px_rgba(0,0,0,0.7)]">
          <h1 className="mb-4 text-[8vw] sm:text-4xl md:text-5xl lg:text-7xl font-semibold font-poppins">
            <div className="h-2 mt-[2vh]"></div>
            <TypeAnimation
              sequence={[
                useT('Title.1'),
                1000,
                useT('Title.2'),
                1000,
                useT('Title.3'),
                1000,
                useT('Title.4'),
                1000,
                useT('Title.5'),
                1000,
                useT('Title.6'),
                1000,
                useT('Title.7'),
                1000,
              ]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
              className="text-[8vw] sm:text-7xl font-opensans"
            />
          </h1>
        </div>
      </div>
      <section id="means" className="mt-[4vh]">
        <TitleLane title={useT('Questions.1')} bg="whatsaibg1" />
        <ContentSection
          title={useT('Questions.1')}
          text={useT('Answers.1')}
          bgUrl="whatsair1"
          directionLeft={false}
        />
      </section>
      <section id="types" className="mt-[4vh]">
        <TitleLane title={useT('Questions.2')} bg="whatsaibg2" />
        <ContentSection
          title={useT('Questions.2')}
          text={useT('Answers.2')}
          bgUrl="whatsail1"
          directionLeft={true}
        />
      </section>
      <section id="learning" className="mt-[4vh]">
        <TitleLane title={useT('Questions.3')} bg="whatsaibg3" />
        <ContentSection
          title={useT('Questions.3')}
          text={useT('Answers.3')}
          bgUrl="whatsair2"
          directionLeft={false}
        />
      </section>
      <section id="safety" className="mt-[4vh]">
        <TitleLane title={useT('Questions.4')} bg="whatsaibg4" />
        <ContentSection
          title={useT('Questions.4')}
          text={useT('Answers.4')}
          bgUrl="whatsail2"
          directionLeft={true}
        />
      </section>
      <section id="tools" className="mt-[4vh]">
        <TitleLane title={useT('Questions.5')} bg="whatsaibg5" />
        <ContentSection
          title={useT('Questions.5')}
          text={useT('Answers.5')}
          bgUrl="whatsair3"
          directionLeft={false}
        />
      </section>
      <section id="turing" className="mt-[4vh]">
        <TitleLane title={useT('Questions.6')} bg="whatsaibg6" />
        <ContentSection
          title={useT('Questions.6')}
          text={useT('Answers.6')}
          bgUrl="whatsail3"
          directionLeft={true}
        />
      </section>
      <section id="future" className="mt-[4vh]">
        <TitleLane title={useT('Questions.7')} bg="whatsaibg7" />
        <ContentSection
          title={useT('Questions.7')}
          text={useT('Answers.7')}
          bgUrl="whatsair4"
          directionLeft={false}
        />
      </section>
    </div>
  );
};

export default Page;
