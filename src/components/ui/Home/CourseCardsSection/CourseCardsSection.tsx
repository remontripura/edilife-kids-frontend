// components/CourseCardsSection.js

import MainContainer from "@/components/shared/Container/MainContainer";
import { courses, images } from "@/components/store";

import Image from "next/image";
import CourseCard from "./CourseCard";

const CourseCardsSection = () => {
  return (
    <div className="w-full bg-[#EDFAFF]">
      <MainContainer>
        <div className="md:py-6 p-2">
          <div className="mb-2 md:mb-8 flex justify-center items-center mx-auto w-full ">
            <div className="flex-shrink-0">
              <Image
                src={images.snaoedit3}
                alt=""
                className="w-20 h-28 md:w-32 md:h-40 lg:w-40 lg:h-48"
              />
            </div>
            <h2
              className="text-2xl  md:text-3xl lg:text-5xl 2xl:text-[56px] font-bold mb-6 text-[#302c2c]
             leading-tight lg:leading-[56px]  2xl:leading-[68px] tracking-[0.02em] text-center "
            >
              Strong Foundation For{" "}
              <span className="text-primary">success</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3  lg:gap-2 lg:grid-cols-4   ">
            {courses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default CourseCardsSection;
