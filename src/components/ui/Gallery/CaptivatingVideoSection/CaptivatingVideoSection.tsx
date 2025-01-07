"use client";

// import { useState } from "react";
import { Play } from "lucide-react";
import MainContainer from "@/components/shared/Container/MainContainer";
import { images } from "@/components/store";
import { StaticImageData } from "next/image";
// import Image from 'next/image'

export default function CaptivatingVideoSection() {
  // const [activeVideo, setActiveVideo] = useState<string | null>(null);
  type Video = {
    id: string;
    src: string;
    poster: StaticImageData;
  };
  

  const videos :Video[] = [
    {
      id: "video1",
      src: "https://www.youtube.com/embed/UWD4i4L4DzA?si=mSFfF7rTTzABIe5u&amp;controls=0",
      poster: images.v1,
    },
    {
      id: "video2",
      src: "https://www.youtube.com/embed/5Ug_CXpcDqo?si=sOC3MDw482KfiQuB&amp;controls=0",
      poster: images.v2,
    },
    {
      id: "video3",
      src: "https://www.youtube.com/embed/eUs6zO41dnE?si=RJY-ExNLosCctZEs",
      poster: images.v3,
    },
  ];

  // const handlePlayVideo = (videoId: any) => {
  //   setActiveVideo(videoId);
  // };

  return (
    <div className="bg-white py-8">
      <MainContainer>
        <div className="text-center py-8 px-4 md:px-8 lg:px-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl lg:text-5xl 2xl:text-[56px] text-[#302c2c] font-bold mb-6 leading-tight lg:leading-[56px] 2xl:leading-[68px] tracking-[0.02em]">
              {`The Lens of Learning: Relive Our School's Most`}{" "}
              <span className="text-primary">Captivating Moments</span>
            </h2>
            <p className="text-base md:text-lg mb-8 text-[#787676] leading-6 md:leading-[30px]">
              Welcome to EduLife education as an exciting adventure! We
              prioritize holistic nurturing among minds, inspiring creativity.
            </p>
          </div>
          <div className="flex flex-col justify-center items-end md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <div className="relative w-full h-[420px] aspect-video">
                {/* {activeVideo === 'video1' ? ( */}
                <iframe
                  className="w-full h-full rounded-lg"
                  src={videos[0].src}
                  title="Video 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                {/* ) : ( */}
                <>
                  {/* <Image
                      src={videos[0].poster.src}
                      alt="Captivating moment 1"
                      width={640}
                      height={420}
                      className="rounded-lg w-full h-full object-cover"
                    /> */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      // onClick={() => handlePlayVideo("video1")}
                      className="text-white bg-black bg-opacity-50 rounded-full p-4 transition-opacity hover:bg-opacity-75"
                      aria-label="Play video 1"
                    >
                      <Play className="w-8 h-8" />
                    </button>
                  </div>
                </>
                {/* )} */}
              </div>
            </div>

            <div className="w-full md:w-1/2 flex gap-4">
              <div className="relative w-full md:h-[250px] md:w-[280px] aspect-[3/4]">
                {/* {activeVideo === 'video2' ? ( */}
                <iframe
                  className="w-full h-full rounded-lg rotate-3"
                  src={videos[1].src}
                  title="Video 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                {/* ) : ( */}
                <>
                  {/* <Image
                      src={videos[1].poster.src}
                      alt="Captivating moment 2"
                      width={280}
                      height={250}
                      className="rounded-lg rotate-3 w-full h-full object-cover"
                    /> */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      // onClick={() => handlePlayVideo("video2")}
                      className="text-white bg-black bg-opacity-50 rounded-full p-3 transition-opacity hover:bg-opacity-75"
                      aria-label="Play video 2"
                    >
                      <Play className="w-6 h-6" />
                    </button>
                  </div>
                </>
                {/* )} */}
              </div>
              <div className="relative w-full md:h-[250px] md:w-[280px] aspect-[3/4]">
                {/* {activeVideo === 'video3' ? ( */}
                <iframe
                  className="w-full  h-full rounded-lg -rotate-3"
                  src={videos[2].src}
                  title="Video 3"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                {/* ) : ( */}
                <>
                  {/* <Image
                      src={videos[2].poster.src}
                      alt="Captivating moment 3"
                      width={280}
                      height={250}
                      className="rounded-lg -rotate-3 w-full h-full object-cover"
                    /> */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      // onClick={() => handlePlayVideo("video3")}
                      className="text-white bg-black bg-opacity-50 rounded-full p-3 transition-opacity hover:bg-opacity-75"
                      aria-label="Play video 3"
                    >
                      <Play className="w-6 h-6" />
                    </button>
                  </div>
                </>
                {/* )} */}
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}
