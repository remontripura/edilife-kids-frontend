import AboutUs from "@/components/ui/AboutUs/AboutUs/AboutUs";
import EventsSection from "@/components/ui/AboutUs/EventsSection/EventsSection";
import InfoSection from "@/components/ui/AboutUs/InfoSection/InfoSection";
import ScheduleTourSection from "@/components/ui/AboutUs/ScheduleTourSection/ScheduleTourSection";
import TeamSection from "@/components/ui/AboutUs/TeamSection/TeamSection";
import Banner from "@/components/ui/Banner/Banner";
import Carousel from "@/components/ui/Home/Carousel/Carousel";
import TeacherSection from "@/components/ui/Home/TeacherSection/TeacherSection";

const page = () => {
  return (
    <div>
      <Banner title="About" firstPoint="Home" secondPoint="About Us" />
      <Carousel />
      <AboutUs />
      <InfoSection />
      <TeamSection />
      <TeacherSection />
      <EventsSection />
      <ScheduleTourSection />
    </div>
  );
};

export default page;
