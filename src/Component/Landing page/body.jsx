import React from "react";
import { ReactComponent as CountingSvg } from "../../images/Members.svg";
import { ReactComponent as Dropdown } from "../../images/dropdown.svg";
import FeatureProductLeft from "./FeatureProductLeft";
import Subscribe from "./Subscribe";
import TopReview from "./TopReview";
import ComingSoon from "./ComingSoon";
import LatestStory from "./LatestStory";
import { Link } from "react-router-dom";
import CoreLogo from "./../../images/Core.jpg";
import { ReactComponent as RatingStar } from "./../../images/star.svg";
import Be from "./../../images/be.svg";
import Ng from "./../../images/ng.svg";
import Gh from "./../../images/gh.svg";

export default function body() {
  return (
    <>
      <div className="flex pt-[46px] pl-[80px] h-[1655px]">
        <div className="w-[753px]">
          <div className="py-[24px] px-[16px] flex justify-between w-full items-center bg-[#F1F3F4]">
            <div className="font-Spline-Sans">
              <h2 className="text-2xl font-[400]">
                Welcome to
                <span className="text-[22px] font-[700]"> PayCentral!</span>👋🏽
              </h2>
              <p className="text-[16px] font-[500]">
                Discover, Compare, and Pay Seamlessly Anywhere in the World.
              </p>
              <button className="text-[#002D84] text-[1rem] font-[500]">
                Take a tour
              </button>
            </div>
            <div>
              <CountingSvg />
            </div>
          </div>

          <div className="flex items-center justify-between py-[12px]">
            <h2 className="font-[600] text-xl font-Spline-Sans">
              Featured payment products
            </h2>
            <div>
              <h2 className="flex">
                Featured{" "}
                <span>
                  <Dropdown />
                </span>
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-[27px]">
              <FeatureProductLeft
              Link={""}
                companyLogo={
                  <img src={CoreLogo} alt="" className="w-full h-full" />
                }
                companyName="Core"
                shortBio="Take Control of Your Crypto & NFTs with Core"
                paymentMethods={
                  <div className="flex items-center text-[14px] font-[500] gap-[8px]">
                    <h3 className="text-[12px] font-Spline-Sans font-[500] leading-[20px] px-[8px] py-[4px] bg-[#F7F7F7] rounded-full">
                      Cash
                    </h3>
                    <h3 className="text-[12px] font-Spline-Sans font-[500] leading-[20px] px-[8px] py-[4px] bg-[#F7F7F7] rounded-full">
                      Crypto
                    </h3>
                    <h3 className="text-[12px] font-Spline-Sans font-[500] leading-[20px] px-[8px] py-[4px] bg-[#F7F7F7] rounded-full">
                      Prepaid Cards
                    </h3>
                    <h3 className="font-[500] text-[12px] text-white bg-black rounded-full px-[8px] py-[4px] text-center">
                      +3 payment methods supported
                    </h3>
                  </div>
                }
                countriesSupported={
                  <div className="flex items-center gap-[8px]">
                    <div className="w-[24px] h-[24px] bg-[#F1F3F4] rounded-2xl">
                      <img src={Be} alt="" />
                    </div>
                    <div className="w-[24px] h-[24px] bg-[#F1F3F4] rounded-2xl">
                      <img src={Ng} alt="" />
                    </div>
                    <div className="w-[24px] h-[24px] bg-[#F1F3F4] rounded-2xl">
                      <img src={Gh} alt="" />
                    </div>
                    <h3 className="font-[500] text-[12px] text-white bg-black rounded-full px-[8px] py-[4px] text-center">
                      +8 countires supported
                    </h3>
                  </div>
                }
                ratings={
                  <div className="w-[84px] bg-[#F1F3F4] flex justify-between rounded-full px-[8px] items-center py-[4px]">
                    <RatingStar />
                    <h3 className="text-[12px] font-outfit font-[500]">
                      3/5 (1.2K)
                    </h3>
                  </div>
                }
              />

              <FeatureProductLeft
              Link={"https://www.producthunt.com/products/hyperswitch-2"}
                companyName="HyperSwitch"
                shortBio="Open Source Payments Switch. Fast, Reliable & Affordable."
                paymentMethods={
                  <div className="flex items-center text-[14px] font-[500] gap-[8px]">
                    <h3 className="text-[12px] font-Spline-Sans font-[500] leading-[20px] px-[8px] py-[4px] bg-[#F7F7F7] rounded-full">
                      Cash
                    </h3>
                    <h3 className="text-[12px] font-Spline-Sans font-[500] leading-[20px] px-[8px] py-[4px] bg-[#F7F7F7] rounded-full">
                      Crypto
                    </h3>
                    <h3 className="text-[12px] font-Spline-Sans font-[500] leading-[20px] px-[8px] py-[4px] bg-[#F7F7F7] rounded-full">
                      Prepaid Cards
                    </h3>
                    <h3 className="font-[500] text-[12px] text-white bg-[#3C3C3C] rounded-full px-[8px] py-[4px] w-[192px] text-center">
                      +3 payment methods supported
                    </h3>
                  </div>
                }
                countriesSupported={
                  <div className="flex items-center gap-[8px]">
                    <div className="w-[24px] h-[24px] bg-[#F1F3F4] rounded-2xl">
                      <img src={""} alt="" />
                    </div>
                    <div className="w-[24px] h-[24px] bg-[#F1F3F4] rounded-2xl">
                      <img src={""} alt="" />
                    </div>
                    <div className="w-[24px] h-[24px] bg-[#F1F3F4] rounded-2xl">
                      <img src={""} alt="" />
                    </div>
                    <h3 className="font-[500] text-[12px] text-white bg-[#3C3C3C] rounded-full px-[8px] py-[4px] text-center">
                      +8 countires supported
                    </h3>
                  </div>
                }
                ratings={
                  <div className="flex flex-col gap-2">
                    <div className="flex text-[#878787] bg-[#F1F3F4] px-2 py-1 justify-center items-center text-[0.75rem] gap-1 rounded-3xl">
                      <h3>1.2k Reviews</h3>
                    </div>
                    <div className="flex text-[#878787] bg-[#F1F3F4] px-2 py-1 justify-center items-center text-[0.75rem] gap-1 rounded-3xl">
                      <h3>3/5 Rating</h3>
                    </div>
                  </div>
                }
              />


              <FeatureProductLeft
              Link={""}
                companyName="Core"
                shortBio="Open Source Payments Switch. Fast, Reliable & Affordable."
                paymentMethods={
                  <div className="flex items-center text-[14px] font-[500] gap-[8px]">
                    <h3 className="text-[12px] font-Spline-Sans font-[500] leading-[20px] px-[8px] py-[4px] bg-[#F7F7F7] rounded-full">
                      Cash
                    </h3>
                    <h3 className="text-[12px] font-Spline-Sans font-[500] leading-[20px] px-[8px] py-[4px] bg-[#F7F7F7] rounded-full">
                      Crypto
                    </h3>
                    <h3 className="text-[12px] font-Spline-Sans font-[500] leading-[20px] px-[8px] py-[4px] bg-[#F7F7F7] rounded-full">
                      Prepaid Cards
                    </h3>
                    <h3 className="font-[500] text-[12px] text-white bg-[#3C3C3C] rounded-full px-[8px] py-[4px] w-[192px] text-center">
                      +3 payment methods supported
                    </h3>
                  </div>
                }
                countriesSupported={
                  <div className="flex items-center gap-[8px]">
                    <div className="w-[24px] h-[24px] bg-[#F1F3F4] rounded-2xl">
                      <img src={""} alt="" />
                    </div>
                    <div className="w-[24px] h-[24px] bg-[#F1F3F4] rounded-2xl">
                      <img src={""} alt="" />
                    </div>
                    <div className="w-[24px] h-[24px] bg-[#F1F3F4] rounded-2xl">
                      <img src={""} alt="" />
                    </div>
                    <h3 className="font-[500] text-[12px] text-white bg-[#3C3C3C] rounded-full px-[8px] py-[4px] text-center">
                      +8 countires supported
                    </h3>
                  </div>
                }
                ratings={
                  <div className="flex flex-col gap-2">
                    <div className="flex text-[#878787] bg-[#F1F3F4] px-2 py-1 justify-center items-center text-[0.75rem] gap-1 rounded-3xl">
                      <h3>1.2k Reviews</h3>
                    </div>
                    <div className="flex text-[#878787] bg-[#F1F3F4] px-2 py-1 justify-center items-center text-[0.75rem] gap-1 rounded-3xl">
                      <h3>3/5 Rating</h3>
                    </div>
                  </div>
                }
              />
              <FeatureProductLeft
              Link={""}
                companyName="Core"
                shortBio="Open Source Payments Switch. Fast, Reliable & Affordable."
                paymentMethods={
                  <div className="flex items-center text-[14px] font-[500] gap-[8px]">
                    <h3 className="text-[12px] font-Spline-Sans font-[500] leading-[20px] px-[8px] py-[4px] bg-[#F7F7F7] rounded-full">
                      Cash
                    </h3>
                    <h3 className="text-[12px] font-Spline-Sans font-[500] leading-[20px] px-[8px] py-[4px] bg-[#F7F7F7] rounded-full">
                      Crypto
                    </h3>
                    <h3 className="text-[12px] font-Spline-Sans font-[500] leading-[20px] px-[8px] py-[4px] bg-[#F7F7F7] rounded-full">
                      Prepaid Cards
                    </h3>
                    <h3 className="font-[500] text-[12px] text-white bg-[#3C3C3C] rounded-full px-[8px] py-[4px] w-[192px] text-center">
                      +3 payment methods supported
                    </h3>
                  </div>
                }
                countriesSupported={
                  <div className="flex items-center gap-[8px]">
                    <div className="w-[24px] h-[24px] bg-[#F1F3F4] rounded-2xl">
                      <img src={""} alt="" />
                    </div>
                    <div className="w-[24px] h-[24px] bg-[#F1F3F4] rounded-2xl">
                      <img src={""} alt="" />
                    </div>
                    <div className="w-[24px] h-[24px] bg-[#F1F3F4] rounded-2xl">
                      <img src={""} alt="" />
                    </div>
                    <h3 className="font-[500] text-[12px] text-white bg-[#3C3C3C] rounded-full px-[8px] py-[4px] text-center">
                      +8 countires supported
                    </h3>
                  </div>
                }
                ratings={
                  <div className="flex flex-col gap-2">
                    <div className="flex text-[#878787] bg-[#F1F3F4] px-2 py-1 justify-center items-center text-[0.75rem] gap-1 rounded-3xl">
                      <h3>1.2k Reviews</h3>
                    </div>
                    <div className="flex text-[#878787] bg-[#F1F3F4] px-2 py-1 justify-center items-center text-[0.75rem] gap-1 rounded-3xl">
                      <h3>3/5 Rating</h3>
                    </div>
                  </div>
                }
              />
              <FeatureProductLeft
              Link={""}
                companyName="Core"
                shortBio="Open Source Payments Switch. Fast, Reliable & Affordable."
                paymentMethods={
                  <div className="flex items-center text-[14px] font-[500] gap-[8px]">
                    <h3 className="text-[12px] font-Spline-Sans font-[500] leading-[20px] px-[8px] py-[4px] bg-[#F7F7F7] rounded-full">
                      Cash
                    </h3>
                    <h3 className="text-[12px] font-Spline-Sans font-[500] leading-[20px] px-[8px] py-[4px] bg-[#F7F7F7] rounded-full">
                      Crypto
                    </h3>
                    <h3 className="text-[12px] font-Spline-Sans font-[500] leading-[20px] px-[8px] py-[4px] bg-[#F7F7F7] rounded-full">
                      Prepaid Cards
                    </h3>
                    <h3 className="font-[500] text-[12px] text-white bg-[#3C3C3C] rounded-full px-[8px] py-[4px] w-[192px] text-center">
                      +3 payment methods supported
                    </h3>
                  </div>
                }
                countriesSupported={
                  <div className="flex items-center gap-[8px]">
                    <div className="w-[24px] h-[24px] bg-[#F1F3F4] rounded-2xl">
                      <img src={""} alt="" />
                    </div>
                    <div className="w-[24px] h-[24px] bg-[#F1F3F4] rounded-2xl">
                      <img src={""} alt="" />
                    </div>
                    <div className="w-[24px] h-[24px] bg-[#F1F3F4] rounded-2xl">
                      <img src={""} alt="" />
                    </div>
                    <h3 className="font-[500] text-[12px] text-white bg-[#3C3C3C] rounded-full px-[8px] py-[4px] text-center">
                      +8 countires supported
                    </h3>
                  </div>
                }
                ratings={
                  <div className="flex flex-col gap-2">
                    <div className="flex text-[#878787] bg-[#F1F3F4] px-2 py-1 justify-center items-center text-[0.75rem] gap-1 rounded-3xl">
                      <h3>1.2k Reviews</h3>
                    </div>
                    <div className="flex text-[#878787] bg-[#F1F3F4] px-2 py-1 justify-center items-center text-[0.75rem] gap-1 rounded-3xl">
                      <h3>3/5 Rating</h3>
                    </div>
                  </div>
                }
              />
              <FeatureProductLeft
              Link={""}
                companyName="Core"
                shortBio="Open Source Payments Switch. Fast, Reliable & Affordable."
                paymentMethods={
                  <div className="flex items-center text-[14px] font-[500] gap-[8px]">
                    <h3 className="text-[12px] font-Spline-Sans font-[500] leading-[20px] px-[8px] py-[4px] bg-[#F7F7F7] rounded-full">
                      Cash
                    </h3>
                    <h3 className="text-[12px] font-Spline-Sans font-[500] leading-[20px] px-[8px] py-[4px] bg-[#F7F7F7] rounded-full">
                      Crypto
                    </h3>
                    <h3 className="text-[12px] font-Spline-Sans font-[500] leading-[20px] px-[8px] py-[4px] bg-[#F7F7F7] rounded-full">
                      Prepaid Cards
                    </h3>
                    <h3 className="font-[500] text-[12px] text-white bg-[#3C3C3C] rounded-full px-[8px] py-[4px] w-[192px] text-center">
                      +3 payment methods supported
                    </h3>
                  </div>
                }
                countriesSupported={
                  <div className="flex items-center gap-[8px]">
                    <div className="w-[24px] h-[24px] bg-[#F1F3F4] rounded-2xl">
                      <img src={""} alt="" />
                    </div>
                    <div className="w-[24px] h-[24px] bg-[#F1F3F4] rounded-2xl">
                      <img src={""} alt="" />
                    </div>
                    <div className="w-[24px] h-[24px] bg-[#F1F3F4] rounded-2xl">
                      <img src={""} alt="" />
                    </div>
                    <h3 className="font-[500] text-[12px] text-white bg-[#3C3C3C] rounded-full px-[8px] py-[4px] text-center">
                      +8 countires supported
                    </h3>
                  </div>
                }
                ratings={
                  <div className="flex flex-col gap-2">
                    <div className="flex text-[#878787] bg-[#F1F3F4] px-2 py-1 justify-center items-center text-[0.75rem] gap-1 rounded-3xl">
                      <h3>1.2k Reviews</h3>
                    </div>
                    <div className="flex text-[#878787] bg-[#F1F3F4] px-2 py-1 justify-center items-center text-[0.75rem] gap-1 rounded-3xl">
                      <h3>3/5 Rating</h3>
                    </div>
                  </div>
                }
              />
          </div>
        </div>

        <div className="flex flex-col pl-[45px] max-w-[550px] gap-5">
          <Subscribe />
          <TopReview />
          <ComingSoon />
          <LatestStory />
        </div>
      </div>
    </>
  );
}
