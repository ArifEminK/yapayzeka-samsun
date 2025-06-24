"use client";
import ContentSection from "@/app/components/ContentSection";
import TitleLane from "@/app/components/TitleLane";
import React, { useEffect, useState } from "react";
import data from "@/public/engineering.json";
import machine from "@/public/machine.json";
import AcademicianComp from "@/app/components/HomeComps/Academician/AcademicianComp";
import ProjectComp from "@/app/components/Projects/ProjectComp";
import DepartmentComp from "@/app/components/FacultyComps/DepartmentComp";
import { getAcademicians } from "@/services/academicianService";
import { getDepartments } from "@/services/departmentService";
import { useParams } from "next/navigation";
import { Academician, Department } from "@/types/models";

const chunkArray = <T,>(arr: T[], size: number): T[][] => {
  const grouped: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    grouped.push(arr.slice(i, i + size));
  }
  return grouped;
};

const Page = () => {
  const { locale } = useParams();
  const [academicianNames, setAcademicianNames] = useState<Academician[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);

  useEffect(() => {
    getAcademicians().then(res => {
      setAcademicianNames(res.data);
    });
  }, []);
  useEffect(() => {
    getDepartments().then(res => {
      setDepartments(res.data);
    });
  }, []);

  const machineAcademicianNames = machine["MachineAkademisyenler"];

  const allAcademicianData = academicianNames.map((item) => ({
    name: item.name[locale as keyof typeof item.name],
    img: item.image || "/images/default.png",
  }));

  const allMachineAcademicianData = Object.values(machineAcademicianNames.names).map((name, i) => ({
    name,
    img: machineAcademicianNames.img_path[i],
  }));

  // Proje datası şimdilik boş bırakıldı
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const allProjectData: any[] = [];

  const groupedData = chunkArray(allAcademicianData, 3);
  const groupedMachineData = chunkArray(allMachineAcademicianData, 3);
  const groupedProjectsData = chunkArray(allProjectData, 3);

  return (
    <div className="w-full mx-auto shadow-lg overflow-hidden">
      <div className="md:mt-[21vh] mt-[12vh] w-full md:h-[84vh] h-full">
        <ContentSection
          title={locale === "tr" ? "Mühendislik Fakültesi" : "Faculty of Engineering"}
          text={data["Content"].Metin[1]}
          bgUrl="bg7"
          directionLeft={false}
        />
      </div>

      <section className="mt-[6vh]">
        <TitleLane title="Bölümlerimiz" bg="bg6" />
        {chunkArray(departments, 3).map((row, rowIdx) => (
          <div key={rowIdx} className="flex flex-col md:flex-row my-[4vh] gap-[4vh] max-w-[90vw] mx-auto px-[2vh]">
            {row.map((department) => (
              <DepartmentComp
                key={department._id}
                title={department.name[locale as keyof typeof department.name]}
                text={department.description ? department.description[locale as keyof typeof department.description] : ""}
                imgUrl={department.img_path ? department.img_path[locale as keyof typeof department.img_path] : "/img/engineering/software.png"}
                href={department.name[locale as keyof typeof department.name]}
              />
            ))}
          </div>
        ))}
      </section>
      {[
        {
          title: "Yazılım Mühendisliği",
          groupedAcademicians: groupedData,
          groupedProjects: groupedProjectsData,
          href: "software",
        },
        {
          title: "Makine Mühendisliği",
          groupedAcademicians: groupedMachineData,
          groupedProjects: groupedProjectsData,
          href: "machine",
        },
      ].map((section, index) => (
        <section id={section.href} key={index} className="mt-[4vh]">
          <TitleLane title={section.title} bg={`bg${8 + index}`} />

          <h1
            className="text-textColor font-sans text-[4vw] sm:text-[2vw] mt-[4vh] font-bold z-[2] text-center"
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
            className="text-textColor font-sans text-[4vw] sm:text-[2vw] mt-[4vh] font-bold z-[2] text-center"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.9)" }}
          >
            Yapay Zeka Çalışmaları
          </h1>

          <div className="flex flex-col items-center">
            {section.groupedProjects.map((row, rowIndex) => (
              <div key={rowIndex} className="flex justify-center gap-[2vw] w-full py-[6vw] md:py-[2vw] mb-[5vw] md:mb-[0vw]">
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

export default Page;
