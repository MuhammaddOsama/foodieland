import React from "react";
import Image from "next/image";
import img5 from "./../../../../../public/images/img5.png";
import img9 from "./../../../../../public/images/img9.png";
import img8 from "./../../../../../public/images/img8.png";
import ads from "./../../../../../public/images/ads.png";
import pic1 from "./../../../../../public/images/blog/img1.png";
import pic2 from "./../../../../../public/images/blog/img2.png";
import pic3 from "./../../../../../public/images/blog/img3.png";
import pic4 from "./../../../../../public/images/blog/img4.png";
import pic5 from "./../../../../../public/images/blog/img5.png";
import pic6 from "./../../../../../public/images/blog/img6.png";
import elipse1 from "./../../../../../public/images/blog/Ellipse1.png";
import elipse2 from "./../../../../../public/images/blog/Ellipse2.png";
import elipse3 from "./../../../../../public/images/blog/Ellipse3.png";
import elipse4 from "./../../../../../public/images/blog/Ellipse4.png";
import elipse5 from "./../../../../../public/images/blog/Ellipse5.png";
import elipse6 from "./../../../../../public/images/blog/Ellipse6.png";
import Link from "next/link";
const Blog = () => {
  return (
    <>
      <div className="md:container mx-auto px-5 py-5 bg-white">
        <div className="flex flex-col items-center px-4 sm:px-6 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-14 md:pb-16 lg:pb-18">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight text-center">
            Blog & Article
          </h1>
          <p className="text-base sm:text-[16px] font-normal text-black opacity-60 leading-relaxed mt-4 sm:mt-6 max-w-2xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>

          <div className="flex flex-row justify-center items-center gap-2 sm:gap-3 py-8 sm:py-12 md:py-16 px-3 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
            <input
              className="bg-white flex-grow py-2 sm:py-3 px-4 rounded-lg sm:rounded-xl outline-none placeholder-gray-400 text-sm sm:text-base border-2 border-gray-200"
              type="text"
              name="text"
              placeholder="Search article, news or recipe..."
            />
            <button className="flex-shrink-0 flex justify-center items-center gap-1 sm:gap-2 bg-black text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl hover:bg-gray-800 transition-colors duration-300 cursor-pointer whitespace-nowrap">
              Search
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-12 gap-2 lg:gap-8 pt-5">
          <div className="col-span-7">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pb-6">
              <div className="w-full sm:w-82 flex-shrink-0">
                <Image
                  src={pic1}
                  width={590}
                  height={500}
                  className="w-full h-auto object-cover rounded-2xl"
                  alt="Chicken Meatball"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="font-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] pb-3 md:pb-4 lg:pb-0 xl:pb-4">
                  Crochet Projects for Noodle Lovers
                </h1>
                <p className="text-[14px] md:text-[16px] lg:text-[14px] xl:text-[16px] opacity-60 text-black pb-4 sm:pb-5 lg:pb-0 xl:pb-6">
                  Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqut
                  enim
                </p>
                <div className="flex items-center gap-5 pt-3">
                  <div className="w-5 flex-shrink-0">
                    <Image
                      src={elipse1}
                      width={40}
                      height={40}
                      className="w-full h-auto object-cover rounded-2xl"
                      alt="Chicken Meatball"
                    />
                  </div>
                  <h1 className="font-bold text-sm">Wade Warren</h1>
                  <p className="text-black opacity-70 text-sm">
                    12 November 2021{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pb-6">
              <div className="w-full sm:w-82 flex-shrink-0">
                <Image
                  src={pic2}
                  width={590}
                  height={500}
                  className="w-full h-auto object-cover rounded-2xl"
                  alt="Chicken Meatball"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="font-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] pb-3 md:pb-4 lg:pb-0 xl:pb-4">
                  10 Vegetarian Recipes To Eat This Month
                </h1>
                <p className="text-[14px] md:text-[16px] lg:text-[14px] xl:text-[16px] opacity-60 text-black pb-4 sm:pb-5 lg:pb-0 xl:pb-6">
                  Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqut
                  enim
                </p>
                <div className="flex items-center gap-5 pt-3">
                  <div className="w-5 flex-shrink-0">
                    <Image
                      src={elipse2}
                      width={40}
                      height={40}
                      className="w-full h-auto object-cover rounded-2xl"
                      alt="Chicken Meatball"
                    />
                  </div>
                  <h1 className="font-bold text-sm">Robert Fox</h1>
                  <p className="text-black opacity-70 text-sm">
                    12 November 2021{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pb-6">
              <div className="w-full sm:w-82 flex-shrink-0">
                <Image
                  src={pic3}
                  width={590}
                  height={500}
                  className="w-full h-auto object-cover rounded-2xl"
                  alt="Chicken Meatball"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="font-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] pb-3 md:pb-4 lg:pb-0 xl:pb-4">
                  Full Guide to Becoming a Professional Chef
                </h1>
                <p className="text-[14px] md:text-[16px] lg:text-[14px] xl:text-[16px] opacity-60 text-black pb-4 sm:pb-5 lg:pb-0 xl:pb-6">
                  Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqut
                  enim
                </p>
                <div className="flex items-center gap-5 pt-3">
                  <div className="w-5 flex-shrink-0">
                    <Image
                      src={elipse3}
                      width={40}
                      height={40}
                      className="w-full h-auto object-cover rounded-2xl"
                      alt="Chicken Meatball"
                    />
                  </div>
                  <h1 className="font-bold text-sm">Dianne Russell</h1>
                  <p className="text-black opacity-70 text-sm">
                    12 November 2021{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pb-6">
              <div className="w-full sm:w-82 flex-shrink-0">
                <Image
                  src={pic4}
                  width={590}
                  height={500}
                  className="w-full h-auto object-cover rounded-2xl"
                  alt="Chicken Meatball"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="font-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] pb-3 md:pb-4 lg:pb-0 xl:pb-4">
                  Simple & Delicious Vegetarian Lasagna
                </h1>
                <p className="text-[14px] md:text-[16px] lg:text-[14px] xl:text-[16px] opacity-60 text-black pb-4 sm:pb-5 lg:pb-0 xl:pb-6">
                  Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqut
                  enim
                </p>
                <div className="flex items-center gap-5 pt-3">
                  <div className="w-5 flex-shrink-0">
                    <Image
                      src={elipse4}
                      width={40}
                      height={40}
                      className="w-full h-auto object-cover rounded-2xl"
                      alt="Chicken Meatball"
                    />
                  </div>
                  <h1 className="font-bold text-sm">Leslie Alexander</h1>
                  <p className="text-black opacity-70 text-sm">
                    12 November 2021{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pb-6">
              <div className="w-full sm:w-82 flex-shrink-0">
                <Image
                  src={pic5}
                  width={590}
                  height={500}
                  className="w-full h-auto object-cover rounded-2xl"
                  alt="Chicken Meatball"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="font-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] pb-3 md:pb-4 lg:pb-0 xl:pb-4">
                  Plantain and Pinto Stew with Aji Verde
                </h1>
                <p className="text-[14px] md:text-[16px] lg:text-[14px] xl:text-[16px] opacity-60 text-black pb-4 sm:pb-5 lg:pb-0 xl:pb-6">
                  Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqut
                  enim
                </p>
                <div className="flex items-center gap-5 pt-3">
                  <div className="w-5 flex-shrink-0">
                    <Image
                      src={elipse5}
                      width={40}
                      height={40}
                      className="w-full h-auto object-cover rounded-2xl"
                      alt="Chicken Meatball"
                    />
                  </div>
                  <h1 className="font-bold text-sm">Courtney Henry</h1>
                  <p className="text-black opacity-70 text-sm">
                    12 November 2021
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pb-6">
              <div className="w-full sm:w-82 flex-shrink-0">
                <Image
                  src={pic6}
                  width={590}
                  height={500}
                  className="w-full h-auto object-cover rounded-2xl"
                  alt="Chicken Meatball"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="font-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] pb-3 md:pb-4 lg:pb-0 xl:pb-4">
                  We are Hiring a Communications Assistant!
                </h1>
                <p className="text-[14px] md:text-[16px] lg:text-[14px] xl:text-[16px] opacity-60 text-black pb-4 sm:pb-5 lg:pb-0 xl:pb-6">
                  Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqut
                  enim
                </p>
                <div className="flex items-center gap-5 pt-3">
                  <div className="w-5 flex-shrink-0">
                    <Image
                      src={elipse6}
                      width={40}
                      height={40}
                      className="w-full h-auto object-cover rounded-2xl"
                      alt="Chicken Meatball"
                    />
                  </div>
                  <h1 className="font-bold text-sm">Albert Flores</h1>
                  <p className="text-black opacity-70 text-sm">
                    12 November 2021
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-5 px-2">
            <h1 className="text-[20px] sm:text[20px] lg:text-[24px] font-bold text-black px-4 pb-4 ">
              Tasty Recipes
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
                  Traditional Bolognaise Ragu
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
                  Pork and Chive Chinese Dumplings
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
        <nav aria-label="Page navigation">
          <ul className="flex items-center justify-center space-x-5 h-8 text-lg font-bold pt-20">
            {/* Previous Button */}
            <li>
              <Link
                href="#"
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
                aria-label="Previous"
              >
                <span className="sr-only">Previous</span>
                <span aria-hidden="true">&laquo;</span>
              </Link>
            </li>

            {/* Page Numbers */}
            <li>
              <Link
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-black bg-white border border-gray-300 hover:bg-black hover:text-white"
              >
                1
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-black bg-white border border-gray-300 hover:text-white hover:bg-black"
              >
                2
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-black bg-white border border-gray-300 hover:bg-black hover:text-white"
              >
                3
              </Link>
            </li>

            {/* Next Button */}
            <li>
              <Link
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
                aria-label="Next"
              >
                <span className="sr-only">Next</span>
                <span aria-hidden="true">&raquo;</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Blog;
