import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

interface InfoCardProps {
  title: string; 
  description: string; 
  link: string; 
  className?: string;
  icons: {
    src: StaticImageData; 
    alt: string; 
  }[]; 
}


const InfoCard = ({ title, description, link, className, icons }: InfoCardProps) => {
  return (
    <div
      className={`flex flex-col items-start p-6 rounded-lg  w-full md:mx-4 mb-8 md:mb-0 ${className}`}
    >
      <div className="flex justify-between w-full mb-8">
        {icons.map((icon, index) => (
          <Image
            key={index}
            src={icon.src}
            alt={icon.alt}
            width={48}
            height={48}
          />
        ))}
      </div>
      <h3 className=" text-xl lg:text-[24px] font-bold   
 leading-[31.1px] text-[#302C2C] mb-6">
        {title}
      </h3>
      <p className="text-sm lg:text-base text-[#363636] mb-6">{description}</p>
      <a
        href={link}
        className="mt-auto flex items-center text-[#363636] font-medium 
        text-sm lg:text-base lg:font-semibold"
      >
        Learn More <FaArrowRight className="ml-2" />
      </a>
    </div>
  );
};

export default InfoCard;
