"use client";

import MainContainer from "@/components/shared/Container/MainContainer";
import { images } from "@/components/store";
import { IHeroItems } from "@/types/hero/heroType";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HeroSection = ({heroItem} : {heroItem : IHeroItems}) => {
  const hero = heroItem.data[0]
  // const scrollToSection = () => {
  //   const element = document.getElementById("admission");
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  const router = useRouter();

  const handleClick = () => {
    router.push("/about#admission");
    const element = document.getElementById("admission");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="bg-[#FFF3E6]">
      <MainContainer>
        <div
          className="flex flex-col text-center md:flex-row justify-between 
         lg:gap-8 items-center relative  gap-4
        p-5 md:p-0 md:py-11 md:pt-28"
        >
          <div className="flex flex-col items-start">
            <div
              className="hidden md:block absolute sm:left-[96px] md:w-[80px] 
            lg:w-[180px] md:left-48 md:top-16 
             xl:left-80 "
            >
              <Image src={hero.image} alt="" width={140} height={135} />
            </div>
            <div
              className="flex flex-col md:absolute items-center 
            justify-center md:top-4 bottom-0 md:left-0
             lg:top-2 lg:left-0 "
            >
              <Image
                src={images.snaoedit02}
                alt="Snaoedit02"
                width={320}
                className="w-[200px] h-[215px] lg:w-[220px] lg:h-[230px] xl:w-[350px] xl:h-[360px] md:hidden                                             "
              />
              <Image
                src={images.snaoedit01}
                alt="Snaoedit01"
                width={320}
                height={330}
                className="w-[160px] h-[165px]   md:w-[220px] md:h-[230px] xl:w-[394px] xl:h-[404px] hidden md:block "
              />
              <div className="hidden md:block">
                <Image
                  src={images.StickersBlue}
                  alt="StickersBlue"
                  width={84}
                  height={80}
                  className="shadow-sm"
                />
              </div>
            </div>
          </div>
          <div className="text-center md:max-w-xs lg:max-w-xl mx-auto">
            <div className="hidden md:flex items-center justify-center">
              <Image
                src={images.imoji}
                alt="Imoji"
                width={140}
                height={147.5}
                className="w-[70px] h-[73.75px] xl:w-[100px] xl:h-[107.5px] ]"
              />
            </div>
            <div className="max-w-md">
              <h2
                className="font-bold text-2xl md:text-4xl lg:text-5xl  md:leading-[3rem]
             lg:leading-[56px] lg:tracking-[2%] text-[#302C2C] text-center "
              >
                {hero.title}
              </h2>
              <p
                className="text-[16px] 2xl:text-[20px] max-w-lg leading-snug text-[#787676] 
             pt-4 2xl:pt-6"
              >
              {hero.description}
              </p>
            </div>
            {/* <Link href="/about"> */}
            <button onClick={handleClick} className="hero-button mt-8">
              Get Admission
            </button>
            {/* </Link> */}
          </div>
          <div
            className=" hidden md:flex flex-col items-center justify-between space-y-4 md:absolute 
          md:right-1 md:top-16 lg:right-2 lg:top-20 "
          >
            <div className=" md:flex">
              <Image
                src={images.StickersRed}
                alt="StickersRed"
                width={80}
                height={84}
                className="shadow-sm"
              />
            </div>
            <Image
              src={hero.image2}
              alt="Snaoedit02"
              width={320}
              height={147}
              className="w-[200px] h-[215px] lg:w-[220px] lg:h-[230px] xl:w-[350px] xl:h-[360px] "
            />
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default HeroSection;
