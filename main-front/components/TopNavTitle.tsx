import Link from "next/link";
import React from "react";

interface TopNavTitleProps {
  title: string;
  href: string;
}

const TopNavTitle: React.FC<TopNavTitleProps> = ({ title, href }) => {
  return (
    <Link
      href={href}
      className="text-[#FFFFFF] opacity-75 hover:text-[#FFFFFF] hover:opacity-100  font-nocturne px-3 py-2 text-xl font-medium"
    >
      {title}
    </Link>
  );
};

export default TopNavTitle;
