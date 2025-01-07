"use client";

import { useState } from "react";
import Image from "next/image";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import MainContainer from "@/components/shared/Container/MainContainer";
import { images } from "@/components/store";
import Form from "@/components/form/Form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInputField from "@/components/form/FormInputField";
import { useMutation } from "@tanstack/react-query";
import { postData } from "@/utils/actions/postAction";
import LoadingButton from "@/components/shared/LoadingButton/LoadingButton";

export const validationSchema = z.object({
  name: z.string().min(1, "This field is required."),
  email: z.string().min(1, "This field is required."),
  mobile: z.string().min(1, "This field is required."),
  address: z.string().min(1, "This field is required."),
  KidsName: z.string().min(1, "This field is required."),
  KidsAge: z.string().min(1, "This field is required."),
});

const ScheduleTourSection = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationFn: async (studentCreate: FieldValues) => {
      const response = await postData({
        data: studentCreate,
        postUrl: "/create-visitor",
      });
      console.log(response);
      return response;
    },
    onSuccess: (data: any) => {
      if (data?.success == true) {
        Swal.fire({
          text: "Student Create Successfully",
          icon: "success",
          draggable: true,
        });
      } else {
        alert(data?.message);
      }
    },
  });

  const formSubmit: SubmitHandler<FieldValues> = async (data) => {
    mutate(data);
    return;
    setLoading(true);
    try {
      const response = await fetch(
        `http://admin.edulifekids.com/api/create-visitor`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response?.status === 201 || response?.status === 200) {
        Swal.fire({
          text: "Login Successfully",
          icon: "success",
          draggable: true,
        });
        reset();
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Dynamic class options
  const classOptions = ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"];

  return (
    <div id="admission">
      <MainContainer>
        <div className="flex flex-col items-center justify-center px-6 py-11 bg-white">
          <h2
            className="text-2xl md:text-3xl lg:text-5xl 2xl:text-[56px] text-[#302c2c] 
              font-bold leading-tight lg:leading-[56px] 2xl:leading-[68px] tracking-[0.02em]"
          >
            Schedule a Tour
          </h2>
          <p className="text-base md:text-lg text-[#787676] text-left mx-auto">
            Please tell us about yourself
          </p>
          <div className="relative w-full grid grid-cols-12 gap-3 mt-5">
            <div className="md:col-span-5 col-span-12">
              <Image
                src={images.ScheduleTour}
                alt="Parent and child learning"
                className="rounded-lg"
                width={500}
                height={500}
              />
            </div>
            <div className="bg-[#FFF7E7] md:col-span-7 col-span-12 p-3 rounded-lg">
              <h3 className="text-xl md:text-2xl lg:text-[28px] font-medium leading-[34px] text-[#302C2C] mb-6">
                Get Your Information
              </h3>
              <Form
                onSubmit={formSubmit}
                resolver={zodResolver(validationSchema)}
                defaultValues={{
                  name: "",
                  email: "",
                  mobile: "",
                  address: "",
                  KidsName: "",
                  KidsAge: "",
                }}
              >
                <div className="grid grid-cols-2 gap-3">
                  <FormInputField
                    title="Name"
                    name="name"
                    type="string"
                    className="px-3 bg-transperant"
                    placeholder="Enter Your Name"
                    star={true}
                  />
                  <FormInputField
                    title="Email"
                    name="email"
                    type="email"
                    className="px-3 bg-transperant"
                    placeholder="Enter Your Email"
                    star={true}
                  />
                  <FormInputField
                    title="Phone"
                    name="mobile"
                    type="number"
                    className="px-3 bg-transperant"
                    placeholder="Enter Phone Number"
                    star={true}
                  />
                  <FormInputField
                    title="Address"
                    name="address"
                    type="string"
                    className="px-3 bg-transperant"
                    placeholder="Enter Address"
                    star={true}
                  />
                  <FormInputField
                    title="Kids Name"
                    name="KidsName"
                    type="string"
                    className="px-3 bg-transperant"
                    placeholder="Enter Kids Name"
                    star={true}
                  />
                  <FormInputField
                    title="Kids Age"
                    name="KidsAge"
                    type="string"
                    className="px-3 bg-transperant"
                    placeholder="Enter Kids Age"
                    star={true}
                  />
                </div>
                {/* <button className="bg-primary bg-[#FF9C00] text-[#fff] px-8 text-base lg:text-lg font-medium py-[5px] rounded-md mt-3">
                  Submit
                </button> */}
                <div className="w-[200px]">
                  <LoadingButton loading={isPending} buttonName="Submit" />
                </div>
              </Form>

              {/* <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                  <div className="col-span-2 md:col-span-1 ">
                    <label className="block text-sm lg:text-base text-[#302C2C] mb-1">
                      Name*
                    </label>
                    <input
                      {...register("name", { required: true })}
                      type="text"
                      placeholder="Enter Your Name"
                      className="block w-full p-2 border text-sm text-[#787676] focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    {errors.name && (
                      <span className="text-red-500 text-sm">
                        Name is required
                      </span>
                    )}
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm lg:text-base text-[#302C2C] mb-1">
                      Email*
                    </label>
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      placeholder="Enter Your Email"
                      className="block w-full p-2 border text-sm text-[#787676] focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    {errors.email && (
                      <span className="text-red-500 text-sm">
                        Email is required
                      </span>
                    )}
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm lg:text-base text-[#302C2C] mb-1">
                      Phone Number*
                    </label>
                    <input
                      {...register("mobile", { required: true })}
                      type="text"
                      placeholder="Enter Your Phone Number"
                      className="block w-full p-2 border text-sm text-[#787676] focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    {errors.mobile && (
                      <span className="text-red-500 text-sm">
                        Phone number is required
                      </span>
                    )}
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm lg:text-base text-[#302C2C] mb-1">
                      Address*
                    </label>
                    <input
                      {...register("address", { required: true })}
                      type="text"
                      placeholder="Enter Your Address"
                      className="block w-full p-2 border text-sm text-[#787676] focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    {errors.address && (
                      <span className="text-red-500 text-sm">
                        Address is required
                      </span>
                    )}
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm lg:text-base text-[#302C2C] mb-1">
                      Kids Name*
                    </label>
                    <input
                      {...register("KidsName", { required: true })}
                      type="text"
                      placeholder="Enter Your Kids Name"
                      className="block w-full p-2 border text-sm text-[#787676] focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    {errors.KidsName && (
                      <span className="text-red-500 text-sm">
                        Kids Name is required
                      </span>
                    )}
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm lg:text-base text-[#302C2C] mb-1">
                      Kids Age*
                    </label>
                    <input
                      {...register("KidsAge", { required: true })}
                      type="text"
                      placeholder="Enter Your Kids Age"
                      className="block w-full p-2 border text-sm text-[#787676] focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    {errors.KidsAge && (
                      <span className="text-red-500 text-sm">
                        Kids Age is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <button
                    type="submit"
                    className="bg-primary hover:bg-[#FF9C00]
     text-[#302C2C] px-8 text-base lg:text-lg font-medium py-2 rounded-md"
                  >
                    Submit
                  </button>
                </div>
              </form> */}
            </div>
          </div>
        </div>
      </MainContainer>

      {/* Custom Submit Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold text-[#302C2C] mb-4">
              Submission Successful
            </h2>
            <p className="text-lg text-[#787676] mb-6">
              Thank you for scheduling a tour. We will contact you shortly to
              confirm your appointment.
            </p>
            <div className="text-center">
              <button
                onClick={() => setIsPopupOpen(false)}
                className="bg-primary hover:bg-[#FF9C00] text-[#302C2C] px-6 py-2 rounded-md text-lg font-medium"
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

export default ScheduleTourSection;
