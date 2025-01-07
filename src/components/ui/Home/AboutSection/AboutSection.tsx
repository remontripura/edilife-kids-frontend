import MainContainer from "@/components/shared/Container/MainContainer";
import { images } from "@/components/store";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <MainContainer>
      <div className=" py-5 md:py-10">
        <div className="container items-center flex flex-col  md:flex-row px-5 gap-2 md:gap-6">
          <div className="w-full ">
            <h3 className="text-base md:text-[20px] text-left text-primary pb-4">
              About Edulife Kids
            </h3>
            <h2
              className="text-2xl md:text-3xl lg:text-5xl 2xl:text-[56px] text-[#302c2c]
             font-bold mb-6 leading-tight xl:leading-[56px] 2xl:leading-[68px] tracking-[0.02em] text-left"
            >
              Nurturing{" "}
              <span className="text-primary font-semibold">{`Children’s`}</span>{" "}
              Creativity & Creating Future Leaders
            </h2>
            <p className="text-base md:text-lg 2xl:text-xl  mb-8 text-[#787676] 2xl:leading-7 text-left">
              At Edulife Kids, we believe in the transformative power of
              education. Our program provides a safe, nurturing, and stimulating
              environment where children can learn, grow, and thrive.
            </p>
          </div>
          <div className="grid  lg:justify-center  lg:items-start w-full grid-col-1 lg:grid-cols-2 gap-4 mt-6 md:mt-0">
            <div
              className="bg-white p-2 md:p-4 xl:p-4 shadow-sm flex gap-2 md:gap-4 border-[1px]
             border-[#DFE4EB] rounded-xl items-center"
            >
              <Image
                src={images.graduate}
                alt="Student"
                width={54}
                height={54}
              />
              <div>
                <p
                  className="text-xl md:text-2xl 2xl:text-[36px] leading-snug 
                 2xl:leading-[30px] font-bold text-[#363636]"
                >
                  100 +
                </p>
                <p className="text-[#787676] text-sm md:text-base 2xl:text-[20px]">
                  Running Student
                </p>
              </div>
            </div>
            <div
              className="bg-white p-2 md:p-4 xl:p-4 shadow-sm flex gap-2 md:gap-4 border-[1px]
             border-[#DFE4EB] rounded-xl items-center"
            >
              <Image src={images.school} alt="Branch" width={54} height={54} />
              <div>
                <p
                  className="text-xl md:text-2xl 2xl:text-[36px] leading-snug 2xl:leading-[30px] 
                 font-bold text-[#363636]"
                >
                  03 +
                </p>
                <p className="text-[#787676] text-sm md:text-base 2xl:text-[20px]">
                  In District Branch
                </p>
              </div>
            </div>
            <div
              className="bg-white p-2 md:p-4 xl:p-4 shadow-sm flex gap-2 md:gap-4 border-[1px]
             border-[#DFE4EB] rounded-xl items-center"
            >
              <Image src={images.techer} alt="Teacher" width={54} height={54} />
              <div>
                <p className="text-xl md:text-2xl 2xl:text-[36px] leading-snug 2xl:leading-[30px] font-bold text-[#363636]">
                  12 +
                </p>
                <p className="text-[#787676] text-sm md:text-base 2xl:text-[20px]">
                  Experienced Teachers
                </p>
              </div>
            </div>
            <div
              className="bg-white p-2 md:p-3 xl:p-4 shadow-sm flex gap-2 md:gap-4 border-[1px]
             border-[#DFE4EB] rounded-xl items-center"
            >
              <Image
                src={images.printing}
                alt="Computer Lab"
                width={54}
                height={54}
              />
              <div>
                <p
                  className="text-xl md:text-2xl 2xl:text-[36px] leading-snug 2xl:leading-[30px] 
                font-bold text-[#363636]"
                >
                  08 +
                </p>
                <p className="text-[#787676] text-sm md:text-base 2xl:text-[20px]">
                  Large Computer Lab
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default AboutSection;
