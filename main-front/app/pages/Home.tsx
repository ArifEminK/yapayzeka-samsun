"use client";
import ProjectsSection from "@/components/HomeComps/Projects/ProjectsSection";
import InfoAI from "../../components/HomeComps/InfoAI/InfoAI";
import MainSection from "../../components/HomeComps/Main/MainSection";
import WhatsAI from "../../components/HomeComps/InfoAI/WhatsAI";
import NewsSection from "@/components/HomeComps/News/NewsSection";
import AcademicianSection from "@/components/HomeComps/Academician/AcademicianSection";

const Home = () => {
  return (
    <div className=" w-full mx-auto  shadow-lg overflow-hidden border  border-black/5">
      <MainSection />
      <WhatsAI />
      <InfoAI />
      <AcademicianSection />
      <ProjectsSection />
      <NewsSection />
    </div>
  );
};

export default Home;
