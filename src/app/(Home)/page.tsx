import AboutSection from "@/components/ui/Home/AboutSection/AboutSection";
import Carousel from "@/components/ui/Home/Carousel/Carousel";
import CommitmentSection from "@/components/ui/Home/CommitmentSection/CommitmentSection";
import CourseCardsSection from "@/components/ui/Home/CourseCardsSection/CourseCardsSection";
import FAQsection from "@/components/ui/Home/FAQsection/FAQsection";
import HeroSection from "@/components/ui/Home/HeroSection/HeroSection";
import TeacherSection from "@/components/ui/Home/TeacherSection/TeacherSection";
import KidsProgramSection from "@/components/ui/Home/KidsProgramSection/KidsProgramSection";
import VideoSection from "@/components/ui/Home/VideoSection/VideoSection";
import React from "react";
import TestimonialSection from "@/components/ui/Home/TestimonialSection/TestimonialSection";

const page = () => {
  return (
    <div>
      <HeroSection />
      <Carousel />
      <AboutSection />
      <CourseCardsSection />
      <CommitmentSection />
      <VideoSection />
      <FAQsection />
      <TeacherSection />
      <TestimonialSection />
      <KidsProgramSection />
    </div>
  );
};

export default page;
