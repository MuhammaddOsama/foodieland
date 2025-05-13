import Image from "next/image";
import { Fork, Timer } from "../../../../../public/icons/icon";
import img1 from "./../../../../../public/images/morerecipe/img1.png";
import img2 from "./../../../../../public/images/morerecipe/img2.png";
import img3 from "./../../../../../public/images/morerecipe/img3.png";
import img4 from "./../../../../../public/images/morerecipe/img4.png";
import { IoHeart } from "react-icons/io5";
const Morerecipes = () => {
  return (
    <>
      <div className="md:container mx-auto px-5 py-20 bg-white">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight">
            You may like these recipe too
          </h1>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-12 gap-2 sm:gap-3 pt-20">
          <div className="col-span-3 w-full">
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 md:aspect-w-3 md:aspect-h-2 lg:aspect-w-4 lg:aspect-h-3">
                <Image
                  src={img1}
                  alt="Cauliflower Walnut Vegetarian Taco Meat"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>

              <button className="absolute top-3 right-3 z-10 flex justify-center items-center rounded-full w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white text-red-500 shadow-sm hover:scale-105 transition-transform duration-200">
                <IoHeart />
              </button>
              <div className="p-4 pl-0">
                <h2 className="text-xl font-semibold">
                  Mixed Tropical Fruit Salad with Superfood
                </h2>

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
                      Healthy
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full">
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 md:aspect-w-3 md:aspect-h-2 lg:aspect-w-4 lg:aspect-h-3">
                <Image
                  src={img2}
                  alt="Cauliflower Walnut Vegetarian Taco Meat"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>

              <button className="absolute top-3 right-3 z-10 flex justify-center items-center rounded-full w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white text-gray-400 shadow-sm hover:scale-105 transition-transform duration-200">
                <IoHeart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </button>
              <div className="p-4 pl-0">
                <h2 className="text-xl font-semibold">
                  Big and Juicy Wagyu Beef Cheeseburger
                </h2>

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
                      Western
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full">
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 md:aspect-w-3 md:aspect-h-2 lg:aspect-w-4 lg:aspect-h-3">
                <Image
                  src={img3}
                  alt="Cauliflower Walnut Vegetarian Taco Meat"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>

              <button className="absolute top-3 right-3 z-10 flex justify-center items-center rounded-full w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white text-red-500 shadow-sm hover:scale-105 transition-transform duration-200">
                <IoHeart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </button>
              <div className="p-4 pl-0">
                <h2 className="text-xl font-semibold">
                  Healthy Japanese Fried Rice with Asparagus
                </h2>

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
                      Healthy
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full">
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 md:aspect-w-3 md:aspect-h-2 lg:aspect-w-4 lg:aspect-h-3">
                <Image
                  src={img4}
                  alt="Cauliflower Walnut Vegetarian Taco Meat"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <button className="absolute top-3 right-3 z-10 flex justify-center items-center rounded-full w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white text-gray-400 shadow-sm hover:scale-105 transition-transform duration-200">
                <IoHeart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </button>
              <div className="p-4 pl-0">
                <h2 className="text-xl font-semibold">
                  Healthy Japanese Fried Rice with Asparagus
                </h2>
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
                      Healthy
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Morerecipes;
