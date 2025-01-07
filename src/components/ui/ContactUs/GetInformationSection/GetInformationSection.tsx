"use client";

import Form from "@/components/form/Form";
import FormInputField from "@/components/form/FormInputField";
import FormSelectField from "@/components/form/FormSelectFieldField";
import MainContainer from "@/components/shared/Container/MainContainer";
import { UserInFromationSchema } from "@/schema/UserInFromationSchema/UserInFromationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GetInformationSection = () => {
  const [selectedBranch, setSelectedBranch] = useState("Khagrachari Branch");
  const [isPopupOpen, setIsPopupOpen] = useState(false);


  const mapUrls = {
    "Khagrachari Branch":
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d428.2716554984911!2d91.9793666120647!3d23.10877176527565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3752e5f392c142c1%3A0x3d99e727c3514ab6!2z4KaP4Kam4KeB4Kay4Ka-4KaH4KarIOCmh-CmnyDgpofgpqjgprjgp43gpp_gpr_gpp_gpr_gpongpp8!5e0!3m2!1sbn!2sbd!4v1727587057194!5m2!1sbn!2sbd",
    "Matiranga Branch":
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d290.7193500328708!2d91.87498168960953!3d23.042505656529066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3752e17a216ec9bf%3A0x8c8ef30542978181!2z4KaP4Kam4KeB4Kay4Ka-4KaH4KarIOCmh-CmnyDgpofgpqjgprjgp43gpp_gpr_gpp_gpr_gpongpp8gKOCmruCmvuCmn-Cmv-CmsOCmvuCmmeCnjeCml-Cmvik!5e1!3m2!1sbn!2sbd!4v1727672806497!5m2!1sbn!2sbd",
    "Laxmichari Branch":
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29424.932715349067!2d91.88909019476053!3d22.798143390368075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3752d0aaef2d94c9%3A0x40bbfd57c5b3d852!2sLakshmichhari!5e0!3m2!1sen!2sbd!4v1728380963402!5m2!1sen!2sbd",
  };

  const formSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };

  const BranchOption = [
    { label: "Khagrachari Branch", value: "Khagrachari Branch" },
    { label: "Matiranga Branch", value: "Matiranga Branch" },
    { label: "Laxmichari Branch", value: "Laxmichari Branch" },
  ];

  const handleBranchChange = (value: string) => {
    setSelectedBranch(value);
  };

  return (
    <div>
      <MainContainer>
        <div className="px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left side: Form */}
            <div className="bg-[#FFF7E5] p-6 rounded-lg w-full lg:w-[45%]">
              <Form
                onSubmit={formSubmit}
                resolver={zodResolver(UserInFromationSchema)}
                defaultValues={{
                  name: "",
                  email: "",
                  mobile: "",
                  class: "",
                  date: "",
                  message: "",
                }}
              >
                <div className="flex justify-between items-baseline">
                  <h6 className="text-[20px] font-medium flex-1">
                    Get Yout Information
                  </h6>
                  <div className="flex-1">
                    <FormSelectField
                      name="adminId"
                      className="bg-transperant"
                      options={BranchOption}
                      onChange={handleBranchChange}
                      type="string"
                      defaultValue={0}
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-3">
                  <FormInputField
                    title="Name"
                    name="name"
                    type="string"
                    placeholder="Enter Your Name"
                    star={true}
                  />
                  <FormInputField
                    title="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Your Email"
                    star={true}
                  />
                  <FormInputField
                    title="Mobile"
                    name="mobile"
                    type="number"
                    placeholder="Enter Your Phone Number"
                    star={true}
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <FormInputField
                      title="Class"
                      name="class"
                      type="text"
                      placeholder="Enter Your Class"
                      star={true}
                    />
                    <FormInputField
                      title="Child's Date of Birth"
                      name="date"
                      type="date"
                      star={true}
                    />
                  </div>
                  <textarea
                    id="story"
                    name="story"
                    className="w-full h-[200xp] outline-none focus:outline-1 border focus:border-primary p-2 rounded-md"
                  ></textarea>
                  <button className="text-white bg-primary px-4 py-1 rounded-md">
                    Submit
                  </button>
                </div>
              </Form>
            </div>

            {/* Right side: Google Map */}
            <div className="w-full lg:w-[55%]">
              <iframe
                src={mapUrls[selectedBranch as keyof typeof mapUrls]}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[400px]"
                title={`Map of ${selectedBranch}`}
              />
            </div>
          </div>
        </div>
      </MainContainer>
      <ToastContainer />

      {/* Submission Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold text-[#302C2C] mb-4">
              Submission Successful
            </h2>
            <p className="text-lg text-[#787676] mb-6">
              Thank you for your feedback. We appreciate your input and will
              review it shortly.
            </p>
            <div className="text-center">
              <button
                onClick={() => setIsPopupOpen(false)}
                className="bg-[#FBB900] text-white font-semibold px-6 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetInformationSection;
