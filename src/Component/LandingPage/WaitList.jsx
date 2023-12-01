import { ReactComponent as User } from "./../../images/user.svg";
import { ReactComponent as Mail } from "./../../images/mail.svg";
import { ReactComponent as ArrowRight } from "./../../images/arrow-right.svg";


export const WaitList = () => {
  return (
    <div><div className="w-[492px] px-[16px] py-[24px] flex flex-col gap-[16px] mb-[10px] bg-white">
    <div className="w-[457px]">
      <h2 className="font-Spline-Sans my-[8px] font-[600] text-[20px]">
        👋🏽 Join the waitlist
      </h2>
      <p className="font-Spline-Sans font-[400] text-[16px] text-[#736D6D] leading-[24px]">
        Secure your spot on our exclusive waitlist for early access to the
        finest payment curation experience.
      </p>
    </div>
    <div className="flex flex-col gap-[8px] relative">
      <input
        type="text"
        placeholder="Full Name"
        className="font-Spline-Sans w-full h-[44px] pl-[48px] py-[8px] text-[14px] border-[1.6px] border-[#E5E1E1] focus:outline-none leading-[16.59px]"
      />
      <User className="absolute top-[9px] left-[16px]" />
      <input
        type="email"
        placeholder="Enter email"
        className="font-Spline-Sans w-full h-[44px] pl-[48px] py-[8px] text-[14px] border-[1.6px] border-[#E5E1E1] focus:outline-none leading-[16.59px]"
      />
      <Mail className="absolute bottom-[62px] left-[16px]" />
      <button className="flex justify-center items-center gap-[8px] w-full h-[44px] bg-[#E35669] text-white font-Spline-Sans font-[600] text-[18px]">
        {" "}
        <h3>Join the waitlist</h3> <ArrowRight />
      </button>
    </div>
  </div></div>
  )
}

