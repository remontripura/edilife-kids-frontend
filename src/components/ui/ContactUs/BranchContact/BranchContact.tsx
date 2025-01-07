
import Image from "next/image";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";

import { FiClock, FiMail } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import MainContainer from "@/components/shared/Container/MainContainer";
import { branches } from "@/components/store";
const BranchContact = () => {
  return (
    <div>
      <MainContainer>
        <div className=" px-4 py-12 space-y-12">
          {branches.map((branch, index) => (
            <div key={index}>
              <h2
                className=" text-center text-xl md:text-2xl lg:text-5xl pb-8 2xl:text-[58px] text-[#302C2C] lg:leading-[56px]
               2xl:leading-[64px] font-bold mb-2 md:mb-4"
              >
                <span className="text-[#FFB104]">{branch.name}</span> Campus
              </h2>
              <div
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index === 1 ? "md:grid-cols-2 md:grid-flow-row-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={`${index === 1 ? "md:order-2" : ""}`}>
                  <h3 className="font-bold text-xl md:text-2xl pb-4 text-[#302C2C]">
                    {" "}
                    Get In Touch
                  </h3>
                  <div className="space-y-2">
                    <p className="flex items-center space-x-2">
                      <BsTelephone className="text-orange-500" />
                      <span className="text-base md:text-lg lg:text-xl text-[#787676] ">
                        Call Free: {branch.phone}
                      </span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <FiMail className="text-orange-500" />
                      <span className="text-base md:text-lg lg:text-xl text-[#787676] ">
                        {branch.email}
                      </span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <FiClock className="text-orange-500" />
                      <span className="text-base md:text-lg lg:text-xl text-[#787676] ">
                        {branch.hours}
                      </span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <IoLocationOutline className="text-orange-500" />
                      <span className="text-base md:text-lg lg:text-xl text-[#787676] ">
                        {branch.address}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div>
                  <Image
                    src={branch.image}
                    alt={`${branch.name} Branch`}
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </MainContainer>
    </div>
  );
};

export default BranchContact;
