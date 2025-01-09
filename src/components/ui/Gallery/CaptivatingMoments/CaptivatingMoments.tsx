import MainContainer from "@/components/shared/Container/MainContainer";
import { CaptivatinImage } from "@/components/store";
import Image from "next/image";

const CaptivatingMoments = () => {
  return (
    <div>
      <MainContainer>
        <div className="text-center px-6 py-8">
          <div className="mx-auto max-w-5xl">
            <h2
              className="text-2xl md:text-3xl lg:text-5xl 2xl:text-[56px]
             text-[#302c2c] font-bold mb-6 leading-tight lg:leading-[56px] 2xl:leading-[68px] tracking-[0.02em]"
            >
              {`The Lens of Learning: Relive Our School's Most`}{" "}
              <span className="text-primary">Captivating Moments</span>
            </h2>
            <p
              className="text-base md:text-lg  mb-8 text-[#787676] 
            "
            >
              Welcome to Edulife education as an exciting adventure! We
              prioritize holistic nurturing among minds, inspiring inclusivity.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 justify-center items-center gap-4 lg:gap-8">
            {CaptivatinImage.map((src, index) => (
              <div
                key={index}
                className={`size-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:size-72 relative overflow-hidden mx-auto ${
                  index % 9 === 0
                    ? "rotate-[20deg] md:rotate-4 lg:-rotate-3"
                    : index % 9 === 1
                    ? "-rotate-[5deg] md:rotate-2 lg:rotate-2"
                    : index % 9 === 2
                    ? "rotate-[25deg] md:-rotate-2 lg:-rotate-2"
                    : index % 9 === 3
                    ? "rotate-[12deg] md:rotate-6 lg:rotate-3"
                    : index % 9 === 4
                    ? "rotate-[7deg] md:rotate-2 lg:-rotate-4"
                    : index % 9 === 5
                    ? "-rotate-[4deg] md:-rotate-2 lg:rotate-1"
                    : index % 9 === 6
                    ? "rotate-[6deg] md:rotate-3 lg:-rotate-1"
                    : index % 9 === 7
                    ? "rotate-[8deg] md:rotate-2 lg:rotate-5"
                    : "rotate-0"
                }`}
              >
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default CaptivatingMoments;
