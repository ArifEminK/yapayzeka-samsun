import React from "react";

interface TopNavQuestsProps {
  href: string;
  questions: string;
}

const TopNavQuests: React.FC<TopNavQuestsProps> = ({ questions, href }) => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -150; // Navbar yüksekliği kadar yukarıda dursun
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <button onClick={() => scrollToSection(href)}>
      <p className="font-PTSans text-xl cursor-pointer opacity-70 hover:opacity-100">
        {questions}
      </p>
    </button>
  );
};

export default TopNavQuests;
