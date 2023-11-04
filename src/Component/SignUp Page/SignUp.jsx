import React from "react";
import SignUpHeader from "./SignUpHeader";

export default function SignUp() {
  return (
    <>
      <div className="max-w-[1024px] mx-auto">
        <SignUpHeader />

        <div className="flex w-[284px] justify-between mx-auto my-[3rem]">
          <div className="bg-[#000] w-[56px] h-[6px] rounded-full"></div>
          <div className="bg-[#D9D9D9] w-[56px] h-[6px] rounded-full"></div>
          <div className="bg-[#D9D9D9] w-[56px] h-[6px] rounded-full"></div>
          <div className="bg-[#D9D9D9] w-[56px] h-[6px] rounded-full"></div>
        </div>

        <form className="p-[24px] w-[608px] mx-auto h-[554px] flex flex-col justify-between">
          <h3 className="text-[20px] font-[400]">
            Welcome to <span className="font-[700]">PayCentral!</span>👋🏽
          </h3>
          <div className="flex flex-col gap-[8px]">
            <h3 className="text-[24px] font-[600]">Who are you?</h3>
            <p className="text-[18px] font-[400]">
              Entering your real name is required to verify your profile but
              others won’t see your name unless you choose to share it.
            </p>
          </div>

          <div className="flex gap-[12px] flex-col">
            <div className="w-full px-[16px] py-[6px] bg-[#DEDEDE] hover:bg-black duration-300 hover:text-white">
              <div className="flex items-center gap-[8px]">
                <input
                  type="radio"
                  name="registration purpose"
                  value="Business"
                  className="w-[32px] h-[32px]"
                />
                <span className="text-[18px] font-[500]">A business</span>
              </div>
              <p className="text-[16px] font-[400] mt-[12px]">
                Short bio: Lorem ipsum dolor sit amet consectetur. Donec quam
                donec vitae lectus adipiscing.{" "}
              </p>
            </div>

            <div className="w-full px-[16px] py-[6px] bg-[#DEDEDE] hover:bg-black duration-300 hover:text-white">
              <div className="flex items-center gap-[8px]">
                <input
                  type="radio"
                  name="registration purpose"
                  value="Business"
                  className="w-[32px] h-[32px]"
                />
                <span className="text-[18px] font-[500]">An Individual</span>
              </div>
              <p className="text-[16px] font-[400] mt-[12px]">
                Short bio: Lorem ipsum dolor sit amet consectetur. Donec quam
                donec vitae lectus adipiscing.{" "}
              </p>
            </div>
          </div>

          <div className="h-[40px] w-full flex justify-between">
            <div className="w-[117px] h-full"></div>

            <div className="w-[128px] h-full bg-[#000] flex justify-center items-center">
              <h3 className="text-white text-[20px] font-[500] text-center">
                Next
              </h3>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
