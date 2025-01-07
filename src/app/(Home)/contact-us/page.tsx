import Banner from "@/components/ui/Banner/Banner";
import Carousel from "@/components/ui/Home/Carousel/Carousel";
import React from "react";
import BranchContact from "../../../components/ui/ContactUs/BranchContact/BranchContact";
import GetInformationSection from "@/components/ui/ContactUs/GetInformationSection/GetInformationSection";

const page = () => {
  return (
    <div>
      <Banner title="Contact Us" firstPoint="Home" secondPoint="Contact Us" />
      <Carousel />
      <BranchContact />
      <GetInformationSection />
    </div>
  );
};

export default page;
