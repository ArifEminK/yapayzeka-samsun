import React, { useState } from "react";
import Academician from "./Academician";
import { GoProject } from "react-icons/go";
import data from "@/public/yapay_zeka.json";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const AcademicianSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const academicianNames = Object.values(data.Akademisyenler.names);
  const academicianImg = Object.values(data.Akademisyenler.img_path);
  const itemsPerView = 4;

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
    <div className="w-full h-[65vh] border-b-2 border-gray-300">
      <div className="w-[93vw] ml-[3vw] mt-[2vh] flex justify-between border-b-2 border-opacity-70 border-gray-300">
        <h1 className="text-3xl items-center flex text-white mb-[1vh] font-opensans [text-shadow:2px_2px_4px_rgba(0,0,0,0.7)]">
          <GoProject size={24} className="mr-[1vw]" />
          Akademisyenler
        </h1>
        <div className="flex items-center">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="disabled:opacity-30"
          >
            <FaAngleLeft
              size={36}
              className="text-white opacity-70 hover:opacity-100"
            />
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex >= academicianNames.length - itemsPerView}
            className="disabled:opacity-30"
          >
            <FaAngleRight
              size={36}
              className="text-white opacity-70 hover:opacity-100"
            />
          </button>
        </div>
      </div>
      <div className="w-[92vw] mx-auto overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-500 my-[4vh]"
          style={{ transform: `translateX(-${startIndex * 25}%)` }}
        >
          {academicianNames.map((name, index) => (
            <div key={index} className="w-[22vw] flex-shrink-0">
              <Academician name={name} img_path={academicianImg[index]} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicianSection;
