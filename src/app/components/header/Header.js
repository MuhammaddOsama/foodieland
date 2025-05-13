"use client";
import Link from "next/link";
import { Logo, Vector } from "../../../../public/icons/icon";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  return (
    <>
      <div className="bg-white top-0 z-20 sticky">
        <div className="md:container mx-auto px-5">
          <div className="flex justify-between space-x-5 pt-4 sm:pt-4 md:pt-6 lg:pt-8">
            <Link href="/home">
              <Logo />
            </Link>
            <ul className="lg:flex hidden space-x-10">
              <Link href="/">
                <li className="text-black text-[16px] font-[500px] hover:scale-105 transition-transform">
                  Home
                </li>
              </Link>
              <Link href="/recipe">
                <li className="text-black text-[16px] font-[500px] hover:scale-105 transition-transform">
                  Recipes
                </li>
              </Link>
              <Link href="/blog">
                <li className="text-black text-[16px] font-[500px] hover:scale-105 transition-transform">
                  Blog
                </li>
              </Link>
              <Link href="/contact">
                <li className="text-black text-[16px] font-[500px] hover:scale-105 transition-transform">
                  Contact
                </li>
              </Link>
              <Link href="/about">
                <li className="text-black text-[16px] font-[500px] hover:scale-105 transition-transform">
                  About us
                </li>
              </Link>
            </ul>
            <div className="lg:flex hidden items-center space-x-6 ">
              <Link href="/#" className="hover:scale-105 transition-transform">
                <FaFacebookF />
              </Link>
              <Link href="/#" className="hover:scale-105 transition-transform">
                <FaTwitter />
              </Link>
              <Link href="/#" className=" hover:scale-105 transition-transform">
                <FaInstagram />
              </Link>
            </div>
            <div className="lg:hidden">
              <button
                onClick={() => toggleNavbar()}
                className="hover:cursor-pointer"
              >
                {isNavbarOpen ? <IoClose /> : <MdMenu />}
              </button>
            </div>
          </div>
        </div>
        {/* mob view */}
        {isNavbarOpen && (
          <div className="absolute w-full h-screen bg-white/90 backdrop-blur-sm">
            <ul className="flex flex-col px-5 pt-5 space-y-5 bg-white pb-8 shadow-lg">
              <Link href="/home">
                <li className="text-gray-800 hover:text-gray-500 text-[18px] font-medium transition-colors duration-200">
                  Home
                </li>
              </Link>
              <Link href="/recipe">
                <li className="text-gray-800 hover:text-gray-500 text-[18px] font-medium transition-colors duration-200">
                  Recipes
                </li>
              </Link>
              <Link href="/blog">
                <li className="text-gray-800 hover:text-gray-500 text-[18px] font-medium transition-colors duration-200">
                  Blog
                </li>
              </Link>
              <Link href="/contact">
                <li className="text-gray-800 hover:text-gray-500 text-[18px] font-medium transition-colors duration-200">
                  Contact
                </li>
              </Link>
              <Link href="/about">
                <li className="text-gray-800 hover:text-gray-500 text-[18px] font-medium transition-colors duration-200">
                  About us
                </li>
              </Link>
              <div className="pt-4 sm:pt-4 md:pt-6 lg:pt-8">
                <Vector />
              </div>
              <div className="flex justify-center space-x-6 ">
                <Link
                  href="/#"
                  className="hover:scale-105 transition-transform"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="/#"
                  className="hover:scale-105 transition-transform"
                >
                  <FaTwitter />
                </Link>
                <Link
                  href="/#"
                  className=" hover:scale-105 transition-transform"
                >
                  <FaInstagram />
                </Link>
              </div>
            </ul>
          </div>
        )}
        <div className="pt-4 sm:pt-4 md:pt-6 lg:pt-8">
          <Vector />
        </div>
      </div>
    </>
  );
};
export default Header;
