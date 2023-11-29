import { ReactComponent as Logo } from "./../../images/logo.svg";
import { ReactComponent as DropDownArrow } from "./../../images/dropdown.svg";
import { ReactComponent as RightArrow } from "./../../images/arrow-right.svg";
import { ReactComponent as User } from "./../../images/user.svg";
import { ReactComponent as Mail } from "./../../images/mail.svg";
import { ReactComponent as ArrowRight } from "./../../images/arrow-right.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { WaitList } from "./WaitList";

export default function Header() {
  const [waitlist, setWaitlist] = useState(false);
  return (
    <div>
      <div className="sm:w-full lg:min-w-[1024px] h-[80px] flex items-center justify-around">
        <div className="flex gap-[16px]">
          <Logo />
          <h2 className="hidden lg:block font-Spline-Sans text-[24px] font-[700] text-[#E35669]">
            PayCentral
          </h2>
        </div>

        <div className="flex items-center gap-[32px] text-[16px] font-[500] text-[#332C2D]">
          <div className="p-[8px]">Why PayCentral</div>
          <div className="flex items-center gap-[8px] p-[8px]">
            Categories{" "}
            <span>
              <DropDownArrow />
            </span>
          </div>
        </div>

        <Link to="">
          <div
            className="bg-[#E35669] text-white px-[16px] py-[8px] flex gap-[8px]
        "
            onClick={(e) => {
              setWaitlist(!waitlist);
            }}
          >
            <h2>Join the waitlist</h2>
            <span>
              <RightArrow />
            </span>
          </div>
        </Link>
      </div>
      {waitlist == false ? "" : <div 
      onClick={(e)=>setWaitlist(!waitlist)}
      className="fixed z-50 top-0 bottom-0 bg-black/50 w-full duration-150">
      <div className="fixed left-[50%] translate-x-[-50%] translate-y-[-50%] top-[50%] duration-300">
        <div className="bg-[#F5F3F3] px-[139px] py-[170px] text-center">
          <h2 className="font-[600] text-[29px] font-Spline-Sans">
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
    </div>}
    </div>
  );
}
