"use client"; 
import MainSection from "../components/HomeComps/Main/MainSection";
import WhatsAI from "../components/HomeComps/InfoAI/WhatsAI";
import NewsSection from "@/components/HomeComps/News/NewsSection"; 
import AIStudiesSection from "@/components/HomeComps/AIStudies/AIStudiesSection";

const HomePage = () => {
  return (
    <div className=" w-full mx-auto  shadow-lg overflow-hidden">
      <MainSection />
      <WhatsAI />
      <AIStudiesSection/>

      <NewsSection />
    </div>
  );
};

export default HomePage;
