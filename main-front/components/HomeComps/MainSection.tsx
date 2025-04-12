"use client";
import React from "react";

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
        SAMSUN <br />
        ÜNİVERSİTESİ
      </div>
    </div>
  );
};

export default MainSection;
