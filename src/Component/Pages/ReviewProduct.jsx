import React from "react";

export default function ReviewProduct() {
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-3 flex-col">
          <div>
            <h2 className="font-[700] text-[18px] ">Payment company</h2>
            <p className="text-sm font-[400] text-ellipsis text-[#464646]">
              Short bio: Lorem ipsum dolor sit amet conse...
            </p>
          </div>

          <div className="flex gap-1">
            <div className="flex text-[#878787] bg-[#F1F3F4] px-2 py-1 justify-center items-center text-[12px] gap-1 rounded-3xl">
              <h3>1.2k</h3>
              <h3>Reviews</h3>
            </div>
            <div className="flex text-[#878787] bg-[#F1F3F4] px-2 py-1 justify-center items-center text-[12px] gap-1 rounded-3xl">
              <h3>3/5</h3>
              <h3>Rating</h3>
            </div>
          </div>
        </div>

        <div className=" w-16 h-16 bg-[#D9D9D9]">{/* product image */}</div>
      </div>
    </>
  );
}
