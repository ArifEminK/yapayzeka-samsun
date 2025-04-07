const HomeContent = () => {
  return (
    <div className="w-[90%] max-w-[1400px] mt-[60px] mx-auto bg-white shadow-lg rounded-[15px] overflow-hidden border border-black/5">
      <div className="relative w-full h-screen overflow-hidden border-b border-gray-300">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
        >
          <source src="/videos/yapayzeka-samsun.mp4" type="video/mp4" />
          Tarayıcınız video etiketini desteklemiyor.
        </video>
        <div className="absolute bottom-[150px] left-[50px] text-white text-[4.5rem] font-bold z-[2] [text-shadow:2px_2px_4px_rgba(0,0,0,0.7)]">
          SAMSUN ÜNİVERSİTESİ
        </div>
      </div>

      <section className="ai-section relative bg-white z-30 mt-0 py-10 min-h-screen flex flex-col items-center justify-center border-b border-gray-300 transition-all duration-300 ease-in-out hover:bg-[#fafbfc]">
        <div className="ai-tools-section relative bg-white z-30 mt-0 py-10 min-h-screen flex flex-col items-center justify-center border-b border-gray-300 transition-all duration-300 ease-in-out hover:bg-[#fafbfc]">
          
          <video autoPlay muted loop playsInline className="absolute">
            <source src="/img/background/video6.mp4" type="video/mp4" />
            Tarayıcınız video etiketini desteklemiyor.
          </video>
          <h2>YAPAY ZEKA NEDİR?</h2>
        </div>

        <div className="flex justify-between max-w-[1200px] mx-auto my-10 px-5 gap-7">
          <div className="flex-1 flex flex-col items-center transition-transform duration-300 ease-in-out">
            <video autoPlay muted loop playsInline>
              <source src="/videos/video1.mp4" type="video/mp4" />
              Tarayıcınız video etiketini desteklemiyor.
            </video>
            <h3 className="text-xl text-[#333] text-center mb-2 pb-2 border-b-2 border-[#007bff] w-full transition-all duration-300 ease-in-out">
              Yapay Zeka Ne Anlama Geliyor?
            </h3>
            <br />
            <p>
              Hepimiz muhtemelen 'yapay zeka' veya 'AI' kelimelerini
              duymuşuzdur. Peki bu aslında ne anlama geliyor?{" "}
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center transition-transform duration-300 ease-in-out">
            <video autoPlay muted loop playsInline>
              <source src="/videos/video2.mp4" type="video/mp4" />
              Tarayıcınız video etiketini desteklemiyor.
            </video>
            <h3 className="text-xl text-[#333] text-center mb-2 pb-2 border-b-2 border-[#007bff] w-full transition-all duration-300 ease-in-out">
              Yapay Zekanın Türleri
            </h3>{" "}
            <br />
            <p>
              Makine Öğrenmesi, Üretken Yapay Zeka... Yapay Zeka ile birlikte
              birçok terim kullanılıyor. Fark nedir?
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center transition-transform duration-300 ease-in-out">
            <video autoPlay muted loop playsInline>
              <source src="/videos/video3.mp4" type="video/mp4" />
              Tarayıcınız video etiketini desteklemiyor.
            </video>
            <h3 className="text-xl text-[#333] text-center mb-2 pb-2 border-b-2 border-[#007bff] w-full transition-all duration-300 ease-in-out">
              Yapay Zeka Nasıl Öğrenir?
            </h3>{" "}
            <br />
            <p>
              Bir yapay zekanın bir şey öğrendiğini duyduğumuzda bu ne anlama
              gelir?
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-white z-30 mt-0 py-10 min-h-screen flex flex-col items-center justify-center border-b border-[#e0e0e0] transition-all duration-300 ease-in-out hover:bg-[#fafbfc]">
        <div className="relative w-full h-[300px] overflow-hidden mb-12 rounded-b-[20px] shadow-lg">
          <img
            className="w-full h-full object-cover absolute top-0 left-0 opacity-80"
            src="/img/background/yz4.png"
            alt="AI Background"
          />
          <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-white m-0 text-center font-serif text-shadow-lg z-10 w-full bg-black bg-opacity-50 py-5 tracking-wider">
            YAPAY ZEKA GÜVENLİ Mİ?
          </h2>
        </div>

        <div className="flex max-w-[1200px] mx-auto gap-15 relative px-10 transition-transform duration-300 ease-in-out hover:translate-y-[-5px]">
          <div className="text-lg leading-[1.8] text-[#333] text-left p-10 bg-white font-serif flex-1 max-w-[700px] rounded-[15px] shadow-lg transition-all duration-300 ease-in-out hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
            <p className="mb-6 text-justify">
              Yapay zeka teknolojisinin güvenliği, geliştirme ve uygulama
              süreçlerinde alınan önlemlere bağlıdır. Doğru tasarlanmış ve
              uygulanmış yapay zeka sistemleri, insan hayatını kolaylaştırabilir
              ve güvenliği artırabilir.
            </p>
            <p>
              Ancak, yapay zeka sistemlerinin güvenliği için sürekli denetim,
              şeffaflık ve etik standartların uygulanması önemlidir. Sistemlerin
              adil, güvenilir ve hesap verebilir olması için gerekli kontroller
              yapılmalıdır.
            </p>
          </div>
          <div className="sticky top-[100px] w-[400px] h-[600px] overflow-hidden rounded-[15px] shadow-[0_8px_16px_rgba(0,0,0,0.2)] transition-transform duration-300 ease-in-out hover:scale-[1.02]">
            <img
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-[1.05]"
              src="/img/background/kilit.png"
              alt="Security Image"
            />
          </div>
        </div>
      </section>

      <section className="relative bg-white z-30 mt-0 py-10 min-h-screen flex flex-col items-center justify-center border-b border-[#e0e0e0] transition-all duration-300 ease-in-out hover:bg-[#fafbfc]">
        <div className="relative w-full h-[300px] overflow-hidden mb-12 rounded-b-[20px] shadow-lg">
          <img
            className="w-full h-full object-cover absolute top-0 left-0 opacity-80"
            src="/img/background/yz4.png"
            alt="AI Tools Background"
          />
          <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-white m-0 text-center font-serif text-shadow-lg z-10 w-full bg-black bg-opacity-50 py-5 tracking-wider">
            YAPAY ZEKA ARAÇLARI
          </h2>
        </div>
        <div className="flex max-w-[1200px] mx-auto gap-15 relative px-10 transition-transform duration-300 ease-in-out hover:translate-y-[-5px]">
          <div className="text-lg leading-[1.8] text-[#333] text-left p-10 bg-white font-serif flex-1 max-w-[700px] rounded-[15px] shadow-lg transition-all duration-300 ease-in-out hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
            <p className="mb-6 text-justify">
              Yapay zeka araçları, günlük hayatımızı kolaylaştıran ve iş
              süreçlerimizi optimize eden çeşitli uygulamalar sunar. Bu araçlar,
              doğal dil işleme, görüntü tanıma, ses tanıma gibi farklı alanlarda
              kullanılabilir.
            </p>
            <p>Yaygın yapay zeka araçları şunları içerir:</p>
            <ul className="my-6 pl-7 list-none">
              <li className="mb-4 relative pl-6 before:content-['•'] before:text-[#007bff] before:font-bold before:absolute before:left-0">
                Doğal dil işleme araçları
              </li>
              <li className="mb-4 relative pl-6 before:content-['•'] before:text-[#007bff] before:font-bold before:absolute before:left-0">
                Görüntü ve video işleme sistemleri
              </li>
              <li className="mb-4 relative pl-6 before:content-['•'] before:text-[#007bff] before:font-bold before:absolute before:left-0">
                Makine öğrenmesi platformları
              </li>
              <li className="mb-4 relative pl-6 before:content-['•'] before:text-[#007bff] before:font-bold before:absolute before:left-0">
                Robotik süreç otomasyonu
              </li>
              <li className="mb-4 relative pl-6 before:content-['•'] before:text-[#007bff] before:font-bold before:absolute before:left-0">
                Veri analiz araçları
              </li>
            </ul>
          </div>
          <div className="sticky top-[100px] w-[400px] h-[600px] overflow-hidden rounded-[15px] shadow-[0_8px_16px_rgba(0,0,0,0.2)] transition-transform duration-300 ease-in-out hover:scale-[1.02]">
            <img
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-[1.05]"
              src="/img/background/yz41.png"
              alt="AI Tools Image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
