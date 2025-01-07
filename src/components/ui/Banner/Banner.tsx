import MainContainer from "@/components/shared/Container/MainContainer";
import { images } from "@/components/store";
import Image from "next/image";
import Link from "next/link";

type IProps = {
  title: string;
  firstPoint: string;
  secondPoint: string;
};

const Banner = ({ title, firstPoint, secondPoint }: IProps) => {
  return (
    <div className="bg-[#FFF7E5]">
      <MainContainer>
        <div className="flex flex-col justify-center pt-8 md:pt-4 items-center px-4 md:px-8">
          <div className="flex justify-between items-center w-full py-2">
            <div className="w-1/6 md:w-[90px] md:first-line:h-[90px] ml-0 mt-2 md:ml-28">
              <Image src={images.dotdot} alt="Dotdot" />
            </div>
            <div className="w-1/6 md:w-[60px] md:h-[60px]">
              <Image src={images.StickersRed} alt="Stickers Red" />
            </div>
          </div>
          <h2
            className="font-bold text-2xl md:text-3xl lg:text-5xl 
                    tracking-wide text-center text-[#302C2C]"
          >
            {title}
          </h2>
          <ul className="flex gap-3 items-center">
            <li className="text-base md:text-lg p-2 tracking-wide text-center text-[#302C2C]">
              {firstPoint}
            </li>
            <div className="bg-[#9E9E9E] h-5 w-[1px]"></div>
            <li className="text-base md:text-lg m-2 tracking-wide text-center text-primary text-blue-700">
              {secondPoint}
            </li>
          </ul>
          <div className="flex justify-between items-center w-full py-2">
            <div className="w-1/6 md:w-[60px] md:h-[60px] ">
              <Image src={images.StickersBlue} alt="Stickers Blue" />
            </div>
            <div className="w-1/6 md:w-[60px] md:h-[60px] md:mr-28 mb-2">
              <Image src={images.imoji} alt="Imoji" />
            </div>
          </div>
          <div className="w-full h-[60px]">
            <Image
              src={images.aboutHero}
              alt="About Hero"
              className=" h-full"
            />
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default Banner;
