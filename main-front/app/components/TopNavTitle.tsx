import React from "react";

interface TopNavTitleProps {
  title: string;
  href: string;
}

const TopNavTitle: React.FC<TopNavTitleProps> = ({ title, href }) => {
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
    <button
      onClick={() => scrollToSection(href)}
      className="text-white dark:opacity-70 hover:opacity-100 font-PTSans px-3 py-2 text-[4vh] md:text-[3.5vh] font-semibold"
    >
      {title}
    </button>
  );
};

export default TopNavTitle;
