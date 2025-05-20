"use client"
import Image from "next/image";
import React from "react";

interface DepartmentCompProps {
    title: string;
    text: string;
    videoUrl?: string;
    imgUrl?: string;
    href: string;
}

const DepartmentComp: React.FC<DepartmentCompProps> = ({ title, text, videoUrl, imgUrl, href }) => {
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            const yOffset = -150; // Navbar yüksekliği kadar yukarıda dursun
            const y =
                section.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };
    return (
        <div onClick={() => scrollToSection(href)} className="w-full cursor-pointer flex flex-col items-center group transition-transform duration-300 ease-in-out hover:translate-y-[-5px]">                <div className="relative group overflow-hidden rounded-lg shadow-md">
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
        </div>
            <div className="mt-4 opacity-80 group-hover:opacity-100 text-center">
                <h3 className="relative text-[6vw] sm:text-2xl font-opensans text-textColor mb-2 pb-2 w-full group-hover:before:scale-x-100 before:transition-transform before:duration-200 before:ease-out before:origin-center before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-borderColor">
                    {title}
                </h3>
                <p className="text-textColor font-opensans text-[4vw] sm:text-[1.2rem]  mt-2">
                    {text}
                </p>
            </div>

        </div>
    );
};
export default DepartmentComp;
