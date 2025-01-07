"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainContainer from "@/components/shared/Container/MainContainer";
import { images, testimonials } from "@/components/store";

const TestimonialSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  if (!mounted) return null;

  return (
    <div className="bg-[#f8f9fa] py-6 md:py-12">
      <MainContainer>
        <div className="flex flex-col gap-8 px-5">
          {/* text section */}
          <div className="text-left md:flex">
            <h2 className="text-2xl md:text-3xl lg:text-5xl 2xl:text-[56px] tracking-[2%] text-[#302c2c] font-bold mb-6 leading-tight lg:leading-[56px] 2xl:leading-[68px]">
              Our Student Parents feedback
            </h2>
            <p className="text-base md:text-lg 2xl:text-xl mb-8 text-[#787676] leading-6 lg:max-w-lg md:leading-[30px] md:pl-14">
              {`Welcome to the Edulife Kids After School Program, where children acquire skills in information technology from an early age. In this they will develop as creative and efficient human resources.`}
            </p>
          </div>

          {/* Image and Testimonial Section */}
          <div className="flex flex-col md:flex-row md:items-center relative">
            {/* Image */}
            <div className="overflow-hidden rounded-xl w-full md:w-6/12">
              <Image
                src={images.celebration}
                alt="Family Dinner"
                width={800}
                height={450}
                layout="responsive"
                className="rounded-xl"
              />
            </div>
            {/* Testimonial Carousel */}
            <div className="bg-[#FFF6EB] p-5 lg:p-8 rounded-lg shadow-lg w-[80%] md:w-[40%] absolute top-36 sm:top-48 right-1/2 transform translate-x-1/2 sm:right-7 md:top-1/2 md:right-[250px] md:transform md:-translate-y-1/2 lg:right-[350px] xl:right-[450px]">
              <Slider {...settings}>
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id}>
                    <div className="flex items-center mb-3 lg:mb-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="rounded-full w-[50px] h-[50px] lg:w-[80px] lg:h-[80px]"
                      />
                      <div className="ml-4">
                        <h4 className="text-sm md:text-base font-semibold text-[#302C2C]">
                          {testimonial.name}
                        </h4>
                        <p className="text-[#787676] text-sm md:text-base">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-[#787676] mb-6 text-xs sm:text-sm md:text:lg xl:text-[20px] leading-snug md:leading-5 xl:leading-[32px]">
                      {testimonial.quote}
                    </p>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="w-5 h-5 text-[#f68b1f]"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 .587l3.668 7.429 8.2 1.19-5.933 5.775 1.4 8.175L12 18.896l-7.335 3.86 1.4-8.175L.132 9.206l8.2-1.19L12 .587z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
};
export default TestimonialSection;
