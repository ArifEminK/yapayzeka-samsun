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
    <div className="w-full md:w-[30vw] flex flex-col items-center group transition-transform duration-300 ease-in-out hover:translate-y-[-5px]">
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
      <div className="mt-4 opacity-80 group-hover:opacity-100 text-center">
        <h3 className="text-[6vw] sm:text-2xl font-opensans text-white mb-2 pb-2 border-b-2 border-topNavBg w-full group-hover:border-b-white">
          {title}
        </h3>
        <p className="text-white font-opensans text-[4vw] sm:text-[1.2rem] [text-shadow:2px_2px_4px_rgba(0,0,0,0.7)] mt-2">
          {text}
        </p>
      </div>
    </div>
  );
};

export default QuestionComp;
