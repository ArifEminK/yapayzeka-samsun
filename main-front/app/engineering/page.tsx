import ContentSection from "@/components/ContentSection";
import QuestionComp from "@/components/HomeComps/InfoAI/QuestionComp";
import TitleLane from "@/components/TitleLane";
import React from "react";
import data from "@/public/engineering.json";
import akademisyenler from "@/public/yapay_zeka.json";
import machine from "@/public/machine.json";
import AcademicianComp from "@/components/HomeComps/Academician/AcademicianComp";
import ProjectComp from "@/components/HomeComps/Projects/ProjectComp";

const chunkArray = <T,>(arr: T[], size: number): T[][] => {
  const grouped: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    grouped.push(arr.slice(i, i + size));
  }
  return grouped;
};




const page = () => {
  const academicianNames = akademisyenler["Akademisyenler"];
  const projects = akademisyenler["Projeler"];
  const machineAcademicianNames = machine["MachineAkademisyenler"];

  const allAcademicianData = Object.values(academicianNames.names).map((name, i) => ({
    name,
    img: academicianNames.img_path[i],
  }));

  const allMachineAcademicianData = Object.values(machineAcademicianNames.names).map((name, i) => ({
    name,
    img: machineAcademicianNames.img_path[i],
  }));

  const allProjectData = Object.values(projects.Sorular).map((title, i) => ({
    name: title,
    text: Object.values(projects.Cevaplar)[i],
    img: projects.img_path[i] || "/images/default.png",
  }));

  const groupedData = chunkArray(allAcademicianData, 3);
  const groupedMachineData = chunkArray(allMachineAcademicianData, 3);
  const groupedProjectsData = chunkArray(allProjectData, 3);

  return (
    <div className="w-full mx-auto shadow-lg overflow-hidden">
      <div className="md:mt-[16vh] mt-[12vh] w-full md:h-[84vh] h-[88vh]">
        <ContentSection
          title={"Mühendislik Fakültesi"}
          text={data["Content"].Metin[1]}
          bgUrl="bg7"
          directionLeft={false}
        />
      </div>

      <section className="mt-[6vh]">
        <TitleLane title="Bölümlerimiz" bg="bg6" />
        <div className="flex flex-col md:flex-row my-[4vh] gap-[4vh] max-w-[90vw] mx-auto px-[2vh]">
          <QuestionComp
            title="Yazılım Mühendisliği"
            text=""
            imgUrl="/img/engineering/software.png"
            linkDiv={false}
          />
          <QuestionComp
            title="Makine Mühendisliği"
            text=""
            imgUrl="/img/engineering/machine.png"
            linkDiv={false}
          />
          <QuestionComp
            title="Elektrik-Elektronik Mühendisliği"
            text=""
            imgUrl="/img/engineering/electric.png"
            linkDiv={false}
          />
        </div>
        <div className="flex flex-col md:flex-row my-[4vh] gap-[4vh] max-w-[90vw] mx-auto px-[2vh]">
          <QuestionComp
            title="Endüstri Mühendisliği"
            text=""
            imgUrl="/img/engineering/endustry.png"
            linkDiv={false}
          />
          <QuestionComp
            title="Biyomedikal Mühendisliği"
            text=""
            imgUrl="/img/engineering/biomedical.png"
            linkDiv={false}
          />
          <QuestionComp
            title="Temel Bilimler"
            text=""
            imgUrl="/img/engineering/basicsciences.png"
            linkDiv={false}
          />
        </div>
      </section>

      {[
        {
          title: "Yazılım Mühendisliği",
          groupedAcademicians: groupedData,
          groupedProjects: groupedProjectsData,
        },
        {
          title: "Makine Mühendisliği",
          groupedAcademicians: groupedMachineData,
          groupedProjects: groupedProjectsData,
        },
      ].map((section, index) => (
        <section key={index} className="mt-[4vh]">
          <TitleLane title={section.title} bg={`bg${8 + index}`} />

          <h1
            className="text-textColor font-sans text-[2vw] sm:text-[2vw] mt-[4vh] font-bold z-[2] text-center"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.9)" }}
          >
            Yapay Zeka Üzerine Çalışan Akademisyenlerimiz
          </h1>

          <div className="flex flex-col items-center">
            {section.groupedAcademicians.map((row, rowIndex) => (
              <div key={rowIndex} className="flex justify-center gap-[2vw] w-full py-[2vw]">
                {row.map((item, i) => (
                  <div key={`${rowIndex}-${i}`} className="w-[26vw]">
                    <AcademicianComp title={item.name} imgUrl={item.img} />
                  </div>
                ))}
              </div>
            ))}
          </div>

          <h1
            className="text-textColor font-sans text-[2vw] sm:text-[2vw] mt-[4vh] font-bold z-[2] text-center"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.9)" }}
          >
            Yapay Zeka Üzerine Çalışmalarımız
          </h1>

          <div className="flex flex-col items-center">
            {section.groupedProjects.map((row, rowIndex) => (
              <div key={rowIndex} className="flex justify-center gap-[2vw] w-full py-[2vw]">
                {row.map((item, i) => (
                  <div key={`${rowIndex}-${i}`} className="w-[26vw]">
                    <ProjectComp title={item.name} text={item.text} imgUrl={item.img} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default page;
