"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AcademicianCompProps {
  title: string;
  imgUrl: string;
}

const AcademicianComp: React.FC<AcademicianCompProps> = ({ title, imgUrl }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeInOut" }
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      className="h-[20vw] w-full group hover:cursor-pointer"
    >
      <div className="h-[18vw] relative">
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="object-contain w-[26vw] h-[18vw] rounded-full transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 26vw"
        />
      </div>
      <div className="h-[2vw] md:mt-[2vh]">
        <h2
          className="relative text-textColor text-[2vw] sm:text-[3vh] font-PTSerif font-bold m-0 items-start text-start
          group-hover:before:scale-x-100 before:transition-transform inline-block 
          before:duration-300 before:ease-out before:origin-left before:content-[''] 
          before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full 
          before:scale-x-0 before:bg-underlineColor"
        >
          {title}
        </h2>
      </div>
    </motion.div>
  );
};

export default AcademicianComp;
