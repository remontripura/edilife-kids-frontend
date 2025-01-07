import Image from "next/image";
import React from "react";

const TeacherCard = ({ image, name, title, social, bg }: any) => {
  return (
    <div
      className="text-black p-5 my-3 rounded-tr-3xl w-full md:w-[300px] rounded-bl-3xl transition-all duration-700"
      style={{ backgroundColor: bg }}
    >
      <div className="">
        <Image
          className="h-auto mx-auto w-full mb-4 rounded-tr-lg rounded-bl-lg"
          src={image}
          alt={name}
        />
      </div>
      <div className="md:pt-8 text-left">
        <h3 className="text-lg md:text-xl text-[#302C2C] font-semibold mb-2">
          {name}
        </h3>
        <p className="text-sm md:text-base text-[#787676] mb-4">{title}</p>
        <div className="flex space-x-4">
          {social.map(({ icon: Icon, link, alt }: any, index: number) => (
            <a
              key={index}
              href={link}
              className="text-[#FFFFFF] bg-[#6600CC] p-2 hover:bg-primary
                 duration-300 ease-in-out transition-all rounded-lg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={alt}
            >
              <Icon className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
