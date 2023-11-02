import React from "react";
import ReviewProduct from "./ReviewProduct";

export default function TopReview() {
  return (
    <>
      <div className="w-[430px] flex flex-col gap-4">
        <div className="w-[410px]">
          <h2 className="text-[#464646] text-lg">Top reviewed products</h2>

          <ReviewProduct />
          <ReviewProduct />
          <ReviewProduct />
        </div>
        <div className="w-full h-[2px] bg-[#EEE]"></div>
      </div>
    </>
  );
}
