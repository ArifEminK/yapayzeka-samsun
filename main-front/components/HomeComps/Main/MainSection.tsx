"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const MainSection = () => {
  return (
    <div className="relative w-full h-[84vh] overflow-hidden border-b border-gray-300">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/videos/bg_video.mp4" type="video/mp4" />
      </video>
      <div className="absolute bottom-[10vh] left-[2vw] text-white text-[4.5rem] font-bold z-[2] [text-shadow:2px_2px_4px_rgba(0,0,0,0.7)]">
        <h1 className="text-white mb-4 text-4xl md:text-5xl lg-text-7xl font-semibold font-poppins">
          {/* Samsun <br/>Üniversitesi */}
          <span className="bg-gradient-to-r text-7xl font-opensans text-white">
            Yapay Zeka
          </span>
          <div className="h-2 mt-[2vh] "></div>
          <TypeAnimation
            sequence={[
              "Nedir?",
              1000,
              "Ne işe yarar?",
              1000,
              "Üzerine Çalışmalarımız",
              1000,
            ]}
            wrapper="span"
            speed={10}
            repeat={Infinity}
            className="text-7xl font-opensans"
          /> 
        </h1>

      </div>
    </div>
  );
};

export default MainSection;
