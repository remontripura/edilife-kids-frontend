"use client";

import { useState, useEffect } from "react";
import MainContainer from "@/components/shared/Container/MainContainer";
import { images } from "@/components/store";
import Image from "next/image";
import styles from "@/Styles/Carousel.module.css";

type ImageType = any;

const imagesA: ImageType[] = [
  images.ajkerpotrika,
  images.pothomalo,
  images.somy,
];

const ensureMinimumLength = (
  images: ImageType[],
  minCount: number
): ImageType[] => {
  const imagesCopy = [...images];
  while (imagesCopy.length < minCount) {
    imagesCopy.push(...images);
  }
  return imagesCopy;
};

const imagesWithDuplicates = ensureMinimumLength(
  [...imagesA, ...imagesA, ...imagesA],
  9
);

const Carousel = () => {
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Space") {
        setIsPaused((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <MainContainer>
      <div className="py-3 md:py-5">
        <h2 className="text-center font-bold text-[26px] md:text-[32px] leading-[34px] md:leading-[40px] text-[#000000]">
          Featured on
        </h2>
      </div>
      <div className="relative w-full overflow-hidden">
        <div
          className={`flex w-full h-[60px] md:h-[80px] overflow-hidden ${
            styles.marquee
          } ${isPaused ? styles.paused : ""}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={styles.marqueeContent}>
            {imagesWithDuplicates
              .concat(imagesWithDuplicates)
              .map((image, index) => (
                <div
                  key={index}
                  className="inline-block w-[100px] md:w-[150px] h-[60px] md:h-[80px] relative mx-[5px] md:mx-[10px]"
                >
                  <Image
                    src={image}
                    alt={`Featured on slide ${index + 1}`}
                    fill
                    sizes="(max-inline-size: 768px) 100px, 150px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Carousel;
