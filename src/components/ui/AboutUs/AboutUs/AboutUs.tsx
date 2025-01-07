import MainContainer from "@/components/shared/Container/MainContainer";
import { images } from "@/components/store";
import Image from "next/image";
import React from "react";
import Title from "../../Title/Title";

const AboutUs = () => {
  return (
    <div className="bg-[#f9f9f9]">
      <MainContainer>
        <div
          className="flex flex-col lg:flex-row md:space-x-6 lg:space-x-10 
         xl:space-x-12 py-8 md:py-10 lg:py-12 px-4 md:px-6 lg:px-8"
        >
          {/* Image Section */}
          <div className="w-full lg:w-5/12                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        mb-8 lg:mb-0">
            <Image
              src={images.AboutUs}
              alt="About Edulife Kids"
              layout="responsive"
              objectFit="cover"
              className="rounded-lg w-full "
              width={500}
              height={500}
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-7/12 flex flex-col">
            <h2 className="text-primary text-lg md:text-xl text-left pb-4 xl:pb-6 lg:pb-8">
              About Edulife Kids
            </h2>
            <div className="flex items-center flex-wrap gap-2">
              <Title text="Our" />
              <Title text="Commitment to" className="#" />
              <Title text="Children's Success, Get to Know Us" />
            </div>
            <p
              className="text-sm md:text-base lg:text-lg 2xl:text-xl 
            text-[#787676] px] 2xl:leading-[30px]
             text-left mt-4 md:mt-6 lg:mt-8 pb-5 xl:pb-8"
            >
              {` Welcome to Escada, where education is an exciting adventure!
               We're passionate about nurturing young minds, inspiring creativity.`}
            </p>

            {/* Interactive Content Section */}
            <div className=" flex flex-col xl:flex-row gap-6 ">
              <div className="flex items-start gap-4 lg:gap-6">
                <Image
                  src={images.ABC}
                  alt="Interactive Learning Games & Activities"
                  layout="fixed"
                  width={500}
                  height={500}
                  className="rounded-md size-8"
                />
                <div>
                  <h3 className="font-bold text-base lg:text-xl text-[#302C2C]">
                    Interactive Learning Games & Activities
                  </h3>
                  <p
                    className="text-sm md:text-base 2xl:text-lg text-[#787676] 
                  text-left"
                  >
                    Our passionate teachers are the heart of our school. They
                    bring expertise, creativity, and a genuine love for
                    children.
                  </p>
                </div>
              </div>
              <div className="flex  items-start gap-4 lg:gap-6">
                <Image
                  src={images.book}
                  alt="Child-Friendly Content Libraries"
                  layout="fixed"
                  width={500}
                  height={500}
                  className="rounded-md size-8"
                />
                <div>
                  <h3 className="font-bold text-lg lg:text-xl text-[#302C2C]">
                    Child-Friendly Content Libraries
                  </h3>
                  <p
                    className="text-sm md:text-base 2xl:text-lg text-[#787676] 
                   text-left"
                  >
                    Our passionate teachers are the heart of our school. They
                    bring expertise, creativity, and a genuine love for
                    children.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default AboutUs;
