import Image from "next/image";
import React from "react";
import { FaLink } from "react-icons/fa6";

interface QuestionCompProps {
  title: string;
  text: string;
  videoUrl?: string;
  imgUrl?: string;
  listItems?: string[];
  linkDiv?: Boolean;
}

const QuestionComp: React.FC<QuestionCompProps> = ({
  title,
  text,
  videoUrl,
  imgUrl,
  listItems,
  linkDiv = true,
}) => {
  return (
    <div className="w-full flex flex-col items-center group transition-transform duration-300 ease-in-out hover:translate-y-[-5px]">
      <div className="relative group overflow-hidden rounded-lg shadow-md">
        {videoUrl ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto rounded-xl"
          >
            <source src={videoUrl} type="video/mp4" />
            Tarayıcınız video etiketini desteklemiyor.
          </video>
        ) : imgUrl ? (
          <Image
            src={imgUrl}
            alt="Görsel"
            width={400}
            height={400}
            className="h-[35vh] w-full rounded-xl object-cover"
          />
        ) : null}
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
        {linkDiv ? (
          <div className="absolute top-[1vh] right-[1vh] h-[5vh] opacity-75 w-[4.5vh] group-hover:w-[7vw] flex flex-row items-center  bg-topNavBg rounded-xl z-20 transition-all duration-300 ease-in-out ">
            <button className="p-[0.35vw]">
              <FaLink size={"1.5vw"} className="text-textColor" />
            </button>
            <span className="line-clamp-1 text-textColor text-[0.9vw] font-bold px-[0.3vw] text-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 ease-out">
              Linke Git
            </span>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="mt-4 opacity-80 group-hover:opacity-100 text-center">
        <h3 className="relative text-[6vw] sm:text-2xl font-opensans text-textColor mb-2 pb-2 w-full group-hover:before:scale-x-100 before:transition-transform before:duration-200 before:ease-out before:origin-center before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-borderColor">
          {title}
        </h3>
        <p className="text-textColor font-opensans text-[4vw] sm:text-[1.2rem]  mt-2">
          {text}
        </p>
        {listItems && listItems.length > 0 && (
          <ul className="my-6 pl-4 md:pl-7 list-none text-left font-opensans">
            {listItems.map((arac, index) => (
              <li
                key={index}
                className="mb-2 relative pl-6 before:content-['•'] before:text-textColor text-[4vw] sm:text-[1.2rem] before:font-bold before:absolute before:left-0"
              >
                {arac}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default QuestionComp;
