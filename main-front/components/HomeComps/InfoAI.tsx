import React from "react";

const InfoAI = () => {
  return (
    <div className="flex text-white  opacity-70 border-b-2 border-b-gray-400">
      <div className="text-center w-[50vw] h-[70vh] border-r-[1px] border-r-gray-400 text-lg leading-[1.8] p-10  font-serif flex-1 shadow-lg transition-all duration-300 ease-in-out">
        <h1 className=" font-opensans text-2xl font-bold mb-4">
          Yapay Zeka Güvenli Mi?
        </h1>
        <p className="font-opensans mb-6 text-justify">
          Yapay zeka teknolojisinin güvenliği, geliştirme ve uygulama
          süreçlerinde alınan önlemlere bağlıdır. Doğru tasarlanmış ve
          uygulanmış yapay zeka sistemleri, insan hayatını kolaylaştıran ve
          güvenliği artırabilir. Ancak, yapay zeka sistemlerinin güvenliği için
          sürekli denetim, şeffaflık ve etik standartların uygulanması
          önemlidir. Sistemlerin adil, güvenilir ve hesap verebilir olması için
          gerekli kontroller yapılmalıdır.
        </p>
      </div>
      <div className="text-center w-[50vw] h-[70vh] border-l-[1px] border-l-gray-400 text-lg leading-[1.8] p-10 font-serif flex-1 shadow-lg transition-all duration-300 ease-in-out">
        <h1 className="font-opensans text-2xl font-bold mb-4">
          YAPAY ZEKA ARAÇLARI
        </h1>
        <p className="font-opensans mb-6 text-justify">
          Yapay zeka araçları, günlük hayatımızı kolaylaştıran ve iş
          süreçlerimizi optimize eden çeşitli uygulamalar sunar. Bu araçlar,
          doğal dil işleme, görüntü tanıma, ses tanıma gibi farklı alanlarda
          kullanılabilir.
        </p>
        <ul className="my-6 pl-7 list-none text-left font-opensans">
          <li className="mb-4 relative pl-6 before:content-['•'] before:text-white before:font-bold before:absolute before:left-0">
            Doğal dil işleme araçları
          </li>
          <li className="mb-4 relative pl-6 before:content-['•'] before:text-white before:font-bold before:absolute before:left-0">
            Görüntü ve video işleme sistemleri
          </li>
          <li className="mb-4 relative pl-6 before:content-['•'] before:text-white before:font-bold before:absolute before:left-0">
            Makine öğrenmesi platformları
          </li>
          <li className="mb-4 relative pl-6 before:content-['•'] before:text-white before:font-bold before:absolute before:left-0">
            Robotik süreç otomasyonu
          </li>
          <li className="mb-4 relative pl-6 before:content-['•'] before:text-white before:font-bold before:absolute before:left-0">
            Veri analiz araçları
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InfoAI;
