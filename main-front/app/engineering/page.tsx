import ContentSection from "@/components/ContentSection";
import QuestionComp from "@/components/HomeComps/InfoAI/QuestionComp";
import TitleLane from "@/components/TitleLane";
import React from "react";
import data from "@/public/engineering.json";
import akademisyenler from "@/public/yapay_zeka.json";
import machine from "@/public/machine.json";
import AcademicianComp from "@/components/HomeComps/Academician/AcademicianComp";
import ProjectComp from "@/components/HomeComps/Projects/ProjectComp";

const page = () => {
  const academicianNames = akademisyenler["Akademisyenler"];
  const projects = akademisyenler["Projeler"];
  const machineAcademicianNames = machine["MachineAkademisyenler"];
  const pattern = [3, 3];

  const allAcademicianData = Object.values(academicianNames.names).map(
    (name, i) => ({
      name,
      img: academicianNames.img_path[i],
    })
  );
  const allMachineAcademicianData = Object.values(machineAcademicianNames.names).map(
    (name, i) => ({
      name,
      img: machineAcademicianNames.img_path[i],
    })
  );

  const allProjectData = Object.values(projects.Sorular).map((title, i) => ({
    name: title,
    text: Object.values(projects.Cevaplar)[i],
    img: projects.img_path[i] || "/images/default.png"
  }));

  const groupedProjectsData = [];
  const groupedMachineData = [];
  for (let i = 0, index = 0; index < allProjectData.length; i++) {
    const chunkSize = pattern[i % pattern.length];
    groupedProjectsData.push(allProjectData.slice(index, index + chunkSize));
    index += chunkSize;
  }
  for (let i = 0, index = 0; index < allMachineAcademicianData.length; i++) {
    const chunkSize = pattern[i % pattern.length];
    groupedMachineData.push(allMachineAcademicianData.slice(index, index + chunkSize));
    index += chunkSize;
  }
  const groupedData = [];
  for (let i = 0, index = 0; index < allAcademicianData.length; i++) {
    const chunkSize = pattern[i % pattern.length];
    groupedData.push(allAcademicianData.slice(index, index + chunkSize));
    index += chunkSize;
  }
  return (
    <div className=" w-full mx-auto shadow-lg overflow-hidden">
      <div className="mt-[16vh] w-full h-[84vh] ">
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
      <section className="mt-[4vh]">
        <TitleLane title="Yazılım Mühendisliği" bg="bg8" />
        <h1
          className="text-textColor font-sans text-[2vw] sm:text-[2vw] mt-[4vh] font-bold z-[2] text-center"
          style={{
            textShadow: "1px 1px 3px rgba(0,0,0,0.9)",
          }}
        >
          Yapay Zeka Üzerine Çalışan Akademisyenlerimiz
        </h1>
        <div className="flex flex-col items-center">
          {groupedData.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex w-[80vw] py-[2vw] justify-between"
            >
              {row.map((item, i) => (
                <div key={`${rowIndex}-${i}`} className="">
                  <AcademicianComp title={item.name} imgUrl={item.img} />
                </div>
              ))}
            </div>
          ))}
        </div>
        <h1
          className="text-textColor font-sans text-[2vw] sm:text-[2vw] mt-[4vh] font-bold z-[2] text-center"
          style={{
            textShadow: "1px 1px 3px rgba(0,0,0,0.9)",
          }}
        >
          Yapay Zeka Üzerine Çalışmalarımız
        </h1>
        <div className="flex flex-col items-center">
          {groupedProjectsData.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex w-[80vw] py-[2vw] justify-between"
            >
              {row.map((item, i) => (
                <div key={`${rowIndex}-${i}`} className="">
                  <ProjectComp title={item.name} text={item.text} imgUrl={item.img} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section className="mt-[4vh]">
        <TitleLane title="Makine Mühendisliği" bg="bg9" />
        <h1
          className="text-textColor font-sans text-[2vw] sm:text-[2vw] mt-[4vh] font-bold z-[2] text-center"
          style={{
            textShadow: "1px 1px 3px rgba(0,0,0,0.9)",
          }}
        >
          Yapay Zeka Üzerine Çalışan Akademisyenlerimiz
        </h1>
        <div className="flex flex-col items-center">
          {groupedMachineData.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex w-[80vw] py-[2vw] justify-between"
            >
              {row.map((item, i) => (
                <div key={`${rowIndex}-${i}`} className="">
                  <AcademicianComp title={item.name} imgUrl={item.img} />
                </div>
              ))}
            </div>
          ))}
        </div>
        <h1
          className="text-textColor font-sans text-[2vw] sm:text-[2vw] mt-[4vh] font-bold z-[2] text-center"
          style={{
            textShadow: "1px 1px 3px rgba(0,0,0,0.9)",
          }}
        >
          Yapay Zeka Üzerine Çalışmalarımız
        </h1>
        <div className="flex flex-col items-center">
          {groupedProjectsData.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex w-[80vw] py-[2vw] justify-between"
            >
              {row.map((item, i) => (
                <div key={`${rowIndex}-${i}`} className="">
                  <ProjectComp title={item.name} text={item.text} imgUrl={item.img} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
