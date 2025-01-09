import React from "react";

import Image from "next/image.js";
import MainContainer from "@/components/shared/Container/MainContainer";
import { teamMembers } from "@/components/store";
import Title from "../../Title/Title";

const TeamSection = () => {
  return (
    <div>
      <MainContainer>
        <div className="flex flex-col items-center space-y-4 md:space-y-8 py-2 md:py-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`flex flex-col gap-6 md:flex-row ${
                index == 1 && "md:flex-row-reverse"
              } items-center bg-white px-5 md:rounded-lg w-full`}
            >
              <div className="w-full  md:w-4/12 overflow-hidden h-[400px]">
                <Image
                  src={member.image}
                  alt={member.role}
                  className="w-full h-full object-cover rounded-3xl"
                  width={500}
                  height={500}
                />
              </div>
              <div className="text-center w-full md:w-8/12 md:text-left">
                <Title text={`${member.name}`} className="" />
                <Title text={`${member.role}`} className={`text-primary`} />

                {member.description.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base md:text-lg 
                    mb-2 md:mb-4 text-[#787676]  text-left mx-auto"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </MainContainer>
    </div>
  );
};

export default TeamSection;
