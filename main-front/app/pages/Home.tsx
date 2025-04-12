import ProjectsSection from "@/components/HomeComps/ProjectsSection";
import InfoAI from "../../components/HomeComps/InfoAI";
import MainSection from "../../components/HomeComps/MainSection";
import WhatsAI from "../../components/HomeComps/WhatsAI";
import NewsSection from "@/components/HomeComps/NewsSection";

const Home = () => {
  return (
    <div className=" w-full mx-auto  shadow-lg overflow-hidden border  border-black/5">
      <MainSection />
      <WhatsAI />
      <InfoAI />
      <ProjectsSection />
      <NewsSection />
    </div>
  );
};

export default Home;
