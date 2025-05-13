import Link from "next/link";
import { Logo, Vector } from "../../../../public/icons/icon";
const Footer = () => {
  return (
    <>
      <div className="md:container mx-auto px-5 py-10 bg-white shadow-2xl">
        <div className="flex flex-col sm:flex-row justify-between items-center pt-2 sm:pt-2 md:pt-4 lg:pt-6 gap-4 sm:gap-0">
          <Link href="/home" className="flex items-center gap-4">
            <Logo />
          </Link>
          <ul className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 lg:gap-10 w-full sm:w-auto">
            <Link href="/recipe">
              <li className="text-black text-sm sm:text-[16px] font-medium hover:scale-105 transition-transform">
                Recipes
              </li>
            </Link>
            <Link href="/blog">
              <li className="text-black text-sm sm:text-[16px] font-medium hover:scale-105 transition-transform">
                Blog
              </li>
            </Link>
            <Link href="/contact">
              <li className="text-black text-sm sm:text-[16px] font-medium hover:scale-105 transition-transform">
                Contact
              </li>
            </Link>
            <Link href="/#">
              <li className="text-black text-sm sm:text-[16px] font-medium hover:scale-105 transition-transform">
                About us
              </li>
            </Link>
          </ul>
        </div>
        <div className="pt-2 sm:pt-2 md:pt-4 lg:pt-6">
          <Vector />
        </div>
        <div className="pt-4 sm:pt-6 md:pt-8 flex justify-center">
          <p className="text-sm sm:text-[18px] text-black opacity-60">
            © 2020 Flowbase. Powered by{" "}
            <span className="text-[#FF7967]">Webflow</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
