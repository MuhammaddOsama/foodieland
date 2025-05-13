import Image from "next/image";
import React from "react";
import img1 from "../../../../public/images/heroimg/img1.png";
import { Playbtn, Timer } from "../../../../public/icons/icon";
import { Fork } from "../../../../public/icons/icon";
import img3 from "../../../.././public/images/heroimg/img3.png";
import img2 from "../../../../public/images/heroimg/img2.png";
import Badge from "../../../../public/images/heroimg/Badge.png";
const Hero = () => {
  return (
    <>
      <div className="md:container mx-auto px-5 pt-6 bg-white">
        {/* <div className="">
          <Image src={Badge} alt="badge pic" />
        </div> */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-3 lg:gap-0">
          <div className="col-span-6 bg-[#E7FAFE] px-2 sm:px-8 pt-4">
            <div className="bg-white rounded-[30px] flex items-center justify-evenly space-x-3 p-4 w-40 h-12 ">
              <Image src={img1} alt="avater1" />
              <p className="font-semibold text-sm text-black">Hot Recipes</p>
            </div>
            <p className="text-black font-semibold text-[28px] sm:text-[28px] lg:text-[64px] pt-4 ">
              Spicy delicious chicken wings
            </p>
            <p className="text-black font-normal text-[16px] opacity-[60%] leading-7 pt-4">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>

            <div className="flex space-x-5 pt-7">
              <div className="flex items-center justify-evenly bg-[#0000000D] p-4 w-30 h-10 space-x-2 rounded-[30px]">
                <Timer />
                <span className="text-sm font-medium opacity-65">30 mins</span>
              </div>
              <div className="flex items-center justify-evenly bg-[#0000000D] p-4 w-30 h-10 space-x-2 rounded-[30px]">
                <Fork />
                <span className="text-sm font-medium opacity-65">Chicken</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-5 gap-4">
              <div className="flex items-center space-x-3">
                <Image src={img2} alt="avater" className="w-10 h-10 sm:w-12 sm:h-12" />
                <div>
                  <p className="text-black text-sm sm:text-[16px] font-semibold">
                    John Smith
                  </p>
                  <p className="text-black text-xs sm:text-[16px] opacity-[60%]">
                    15 March 2022
                  </p>
                </div>
              </div>
              <button className="inline-flex items-center justify-center bg-black text-white text-sm font-semibold w-full sm:w-auto px-8 py-3 sm:py-4 rounded-2xl gap-2 shadow-sm hover:scale-105 transition-transform">
                View Recipes
                <Playbtn className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="col-span-6">
            <Image className="bg-cover w-full" src={img3} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
