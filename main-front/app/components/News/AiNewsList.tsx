'use client';
import { useEffect, useState } from 'react';
import { FaAngleRight, FaAngleLeft, FaNewspaper } from 'react-icons/fa';
import NewsComp from './NewsComp';

interface Article {
  title: string;
  description: string;
  url: string;
  image: string;
}

export default function AiNewsList({ locale }: { locale: string }) {
  const [news, setNews] = useState<Article[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const url = `https://gnews.io/api/v4/search?q=artificial+intelligence&lang=tr&token=182434793a6e4185cef07165ad5f2f35`;
  
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log('Gelen veri:', data);
        setNews(data.articles || []);
      })
      .catch((err) => console.error('HATA:', err));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cardWidth = isMobile ? 100 : 19.2;
  const itemsPerView = isMobile ? 1 : 5;

  const handleNext = () => {
    if (startIndex < news.length - itemsPerView) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  return (
    <section id="news" className="w-full border-b-2 border-gray-300 py-[2vh]">
      {/* Header */}
      <div className="w-[93vw] mx-auto flex justify-between items-center border-b-2 border-opacity-70 border-gray-300 pb-[1vh]">
        <h1 className="text-[6vw] md:text-3xl items-center flex text-textColor font-PTSerif ">
          <FaNewspaper size={24} className="mr-2" />
          {locale === "tr" ? "Dünyadan Yapay Zeka Haberleri" : "AI News from the World"}
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
            disabled={startIndex >= news.length - itemsPerView}
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
              ? `${news.length * 100}vw`
              : `${news.length * cardWidth}vw`,
          }}
        >
          {news.map((project, index) => (
            <div
              key={index}
              className={`flex-shrink-0 ${isMobile
                  ? 'px-[4vw] py-[3vw]'
                  : 'px-[2vw] ml-[1vw] py-[1vw] w-[24vw]'
                } flex justify-center`}
              style={{
                width: isMobile ? '100vw' : `19vw`,
                marginLeft: isMobile ? '0.5vw' : '0.5vw',
              }}
            >
              <NewsComp
                title={project.title}
                imgUrl={project.image}
                text={project.description}
                url={project.url}
                locale={locale}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
