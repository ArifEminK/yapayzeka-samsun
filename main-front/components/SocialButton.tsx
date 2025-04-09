import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
}

const SocialButton: React.FC<SocialButtonProps> = ({ href, icon }) => {
  return (
    <div className="flex space-x-4 bg-gray-300 rounded-full p-2 hover:bg-gray-400">
      <Link target="_blank" href={href} className="text-red-600">
        {icon}
      </Link>
    </div>
  );
};

export default SocialButton;
