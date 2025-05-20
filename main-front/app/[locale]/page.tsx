/* eslint-disable @typescript-eslint/no-explicit-any */

import MainSection from "../components/HomeComps/Main/MainSection";
import AIStudiesSection from "../components/HomeComps/AIStudies/AIStudiesSection";
import WhatsAI from "../components/HomeComps/InfoAI/WhatsAI";
import ClientNewsWrapper from "@/app/components/News/ClientNewsWrapper";

export default async function Home(props: any) {
  const { locale } = props.params;

  return (
    <div className="w-full mx-auto shadow-lg overflow-hidden">
      <MainSection locale={locale} />
      <WhatsAI locale={locale} />
      <AIStudiesSection locale={locale} />
      <ClientNewsWrapper locale={locale} />
    </div>
  );
}
