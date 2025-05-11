"use client";
import React, { useState, useEffect } from "react";
import Academician from "./Academician";
import { GoProject } from "react-icons/go";
import data from "@/public/yapay_zeka.json";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const AcademicianSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const academicianNames = Object.values(data.Akademisyenler.names);
  const academicianImg = Object.values(data.Akademisyenler.img_path);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // ilk yüklenirken kontrol etsin
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardWidth = isMobile ? 100 : 24;
  const itemsPerView = isMobile ? 1 : 4;

  const handleNext = () => {
    if (startIndex < academicianNames.length - itemsPerView) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full flex flex-row items-center h-auto md:h-[65vh] border-b-2 border-gray-300 py-[2vh]">
      {/* <div className="w-[93vw] h-[10vh] mx-auto flex justify-between items-center border-b-2 border-opacity-70 border-gray-300 pb-[1vh]">
        <h1
          className="text-textColor font-sans text-[2vw] sm:text-[2vw] font-bold z-[2] text-center"
          style={{
            textShadow: "1px 1px 3px rgba(0,0,0,0.9)",
          }}
        >
          Yapay Zeka Üzerine Çalışan Akademisyenlerimiz
        </h1>
        <div className="flex items-center">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="disabled:opacity-30"
          >
            <FaAngleLeft
              size={28}
              className="text-textColor opacity-70 hover:opacity-100"
            />
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex >= academicianNames.length - itemsPerView}
            className="disabled:opacity-30"
          >
            <FaAngleRight
              size={28}
              className="text-textColor opacity-70 hover:opacity-100"
            />
          </button>
        </div>
      </div> */}

      <button
        onClick={handlePrev}
        disabled={startIndex === 0}
        className="disabled:opacity-30"
      >
        <FaAngleLeft
          size={28}
          className="text-textColor opacity-70 hover:opacity-100"
        />
      </button>
      <div className="w-[95vw] flex-row flex overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: isMobile
              ? `translateX(-${startIndex * 100}vw)`
              : `translateX(-${startIndex * cardWidth}%)`,
            width: isMobile
              ? `${academicianNames.length * 100}vw`
              : `${academicianNames.length * cardWidth}%`,
          }}
        >
          {academicianNames.map((name, index) => (
            <div
              key={index}
              className={`flex-shrink-0 ${
                isMobile
                  ? "px-[4vw] py-[3vw]"
                  : "px-[1vw] py-[1vw] w-[24vw]"
              } flex justify-center`}
              style={{ width: isMobile ? "100vw" : ` ${cardWidth}vw` }}
            >
              <Academician name={name} img_path={academicianImg[index]} />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handleNext}
        disabled={startIndex >= academicianNames.length - itemsPerView}
        className="disabled:opacity-30"
      >
        <FaAngleRight
          size={28}
          className="text-textColor opacity-70 hover:opacity-100"
        />
      </button>
    </div>
  );
};

export default AcademicianSection;
