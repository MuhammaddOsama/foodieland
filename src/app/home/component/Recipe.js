import React from "react";
import items from "@/app/components/items/items";
import Image from "next/image";
import { Fork, Timer } from "../../../../public/icons/icon";
import { IoHeart } from "react-icons/io5";
import Link from "next/link";
const Recipe = () => {
  return (
    <div className="min-h-screen md:container mx-auto px-5 pt-30">
      <h1 className="text-4xl text-black font-semibold mb-4 text-center">
        Simple and tasty recipes
      </h1>
      <p className=" mb-8 text-[16px] text-black opacity-[60%] text-center xl:w-1/2 xl:mx-auto">
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqut enim ad minim
      </p>
      <Link href="/">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-[#E7F9FD] px-5 py-5 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Product Image and icon */}
              <div className="relative w-full aspect-[4/3] md:aspect-[3/2] lg:aspect-[16/9]">
                {/* Heart Icon (positioned absolutely) */}
                <div className="absolute top-4 right-4 z-10 flex justify-center items-center rounded-full w-8 h-8 md:w-10 md:h-10 bg-white shadow-sm hover:scale-105 transition-transform">
                  <IoHeart
                    className={`w-5 h-5 md:w-6 md:h-6 ${
                      item.isFavourite ? "text-red-500" : "text-gray-300"
                    } `}
                  />
                </div>
                {/* Responsive Image */}
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw"
                  priority={item.id <= 3}
                />
              </div>
              {/* Product Info */}
              <div className="p-4 pl-0">
                <h2 className="text-xl font-semibold">{item.name}</h2>

                {/* Timer and Fork Icons Row */}
                <div className="mt-6 flex items-center justify-start gap-5">
                  <div className="flex items-center text-gray-700 space-x-3">
                    <Timer />
                    <span className="text-sm font-medium opacity-65">
                      30 mins
                    </span>
                  </div>
                  <div className="flex items-center text-gray-700 space-x-3">
                    <Fork />
                    <span className="text-sm font-medium opacity-65">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default Recipe;
