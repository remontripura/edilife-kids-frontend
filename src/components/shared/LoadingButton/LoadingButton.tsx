import React from "react";
import { BounceLoader } from "react-spinners";
interface IProps {
    loading: boolean;
  buttonName: string;
}
const LoadingButton = ({ loading, buttonName }: IProps) => {
  return (
    <div className="py-2 font-medium rounded w-full text-black1">
      {loading ? (
        <div className="w-full bg-none border border-[#fffb00b1] py-2 rounded-md flex justify-center items-center">
          <BounceLoader color="#fff900" size={25} speedMultiplier={2} />
        </div>
      ) : (
        <button className="bg-primary w-full bg-[#FF9C00] text-[#fff] text-base lg:text-lg font-medium py-[5px] rounded-md mt-3">
          {buttonName}
        </button>
      )}
    </div>
  );
};

export default LoadingButton;
