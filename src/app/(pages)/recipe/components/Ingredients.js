import React from "react";
import Image from "next/image";
import { IoIosCheckmark } from "react-icons/io";
import img1 from "./../../../../../public/images/page2/img1.png";
import img5 from "./../../../../../public/images/img5.png";
import img9 from "./../../../../../public/images/img9.png";
import img8 from "./../../../../../public/images/img8.png";
import ads from "./../../../../../public/images/ads.png";
const Ingredients = () => {
  return (
    <>
      <div className="md:container mx-auto px-5 py-5 bg-white ">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-2 lg:gap-8 pt-5">
          <div className="col-span-7">
            <h1 className="text-[20px] sm:text[20px] lg:text-[24px] font-bold text-black py-3 lg:py-5 ">
              Ingredients
            </h1>
            {/* for main dish ... */}
            <h3 className="text-[16px] sm:text[16px] lg:text-[18px] font-semibold text-black py-3 lg:py-5">
              For main dish
            </h3>
            <div className="flex justify-normal items-center gap-5 py-8 border-b-2 border-gray-200">
              <div className="flex items-center justify-center rounded-full w-5 h-5 md:w-6 md:h-6 cursor-pointer bg-black text-white">
                <IoIosCheckmark className="w-5 h-6 " />
              </div>
              <p className="font-medium text-[14px] lg:text-[16px] text-black opacity-60 ">
                Lorem ipsum dolor sit amet
              </p>
            </div>
            <div className="flex justify-normal items-center gap-5 py-8 border-b-2 border-gray-200">
              <div className="flex items-center justify-center rounded-full w-5 h-5 md:w-6 md:h-6 cursor-pointer border-2 border-gray-200"></div>
              <p className="font-medium text-[14px] lg:text-[16px] text-black ">
                Lorem ipsum dolor sit amet
              </p>
            </div>
            <div className="flex justify-normal items-center gap-5 py-8 border-b-2 border-gray-200">
              <div className="flex items-center justify-center rounded-full w-5 h-5 md:w-6 md:h-6 cursor-pointer border-2 border-gray-200"></div>
              <p className="font-medium text-[14px] lg:text-[16px] text-black ">
                Lorem ipsum dolor sit amet
              </p>
            </div>
            <div className="flex justify-normal items-center gap-5 py-8 border-b-2 border-gray-200">
              <div className="flex items-center justify-center rounded-full w-5 h-5 md:w-6 md:h-6 cursor-pointer border-2 border-gray-200"></div>
              <p className="font-medium text-[14px] lg:text-[16px] text-black ">
                Lorem ipsum dolor sit amet
              </p>
            </div>
            <div className="flex justify-normal items-center gap-5 py-8 border-b-2 border-gray-200">
              <div className="flex items-center justify-center rounded-full w-5 h-5 md:w-6 md:h-6 cursor-pointer border-2 border-gray-200"></div>
              <p className="font-medium text-[14px] lg:text-[16px] text-black ">
                Lorem ipsum dolor sit amet
              </p>
            </div>
            {/* for sauce ... */}
            <div className="pt-20 py-5">
              <h3 className="text-[16px] sm:text[16px] lg:text-[18px] font-semibold text-black py-3 lg:py-5">
                For the sauce
              </h3>
              <div className="flex justify-normal items-center gap-5 py-8 border-b-2 border-gray-200">
                <div className="flex items-center justify-center rounded-full w-5 h-5 md:w-6 md:h-6 cursor-pointer border-2 border-gray-200"></div>
                <p className="font-medium text-[14px] lg:text-[16px] text-black ">
                  Lorem ipsum dolor sit amet
                </p>
              </div>{" "}
              <div className="flex justify-normal items-center gap-5 py-8 border-b-2 border-gray-200">
                <div className="flex items-center justify-center rounded-full w-5 h-5 md:w-6 md:h-6 cursor-pointer border-2 border-gray-200"></div>
                <p className="font-medium text-[14px] lg:text-[16px] text-black ">
                  Lorem ipsum dolor sit amet
                </p>
              </div>{" "}
              <div className="flex justify-normal items-center gap-5 py-8 border-b-2 border-gray-200">
                <div className="flex items-center justify-center rounded-full w-5 h-5 md:w-6 md:h-6 cursor-pointer border-2 border-gray-200"></div>
                <p className="font-medium text-[14px] lg:text-[16px] text-black ">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
            </div>
            {/* Directions... */}
            <div className="">
              <h1 className="text-[20px] sm:text[20px] lg:text-[24px] font-bold text-black pl-8 py-3 lg:py-5 ">
                Directions
              </h1>
              <div className="flex justify-normal items-center gap-5 py-8">
                <div className="flex items-center justify-center rounded-full w-5 h-5 md:w-6 md:h-6 cursor-pointer border-2 border-gray-200"></div>
                <p className="text-[14px] lg:text-[16px] text-black font-semibold ">
                  1. Lorem ipsum dolor sit amet
                </p>
              </div>
              <p className="pl-8 text-[16px] text-black opacity-60 font-normal">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
              <Image src={img1} className="w-full pl-8 py-8" />
              <p className="pl-8 text-[16px] text-black opacity-60 font-normal border-b-2 border-gray-200 pb-10">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
              <div className="flex justify-normal items-center gap-5 py-8">
                <div className="flex items-center justify-center rounded-full w-5 h-5 md:w-6 md:h-6 cursor-pointer border-2 border-gray-200"></div>
                <p className="text-[14px] lg:text-[16px] text-black font-semibold ">
                  2. Lorem ipsum dolor sit amet
                </p>
              </div>
              <p className="pl-8 text-[16px] text-black opacity-60 font-normal border-b-2 border-gray-200 pb-10">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
              <div className="flex justify-normal items-center gap-5 py-8">
                <div className="flex items-center justify-center rounded-full w-5 h-5 md:w-6 md:h-6 cursor-pointer border-2 border-gray-200"></div>
                <p className="text-[14px] lg:text-[16px] text-black font-semibold ">
                  3. Lorem ipsum dolor sit amet
                </p>
              </div>
              <p className="pl-8 text-[16px] text-black opacity-60 font-normal border-b-2 border-gray-200 pb-10">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
            </div>
          </div>
          <div className="col-span-5 px-2">
            <h1 className="text-[20px] sm:text[20px] lg:text-[24px] font-bold text-black p-4 py-3 lg:py-5 ">
              Other Recipe
            </h1>
            <div className="flex flex-col sm:flex-row items-center gap-4 p-4">
              <div className="w-full sm:w-32 flex-shrink-0">
                <Image
                  src={img5}
                  width={180}
                  height={120}
                  className="w-full h-auto object-cover rounded-2xl"
                  alt="Chicken Meatball"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-lg font-medium">
                  Chicken Meatball with Creamy Cheese...
                </h1>
                <p className="text-gray-600">By Andreas Paula</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 p-4 items-center">
              <div className="w-full sm:w-32 flex-shrink-0">
                <Image
                  src={img9}
                  width={180}
                  height={120}
                  className="w-full h-auto object-cover rounded-2xl"
                  alt="Chicken Meatball"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-lg font-medium">
                  The Creamiest Creamy Chicken an...
                </h1>
                <p className="text-gray-600">By Andreas Paula</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 p-4">
              <div className="w-full sm:w-32 flex-shrink-0">
                <Image
                  src={img8}
                  width={180}
                  height={120}
                  className="w-full h-auto object-cover rounded-2xl"
                  alt="Chicken Meatball"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-lg font-medium">
                  The Best Easy One Pot Chicken and Rice
                </h1>
                <p className="text-gray-600">By Andreas Paula</p>
              </div>
            </div>
            <Image
              src={ads}
              width={400}
              height={430}
              className="w-full h-auto object-cover py-10"
              alt="ads"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Ingredients;
