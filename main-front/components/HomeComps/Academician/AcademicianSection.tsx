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

  const cardWidth = isMobile ? 100 : 19;
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
    <div className="w-full h-auto md:h-[65vh] border-b-2 border-gray-300 py-[2vh]">
      <div className="w-[93vw] mx-auto flex justify-between items-center border-b-2 border-opacity-70 border-gray-300 pb-[1vh]">
        <h1 className="text-[6vw] items-center md:text-3xl flex text-textColor font-opensans [text-shadow:2px_2px_4px_rgba(0,0,0,0.7)]">
          <GoProject size={24} className="mr-2" />
          Akademisyenler
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
      </div>

      <div className="w-full overflow-hidden">
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
                isMobile ? "px-[4vw] py-[3vw]" : "px-[1vw] ml-[1vw] py-[1vw] w-[24vw]"
              } flex justify-center`}
              style={{ width: isMobile ? "100vw" : ` ` }}
            >
              <Academician name={name} img_path={academicianImg[index]} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicianSection;
