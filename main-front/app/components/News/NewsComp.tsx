	/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { FaAnglesRight } from "react-icons/fa6";

interface NewsCompProps {
  title: string;
  imgUrl: string;
  text: string;
  url: string;
  locale: string;
}
const NewsComp: React.FC<NewsCompProps> = ({ title, imgUrl, text, url, locale }) => {
  return (
    <div className="group md:w-[16.3vw] w-[80vw] cursor-pointer md:h-[45vh] h-[45vh] bg-topNavBg rounded-lg overflow-hidden flex-shrink-0 mx-[1vw] transition-all duration-300">

      {/* Görsel */}
      <div className="w-full h-[16vh]">
        {imgUrl && (
          <img
            src={imgUrl}
            alt="Haber görseli"
            width={400}
            height={300}
            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>

      {/* Başlık */}
      <div className="ml-[5%] w-[90%] h-[9vh] text-center overflow-hidden border-b-2 flex items-center justify-center">
        <h1 className="line-clamp-2 font-bold text-[1.8vh] font-opensans opacity-70 group-hover:opacity-100 text-textColor">
          {title}
        </h1>
      </div>

      {/* Açıklama */}
      <div className="ml-[5%] w-[90%] h-[12vh]">
        {url && (
          <Link href={url}>
            <p className="line-clamp-4 font-opensans text-[1.5vh] text-center opacity-70 group-hover:opacity-100 text-textColor">
              {text}
            </p>
          </Link>
        )}
      </div>

      {/* Buton */}
      <div className="h-[8vh] mb-[2vh] flex justify-center items-center">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="group-hover:opacity-100 group h-[5vh] bg-homeContBg flex font-opensans justify-around opacity-70 items-center w-[70%] text-textColor px-[1vw] py-[0.5vh] rounded-lg transition-all duration-300"
        >
          {locale === "tr" ? "Devamı" : "Continue"}
          <FaAnglesRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>


  );
};

export default NewsComp;
