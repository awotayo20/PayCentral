import React from "react";
import { ReactComponent as ArrowRight } from "../../images/arrowRight.svg";
import Stories from "./Stories";

export default function LatestStory() {
  return (
    <>
      <div className="w-[430px] flex flex-col gap-4">
        <div className="w-[410px] flex flex-col gap-4">
          <h2 className="text-[#464646] text-lg font-[500] flex items-center">
            COMING SOON
            <span>
              {" "}
              <ArrowRight />
            </span>
          </h2>
          <Stories />
          <Stories />
          <Stories />
          <Stories />
        </div>
        <div className="w-full h-[2px] bg-[#EEE]"></div>
      </div>
    </>
  );
}
