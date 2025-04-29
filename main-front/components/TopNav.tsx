"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TopNavTitle from "./TopNavTitle";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import TopNavQuests from "./TopNavQuests";

const TopNav = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isScrolled, setIsScrolled] = useState(false);

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
        isScrolled ? "h-[8vh] md:h-[12vh]" : "h-[12vh] md:h-[20vh]"
      }`}
    >
      <div
        className={`w-[100%] px-4 sm:px-6 lg:px-8 ${
          isScrolled ? "mt-[1vw]" : "mt-[3vh]"
        },${isScrolled ? "h-[5vh] md:h-[12vh]" : "h-[8vh] md:h-[15vh]"}`}
      >
        <div className="flex h-full justify-between items-center ">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center  ">
              <Image
                src="/images/logo_beyaz.png"
                alt="Logo"
                width={60}
                height={60}
                className="h-[9vh] w-auto opacity-75"
              />
              <span className="hover:opacity-100 ml-[2vw] sm:text-[2.2rem] text- font-semibold opacity-70 font-nocturne text-white">
                Yapay Zeka
              </span>
            </Link>

            {/* Menü md ve üstü */}
            <div className="hidden md:flex space-x-4">
              <TopNavTitle title="Akademisyenlerimiz" href="academician" />
              <TopNavTitle title="Projeler" href="projects" />
              <TopNavTitle title="Haberler" href="news" />
            </div>
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
                <MdDarkMode size={36} className="text-specBlue" />
              )}
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
      {isScrolled ? (
        <></>
      ) : (
        <div
          className={`w-[90vw] ml-[5vw] h-full items-center flex justify-between text-white ${
            isScrolled ? "h-[3vh] md:h-[4vh]" : "h-[4vh] md:h-[5vh]"
          }`}
        >
          <TopNavQuests
            href="whats-ai"
            questions="Yapay Zeka Ne Anlama Geliyor?"
          />
          <TopNavQuests
            href="whats-ai"
            questions="Yapay Zekanın Türleri Nelerdir?"
          />
          <TopNavQuests href="whats-ai" questions="Yapay Zeka Nasıl Öğrenir?" />
          <TopNavQuests href="info-ai" questions="Yapay Zeka Güvenli Mi?" />
          <TopNavQuests href="info-ai" questions="Yapay Zeka Araçları" />
        </div>
      )}
    </nav>
  );
};

export default TopNav;
