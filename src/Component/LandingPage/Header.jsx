import { ReactComponent as Logo } from "./../../images/logo.svg";
import { ReactComponent as DropDownArrow } from "./../../images/dropdown.svg";
import { ReactComponent as RightArrow } from "./../../images/arrow-right.svg";
import { ReactComponent as CancelButton } from "./../../images/CancelButton.svg";
import { Link } from "react-router-dom";
import { ReactComponent as Hamburger } from "./../../images/Hamburger.svg";
import { useState } from "react";
import { WaitingList } from "./WaitingList";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [waitlist, setWaitlist] = useState(false);

  return (
    <div>
      <div className="sm:w-full lg:min-w-[1024px] h-[80px] flex items-center justify-between px-[16px] lg:px-[3rem]">
        <div className="flex gap-[16px] items-center">
          <div className="block lg:hidden">
            <Hamburger
              onClick={(e) => {
                setToggle(!toggle);
              }}
              className="cursor-pointer block lg:hidden"
            />
            {toggle == true ? <div className="absolute left-0 top-[80px] w-full bg-white duration-350">
              <li className="px-[16px] list-none text-[16px] font-[500] py-[16px]">
                Why PayCentral
              </li>
              <li className="px-[16px] list-none text-[16px] font-[500] py-[16px] flex items-center justify-between ">
                Categories <DropDownArrow />
              </li>
              <div className="bg-[#F5F3F3] px-[12px] py-[8px] flex justify-end">
                <CancelButton 
                onClick={(e)=>{
                  e.preventDefault()
                  setToggle(!toggle)}}
                className="w-[40px] h-[40px]"/>
              </div>
            </div>: ""}
          </div>
          <Logo />
          <h2 className="hidden lg:block font-Spline-Sans text-[24px] font-[700] text-[#E35669]">
            <span className="font-[500]">Pay</span>Central
          </h2>
        </div>

        <div className="hidden lg:flex items-center gap-[32px]">
          <div className="p-[8px] text-[16px] font-[500] text-[#332C2D]">
            Why PayCentral
          </div>
          <div className="flex items-center gap-[8px] p-[8px] text-[16px] font-[500] text-[#332C2D]">
            Categories{" "}
            <span>
              <DropDownArrow />
            </span>
          </div>
        </div>

        <Link to="">
          <div
            className="bg-[#E35669] text-white px-[16px] py-[8px] flex gap-[8px] items-center
        "
            onClick={(e) => {
              setWaitlist(!waitlist);
            }}
          >
            <h2 className="text-[12px] lg:text-[16px]">Join the waitlist</h2>
            <span>
              <RightArrow className="w-[11px] h-[11px] lg:w-[16px] lg:h-[16px]" />
            </span>
          </div>
        </Link>
      </div>
      {waitlist == false ? (
        ""
      ) : (
        <div
          onClick={(e) => setWaitlist(!waitlist)}
          className="fixed z-20 top-0 bottom-0 bg-black/50 w-full duration-150"
        ></div>
      )}

      <div
        className={
          waitlist
            ? "fixed z-30 left-[50%] translate-x-[-50%] translate-y-[-50%] top-[50%] duration-300"
            : "fixed z-30 left-[300%] translate-x-[-50%] translate-y-[-50%] top-[50%] duration-300"
        }
      >
        <CancelButton
          onClick={(e) => setWaitlist(!waitlist)}
          className="absolute right-3 top-3 cursor-pointer"
        />
        <div className="bg-[#F5F3F3] p-[48px] text-center">
          <h2 className="font-[600] text-[29px] font-Spline-Sans">
            👋🏽 Join the waitlist for PayCentral
          </h2>
          <p className="w-[457px]">
            Secure your spot on our exclusive waitlist for early access to the
            finest payment curation experience.
          </p>
          <WaitingList/>
        </div>
      </div>
    </div>
  );
}
