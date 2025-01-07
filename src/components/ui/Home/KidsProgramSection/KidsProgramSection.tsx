import MainContainer from "@/components/shared/Container/MainContainer";
import { images } from "@/components/store";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import { FaArrowRight } from "react-icons/fa6";

const KidsProgramSection = () => {
  return (
    <div>
      <MainContainer>
        <div
          className="flex gap-11 flex-col  items-center pt-28   
         bg-yellow-50 p-6 rounded-lg md:p-10  md:space-y-0"
        >
          <div className="flex flex-col-reverse md:flex-row gap-11 space-y-6">
            <div className="w-full md:w-1/2">
              <Image
                src={images.KidsProgram}
                alt="Kids Program"
                width={800}
                height={600}
                className="rounded-lg"
              />
            </div>
            <div className="w-full mx-auto md:w-1/2 text-center md:text-left">
              <h1
                className="text-2xl md:text-3xl lg:text-5xl 2xl:text-[56px] text-[#302c2c] 
              font-bold pb-6 leading-tight lg:leading-[56px]  2xl:leading-[68px] tracking-[0.02em] 
               text-center md:text-left"
              >
                {`Let's Join And Start Our Edulife`}{" "}
                <span className="text-primary">Kids Program</span>
              </h1>
              <div className=" hidden md:block">
                <p className="text-base md:text-lg pb-6 text-[#787676] lg:max-w-md ">
                  Our kindergarten has an excellent teacher-child ratio so that
                  each child gets the attention he or she needs.
                </p>
                <div className="flex justify-center md:justify-start">
                  <Link href="/about#admission">
                    <button
                      className="bg-primary text-[#302C2C] mt-3 md:mt-8 py-2 px-4
             rounded ease-in-out duration-300
             text-sm md:text-base font-semibold flex items-center gap-1
             hover:bg-[#FF8C00]"
                    >
                      Get Admission <ArrowRight />
                    </button>
                  </Link>
                </div>
                <div className="lg:flex justify-end hidden">
                  <Image src={images.dotdot} alt="" width={140} height={135} />
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <p
              className="text-base md:text-lg pb-6 text-[#787676] lg:max-w-md
              "
            >
              We have an excellent teacher-to-child ratio at our Kindergarten to
              ensure that each child receives the attention he or she needs.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link href="/about#admission">
                <button
                  className="bg-primary text-[#302C2C] mt-3 md:mt-8 py-2 px-4
             rounded ease-in-out duration-300
             text-sm md:text-base font-semibold flex items-center gap-1
             hover:bg-[#FF8C00]"
                >
                  Get Admission <ArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
};
export default KidsProgramSection;
