"use client";
import MainContainer from "@/components/shared/Container/MainContainer";
import { faqs, images } from "@/components/store";
import Image from "next/image";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQsection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-[#FFF7E5] py-8 px-4 lg:px-16">
      <MainContainer>
        <div className="flex flex-col md:flex-row justify-around items-start lg:pt-16 gap-8 lg:gap-16">
          <div className="hidden w-full md:w-1/2 xl:w-1/3 md:flex justify-center lg:justify-start">
            <Image
              src={images.faq}
              alt="FAQ Illustration"
              className="object-contain"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center lg:h-full">
            <h2
              className="md:text-[44px] text-[32px] font-bold mb-6 
            leading-tight lg:leading-[56px] 2xl:leading-[68px] tracking-[0.02em] text-[#302c2c] text-center lg:text-left"
            >
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <div className="pb-6 flex w-full md:w-1/2 xl:w-1/3 md:hidden justify-center lg:justify-start">
              <Image
                src={images.faq}
                alt="FAQ Illustration"
                className="object-contain"
              />
            </div>

            <div className="space-y-4">
              {faqs.map((item, index: number) => (
                <div
                  key={index}
                  className="group flex flex-col gap-4 border border-gray-300 p-4 rounded-md"
                >
                  <button
                    className="font-semibold flex items-center justify-between 
                     transition-all ease-in-out
                     group-hover:text-primary text-base lg:text-[20px] leading-[24px] 
                      text-left w-full"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    {item.question}
                    {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  {openIndex === index && (
                    <p
                      id={`faq-answer-${index}`}
                      className="pt-3 text-black text-sm lg:text-base leading-[22px] 
                       transition ease-in-out duration-700"
                      aria-labelledby={`faq-question-${index}`}
                    >
                      {item.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default FAQsection;
