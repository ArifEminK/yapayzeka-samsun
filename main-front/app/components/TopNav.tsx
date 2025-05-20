"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { MdClose, MdDarkMode, MdLightMode, MdMenu } from "react-icons/md";
import TopNavTitle from "@/app/components/TopNavTitle";
import TopNavQuests from "@/app/components/TopNavQuests";
import { TypeAnimation } from "react-type-animation";
import { IoIosArrowBack } from "react-icons/io";
import { useTranslations } from "next-intl";


type NavQuestion = { href: string; q: string };
type NavQuestionsJSON = {
  engineering: NavQuestion[];
  whatsai: NavQuestion[];
  default: NavQuestion[];
};

function TopNav({ locale }: { locale: string }) {
  const t = useTranslations('TopNavQuestions');
  const b = useTranslations('TopNavTitles');
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const toggleLocale = locale === "en" ? "tr" : "en";

  const handleChangeLocale = () => {
    let purePath = pathname.replace(/^\/(tr|en)(?=\/|$)/, "");
    if (!purePath.startsWith("/")) purePath = "/" + purePath;
    const newPath = `/${toggleLocale}${purePath}`;
    router.push(newPath);
  };


  const isHome = pathname === "/" || pathname === "/tr" || pathname === "/en";

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme as "light" | "dark");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    const closeMenuOnScroll = () => {
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };

    window.addEventListener("scroll", closeMenuOnScroll);
    return () => window.removeEventListener("scroll", closeMenuOnScroll);
  }, [isMobileMenuOpen]);

  let section: keyof NavQuestionsJSON;

  if (pathname.includes("/engineering")) {
    section = "engineering";
  } else if (pathname.includes("/whatsai")) {
    section = "whatsai";
  } else {
    section = "default";
  }

  const questions: NavQuestion[] = t.raw(section);
  const renderQuestions = () =>
    questions.map((item, i) => (
      <TopNavQuests key={i} href={item.href} questions={item.q} />
    ));
  const mobileRenderQuestions = () => {
    if (pathname === "/engineering") {
      return [
        { href: "software", q: "Yazılım Mühendisliği" },
        { href: "machine", q: "Makine Mühendisliği" },
        { href: "electrical", q: "Elektrik-Elektronik Mühendisliği" },
        { href: "industry", q: "Endüstri Mühendisliği" },
        { href: "biomedical", q: "Biyomedikal Mühendisliği" },
        { href: "basic", q: "Temel Bilimler" },
      ].map((q, i) => <TopNavQuests key={i} href={q.href} questions={q.q} />);
    } else if (pathname === "/whatsai") {
      return [
        { href: "means", q: "Ne Anlama Geliyor?" },
        { href: "types", q: "Türleri Nelerdir?" },
        { href: "learning", q: "Nasıl Öğrenir?" },
        { href: "safety", q: "Güvenli Mi?" },
        { href: "tools", q: "Araçları Nelerdir?" },
        { href: "turing", q: "Turing Testi Nedir?" },
        { href: "future", q: "Geleceği ne olacak?" },
      ].map((item, i) => <TopNavQuests key={i} href={item.href} questions={item.q} />);
    } else {
      return [
        { href: "projects", q: "Bölümlerimiz" },
        { href: "news", q: "Haberler" },
        { href: "whats-ai", q: "Yapay Zeka Nedir?" },
        { href: "ai-safety", q: "Yapay Zeka Güvenli Mi?" },
        { href: "ai-using", q: "Yapay Zeka Nasıl Kullanılıyor?" },
        { href: "ai-history", q: "Yapay Zekanın Tarihçesi" },
      ].map((item, i) => <TopNavQuests key={i} href={item.href} questions={item.q} />);
    }
  };


  return (
    <nav className={`bg-defBg flex flex-row md:flex-col items-center shadow-md fixed w-full z-50 transition-all duration-300 ${isScrolled ? "h-[12vh] md:h-[15vh]" : "h-[12vh] md:h-[20vh]"}`}>
      <div className={`w-[100%] px-[2vw] ${isScrolled ? "mt-[1vw]" : "mt-[3vh]"},${isScrolled ? "h-[5vh] md:h-[10vh]" : "h-[12vh] md:h-[15vh]"}`}>
        <div className="flex h-full justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-[4vw] md:gap-[2vw]">
              {isScrolled! == false ? (
                <Image
                  src="/images/logo_beyaz.png"
                  alt="Logo"
                  width={60}
                  height={60}
                  className={`w-auto opacity-75 ${isHome == true ? "h-[10vh]" : "h-[8vh]"
                    }`}
                />
              ) : (
                <div></div>
              )}
              {isHome == true ? (
                <span className="hover:opacity-100 ml-[2vw] sm:text-[5vh] text-[4vh] font-semibold opacity-70 font-PTSans text-white">
                  {b('title1')}
                </span>
              ) : (
                <div className="relative ml-[1vw] opacity-70 hover:opacity-100 border-2 border-borderColor w-[48vw] md:w-[16vw] h-[6vh]">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/videos/bg.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute top-0 left-0 w-full h-full flex items-center pl-[1vw]">
                    <IoIosArrowBack className="text-white text-[5vw] md:text-[2vw]" />
                    <TypeAnimation
                      sequence={
                        locale === 'tr'
                          ? ['geri dön', 1000, ' ', 500]
                          : ['back', 1000, ' ', 500]
                      }
                      wrapper="span"
                      speed={10}
                      repeat={Infinity}
                      className="text-white ml-[0.5vw]  font-code"
                    />
                  </div>
                </div>
              )}
            </Link>

            {isHome && (
              <div className="hidden md:flex space-x-[2vw] ml-[2vw]">
                <TopNavTitle title={b('title2')} href="projects" />
                <TopNavTitle title={b('title3')} href="news" />
              </div>
            )}
          </div>
          <div className="flex items-center gap-[2vw] md:hidden">
            <button
              onClick={toggleTheme}
              className="text-white"
              title="Tema Değiştir"
            >
              {theme === "light" ? <MdLightMode className="text-[4vh]" /> : <MdDarkMode className="text-[4vh]" />}
            </button>

            <button onClick={handleChangeLocale}>
              <span className="text-white text-[2.5vh]">{toggleLocale.toUpperCase()}</span>
            </button>



            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white text-[4vh]"
            >
              {isMobileMenuOpen ? <MdClose className="text-[4.5vh]" /> : <MdMenu className="text-[4.5vh]" />}
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-[1.5vw] ml-auto">
            <button
              onClick={toggleTheme}
              className="text-white p-[0.5vh]"
              title="Tema Değiştir"
            >
              {theme === "light" ? <MdLightMode size={36} /> : <MdDarkMode size={36} className="text-white" />}
            </button>
            <span className="text-white text-[2.5vh]">
              <button onClick={handleChangeLocale}>
                <span className="text-white text-[2.5vh]">{toggleLocale.toUpperCase()}</span>
              </button>
            </span>
          </div>
        </div>
      </div>

      <div
        className={`hidden md:flex w-[100vw] h-full items-center px-[5vh] bg-[#2A3B53] justify-between text-white ${isScrolled ? "h-[3vh] md:h-[5vh]" : "h-[4vh] md:h-[5vh]"}`}
      >
        {renderQuestions()}
      </div>

      {isMobileMenuOpen && (
        <div
          className="absolute top-[12vh] left-0 w-full bg-[#2A3B53] text-white px-[4vw] py-[3vh] flex flex-col space-y-[2vh] z-50 transition-transform duration-300 ease-in-out"
        >
          {mobileRenderQuestions()}
        </div>
      )}
    </nav>



  );
};

export default TopNav;
