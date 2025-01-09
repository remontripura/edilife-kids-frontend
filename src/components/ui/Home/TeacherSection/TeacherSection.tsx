"use client";
import React from "react";
// import Image from "next/image";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainContainer from "@/components/shared/Container/MainContainer";
import { teachers } from "@/components/store";
import TeacherCard from "./TeacherCard";

const TeacherSection = () => {
  const sliderRef = React.useRef<Slider | null>(null);

  // Slick slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div>
      <MainContainer>
        <section className="py-6 md:py-12">
          <div className="flex flex-col md:flex-row items-end justify-center md:justify-between px-5">
            <div className=" text-center md:text-left  ">
              <h2
                className="text-2xl md:text-3xl lg:text-5xl 2xl:text-[56px]
               text-[#302c2c] font-bold mb-2 md:mb-5 leading-tight lg:leading-[56px] 2xl:leading-[68px] tracking-[0.02em]"
              >
                Our Skillful <span className="text-primary">Teacher</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl mb-2 md:mb-6 text-[#787676] leading-6 md:leading-[30px]">
                Our kindergarten has an excellent teacher-child ratio so that
                each child gets the attention he or she needs.
              </p>
            </div>
            <div className="md:flex gap-3 hidden">
              <button
                onClick={handlePrev}
                className="rounded-full p-2 border bg-[#FFDA88] cursor-pointer"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={handleNext}
                className="rounded-full p-2 border bg-primary cursor-pointer"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Slick Slider */}
          <Slider ref={sliderRef} {...settings} className="px-5 md:px-0">
            {teachers.map((teacher, index) => (
              <TeacherCard key={index} {...teacher} />
            ))}
          </Slider>
        </section>
      </MainContainer>
    </div>
  );
};

export default TeacherSection;
