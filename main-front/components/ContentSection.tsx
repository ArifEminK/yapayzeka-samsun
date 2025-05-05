import React from "react";

interface ContentSectionProps {
  title: string;
  text: string;
  bgUrl: string;
  directionLeft: boolean;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  text,
  bgUrl,
  directionLeft: directionRight,
}) => {
  return (
    <div className="w-full h-auto flex flex-row items-center justify-center my-[4vh]">
      {directionRight && (
        <div
          className={`w-full h-[90vh] flex flex-col items-center justify-center text-center bg-cover bg-fixed bg-center bg-${bgUrl}`}
        />
      )}
      <div className="w-full h-[90vh] flex flex-col text-textColor items-center justify-center text-left ">
        <div className="w-[40vw] font-opensans ">
          <h1 className="text-4xl font-PTSans">{title}</h1>
        </div>
        <div className="w-[40vw] mt-[2vh] text-xl font-PTSerif">
          <p>{text}</p>
        </div>
      </div>
      {!directionRight && (
        <div
          className={`w-full h-[90vh] flex flex-col items-center justify-center text-center bg-cover bg-fixed bg-center bg-${bgUrl}`}
        />
      )}
    </div>
  );
};

export default ContentSection;
