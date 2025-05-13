import Image from "next/image";
import image1 from "../../../../public/images/category/image1.png";
import image2 from "../../../../public/images/category/image2.png";
import image3 from "../../../../public/images/category/image3.png";
import image4 from "../../../../public/images/category/image4.png";
import image5 from "../../../../public/images/category/image5.png";
import image6 from "../../../../public/images/category/image6.png";

const Category = () => {
  return (
    <>
      <div className="md:container mx-auto px-5 pt-30 bg-white">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
          <p className="font-semibold text-black text-2xl sm:text-3xl md:text-4xl">
            Categories
          </p>
          <button className="font-semibold text-sm sm:text-[16px] text-black bg-[#E7FAFE] rounded-[16px] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 hover:scale-105 transition-transform w-full sm:w-auto text-center">
            View All Categories
          </button>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 justify-items-center pt-20 gap-4">
          <div className=" md:col-span-2 lg:col-span-2 justify-items-center rounded-[30px] w-full bg-[linear-gradient(to_bottom,rgba(112,130,70,0),rgba(112,130,70,0.1))]">
            <Image src={image1} alt="breakfast" />

            <h1 className="font-semibold text-[18px] text-black py-10 ">
              Breakfast
            </h1>
          </div>
          <div className=" md:col-span-2 lg:col-span-2 justify-items-center rounded-[30px] w-full bg-[linear-gradient(to_bottom,rgba(112,130,70,0),rgba(112,130,70,0.1))]">
            <Image src={image2} alt="vegan" />

            <h1 className="font-semibold text-[18px] text-black py-10 ">
              Vegan
            </h1>
          </div>{" "}
          <div className=" md:col-span-2 lg:col-span-2 justify-items-center rounded-[30px] w-full bg-[linear-gradient(to_bottom,rgba(112,130,70,0),rgba(112,130,70,0.1))]">
            <Image src={image3} alt="meat" />

            <h1 className="font-semibold text-[18px] text-black py-10 ">
              Meat
            </h1>
          </div>{" "}
          <div className=" md:col-span-2 lg:col-span-2 justify-items-center rounded-[30px] w-full bg-[linear-gradient(to_bottom,rgba(112,130,70,0),rgba(112,130,70,0.1))]">
            <Image src={image4} alt="dessert" />

            <h1 className="font-semibold text-[18px] text-black py-10 ">
              Dessert
            </h1>
          </div>{" "}
          <div className=" md:col-span-2 lg:col-span-2 justify-items-center rounded-[30px] w-full bg-[linear-gradient(to_bottom,rgba(112,130,70,0),rgba(112,130,70,0.1))]">
            <Image src={image5} alt="lunch" />

            <h1 className="font-semibold text-[18px] text-black py-10 ">
              Lunch
            </h1>
          </div>{" "}
          <div className=" md:col-span-2 lg:col-span-2 justify-items-center rounded-[30px] w-full bg-[linear-gradient(to_bottom,rgba(112,130,70,0),rgba(112,130,70,0.1))]">
            <Image src={image6} alt="chocolate" />

            <h1 className="font-semibold text-[18px] text-black py-10 ">
              Chocolate
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
