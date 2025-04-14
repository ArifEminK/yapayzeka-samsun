import React from "react";

interface QuestionCompProps {
  title: string;
  text: string;
  videoUrl: string;
}

const QuestionComp: React.FC<QuestionCompProps> = ({
  title,
  text,
  videoUrl,
}) => {
  return (
    <div className="h-[30vw] flex-1 flex group flex-col items-center transition-transform duration-300 ease-in-out hover:translate-y-[-5px]">
      <video autoPlay muted loop playsInline>
        <source src={videoUrl} type="video/mp4" />  
        Tarayıcınız video etiketini desteklemiyor.
      </video>
      <div className="mt-[1vw] opacity-80 group-hover:opacity-100">
        <h3 className="text-2xl font-opensans text-white text-center mb-2 pb-4 border-b-2 border-topNavBg w-full transition-all duration-300 ease-in-out group-hover:border-b-white">
          {title}
        </h3>
        <br />
        <p className="text-white font-opensans text-[1.2rem] [text-shadow:2px_2px_4px_rgba(0,0,0,0.7)] text-center">
          {text}
        </p>
      </div>
    </div>
  );
};

export default QuestionComp;
