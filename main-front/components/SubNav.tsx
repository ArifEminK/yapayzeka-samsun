"use client";

import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiXCircleDuotone } from "react-icons/pi";
import SocialButton from "./SocialButton";

const SubNav = () => {
  return (
    <div className="w-full bg-gray-200 py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <div className="flex space-x-4 border-r-2 border-l-2 border-gray-300 pr-4 pl-4">
              <Link
                href="https://samsun.edu.tr"
                target="_blank"
                className="text-gray-700 font-bold hover:text-gray-900"
              >
                Samsun Üniversitesi
              </Link>
            </div>
            <div className="flex space-x-4 border-r-2 border-gray-300 pr-4">
              <Link
                href="https://ebys.samsun.edu.tr/"
                target="_blank"
                className="text-gray-700 font-bold hover:text-gray-900"
              >
                EBYS
              </Link>
            </div>
            <div className="flex space-x-4 border-r-2 border-gray-300 pr-4">
              <Link
                href="https://obs.samsun.edu.tr/"
                target="_blank"
                className="text-gray-700 font-bold hover:text-gray-900"
              >
                OBS
              </Link>
            </div>
            <div className="flex space-x-4 border-r-2 border-gray-300 pr-4">
              <Link
                href="https://kalite.samsun.edu.tr/"
                target="_blank"
                className="text-gray-700 font-bold hover:text-gray-900"
              >
                Kalite
              </Link>
            </div>
            <div className="flex space-x-4 border-r-2 border-gray-300 pr-4">
              <Link
                href="https://uzem.samsun.edu.tr/"
                target="_blank"
                className="text-gray-700 font-bold hover:text-gray-900"
              >
                Hakkında
              </Link>
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="flex space-x-4 bg-gray-300 rounded-full p-2 hover:bg-gray-400">
              <Link
                href="https://www.facebook.com/samsun.univ"
                target="_blank"
                className="text-blue-600"
              >
                <FaFacebookF size={16} />
              </Link>
            </div>
            <div className="flex space-x-4 bg-gray-300 rounded-full p-2 hover:bg-gray-400">
              <Link
                target="_blank"
                href="https://x.com/samsun_univ"
                className="text-black"
              >
                <FaXTwitter size={16} />
              </Link>
            </div>

            <SocialButton
              href="https://www.linkedin.com/school/samsununiversitesi/"
              icon={<FaLinkedinIn size={16} />}
            />
            <SocialButton
              href="https://www.instagram.com/samsun.univ/"
              icon={<FaInstagram size={16} />}
            />
            <SocialButton
              href="https://www.youtube.com/c/Samsun%C3%9Cniversitesii"
              icon={<FaYoutube size={16} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNav;
