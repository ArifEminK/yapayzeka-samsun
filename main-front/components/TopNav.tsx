"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import TopNavTitle from "./TopNavTitle";

const TopNav = () => {
  return (
    <nav className="bg-topNavBg shadow-md border-b-[1px] border-b-[#70777F]">
      <div className="max-w mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[12vh] md:h-[16vh]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo_beyaz.png"
              alt="Logo"
              width={40}
              height={40}
              className="h-[6vh] w-auto opacity-75"
            />
            <span className="hover:opacity-100 ml-2 text-[5vw] sm:text-[2.2rem] font-medium opacity-70 font-nocturne text-white">
              Yapay Zeka
            </span>
          </Link>

          {/* Menü md ve üstü */}
          <div className="hidden md:flex items-center space-x-8">
            <TopNavTitle title="Bölüm Hakkında" href="/bolum-hakkinda" />
            <TopNavTitle title="Personel" href="/personel" />
            <TopNavTitle title="Projeler" href="/projeler" />
            <TopNavTitle title="İletişim" href="/iletisim" />
          </div>

          {/* Search sadece md ve üstü göster */}
          <div className="hidden md:flex relative">
            <input
              type="text"
              placeholder="Site içinde ara"
              className="font-opensans w-[200px] h-[40px] px-3 py-1 text-sm text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0D7B81]"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2">
              <svg className="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </button>
          </div>

          {/* Hamburger sadece mobil */}
          <div className="md:hidden flex items-center">
            <button className="p-2 text-gray-700 hover:text-[#0D7B81]">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};


export default TopNav;
