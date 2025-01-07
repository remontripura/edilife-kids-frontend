import MainContainer from "@/components/shared/Container/MainContainer";
import { features, images } from "@/components/store";
import Image from "next/image";

const CommitmentSection = () => {
  return (
    <div className="bg-white">
      <MainContainer>
        <div className="flex flex-col lg:flex-row px-5 md:px-8 py-3 md:gap-4 ">
          <div
            className="flex flex-col justify-center items-center w-full lg:w-[50%] relative 
          pb-60 md:pb-[450px] "
          >
            <div className="flex gap-3 z-10 relative top-6 md:top-10 justify-center items-center">
              <div className="rounded-lg shadow-md w-[150px] md:w-[300px] lg:w-[270px]">
                <Image
                  src={images.one}
                  alt="Dedicated Educators"
                  className="w-full h-full"
                />
              </div>
              <div className="rounded-lg shadow-md w-[130px] md:w-[260px] lg:w-[230px]">
                <Image
                  src={images.two}
                  alt="Engaging Curriculum"
                  className="w-full h-full"
                />
              </div>
            </div>
            <div
              className="absolute top-40 left-11 md:left-64 lg:left-36 
            md:top-[340px] lg:top-[330px] rounded-lg 
            shadow-md w-[220px] h-[230px] md:w-[420px]
             md:h-[400px] lg:w-[400px] lg:h-[410px] mt-4"
            >
              <Image
                src={images.three}
                alt="Community Involvement"
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="mt-10 w-full lg:w-[50%] md:px-8 lg:p-0 ">
            <div className=" mb-4">
              <h2
                className="text-xl md:text-2xl  text-[#302c2c] lg:text-5xl  2xl:text-[56px] 
              font-bold mb-6 leading-tight  lg:leading-[56px] 2xl:leading-[68px] tracking-[0.02em] text-left"
              >
                Our <span className="text-primary">Commitment </span>
                {` to Children’s Success, Get to Know Us`}
              </h2>
              <p className="text-base md:text-lg lg:text-xl mb-8 text-[#787676] leading-7 text-left mx-auto">
                {`Welcome to the Edulife Kids After School Program, where children acquire skills 
              in information technology from an early age.
               In this they will develop as creative and efficient human resources.`}
              </p>
            </div>
            <div>
              {features.map((feature, index) => (
                <ul key={index} className="relative mb-2">
                  <li>
                    <div className="absolute flex items-center justify-center h-12 w-12">
                      <Image src={feature.icon} alt="" className="h-6 w-6" />
                    </div>
                    <p className="ml-16 text-base md:text-lg leading-6 font-medium text-[#302C2C]">
                      {feature.title}
                    </p>
                    <p className="mt-1 ml-16 text-sm md:tex-base max-w-sm text-[#787676]">
                      {feature.description}
                    </p>
                  </li>
                </ul>
              ))}
            </div>
            <div className="flex justify-center md:justify-end">
              <Image
                src={images.four}
                alt=""
                className="w-full h-auto md:w-[200px] md:h-[120px] "
              />
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default CommitmentSection;
