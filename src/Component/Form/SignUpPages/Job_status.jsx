import React, { useState } from "react";

export default function Job_status() {
  const [selected, setSelected] = useState("");
  const [inputChecked, setInputChecked] = useState("Employed");

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  const handleChecked = (e) => {
    const getChecked = e.target.value;
    setInputChecked(getChecked);
  };

  return (
    <>
      <div className="flex w-[284px] justify-between mx-auto my-[3rem]">
        <div className="bg-[#000] w-[56px] h-[6px] rounded-full"></div>
        <div className="bg-[#000] w-[56px] h-[6px] rounded-full"></div>
        <div className="bg-[#D9D9D9] w-[56px] h-[6px] rounded-full"></div>
        <div className="bg-[#D9D9D9] w-[56px] h-[6px] rounded-full"></div>
      </div>

      <div className="p-[24px] w-[608px]">
        <h3 className="text-[24px] font-[600]">What is your job status?</h3>
        <p className="text-[18px]">Employment Status</p>

        <div>
          <div className="flex gap-[12px] flex-col">

          {inputChecked == 'Employed' ?
            <div className="w-full px-[16px] py-[6px] bg-black duration-300 text-white">
            <div className="flex items-center gap-[8px]">
              <input
                type="radio"
                name="Job Status"
                value="Employed"
                className="employed w-[32px] h-[32px]"
                onClick={handleChecked}
              />
              <span className="text-[18px] font-[500]">Employed</span>
            </div>
          </div>
          :
          <div className="w-full px-[16px] py-[6px] bg-[#DEDEDE] hover:bg-black duration-300 hover:text-white">
              <div className="flex items-center gap-[8px]">
                <input
                  type="radio"
                  name="Job Status"
                  value="Employed"
                  className="employed w-[32px] h-[32px]"
                  onClick={handleChecked}
                />
                <span className="text-[18px] font-[500]">Employed</span>
              </div>
            </div>
        }





            
            {inputChecked == 'Not Employed' ? 
              <div className="w-full px-[16px] py-[6px] bg-black duration-300 text-white">
              <div className="flex items-center gap-[8px]">
                <input 
                  type="radio"
                  name="Job Status"
                  value="Not Employed"
                  className="w-[32px] h-[32px]"
                  checked={inputChecked === "Not Employed"}
                  onClick={handleChecked}
                />
                <span className="text-[18px] font-[500]">Not Employed</span>
              </div>
            </div>
            :
            <div className="w-full px-[16px] py-[6px] bg-[#DEDEDE] hover:bg-black duration-300 hover:text-white">
              <div className="flex items-center gap-[8px]">
                <input
                  type="radio"
                  name="Job Status"
                  value="Not Employed"
                  className="w-[32px] h-[32px]"
                  checked={inputChecked === "Not Employed"}
                  onClick={handleChecked}
                />
                <span className="text-[18px] font-[500]">Not Employed</span>
              </div>
            </div>
            }
            

            {/* more details for employed */}

            {inputChecked === "Not Employed" && (
              <div className="flex flex-col gap-[16px]">
                <h3 className="font-[500] text-[18px]">
                  Please Select Employment type: <span>{selected}</span>
                </h3>
                <div>
                  <select
                    value={selected}
                    onChange={handleChange}
                    className="w-full"
                  >
                    <option value="">Select an option</option>
                    <option value="Freelancer">Freelancer</option>
                    <option value="Full time">Full time</option>
                    <option value="Part time">Part time</option>
                    <option value="Contract">Contract</option>
                    <option value="Seasonal Worker">Seasonal Worker</option>
                    <option value="Self-employed">Self-employed</option>
                  </select>
                </div>

                <input
                  type="text"
                  placeholder="Enter Job role"
                  className="px-[16px] py=[6px] w-full h-[56px] outline-none bg-[#DEDEDE]"
                  required
                />
                <input
                  type="text"
                  placeholder="Enter your location"
                  className="px-[16px] py=[6px] w-full h-[56px] outline-none bg-[#DEDEDE]"
                  required
                />
                <p className="text-[14px] font-[300] ">
                  This will inform the kind of payments clients can pay you
                  with.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
