import React from "react";
import Image from "next/image";
import Link from "next/link";
import elipse1 from "./../../../../../public/images/blog/Ellipse1.png";
import img3 from "./../../../../../public/images/blog/img3.png";
import img1 from "./../../../../../public/images/page2/img1.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Inbox from "@/app/home/component/Inbox";
import Morerecipes from "../../recipe/components/Morerecipes";

const Blogpost = () => {
  return (
    <>
      <div className="md:container mx-auto px-5 py-10 bg-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight text-center">
          Full Guide to Becoming a Professional Chef
        </h1>
        <div className="flex justify-center items-center gap-5 py-5 sm:py-10">
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
          <p className="text-black opacity-70 text-sm">12 November 2021 </p>
        </div>
        <p className="text-base sm:text-[16px] font-normal text-black opacity-60 leading-relaxed text-center px-2 lg:px-40">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
          ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula
          sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.
        </p>
        <Image
          src={img3}
          className="w-full h-auto max-w-full object-contain py-10"
          alt="Description of image"
        />
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-2 lg:gap-8 pt-5">
          <div className="col-span-9 pl-0 sm:pl-8">
            <div className="pb-10">
              <h1 className=" py-5 text-[14px] lg:text-[16px] text-black font-semibold ">
                How did you start out in the food industry?
              </h1>
              <p className="text-[16px] text-black opacity-60 font-normal">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
            </div>
            <div className="pb-10">
              <h1 className=" py-5 text-[14px] lg:text-[16px] text-black font-semibold ">
                What do you like most about your job?
              </h1>
              <p className="text-[16px] text-black opacity-60 font-normal">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
            </div>
            <div className="pb-10">
              <h1 className="text-[14px] lg:text-[16px] text-black font-semibold ">
                What do you like most about your job?
              </h1>
              <Image src={img1} className="w-full py-8" alt="img1" />
              <p className="text-[16px] text-black opacity-60 font-normal">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
            </div>
            <div className="pb-10">
              <h1 className=" py-5 text-[14px] lg:text-[16px] text-black font-semibold ">
                What would your advice be to young people looking to get their
                foot in the door?
              </h1>
              <p className="text-[16px] text-black opacity-60 font-normal">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
            </div>
            <div className="pb-10 bg-[linear-gradient(to_left,rgba(112,130,70,0),rgba(112,130,70,0.1))]">
              <h1 className=" py-5 text-[18px] md:text-[24px] lg:text-[36px] text-black font-semibold italic ">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ac ultrices odio.”
              </h1>
            </div>
            <div className="pb-10">
              <h1 className=" py-5 text-[14px] lg:text-[16px] text-black font-semibold ">
                What would your advice be to young people looking to get their
                foot in the door?
              </h1>
              <p className="text-[16px] text-black opacity-60 font-normal">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
            </div>
          </div>
          <div className="col-span-3">
            <h1 className="font-semibold text-[14px] text-center pt-5 pb-8">
              SHARE THIS ON:
            </h1>
            <div className="flex flex-col justify-center items-center space-y-6 ">
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
          </div>
        </div>
      </div>
<Inbox/>
<Morerecipes/>
    </>
  );
};

export default Blogpost;
