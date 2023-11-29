import React from 'react'

export const Footer = () => {
  return (
    <div className='h-[160px] w-full bg-white flex items-center justify-evenly'>
        <div className='flex gap-[16px]'>
            <h2 className='font-[700] font-Spline-Sans text-[24px] text-[#332C2D]'>PayCentral <span className='font-[500]'>®</span></h2>
            <p className='text-[14px] font-Spline-Sans w-[397px] leading-[22px] text-[#4C4848]'>Curate and tailor payment methods based on your industry, preferences, and global transactions.</p>
        </div>
        <div className='flex gap-[24px] px-[24px]'>
            <p className='text-[14px] font-[400] font-Spline-Sans text-[#4C4848]'>Terms</p>
            <p className='text-[14px] font-[400] font-Spline-Sans text-[#4C4848]'>Privacy</p>
            <p className='text-[14px] font-[400] font-Spline-Sans text-[#4C4848]'>Cookie</p>
        </div>
        <div>
            <p className='text-[14px] font-Spline-Sans text-[#4C4848]'>For questions: paycentral@info.com</p>
        </div>
        <div className='flex gap-[24px] px-[24px]'>
            <div className='w-[32px] h-[32px] rounded-full bg-[#979797]'></div>
            <div className='w-[32px] h-[32px] rounded-full bg-[#979797]'></div>
            <div className='w-[32px] h-[32px] rounded-full bg-[#979797]'></div>
        </div>
    </div>
  )
}
