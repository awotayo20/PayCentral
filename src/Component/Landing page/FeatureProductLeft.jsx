import React from "react";
import { CgPentagonDown } from "react-icons/cg";

export default function FeatureProductLeft() {
  return (
    <>
      <div className="p-4 border-[1px] border-solid border-[#EEE]">
        <div className="flex justify-between">
          <div className="flex gap-4 items-center">
            <div className="w-[112px] h-full bg-[#D9D9D9]">
              {/* payment company image */}
            </div>
            <div className="w-[350px] flex flex-col gap-3">
              <div>
                <h2 className="font-[700]">Payment company</h2>
                <p className="text-[0.875rem] font-[400] text-[#6A6A6A]">
                  Short bio: Lorem ipsum dolor sit amet consectetur. Donec quam
                  donec vitae lectus adipiscing.
                </p>
              </div>

              <div className="flex gap-[8px] items-center justify-between">
                <h3 className="text-[0.875rem] font-[500] text-[#000]">
                  Methods Offered:
                </h3>
                <div className="bg-[#F1F3F4] px-[1rem] py-[0.25rem] flex justify-center items-center rounded-full font-[500]">
                  Label
                </div>
                <div className="bg-[#F1F3F4] px-[1rem] py-[0.25rem] flex justify-center items-center rounded-full font-[500]">
                  Label
                </div>
                <div className="bg-[#F1F3F4] px-[1rem] py-[0.25rem] flex justify-center items-center rounded-full font-[500]">
                  Label
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[32px] h-[26px] bg-[#F1F3F4] rounded-2xl">
                  {/* country logo */}
                </div>
                <h3 className="font-[500] text-sm">Ethiopia, Africa</h3>
              </div>
            </div>
          </div>

          <div className="w-[85px] flex flex-col gap-10 items-end">
            <div className="bg-[#F1F3F4] w-[30px] h-[32px] flex items-center justify-center">
              <CgPentagonDown size={30} />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex text-[#878787] bg-[#F1F3F4] px-2 py-1 justify-center items-center text-[0.75rem] gap-1 rounded-3xl">
                <h3>1.2k</h3>
                <h3>Reviews</h3>
              </div>
              <div className="flex text-[#878787] bg-[#F1F3F4] px-2 py-1 justify-center items-center text-[0.75rem] gap-1 rounded-3xl">
                <h3>1.2k</h3>
                <h3>Reviews</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
