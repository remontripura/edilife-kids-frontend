import MainContainer from "@/components/shared/Container/MainContainer";
import { events } from "@/components/store";
import { GrAlarm, GrLocation } from "react-icons/gr";

const EventsSection = () => {
  return (
    <div>
      <MainContainer>
        <div className=" text-center PX-6">
          <h2
            className="text-2xl md:text-3xl lg:text-5xl 2xl:text-[56px] text-[#302c2c] 
              font-bold mb-2 md:mb-4 leading-tight lg:leading-[56px] 2xl:leading-[68px] tracking-[0.02em]"
          >
            Our Latest Events
          </h2>

          <p
            className="text-base md:text-lg mb-5  md:mb-8 text-[#787676]  
         text-center px-5"
          >
            {` Welcome to Escada, where education is an exciting adventure! We're`}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-3 md:gap-6 px-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="flex items-center bg-[#DFE4EB] rounded-lg  overflow-hidden p-4"
              >
                <div
                  className="bg-primary  rounded-lg size-[107px] flex  items-center justify-center 
                  p-4 text-center "
                >
                  <span className="text-xl md:text-2xl lg:text-[28px] leading-[32px] font-semibold text-[#302C2C]">
                    {event.date}
                  </span>
                </div>
                <div className="p-4 text-left">
                  <h3 className="text-lg lg:text-xl whitespace-nowrap font-semibold leading-[24px] mb-2 text-[#302C2C]">
                    {event.title}
                  </h3>
                  <div className="flex flex-col lg:flex-row gap-1 lg:gap-4">
                    <p
                      className="text-[#787676] text-sm flex gap-1 md:gap-2 items-center 
                     whitespace-nowrap mb-1"
                    >
                      <GrLocation className="w-7 text-[#302C2C]" />{" "}
                      {event.location}
                    </p>
                    <p className="text-[#787676] text-sm flex gap-2 items-center ">
                      <GrAlarm className="w-7 text-[#302C2C]" /> {event.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default EventsSection;
