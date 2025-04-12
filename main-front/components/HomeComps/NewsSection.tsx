"use client";
import React, { useState } from "react";
import ProjectComp from "./ProjectComp";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import NewsComp from "./NewsComp";
import { FaNewspaper } from "react-icons/fa6";

const NewsSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const totalProjects = 11; // Toplam proje sayısı

  const handleNext = () => {
    if (startIndex < totalProjects - 5) {
      setStartIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(prev => prev - 1);
    }
  };

  return (
    <div className="w-full border-b-2 border-gray-300">
      <div className="w-[93vw] ml-[3vw] mt-[2vh] flex justify-between border-b-2 border-opacity-70 border-gray-300">
        <h1 className="text-3xl items-center flex text-white mb-[1vh] font-opensans [text-shadow:2px_2px_4px_rgba(0,0,0,0.7)]">
          <FaNewspaper size={24} className="mr-[1vw]" />
          Haberler
        </h1>
        <div className="flex items-center">
          <button onClick={handlePrev} disabled={startIndex === 0} className="disabled:opacity-30">
            <FaAngleLeft
              size={36}
              className="text-white opacity-70 hover:opacity-100"
            />
          </button>
          <button onClick={handleNext} disabled={startIndex >= totalProjects - 5} className="disabled:opacity-30">
            <FaAngleRight
              size={36}
              className="text-white opacity-70 hover:opacity-100"
            />
          </button>
        </div>
      </div>
      <div className="w-[92vw] mx-auto h-[48vh] overflow-clip">
        <div 
          className="flex transition-transform duration-500 my-[4vh]"
          style={{ transform: `translateX(-${startIndex * 20.7}vw)` }}
        >
          <NewsComp />
          <NewsComp />
          <NewsComp />
          <NewsComp />
          <NewsComp />
          <NewsComp />
          <NewsComp />
          <NewsComp />
          <NewsComp />
          <NewsComp />
          <NewsComp />
          <NewsComp />
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
