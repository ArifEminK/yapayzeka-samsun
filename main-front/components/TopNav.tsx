"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TopNavTitle from "./TopNavTitle";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import TopNavQuests from "./TopNavQuests";
import { usePathname } from "next/navigation";
import { TypeAnimation } from "react-type-animation";
import { FaArrowLeft } from "react-icons/fa6";

const TopNav = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

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
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <nav
      className={`bg-defBg items-center shadow-md fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "h-[8vh] md:h-[15vh]" : "h-[12vh] md:h-[20vh]"
      }`}
    >
      <div
        className={`w-[100%] px-4 sm:px-6 lg:px-8 ${
          isScrolled ? "mt-[1vw]" : "mt-[3vh]"
        },${isScrolled ? "h-[5vh] md:h-[10vh]" : "h-[8vh] md:h-[15vh]"}`}
      >
        <div className="flex h-full justify-between items-center ">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center  ">
              {isScrolled! == false ? (
                <Image
                  src="/images/logo_beyaz.png"
                  alt="Logo"
                  width={60}
                  height={60}
                  className={` w-auto opacity-75 ${
                    isHome == true ? "h-[10vh]" : "h-[8vh]"
                  }`}
                />
              ) : (
                <div></div>
              )}
              {isHome == true ? (
                <span className="hover:opacity-100 ml-[2vw] sm:text-[2.2rem] font-semibold opacity-70 font-PTSans text-white">
                  Yapay Zeka
                </span>
              ) : (
                <div className="relative ml-[1vw] opacity-70 hover:opacity-100 border-2 border-borderColor w-[16vw] h-[6vh]">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/videos/back-bg.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute top-0 left-0 w-full h-full flex items-center pl-[1vw]">
                    <FaArrowLeft size={"2vw"} className="text-white" />
                    <TypeAnimation
                      sequence={["geri dön", 1000, " ", 500]}
                      wrapper="span"
                      speed={10}
                      repeat={Infinity}
                      className="text-white ml-[0.5vw] sm:text-xl font-code"
                    />
                  </div>
                </div>
              )}
            </Link>

            {/* Menü md ve üstü */}
            {isHome == true ? (
              <div className="hidden md:flex space-x-4">
                <TopNavTitle title="Akademisyenlerimiz" href="academician" />
                <TopNavTitle title="Projeler" href="projects" />
                <TopNavTitle title="Haberler" href="news" />
              </div>
            ) : (
              <div></div>
            )}
          </div>

          {/* Search sadece md ve üstü göster */}
          <div className="hidden md:flex relative">
            <button
              onClick={toggleTheme}
              className="text-white hover:text-gray-300 transition-colors duration-300 p-2"
              title="Tema Değiştir"
            >
              {theme === "light" ? (
                <MdLightMode size={36} />
              ) : (
                <MdDarkMode size={36} className="text-white" />
              )}
            </button>
            <button className="text-white hover:text-gray-300 transition-colors duration-300 p-2">
              <h1 className="text-2xl">EN</h1>
            </button>
          </div>

          {/* Hamburger sadece mobil */}
          <div className="md:hidden flex items-center">
            <button className="p-2 text-gray-700 hover:text-[#0D7B81]">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`w-[100vw] h-full items-center px-[5vh] bg-[#2A3B53] flex justify-between text-white ${
          isScrolled ? "h-[3vh] md:h-[5vh]" : "h-[4vh] md:h-[5vh]"
        }`}
      >
        {pathname == "/engineering" ? (
          <>
            <TopNavQuests href="engineering" questions="Yazılım Mühendisliği" />
            <TopNavQuests href="engineering" questions="Makine Mühendisliği" />
            <TopNavQuests
              href="engineering"
              questions="Elektrik-Elektronik Mühendisliği"
            />
            <TopNavQuests
              href="engineering"
              questions="Endüstri Mühendisliği"
            />
            <TopNavQuests
              href="engineering"
              questions="Biyomedikal Mühendisliği"
            />
            <TopNavQuests href="engineering" questions="Temel Bilimler" />
          </>
        ) : (
          <>
            <TopNavQuests href="whats-ai" questions="Yapay Zeka Nedir?" />
            <TopNavQuests href="ai-safety" questions="Yapay Zeka Güvenli Mi?" />
            <TopNavQuests
              href="ai-using"
              questions="Yapay Zeka Nasıl Kullanılıyor?"
            />
            <TopNavQuests
              href="ai-history"
              questions="Yapay Zekanın Tarihçesi"
            />
          </>
        )}
      </div>
    </nav>
  );
};

export default TopNav;
