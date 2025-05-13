import Image from "next/image";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import Oval1 from ".//../../../../public/images/insta/Oval1.png";
import Oval2 from ".//../../../../public/images/insta/Oval2.png";
import img from "./../../../../public/images/insta/img.png";
import img1 from "./../../../../public/images/insta/img1.png";
import img2 from "./../../../../public/images/insta/img2.png";
import img3 from "./../../../../public/images/insta/img3.png";
import {
  Comment,
  Heart,
  Instagram,
  Pagination,
  Save,
  Share,
} from "../../../../public/icons/icon";
const Ourinsta = () => {
  return (
    <>
      <div className="md:container mx-auto px-5 pt-20 bg-[linear-gradient(to_bottom,#E7F9FD00_0%,#E7F9FD_100%)]">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight">
            Check out @foodieland on Instagram
          </h1>
          <p className="text-base sm:text-[16px] font-normal text-black opacity-60 leading-relaxed mt-6 sm:mt-8 xl:w-1/2 xl:mx-auto">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-12 justify-items-center py-20 gap-2 ">
          <div className="col-span-3 w-full bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between gap-10 px-2 py-2">
              <div className="flex justify-between items-center gap-2">
                <Image src={Oval1} width={50} height={50} />
                <h1 className="text-blue font-semibold">Foodieland.</h1>
                <MdVerified className="text-blue-500" />
              </div>
              <div>
                <BsThreeDots />
              </div>
            </div>
            <div className="relative w-full aspect-square">
              <Image
                src={img}
                fill
                className="object-cover w-full h-full"
                alt="Post content"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute bg-black/70 text-white text-xs sm:text-sm rounded-2xl px-2 py-1 top-3 right-3">
                1/3
              </div>
            </div>

            <div className="flex justify-between items-center px-2">
              <div className="flex justify-between items-center gap-3 py-4">
                <Heart />
                <Comment />
                <Share />
                <div className="pl-8">
                  <Pagination />
                </div>
              </div>
              <div>
                <Save />
              </div>
            </div>
            <div className="flex items-center justify-items-start gap-2 px-2">
              <Image src={Oval2} />
              <p className="text-black font-normal">
                Liked by <strong>craig_love</strong> and <strong>44,686</strong>
              </p>
            </div>
            <p className="px-2">
              <strong>Foodieland.</strong> Steak never be wrong, its suitable
              for you who want romantic dinner
            </p>
            <p className="text-black opacity-40 font-normal text-[10px] px-2">
              September 19
            </p>
          </div>
          <div className="col-span-3 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between gap-10 px-2 py-2">
              <div className="flex justify-between items-center gap-2">
                <Image src={Oval1} width={50} height={50} />
                <h1 className="text-blue font-semibold">Foodieland.</h1>
                <MdVerified className="text-blue-500" />
              </div>
              <div>
                <BsThreeDots />
              </div>
            </div>
            <div className="relative w-full aspect-square">
              <Image
                src={img1}
                fill
                className="object-cover w-full h-full"
                alt="Post content1"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute bg-black/70 text-white text-xs sm:text-sm rounded-2xl px-2 py-1 top-3 right-3">
                1/3
              </div>
            </div>

            <div className="flex justify-between items-center px-2">
              <div className="flex justify-between items-center gap-3 py-4">
                <Heart />
                <Comment />
                <Share />
                <div className="pl-8">
                  <Pagination />
                </div>
              </div>
              <div>
                <Save />
              </div>
            </div>
            <div className="flex items-center justify-items-start gap-2 px-2">
              <Image src={Oval2} />
              <p className="text-black font-normal">
                Liked by <strong>craig_love</strong> and <strong>44,686</strong>
              </p>
            </div>
            <p className="px-2">
              <strong>Foodieland.</strong>The vegetables dishes need to have
              certain vitamin for those people
            </p>
            <p className="text-black opacity-40 font-normal text-[10px] px-2">
              September 19
            </p>
          </div>
          <div className="col-span-3 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between gap-10 px-2 py-2">
              <div className="flex justify-between items-center gap-2">
                <Image src={Oval1} width={50} height={50} />
                <h1 className="text-blue font-semibold">Foodieland.</h1>
                <MdVerified className="text-blue-500" />
              </div>
              <div>
                <BsThreeDots />
              </div>
            </div>
            <div className="relative w-full aspect-square">
              <Image
                src={img2}
                fill
                className="object-cover w-full h-full"
                alt="Post content2"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute bg-black/70 text-white text-xs sm:text-sm rounded-2xl px-2 py-1 top-3 right-3">
                1/3
              </div>
            </div>

            <div className="flex justify-between items-center px-2">
              <div className="flex justify-between items-center gap-3 py-4">
                <Heart />
                <Comment />
                <Share />
                <div className="pl-8">
                  <Pagination />
                </div>
              </div>
              <div>
                <Save />
              </div>
            </div>
            <div className="flex items-center justify-items-start gap-2 px-2">
              <Image src={Oval2} />
              <p className="text-black font-normal">
                Liked by <strong>craig_love</strong> and <strong>44,686</strong>
              </p>
            </div>
            <p className="px-2">
              <strong>Foodieland.</strong> Sweet food can bring someon into
              happiness as long as they don’t eat to much
            </p>
            <p className="text-black opacity-40 font-normal text-[10px] px-2">
              September 19
            </p>
          </div>
          <div className="col-span-3 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between gap-10 px-2 py-2">
              <div className="flex justify-between items-center gap-2">
                <Image src={Oval1} width={50} height={50} />
                <h1 className="text-blue font-semibold">Foodieland.</h1>
                <MdVerified className="text-blue-500" />
              </div>
              <div>
                <BsThreeDots />
              </div>
            </div>
            <div className="relative w-full aspect-square">
              <Image
                src={img3}
                fill
                className="object-cover w-full h-full"
                alt="Post content3"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute bg-black/70 text-white text-xs sm:text-sm rounded-2xl px-2 py-1 top-3 right-3">
                1/3
              </div>
            </div>

            <div className="flex justify-between items-center px-2">
              <div className="flex justify-between items-center gap-3 py-4">
                <Heart />
                <Comment />
                <Share />
                <div className="pl-8">
                  <Pagination />
                </div>
              </div>
              <div>
                <Save />
              </div>
            </div>
            <div className="flex items-center justify-items-start gap-2 px-2">
              <Image src={Oval2} />
              <p className="text-black font-normal">
                Liked by <strong>craig_love</strong> and <strong>44,686</strong>
              </p>
            </div>
            <p className="px-2">
              <strong>Foodieland.</strong> What are you doing before start
              cooking? prepare the tools or ingredients?
            </p>
            <p className="text-black opacity-40 font-normal text-[10px] px-2">
              September 19
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center py-5">
          <button className="flex items-center gap-3 bg-black text-white text-[16px] font-semibold px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-xl md:rounded-2xl hover:bg-gray-800 transition-colors duration-300 cursor-pointer">
            Visit Our Instagram
            <span className="">
              <Instagram />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Ourinsta;
