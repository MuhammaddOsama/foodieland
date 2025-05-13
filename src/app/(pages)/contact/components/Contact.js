import React from "react";
import Image from "next/image";
import img1 from "./../../../../../public/images/contact/img1.png";
const Contact = () => {
  return (
    <>
      <div className="md:container mx-auto px-5 py-5 bg-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight text-center">
          Contact
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-2 lg:gap-8 pt-5">
          <div className="col-span-5">
            <Image src={img1} width={400} height={472} className="w-full" />
          </div>
          <div className="col-span-7">
            <form className="lg:pt-10 pt-5">
              <div className="flex justify-between items-start lg:mt-5 mt-2 lg:space-x-[30px] space-x-[10px]">
                <div className="w-full">
                  <label className="opacity-70">Name</label>
                  <input
                    type="text"
                    alt=""
                    placeholder="Enter your name..."
                    className="w-full h-[49px] border-2 border-gray-200 rounded-md placeholder:opacity-50 placeholder:text-sm sm:placeholder:text-base outline-none pl-3 my-3"
                  />
                </div>
                <div className="w-full">
                  <label className="opacity-70">Email</label>
                  <input
                    type="email"
                    alt=""
                    placeholder="Your email address..."
                    className="w-full h-[49px] border-2 border-gray-200 rounded-md placeholder:opacity-50 placeholder:text-sm sm:placeholder:text-base outline-none pl-3 my-3"
                  />
                </div>
              </div>
              <div className="flex justify-between items-start lg:mt-5 mt-2 lg:space-x-[30px] space-x-[10px]">
                <div className="w-full">
                  <label className="opacity-70">Subject</label>
                  <input
                    type="text"
                    alt=""
                    placeholder="Enter subject..."
                    className="w-full h-[49px] border-2 border-gray-200 rounded-md placeholder:opacity-50 placeholder:text-sm sm:placeholder:text-base outline-none pl-3 my-3"
                  />
                </div>
                <div className="w-full">
                  <label className="opacity-70">Enquiry type</label>
                  <input
                    type="email"
                    alt=""
                    placeholder="Advertising"
                    className="w-full h-[49px] border-2 border-gray-200 rounded-md placeholder:opacity-50 placeholder:text-sm sm:placeholder:text-base outline-none pl-3 my-3"
                  />
                </div>
              </div>
<label className="opacity-70">Messages</label>
              <textarea
                className="w-full lg:mt-5 mt-2 pt-3 border-2 border-gray-200 outline-none rounded-lg opacity-[50%] pl-3"
                name="textarea"
                rows="5"
                cols="50"
                placeholder="Message"
              ></textarea>
              <button className=" text-white text-sm font-normal uppercase px-10 py-[12px] lg:mt-4 mt-2 rounded-[6px] bg-black cursor-pointer">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
