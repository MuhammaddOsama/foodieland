import left from ".//../../../../public/images/inbox/left-img.png";
import right from ".//../../../../public/images/inbox/right-img.png";
import Image from "next/image";
const Inbox = () => {
  return (
    <>
      <div className="md:container mx-auto px-5 py-20 bg-white">
        <div className="relative bg-[#E7F9FD] w-full h-full rounded-2xl overflow-hidden">
          <div className="absolute bottom-0 right-0">
            <Image
              src={left}
              alt="Right corner image"
              width={400}
              height={400}
              className="object-contain w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-48 lg:h-48"
            />
          </div>
          <div className="absolute bottom-0 left-0">
            <Image
              src={right}
              alt="Left corner image"
              width={400}
              height={400}
              className="object-contain w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-48 lg:h-48"
            />
          </div>
          <div className="flex flex-col items-center px-4 sm:px-6 pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight text-center">
              Deliciousness to your inbox
            </h1>
            <p className="text-base sm:text-[16px] font-normal text-black opacity-60 leading-relaxed mt-4 sm:mt-6 max-w-2xl text-center">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>
          </div>
          <div className="relative z-10 flex flex-row justify-center items-center gap-2 sm:gap-3 pb-8 sm:pb-12 md:pb-16 px-3 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
            <input
              className="bg-white flex-grow py-2 sm:py-3 px-4 rounded-lg sm:rounded-xl outline-none placeholder-gray-400 text-sm sm:text-base"
              type="email"
              name="email"
              placeholder="Email address..."
            />
            <button className="flex-shrink-0 flex justify-center items-center gap-1 sm:gap-2 bg-black text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl hover:bg-gray-800 transition-colors duration-300 cursor-pointer whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inbox;
