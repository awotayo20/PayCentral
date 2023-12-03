import { Cookie } from "./Cookie"

export const Footer = () => {
  return (
    <>
        <div className='py-[24px] lg:py-[76px] w-full bg-white flex flex-col lg:flex-row items-center justify-evenly text-center lg:text-left px-[3rem]'>
        <div className='block lg:flex gap-[16px]'>
            <h2 className='font-[700] font-Spline-Sans text-[24px] text-[#332C2D]'>PayCentral <span className='font-[500]'>®</span></h2>
            <p className='text-[14px] font-Spline-Sans w-[397px] leading-[22px] text-[#4C4848] mx-auto lg:mx-0'>Curate and tailor payment methods based on your industry, preferences, and global transactions.</p>
        </div>
        <div className='flex gap-[24px] px-[18px] border-[#919191] border-x-[1px]'>
            <p className='text-[14px] font-[400] font-Spline-Sans text-[#4C4848]'>Terms</p>
            <p className='text-[14px] font-[400] font-Spline-Sans text-[#4C4848]'>Privacy</p>
            <p className='text-[14px] font-[400] font-Spline-Sans text-[#4C4848]'>Cookie</p>
        </div>
        <div>
            <p className='text-[14px] font-Spline-Sans text-[#4C4848]'>For questions: paycentral@info.com</p>
        </div>
        <div className='flex gap-[24px] px-[24px] justify-center'>
            <div className='w-[32px] h-[32px] rounded-full bg-[#979797]'></div>
            <div className='w-[32px] h-[32px] rounded-full bg-[#979797]'></div>
            <div className='w-[32px] h-[32px] rounded-full bg-[#979797]'></div>
        </div>
    </div>
    <Cookie/>
    </>
  )
}
