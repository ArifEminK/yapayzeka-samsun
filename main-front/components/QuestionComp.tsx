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
    <div className="flex-1 flex flex-col items-center transition-transform duration-300 ease-in-out hover:translate-y-[-5px]">
      <video autoPlay muted loop playsInline>
        <source src={videoUrl} type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>
      <h3 className="text-xl text-black text-center mb-2 pb-2 border-b-2 border-[#007bff] w-full transition-all duration-300 ease-in-out">
        {title}
      </h3>
      <br />
      <p>{text}</p>
    </div>
  );
};

export default QuestionComp;
