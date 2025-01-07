import ScheduleTourSection from "@/components/ui/AboutUs/ScheduleTourSection/ScheduleTourSection";
import Banner from "@/components/ui/Banner/Banner";
import CaptivatingMoments from "@/components/ui/Gallery/CaptivatingMoments/CaptivatingMoments";
import CaptivatingVideoSection from "@/components/ui/Gallery/CaptivatingVideoSection/CaptivatingVideoSection";
import Carousel from "@/components/ui/Home/Carousel/Carousel";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner title="Gallery" firstPoint="Home" secondPoint="Gallery" />
      <Carousel />
      <CaptivatingMoments />
      <CaptivatingVideoSection />
      <ScheduleTourSection />
    </div>
  );
};

export default page;
