import Image from "next/image";
import img2 from "../../../../../public/images/heroimg/img2.png";
import img3 from "./../../../../../public/images/morerecipe/img3.png";
import { IoPlay } from "react-icons/io5";
import { Fork, Timer } from "../../../../../public/icons/icon";
import { PiPrinter } from "react-icons/pi";
import { GoShare } from "react-icons/go";
const Recipes = () => {
  return (
    <>
      <div className="md:container mx-auto px-5 py-5 bg-white ">
        <h1 className="text-black font-semibold text-[20px] sm:text-[28px] lg:text-[64px] pt-4 ">
          Health Japanese Fried Rice
        </h1>

        <div className="flex justify-end gap-3 pt-3 sm:pt-0">
          <div className=" top-4 right-4 flex justify-center items-center rounded-full w-8 h-8 md:w-14 md:h-14 bg-[#E7FAFE] shadow-sm hover:scale-105 transition-transform">
            <PiPrinter className={`w-6 h-6 md:w-8 md:h-8 `} />
          </div>
          <div className=" top-4 right-4 flex justify-center items-center rounded-full w-8 h-8 md:w-14 md:h-14 bg-[#E7FAFE] shadow-sm hover:scale-105 transition-transform">
            <GoShare className={`w-6 h-6 md:w-8 md:h-8 `} />
          </div>
        </div>
        <div className="flex items-center flex-wrap gap-4 md:gap-4 lg:gap-10 pt-2 md:pt-2 lg:pt-3">
          <div className="flex items-center gap-2 md:gap-3 min-w-[160px]">
            <Image
              src={img2}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              alt="Author"
            />
            <div>
              <p className="text-black text-sm sm:text-[15px] md:text-[16px] font-semibold">
                John Smith
              </p>
              <p className="text-black text-xs sm:text-[14px] md:text-[16px] opacity-60">
                15 March 2022
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-3 min-w-[140px]">
            <Timer className="w-5 h-5 sm:w-6 sm:h-6" />
            <div>
              <p className="text-black text-sm sm:text-[15px] md:text-[16px] font-medium">
                PREP TIME
              </p>
              <p className="text-black text-xs sm:text-[14px] md:text-[16px] opacity-60">
                15 Minutes
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-3 min-w-[140px]">
            <Timer className="w-5 h-5 sm:w-6 sm:h-6" />
            <div>
              <p className="text-black text-sm sm:text-[15px] md:text-[16px] font-medium">
                COOK TIME
              </p>
              <p className="text-black text-xs sm:text-[14px] md:text-[16px] opacity-60">
                15 Minutes
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2 md:p-3 lg:p-4 h-8 md:h-10">
            <Fork className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm md:text-[15px] font-medium opacity-65">
              Chicken
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-2 lg:gap-8 pt-5">
          <div className="col-span-7 relative">
            <div>
              <Image src={img3} className="w-full rounded-2xl" />
            </div>
            <button className="absolute top-[45%] right-[45%] z-10 flex justify-center items-center rounded-full w-8 h-8 sm:w-9 sm:h-9 md:w-25 md:h-25 bg-white opacity-80 shadow-sm hover:scale-105 transition-transform duration-200">
              <IoPlay className="w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8" />
            </button>
          </div>

          <div className="col-span-5 px-10 bg-[#E7FAFE] rounded-2xl">
            <div className="">
              <h1 className="text-[16px] sm:text[20px] lg:text-[24px] font-semibold text-black py-3 lg:py-5 ">
                Nutrition Information
              </h1>
              <div className="flex justify-between py-3 border-b-2 border-gray-200">
                <p className="font-medium text-[14px] lg:text-[18px] text-black opacity-60">
                  Calories
                </p>
                <p className="font-medium text-[14px] lg:text-[18px] text-black">
                  219.9 kcal
                </p>
              </div>
              <div className="flex justify-between py-3 border-b-2 border-gray-200">
                <p className="font-medium text-[14px] lg:text-[18px] text-black opacity-60">
                  Total Fat
                </p>
                <p className="font-medium text-[14px] lg:text-[18px] text-black">
                  10.7 g
                </p>
              </div>
              <div className="flex justify-between py-3 border-b-2 border-gray-200">
                <p className="font-medium text-[14px] lg:text-[18px] text-black opacity-60">
                  Protein
                </p>
                <p className="font-medium text-[14px] lg:text-[18px] text-black">
                  7.9 g
                </p>
              </div>
              <div className="flex justify-between py-3 border-b-2 border-gray-200">
                <p className="font-medium text-[14px] lg:text-[18px] text-black opacity-60">
                  Carbohydrate
                </p>
                <p className="font-medium text-[14px] lg:text-[18px] text-black">
                  22.3 g
                </p>
              </div>
              <div className="flex justify-between py-3 border-b-2 border-gray-200">
                <p className="font-medium text-[14px] lg:text-[18px] text-black opacity-60">
                  Cholesterol
                </p>
                <p className="font-medium text-[14px] lg:text-[18px] text-black">
                  37.4 mg
                </p>
              </div>

              <p className=" pt-6 lg:pt-6 xl:pt-28 font-medium text-[12px] lg:text-[14px] text-black opacity-60">
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

        <p className="pt-10 text-black opacity-60 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </>
  );
};

export default Recipes;
