import React from "react";
import ReviewProduct from "./ReviewProduct";
import { ReactComponent as ArrowRight } from "../../images/arrowRight.svg";

export default function ComingSoon() {
  return (
    <>
      <div className="w-[430px] flex flex-col gap-4">
        <div className="w-[410px]">
          <h2 className="text-[#464646] text-lg font-[500] flex items-center">
            COMING SOON
            <span>
              {" "}
              <ArrowRight />
            </span>
          </h2>

          <ReviewProduct />
          <ReviewProduct />
          <ReviewProduct />
        </div>
        <div className="w-full h-[2px] bg-[#EEE]"></div>
      </div>
    </>
  );
}
