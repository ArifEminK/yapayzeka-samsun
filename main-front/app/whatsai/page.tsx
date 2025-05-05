"use client"; 
import TitleLane from "@/components/TitleLane";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import data from "@/public/yapay_zeka.json";
import ContentSection from "@/components/ContentSection";
const page = () => {
  return (
    <div className=" w-full mx-auto  shadow-lg overflow-hidden">
      <div className="mt-[16vh] w-full h-[84vh] ">
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
            <span className="bg-gradient-to-r text-[10vw] sm:text-7xl font-opensans ">
              Yapay Zeka
            </span>
            <div className="h-2 mt-[2vh]"></div>
            <TypeAnimation
              sequence={[
                "Nedir?",
                1000,
                "Güvenli Mi?",
                1000,
                "Nasıl Kullanılıyor?",
                1000,
                "Tarihçesi",
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
      <section className="mt-[4vh]">
        <TitleLane title={data["Content"].Sorular[1]} bg="bg1" />
        <ContentSection
          title={data["Content"].Sorular[1]}
          text={data["Content"].Cevaplar[1]}
          bgUrl="bg5"
          directionLeft={false}
        />
      </section>
      <section className="mt-[4vh]">
        <TitleLane title={data["Content"].Sorular[2]} bg="bg2" />
        <ContentSection
          title={data["Content"].Sorular[2]}
          text={data["Content"].Cevaplar[2]}
          bgUrl="bg5"
          directionLeft={true}
        />
      </section>
      <section className="mt-[4vh]">
        <TitleLane title={data["Content"].Sorular[3]} bg="bg3" />
        <ContentSection
          title={data["Content"].Sorular[3]}
          text={data["Content"].Cevaplar[3]}
          bgUrl="bg5"
          directionLeft={false}
        />
      </section>
      <section className="mt-[4vh]">
        <TitleLane title={data["Content"].Sorular[4]} bg="bg4" />
        <ContentSection
          title={data["Content"].Sorular[4]}
          text={data["Content"].Cevaplar[4]}
          bgUrl="bg5"
          directionLeft={true}
        />
      </section>
      <section className="mt-[4vh]">
        <TitleLane title={data["Content"].Sorular[5]} bg="bg1" />
        <ContentSection
          title={data["Content"].Sorular[5]}
          text={data["Content"].Cevaplar[5]}
          bgUrl="bg5"
          directionLeft={false}
        />
      </section>
      <section className="mt-[4vh]">
        <TitleLane title={data["Content"].Sorular[6]} bg="bg3" />
        <ContentSection
          title={data["Content"].Sorular[6]}
          text={data["Content"].Cevaplar[6]}
          bgUrl="bg5"
          directionLeft={true}
        />
      </section>
      <section className="mt-[4vh]">
        <TitleLane title={data["Content"].Sorular[7]} bg="bg1" />
        <ContentSection
          title={data["Content"].Sorular[7]}
          text={data["Content"].Cevaplar[7]}
          bgUrl="bg5"
          directionLeft={false}
        />
      </section>
    </div>
  );
};

export default page;
