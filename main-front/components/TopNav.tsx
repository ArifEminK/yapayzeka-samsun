"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import TopNavTitle from "./TopNavTitle";

const TopNav = () => {
  return (
    <nav className="bg-topNavBg shadow-md border-b-[1px] border-b-[#70777F] ">
      <div className=" max-w  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div className="h-[16vh] flex items-center justify-start ">
            <Link href="/" className="flex items-center ">
              <Image
                src="/images/logo_beyaz.png"
                alt="Logo"
                width={40}
                height={40}
                className="h-[10vh] opacity-75 w-auto"
              />
              <span className="hover:opacity-100 ml-[2vw] text-[2.2rem] font-medium opacity-70 font-nocturne text-[#FFFFFF]">
                Yapay Zeka
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-[2vw]">
            <TopNavTitle title="Bölüm Hakkında" href="/bolum-hakkinda" />
            <TopNavTitle title="Personel" href="/personel" />
            <TopNavTitle title="Projeler" href="/projeler" />
            <TopNavTitle title="İletişim" href="/iletisim" />
          </div>

          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Site içinde ara"
                className="font-opensans w-[18vw] h-[6vh] px-[1vw] py-[1vh] text-sm text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0D7B81]"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#0D7B81] hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className={`"block"} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`"hidden"} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
