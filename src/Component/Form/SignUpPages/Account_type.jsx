import React, { useState } from 'react'

export default function Account_type( {data, setData} ) {

  return (
    <div>
      <div className="flex w-[284px] justify-between mx-auto my-[3rem]">
        <div className="bg-[#000] w-[56px] h-[6px] rounded-full"></div>
        <div className="bg-[#D9D9D9] w-[56px] h-[6px] rounded-full"></div>
        <div className="bg-[#D9D9D9] w-[56px] h-[6px] rounded-full"></div>
        <div className="bg-[#D9D9D9] w-[56px] h-[6px] rounded-full"></div>
      </div> 



      <div className="p-[24px] w-[608px] mx-auto h-[470px] flex flex-col justify-between">
      <h3 className="text-[20px] font-[400]">
            Welcome to <span className="font-[700]">PayCentral!</span>👋🏽
          </h3>
          <div className="flex flex-col gap-[8px]">
            <h3 className="text-[24px] font-[600]">Who are you?</h3>
            <p className="text-[18px] font-[400]">
              Entering your real name is required to verify your profile but
              others won’t see your name unless you choose to share it.
            </p>
          </div>

          <div className="flex gap-[12px] flex-col">
            { data.account_type == "Business" ? 
            <div className="w-full px-[16px] py-[6px] bg-black duration-300 text-white">
              <div className="flex items-center gap-[8px]">
                <input
                  type="radio"
                  name="registration purpose"
                  value="Business"
                  onChange={(e)=>setData({...data, account_type: e.target.value})}
                  className="w-[32px] h-[32px]"
                />
                <span className="text-[18px] font-[500]">A business</span>
              </div>
              <p className="text-[16px] font-[400] mt-[12px]">
                Short bio: Lorem ipsum dolor sit amet consectetur. Donec quam
                donec vitae lectus adipiscing.{" "}
              </p>
            </div>
            :
            <div className="w-full px-[16px] py-[6px] bg-[#DEDEDE] hover:bg-black duration-300 hover:text-white">
              <div className="flex items-center gap-[8px]">
                <input
                  type="radio"
                  name="registration purpose"
                  value="Business"
                  onChange={(e)=>setData({...data, account_type: e.target.value})}
                  className="w-[32px] h-[32px]"
                />
                <span className="text-[18px] font-[500]">A business</span>
              </div>
              <p className="text-[16px] font-[400] mt-[12px]">
                Short bio: Lorem ipsum dolor sit amet consectetur. Donec quam
                donec vitae lectus adipiscing.{" "}
              </p>
            </div>
             }

            

            { data.account_type == "Individual" ?
            <div className="w-full px-[16px] py-[6px] bg-black duration-300 text-white">
            <div className="flex items-center gap-[8px]">
              <input
                type="radio"
                name="registration purpose"
                value="Individual"
                onChange={(e)=>setData({...data, account_type: e.target.value})}
                className="w-[32px] h-[32px]"
              />
              <span className="text-[18px] font-[500]">An Individual</span>
            </div>
            <p className="text-[16px] font-[400] mt-[12px]">
              Short bio: Lorem ipsum dolor sit amet consectetur. Donec quam
              donec vitae lectus adipiscing.{" "}
            </p>
          </div> 
          : 
          <div className="w-full px-[16px] py-[6px] bg-[#DEDEDE] hover:bg-black duration-300 hover:text-white">
              <div className="flex items-center gap-[8px]">
                <input
                  type="radio"
                  name="registration purpose"
                  value="Individual"
                  onChange={(e)=>setData({...data, account_type: e.target.value})}
                  className="w-[32px] h-[32px]"
                />
                <span className="text-[18px] font-[500]">An Individual</span>
              </div>
              <p className="text-[16px] font-[400] mt-[12px]">
                Short bio: Lorem ipsum dolor sit amet consectetur. Donec quam
                donec vitae lectus adipiscing.{" "}
              </p>
            </div>
            
          }

            
          </div>

      </div>
    </div>


    
  )
}
