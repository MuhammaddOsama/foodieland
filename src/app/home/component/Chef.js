import Image from "next/image";
import chef from ".//../../../../public/images/chef/male-chef.png";
const Chef = () => {
  return (
    <>
      <div className="md:container mx-auto px-5 pt-20 bg-white">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-2 sm:gap-0">
          <div className="col-span-12 md:col-span-6">
            <div className="pt-8 md:pt-16 lg:pt-30 px-4 sm:px-6 md:px-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight">
                Everyone can be a chef in their own kitchen
              </h1>
              <p className="text-base sm:text-[16px] font-normal text-black opacity-60 leading-relaxed mt-6 sm:mt-8">
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim
                ad minim
              </p>
              <div className="mt-10 sm:mt-16 md:mt-40">
                <button className="bg-black text-white font-semibold px-8 py-3 sm:px-10 sm:py-3 md:px-12 md:py-4 rounded-xl md:rounded-2xl hover:bg-gray-800 transition-colors duration-300 cursor-pointer">
                  Learn more
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 bg-[linear-gradient(to_bottom,#E7F9FD00_0%,#E7F9FD_100%)]">
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src={chef}
                alt="Chef illustration"
                className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-none object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chef;
