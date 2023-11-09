import React from 'react'
import SignUpHeader from './SignUpHeader'
import { ReactComponent as IndustrySvg } from '../../images/industry.svg'
import { Link } from "react-router-dom";


export default function Industry() {
  return (
    <>
    <div className='w-[1024px] mx-auto'>
    <SignUpHeader/>

    <div className="flex w-[284px] justify-between mx-auto my-[3rem]">
          <div className="bg-[#000] w-[56px] h-[6px] rounded-full"></div>
          <div className="bg-[#000] w-[56px] h-[6px] rounded-full"></div>
          <div className="bg-[#000] w-[56px] h-[6px] rounded-full"></div>
          <div className="bg-[#D9D9D9] w-[56px] h-[6px] rounded-full"></div>
        </div>

    <div className='w-[560px] mx-auto p-[24px]'>
      <form action="">
      <label htmlFor="" className='text-[24px] font-[600]'>What is your industry?</label>
      <p className='text-[18px] font-[400] mb-[24px]'>Select the industry relevant  to your current role. We use your industry to shape your feed.</p>

      <select name="industry" id="" className='industry py-[6px] h-[56px] w-full outline-none bg-[#DEDEDE] text-[18px] font-[500]'>
        <option value=""><div><IndustrySvg/></div> Select your industry</option>
        <option value="">Engineering</option>
        <option value="">Product Management</option>
        <option value="">Design</option>
        <option value="">Sales</option>
        <option value="">Data Science</option>
        <option value="">Engineering</option>
      </select>
      <p className='text-[14px] font-[400]'>E.g Tech, Finance, Marketing, Healthcare</p>


      <div className="h-[40px] w-full flex justify-between mt-[24px]">
            <div className="w-[117px] h-full"></div>

            
            <Link to='/OtherDetails'>
              <button className="w-[128px] h-full bg-[#000] flex justify-center items-center cursor-pointer">
              <a href="/JobStatus" className="text-white text-[20px] font-[500] text-center">Next</a>
              </button>
            </Link>

          </div>
      </form>



    </div>
    </div>
    </>
  )
}
