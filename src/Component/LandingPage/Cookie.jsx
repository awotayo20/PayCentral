import { ReactComponent as CookieLogo } from "./../../images/CookiesLogo.svg"

export const Cookie = () => {
  return (
    <>
        <div className='px-[1rem] lg:px-[80px] py-[40px] bg-[#332C2D] block lg:flex items-center justify-between'>
        <div className="flex gap-[16px] w-full lg:w-[702px] justify-between">
            <div className="w-[40px]">
            <CookieLogo />
            </div>
            <div className="text-white">
                <h3 className="font-Spline-Sans text-[16px] lg:text-[24px] font-[600]">We use Cookies</h3>
                <p className="font-Spline-Sans text-[14px] lg:text-[16px]">This website uses cookies in order to offer you the most relevant information. You don’t have to eat them, but please accept them for optimal perfromance.</p>
            </div>
        </div>
        <div className="flex gap-[16px] mt-[24px]">
            <button className="w-[168px] py-[16px] border-[2px] border-white text-white">No, I decline</button>
            <button className="w-[168px] py-[16px] border-[2px] bg-white">Accept all cookies</button>
        </div>
    </div>
    </>
  )
}
