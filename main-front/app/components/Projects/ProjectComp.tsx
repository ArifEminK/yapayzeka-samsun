"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ProjectCompProps {
  title: string;
  text: string;
  imgUrl: string;
}

const ProjectComp: React.FC<ProjectCompProps> = ({ title, text, imgUrl }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" }
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      className="h-[24vw] w-[26vw] text-center group hover:cursor-pointer"
    >
      <div className="h-[18vw] relative">
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="object-cover w-[26vw] h-[18vw] transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 26vw"
        />
      </div>
      <div className="h-[6vw] mt-[2vh] text-start">
        <h2
          className="relative inline-block text-[1.5vh] md:text-[2.5vh] text-textColor font-PTSerif font-bold m-0
          before:content-[''] before:absolute before:origin-left before:bottom-0 before:w-0
          before:h-[2px] before:bg-underlineColor before:transition-all before:duration-300 before:ease-out
          group-hover:before:w-full group-hover:before:left-0"
        >
          {title}
        </h2>
        <p className="text-[1vh] md:text-[1.5vh] line-clamp-2 md:line-clamp-none text-gray-500">{text}</p>
      </div>
    </motion.div>
  );
};

export default ProjectComp;
