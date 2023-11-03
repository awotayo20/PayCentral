import React from "react";
import { ReactComponent as CountingSvg } from "../../images/Members.svg";
import { ReactComponent as Dropdown } from "../../images/dropdown.svg";
import FeatureProductLeft from "./FeatureProductLeft";
import Subscribe from "./Subscribe";
import TopReview from "./TopReview";
import ComingSoon from "./ComingSoon";
import LatestStory from "./LatestStory";

export default function body() {
  return (
    <>
      <div className="flex">
        <div className="max-w-[760px] p-[50px]">
          <div className="py-[24px] px-[16px] flex justify-between max-w-[753px] items-center bg-[#F1F3F4]">
            <div>
              <h2 className="text-2xl font-[400]">
                Welcome to{" "}
                <span className="text-2xl font-[700]">PayCentral!</span>
              </h2>
              <p className="text-[1rem] font-[500]">
                Discover, Compare, and Pay Seamlessly Anywhere in the World.
              </p>
              <button className="text-[#002D84] text-[1rem]">
                Take a tour
              </button>
            </div>
            <div>
              <CountingSvg />
            </div>
          </div>

          <div className="flex items-center justify-between py-[12px]">
            <h2 className="font-[600] text-xl">Featured payment products</h2>
            <div>
              <h2 className="flex">
                Featured{" "}
                <span>
                  <Dropdown />
                </span>
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <FeatureProductLeft name='Ethiopia, Africa'/>
            <FeatureProductLeft name='Peru, South America'/>
            <FeatureProductLeft name='Nigeria, Africa'/>
            <FeatureProductLeft name='Nigeria, Africa'/>
            <FeatureProductLeft name='Ethiopia, Africa'/>
            <FeatureProductLeft name='Ethiopia, Africa'/>
            <FeatureProductLeft name='Ethiopia, Africa'/>
            
          </div>
        </div>

        <div className="flex flex-col p-[45px] max-w-[550px] gap-5">
          <Subscribe />
          <TopReview />
          <ComingSoon />
          <LatestStory />
        </div>
      </div>
    </>
  );
}
