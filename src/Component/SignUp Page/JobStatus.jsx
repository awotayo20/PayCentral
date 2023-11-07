import React from "react";
import SignUpHeader from "./SignUpHeader";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function JobStatus() {
  const [selected, setSelected] = useState('');

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <>
      <div className="w-[1024px] mx-auto">
        <SignUpHeader />

        <div className="flex w-[284px] justify-between mx-auto my-[3rem]">
          <div className="bg-[#000] w-[56px] h-[6px] rounded-full"></div>
          <div className="bg-[#000] w-[56px] h-[6px] rounded-full"></div>
          <div className="bg-[#D9D9D9] w-[56px] h-[6px] rounded-full"></div>
          <div className="bg-[#D9D9D9] w-[56px] h-[6px] rounded-full"></div>
        </div>

        <div className="p-[24px] w-[608px] mx-auto">
          <h3 className="text-[24px] font-[600]">What is your job status?</h3>
          <p className="text-[18px]">Employment Status</p>

          <form>
            <div className="flex gap-[12px] flex-col">
              <div className="w-full px-[16px] py-[6px] bg-[#DEDEDE] hover:bg-black duration-300 hover:text-white">
                <div className="flex items-center gap-[8px]">
                  <input
                    type="radio"
                    name="Job Status"
                    value="Employed"
                    className="w-[32px] h-[32px]"
                  />
                  <span className="text-[18px] font-[500]">Employed</span>
                </div>
              </div>

              <div className="w-full px-[16px] py-[6px] bg-[#DEDEDE] hover:bg-black duration-300 hover:text-white">
                <div className="flex items-center gap-[8px]">
                  <input
                    type="radio"
                    name="Job Status"
                    value="Not Employed"
                    className="w-[32px] h-[32px]"
                  />
                  <span className="text-[18px] font-[500]">Not Employed</span>
                </div>
              </div>

              {/* more details for employed */}
              <div className="flex flex-col gap-[16px]">
                <h3 className="font-[500] text-[18px]">
                  Please Select Employment type: <span>{selected}</span>
                </h3>
                <div>
                  <select value={selected} onChange={handleChange} className="w-full">
                    <option value="">Select an option</option>
                    <option value="Freelancer">Freelancer</option>
                    <option value="Full time">Full time</option>
                    <option value="Part time">Part time</option>
                    <option value="Contract">Contract</option>
                    <option value="Seasonal Worker">Seasonal Worker</option>
                    <option value="Self-employed">Self-employed</option>
                  </select>
                </div>

                <input type="text" placeholder="Enter Job role" className="px-[16px] py=[6px] w-full h-[56px] outline-none" required/>
                <input type="text" placeholder="Enter your location" className="px-[16px] py=[6px] w-full h-[56px] outline-none" required/>
                <p className="text-[14px] font-[300] ">This will inform the kind of payments clients can pay you with.</p>
              </div>
            </div>

            <div className="h-[40px] w-full flex justify-between mt-[48px]">
            <div className="w-[117px] h-full"></div>

            
            <Link to='/'>
              <button className="w-[128px] h-full bg-[#000] flex justify-center items-center cursor-pointer">
              <a href="/JobStatus" className="text-white text-[20px] font-[500] text-center">Next</a>
              </button>
            </Link>

          </div>
          </form>
        </div>
      </div>
    </>
  );
}
