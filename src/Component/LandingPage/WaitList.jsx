import { ReactComponent as User } from "./../../images/user.svg";
import { ReactComponent as Mail } from "./../../images/mail.svg";
import { ReactComponent as ArrowRight } from "./../../images/arrow-right.svg";
export const WaitList = () => {
  return (
    <div className="fixed z-50 top-0 bottom-0 bg-black/50 w-full">
      <div className="fixed left-[50%] translate-x-[-50%] translate-y-[-50%] top-[50%]">
        <div className="bg-[#F5F3F3] p-6 text-center">
          <h2 className="font-[600] text-[32px] font-Spline-Sans">
            👋🏽 Join the waitlist for PayCentral
          </h2>
          <p className="w-[457px]">
            Secure your spot on our exclusive waitlist for early access to the
            finest payment curation experience.
          </p>
          <div className="flex flex-col gap-[8px] relative mt-[24px]">
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
        </div>
      </div>
    </div>
  );
};
