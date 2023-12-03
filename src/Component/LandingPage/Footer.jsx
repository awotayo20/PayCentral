import { ReactComponent as CookieLogo } from "./../../images/CookiesLogo.svg"

export const Footer = () => {
  return (
    <>
        <div className='py-[76px] w-full bg-white block lg:flex items-center justify-evenly text-center lg:text-left'>
        <div className='block lg:flex gap-[16px]'>
            <h2 className='font-[700] font-Spline-Sans text-[24px] text-[#332C2D]'>PayCentral <span className='font-[500]'>®</span></h2>
            <p className='text-[14px] font-Spline-Sans w-[397px] leading-[22px] text-[#4C4848] mx-auto lg:mx-0'>Curate and tailor payment methods based on your industry, preferences, and global transactions.</p>
        </div>
        <div className='flex justify-evenly px-[24px]'>
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
    <div className='px-[80px] py-[40px] bg-[#332C2D] flex items-center justify-between'>
        <div className="flex gap-[16px] w-[702px]">
            <CookieLogo/>
            <div className="text-white">
                <h3 className="font-Spline-Sans text-[24px]">We use Cookies</h3>
                <p className="font-Spline-Sans text-[16px]">This website uses cookies in order to offer you the most relevant information. You don’t have to eat them, but please accept them for optimal perfromance.</p>
            </div>
        </div>
        <div className="flex gap-[16px]">
            <button className="w-[168px] py-[16px] border-[2px] border-white text-white">No, I decline</button>
            <button className="w-[168px] py-[16px] border-[2px] bg-white">Accept all cookies</button>
        </div>
    </div>
    </>
  )
}
