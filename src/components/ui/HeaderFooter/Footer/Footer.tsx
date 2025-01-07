import Image from "next/image";
import { SlLocationPin, SlSocialLinkedin } from "react-icons/sl";
import { LuMail } from "react-icons/lu";
import { FiFacebook, FiPhoneCall, FiYoutube } from "react-icons/fi";

import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { images } from "@/components/store";
import MainContainer from "@/components/shared/Container/MainContainer";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 px-6 py-8">
      <MainContainer>
        <hr className="border-[#3DFE4EB]" />
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-10">
          {/* Logo and Description */}
          <div>
            <div className="mb-4  w-40 ">
              <Link href="/">
                <Image src={images.logo} alt="Logo" />
              </Link>
            </div>
            <p className="text-base  md:text-base mb-8 text-[#787676]  lg:max-w-lg md:leading-[30px]">
              We have an excellent teacher-to-child ratio at our kindergarten to
              ensure that each child receives the attention he or she needs.
            </p>
          </div>

          {/* About Company */}
          <div>
            <h3 className="font-semibold text-[#302C2C] text-base mb-4">
              About Company
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-primary transition-all duration-300 ease-in-out">
                <Link className="text-[#787676]" href="#">
                  Portfolio
                </Link>
              </li>
              <li className="hover:text-primary transition-all duration-300 ease-in-out">
                <Link className="text-[#787676]" href="#">
                  Our Team
                </Link>
              </li>
              <li className="hover:text-primary transition-all duration-300 ease-in-out">
                <Link className="text-[#787676]" href="#">
                  Pricing
                </Link>
              </li>
              <li className="hover:text-primary transition-all duration-300 ease-in-out">
                <Link className="text-[#787676]" href="#">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold mb-4 text-[#302C2C] text-base">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-2 text-[#787676]">
                <SlLocationPin className="text-primary w-[14px] h-[18px]" />
                <span>Rk Vaban, Arambag, Khagrachari Sadar</span>
              </li>
              <li className="flex gap-2 text-[#787676]">
                <LuMail className="text-primary w-[14px] h-[18px]" />
                <p>helloedulife@gmail.com</p>
              </li>
              <li className="flex gap-2 text-[#787676]">
                <FiPhoneCall className="text-primary w-[14px] h-[18px]" />
                <p>+8801210812387678</p>
              </li>
            </ul>
          </div>

          {/* Featured On */}
          <div className=" ">
            <h3 className="font-semibold mb-4 text-[#302C2C] text-base">
              Our Social Link
            </h3>
            <ul className="flex md:flex-wrap gap-2">
              <li className="bg-primary p-2 rounded">
                <a href="https://www.facebook.com/edulifekids">
                  <FiFacebook className="w-6 h-6" />
                </a>
              </li>
              <li className="bg-primary p-2 rounded">
                <a href="https://www.youtube.com/@EduLifeUniversity">
                  <FiYoutube className="w-6 h-6" />
                </a>
              </li>
              <li className="bg-primary p-2 rounded">
                <a href="https://www.linkedin.com/company/edulife-kids-after-school-program">
                  <SlSocialLinkedin className="w-6 h-6" />
                </a>
              </li>
              {/* <li className="bg-primary p-2 rounded">
              <a href="#">
                <LiaTelegram className="w-6 h-6" />
              </a>
            </li>
            <li className="bg-primary p-2 rounded">
              <a href="#">
                <RiMessengerLine className="w-6 h-6" />
              </a>
            </li> */}
              <li className="bg-primary p-2 rounded">
                <a href="https://x.com/edulifekids">
                  <FaXTwitter className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-[#3DFE4EB] mt-8" />
        <div className="mt-8 text-center text-base text-[#5F5F5F]">
          All Right Reserved 2024 &copy; Edulife Agency
        </div>
      </MainContainer>
    </footer>
  );
};

export default Footer;
