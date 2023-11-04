import React from 'react'
import SignUpHeader from './SignUpHeader'

export default function JobStatus() {
  return (
    <>
    <div className='w-[1024px] mx-auto'>
    <SignUpHeader/>

    <div className="flex w-[284px] justify-between mx-auto my-[3rem]">
          <div className="bg-[#000] w-[56px] h-[6px] rounded-full"></div>
          <div className="bg-[#000] w-[56px] h-[6px] rounded-full"></div>
          <div className="bg-[#D9D9D9] w-[56px] h-[6px] rounded-full"></div>
          <div className="bg-[#D9D9D9] w-[56px] h-[6px] rounded-full"></div>
        </div>

        <div className='p-[24px] w-[608px] mx-auto'>
          <h3 className='text-[24px] font-[600]'>What is your job status?</h3>
          <p className='text-[18px]'>Employment Status</p>

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
            <div>
              <div>
                <h3 className='font-[500] text-[18px]'>Please Select Employment type:</h3>
              </div>
            </div>
          </div>
          </form>

        </div>
    </div>
    </>
  )
}
