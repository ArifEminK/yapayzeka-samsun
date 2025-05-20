"use client";
import React, { useState, useEffect } from "react"; 
import { GoProject } from "react-icons/go";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import data from "@/public/yapay_zeka.json";

const ProjectsSection = () => {
  const projeler = Object.values(data.Projeler);
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // ilk yüklenirken kontrol et
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardWidth = isMobile ? 100 : 19.2; // 5 proje: 5 * 19.2 = 96vw
  const itemsPerView = isMobile ? 1 : 5;

  const handleNext = () => {
    if (startIndex < projeler.length - itemsPerView) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  return (
    <section
      id="projects"
      className="w-full border-b-2 border-gray-300 py-[2vh]"
    >
      {/* Header */}
      <div className="w-[93vw] mx-auto flex justify-between items-center border-b-2 border-opacity-70 border-gray-300 pb-[1vh]">
        <h1 className="text-[6vw] md:text-3xl items-center flex text-textColor font-opensans [text-shadow:2px_2px_4px_rgba(0,0,0,0.7)]">
          <GoProject size={24} className="mr-2" />
          Projeler
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
            disabled={startIndex >= projeler.length - itemsPerView}
            className="disabled:opacity-30"
          >
            <FaAngleRight
              size={28}
              className="text-textColor opacity-70 hover:opacity-100"
            />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 my-[2vh]"
          style={{
            transform: isMobile
              ? `translateX(-${startIndex * 100}vw)`
              : `translateX(-${startIndex * cardWidth}vw)`,
            width: isMobile
              ? `${projeler.length * 100}vw`
              : `${projeler.length * cardWidth}vw`,
          }}
        >
          {projeler.map((project, index) => (
            <div
              key={index}
              className={`flex-shrink-0 ${
                isMobile
                  ? "px-[4vw] py-[3vw]"
                  : "px-[2vw] ml-[1vw] py-[1vw] w-[24vw]"
              } flex justify-center`}
              style={{
                width: isMobile ? "100vw" : `19vw`,
                marginLeft: isMobile ? "0.5vw" : "0.5vw",
              }}
            >
              {/* <ProjectComp title={project} /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
